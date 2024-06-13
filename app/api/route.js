import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(request) {
  const res = await prisma.user.findMany({});
  // console.log(res);
  return NextResponse.json(res, { status: 200 });
}