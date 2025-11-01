import { getPrismaClient } from "@/lib/prisma";
import { NextResponse } from "next/server";
import {verifyAdmin} from '@/lib/verifyAdmin.js'

// get one product using name
export async function GET(req, { params }) {
  try {
    const prisma = getPrismaClient();
    const { id } = params;
    const product = await prisma.products.findUnique({
      where: {
        slug: id,
      },
    });
    if (!product) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(product);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(req, { params }) {
  try {
    await verifyAdmin(req); // ✅ check JWT first

    const prisma = getPrismaClient();
    const updatedData = await req.json();
    const { id } = params;

    const updatedProduct = await prisma.products.update({
      where: { id: Number(id) },
      data: updatedData,
    });

    return NextResponse.json({ message: "Product updated", product: updatedProduct });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: err.message || "Unauthorized" }, { status: 401 });
  }
}

export async function DELETE(req, { params }) {
  try {
    await verifyAdmin(req); // ✅ check JWT first

    const prisma = getPrismaClient();
    const { id } = params;

    await prisma.products.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({ message: "Product deleted" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: err.message || "Unauthorized" }, { status: 401 });
  }
}
