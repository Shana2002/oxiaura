import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { getPrismaClient } from "@/lib/prisma";
import { NextResponse } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey"; // Use strong secret in .env

// POST for signup and login
export async function POST(req) {
  const prisma = getPrismaClient();
  const { action, name, username, password } = await req.json();

  try {
    if (action === "signup") {
      const existingUser = await prisma.user.findUnique({
        where: { username },
      });
      if (existingUser)
        return NextResponse.json(
          { success: false, message: "username already registered" },
          { status: 400 }
        );

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await prisma.user.create({
        data: { name, username, password: hashedPassword },
      });

      // Generate JWT
      const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
        expiresIn: "7d",
      });

      return NextResponse.json({ success: true, token });
    }

    if (action === "login") {
      const user = await prisma.user.findUnique({ where: { username } });
      if (!user) {
        return NextResponse.json(
          { success: false, message: "User not found" },
          { status: 404 }
        );
      }

      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) {
        return NextResponse.json(
          { success: false, message: "Invalid password" },
          { status: 401 }
        );
      }

      // Generate JWT
      const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
        expiresIn: "7d",
      });

      // Create response and set HTTP-only cookie
      const res = NextResponse.json({ success: true });
      res.cookies.set("adminToken", token, {
        httpOnly: true, // JS cannot access it
        path: "/", // available for all routes
        maxAge: 7 * 24 * 60 * 60, // 7 days
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
      });

      return res;
    }

    return NextResponse.json(
      { success: false, message: "Invalid action" },
      { status: 400 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

// PUT for updating user info
export async function PUT(req) {
  try {
    const prisma = getPrismaClient();
    const { userId, name, username, password } = await req.json();
    const updateData = { name, username };

    if (password) {
      updateData.password = await bcrypt.hash(password, 10);
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: updateData,
    });

    // Optional: Issue a new token after update
    const token = jwt.sign({ userId: updatedUser.id }, JWT_SECRET, {
      expiresIn: "7d",
    });

    return NextResponse.json({ success: true, user: updatedUser, token });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
