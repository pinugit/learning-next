import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";
import { error } from "console";
import { data } from "autoprefixer";
import { stat } from "fs";
interface props {
  params: { apiId: number };
}

export async function GET(request: NextRequest, { params: { apiId } }: props) {
  const user = await prisma.users.findUnique({
    where: {
      id: parseInt(apiId),
    },
  });
  if (!user) {
    return NextResponse.json({ error: "user not found" }, { status: 404 });
  }

  return NextResponse.json(user);
}

export async function PUT(request: NextRequest, { params: { apiId } }: props) {
  const body = await request.json();
  const validate = schema.safeParse(body);

  if (!validate.success) {
    return NextResponse.json({ error: validate.error.errors }, { status: 401 });
  }

  const user = await prisma.users.create({
    data: { name: body.name, email: body.email },
  });

  return NextResponse.json({ user }, { status: 201 });
}

export async function DELETE(
  request: NextRequest,
  { params: { apiId } }: props
) {
  const body = await request.json();
  return NextResponse.json({});
}
