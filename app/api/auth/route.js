import { NextResponse } from "next/server";

export async function POST(req) {
  const { username, password } = await req.json();

  // Example: Replace with DB check using Prisma
  if (username === "admin" && password === "1234") {
    const response = NextResponse.json({ success: true });
    // Set a cookie to mark as logged in
    response.cookies.set("adminAuth", "true", {
      httpOnly: true,
      path: "/",
    });
    return response;
  }

  return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 });
}
