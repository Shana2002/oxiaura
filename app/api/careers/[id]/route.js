import { getPrismaClient } from "@/lib/prisma";
import { verifyAdmin } from "@/lib/verifyAdmin";
import { NextResponse } from "next/server";

// get one job using name
export async function GET(req, { params }) {
  try {
    const prisma = getPrismaClient();
    const { id } = params;
    const job = await prisma.job.findUnique({
      where: {
        slug: id,
      },
    });
    if (!job) {
      return NextResponse.json(
        { message: "job not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(job);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// update job data using id
export async function PUT(req, { params }) {
  try {
    // await verifyAdmin(req);
    const prisma = getPrismaClient();
    const updatedData = await req.json();
    const { id } = await params;
    const updatejob = await prisma.job.update({
      where: {
        id: Number(id),
      },
      data: updatedData,
    });
    return NextResponse.json({ message: "job Updated" });
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
    await verifyAdmin(req);
    const prisma = getPrismaClient();
    const { id } = params;
    const deletejob = prisma.job.delete({
      where: {
        id: id,
      },
    });
    return NextResponse.json({ message: "job Deleted successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
