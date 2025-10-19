import { getPrismaClient } from "@/lib/prisma";
import { NextResponse } from "next/server";

// route api/blogs
// Get all blogs
export async function GET(req) {
  try {
    const prisma = getPrismaClient();
    const blogs = await prisma.blog.findMany({
        orderBy:{
            id:'asc',
        }
    });
    return NextResponse.json(blogs);
  } catch (error) {
    console.error("GET /api/blogs error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// create blog
// export async function POST(req) {
//   try {
//     const prisma = getPrismaClient();
//     const blog = await req.json();
//     const createdblog = await prisma.blog.create({
//       data: blog,
//     });

//     return NextResponse.json(
//       { message: "blog created successfully", blog: createdblog },
//       { status: 201 }
//     );
//   } catch (error) {
//      console.error("POST /api/blogs error:", error);
//     return NextResponse.json(
//       { message: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }
