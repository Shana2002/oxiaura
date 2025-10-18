import { getPrismaClient } from "@/lib/prisma";
import { NextResponse } from "next/server";

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

// update product data using id
export async function PUT(req, { params }) {
  try {
    const prisma = getPrismaClient();
    const updatedData = await req.json();
    const { id } = params;
    const updateProduct = await prisma.products.update({
      where: {
        id: id,
      },
      data: updatedData,
    });
    return NextResponse.json({ message: "Product Updated" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  try {
    const prisma = getPrismaClient();
    const { id } = params;
    const deleteProduct = prisma.products.delete({
      where: {
        id: id,
      },
    });
    return NextResponse.json({ message: "Product Deleted successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
