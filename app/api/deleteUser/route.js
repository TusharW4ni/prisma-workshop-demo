import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(request) {
  const data = await request.json();
  const res = await prisma.user.delete({
    where: {
      id: parseInt(data.userId),
    },
  });
  // console.log(res);
  return NextResponse.json(res, { status: 200 });
}
