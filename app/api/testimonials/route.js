import { getPrismaClient } from "@/lib/prisma";
import { NextResponse } from "next/server";

// route api/testimonials
// Get all testimonials
export async function GET(req) {
  try {
    const prisma = getPrismaClient();
    const testimonials = await prisma.testimonial.findMany({
        orderBy:{
            id:'asc',
        }
    });
    return NextResponse.json(testimonials);
  } catch (error) {
    console.error("GET /api/testimonials error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// create testimonials
export async function POST(req) {
  try {
    const prisma = getPrismaClient();
    const testimonials = await req.json();
    const createdtestimonials = await prisma.testimonial.create({
      data: testimonials,
    });

    return NextResponse.json(
      { message: "testimonials created successfully", testimonials: createdtestimonials },
      { status: 201 }
    );
  } catch (error) {
     console.error("POST /api/testimonials error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
