import { getPrismaClient } from "@/lib/prisma";
import { verifyAdmin } from "@/lib/verifyAdmin";
import { NextResponse } from "next/server";

// route api/job
// Get all job
export async function GET(req) {
  try {
    const prisma = getPrismaClient();
    const job = await prisma.job.findMany({
        orderBy:{
            id:'asc',
        }
    });
    return NextResponse.json(job);
  } catch (error) {
    console.error("GET /api/job error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// create job
export async function POST(req) {
  try {
    await verifyAdmin
    const prisma = getPrismaClient();
    const job = await req.json();
    const createdjob = await prisma.job.create({
      data: job,
    });

    return NextResponse.json(
      { message: "job created successfully", job: createdjob },
      { status: 201 }
    );
  } catch (error) {
     console.error("POST /api/job error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
