import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(3),
  category: z.union([
    z.string().includes("dairy"),
    z.string().includes("tools"),
  ]),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validate = schema.safeParse(body);

  if (!validate.success) {
    return NextResponse.json(
      { error: validate.error.issues[0].message },
      { status: 400 }
    );
  }

  return NextResponse.json(validate.data);
}
