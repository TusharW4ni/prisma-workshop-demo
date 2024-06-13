import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function PUT(request) {
  const data = await request.json();
  console.log(data);
  const res = await prisma.post.update({
    where: {
      id: parseInt(data.postId),
    },
    data: {
      title: data.title,
      content: data.content,
      authorId: parseInt(data.authorId),
      published: Boolean(data.published),
    },
  });
  return NextResponse.json(res, { status: 200 });
}
