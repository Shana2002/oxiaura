import { getPrismaClient } from "@/lib/prisma"
import { NextResponse } from "next/server";


export async function POST(req) {
    const prisma = getPrismaClient();
    const products = prisma.products.findmany();
    const res = NextResponse.json(products);
}

