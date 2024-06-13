import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(request) {
  const data = await request.json();
  console.log(data);
  const res = await prisma.post.createMany({
    data: {
      title: data.title,
      content: data.content,
      authorId: parseInt(data.authorId),
    },
  });
  return NextResponse.json(res, { status: 200 });
}
