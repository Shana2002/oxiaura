import { getPrismaClient } from "@/lib/prisma";
import { NextResponse } from "next/server";

// get one blog using name
export async function GET(req, { params }) {
  try {
    const prisma = getPrismaClient();
    const { id } = params;
    const blog = await prisma.blog.findUnique({
      where: {
        slug: id,
      },
    });
    if (!blog) {
      return NextResponse.json(
        { message: "blog not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(blog);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// // update blog data using id
// export async function PUT(req, { params }) {
//   try {
//     const prisma = getPrismaClient();
//     const updatedData = await req.json();
//     const { id } = params;
//     const updateblog = await prisma.blog.update({
//       where: {
//         id: id,
//       },
//       data: updatedData,
//     });
//     return NextResponse.json({ message: "blog Updated" });
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
//     const deleteblog = prisma.blog.delete({
//       where: {
//         id: id,
//       },
//     });
//     return NextResponse.json({ message: "blog Deleted successfully" });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json(
//       { message: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }
