import { getPrismaClient } from "@/lib/prisma";
import { NextResponse } from "next/server";

// get one testimonials using name
export async function GET(req, { params }) {
  try {
    const prisma = getPrismaClient();
    const { id } = params;
    const testimonials = await prisma.testimonialss.findUnique({
      where: {
        slug: id,
      },
    });
    if (!testimonials) {
      return NextResponse.json(
        { message: "testimonials not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(testimonials);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// // update testimonials data using id
// export async function PUT(req, { params }) {
//   try {
//     const prisma = getPrismaClient();
//     const updatedData = await req.json();
//     const { id } = params;
//     const updatetestimonials = await prisma.testimonial.update({
//       where: {
//         id: id,
//       },
//       data: updatedData,
//     });
//     return NextResponse.json({ message: "testimonials Updated" });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json(
//       { message: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }

// export async function DELETE(req, { params }) {
//   try {
//     const prisma = getPrismaClient();
//     const { id } = params;
//     const deletetestimonials = prisma.testimonial.delete({
//       where: {
//         id: id,
//       },
//     });
//     return NextResponse.json({ message: "testimonials Deleted successfully" });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json(
//       { message: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }
