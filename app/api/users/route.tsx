import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "pinu" },
    { id: 2, name: "john" },
    { id: 3, name: "mosh" },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  return NextResponse.json({ name: body.name }, { status: 201 });
}
