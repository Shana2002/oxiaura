import { getPrismaClient } from "@/lib/prisma";
import { NextResponse } from "next/server";

// route api/team
// Get all team
export async function GET(req) {
  try {
    const prisma = getPrismaClient();
    const team = await prisma.teamMember.findMany({
        orderBy:{
            id:'asc',
        }
    });
    return NextResponse.json(team);
  } catch (error) {
    console.error("GET /api/team error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// // create testimonials
export async function POST(req) {
  try {
    const prisma = getPrismaClient();
    const teamMember = await req.json();
    const createdteamMember = await prisma.teamMember.create({
      data: teamMember,
    });

    return NextResponse.json(
      { message: "testimonials created successfully", testimonials: createdteamMember },
      { status: 201 }
    );
  } catch (error) {
     console.error("POST /api/team error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
