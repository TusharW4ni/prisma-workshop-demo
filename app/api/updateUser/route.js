import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function PUT(request) {
  const data = await request.json();
  console.log(data);
  const res = await prisma.user.update({
    where: {
      id: parseInt(data.userId),
    },
    data: {
      email: data.email,
      name: data.name,
    },
  });
  return NextResponse.json(res, { status: 200 });
}
