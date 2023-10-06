import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

interface props {
  params: { apiId: number };
}

export function GET(request: NextRequest, { params: { apiId } }: props) {
  if (apiId > 3) {
    return NextResponse.json({ error: "user not found" }, { status: 404 });
  }

  return NextResponse.json(
    [
      {
        id: 1,
        name: "pinu",
      },
      {
        id: 2,
        name: "john",
      },
      {
        id: 3,
        name: "mosh",
      },
    ][apiId - 1]
  );
}

export async function PUT(request: NextRequest, { params: { apiId } }: props) {
  const body = await request.json();

  if (!body.name) {
    return NextResponse.json(
      { error: "please provide a user" },
      { status: 400 }
    );
  }

  if (apiId > 10) {
    return NextResponse.json({ error: "user not found" }, { status: 404 });
  }

  return NextResponse.json({ id: body.id, name: body.name }, { status: 200 });
}
