import { getPrismaClient } from "@/lib/prisma";
import { NextResponse } from "next/server";

// route api/products
// Get all products
export async function GET(req) {
  try {
    const prisma = getPrismaClient();
    const products = await prisma.products.findMany({
        orderBy:{
            id:'asc',
        }
    });
    return NextResponse.json(products);
  } catch (error) {
    console.error("GET /api/products error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// create product
export async function POST(req) {
  try {
    const prisma = getPrismaClient();
    const product = await req.json();
    const createdProduct = await prisma.products.create({
      data: product,
    });

    return NextResponse.json(
      { message: "Product created successfully", product: createdProduct },
      { status: 201 }
    );
  } catch (error) {
     console.error("POST /api/products error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
