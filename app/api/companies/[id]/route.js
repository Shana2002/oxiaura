import { getPrismaClient } from "@/lib/prisma";
import { NextResponse } from "next/server";

// // get one team using name
// export async function GET(req, { params }) {
//   try {
//     const prisma = getPrismaClient();
//     const { id } = params;
//     const team = await prisma.company.findUnique({
//       where: {
//         slug: id,
//       },
//     });
//     if (!team) {
//       return NextResponse.json(
//         { message: "Member not found" },
//         { status: 404 }
//       );
//     }
//     return NextResponse.json(team);
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json(
//       { message: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }

// // update team data using id
// export async function PUT(req, { params }) {
//   try {
//     const prisma = getPrismaClient();
//     const updatedData = await req.json();
//     const { id } = params;
//     const updateteam = await prisma.company.update({
//       where: {
//         id: id,
//       },
//       data: updatedData,
//     });
//     return NextResponse.json({ message: "Member Updated" });
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
//     const deleteteam = prisma.company.delete({
//       where: {
//         id: id,
//       },
//     });
//     return NextResponse.json({ message: "Memeber Deleted successfully" });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json(
//       { message: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }
