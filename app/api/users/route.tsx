import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const users = await prisma.users.findMany()
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  let body = await request.json();

  if (!body.name) {
    return NextResponse.json({ error: "name is required" }, { status: 400 });
  }
  return NextResponse.json(body);
}
