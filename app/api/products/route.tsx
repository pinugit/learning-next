import { NextRequest, NextResponse } from "next/server";
import productSchema from "./schema";
import schema from "../users/schema";

export function GET(request: NextRequest) {
  return NextResponse.json([
    {
      id: 1,
      name: "mink",
      price: 24,
    },
    {
      id: 2,
      name: "eggs",
      price: 22,
    },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );
  }

  return NextResponse.json({ id: 10, name: body.name, price: body.price });
}
