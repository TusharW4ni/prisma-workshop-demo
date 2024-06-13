import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(request) {
  const data = await request.json();
  console.log(data);
  const res = await prisma.user.createMany({
    data: {
      email: data.email,
      name: data.name,
    },
  });
  // console.log(res);
  return NextResponse.json(res, { status: 200 });
}
