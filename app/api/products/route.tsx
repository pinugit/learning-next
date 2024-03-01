import { NextRequest, NextResponse } from "next/server";
import productSchema from "./schema";
import schema from "../users/schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const products = await prisma.products.findMany();
  return NextResponse.json(products, { status: 201 });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validate = productSchema.safeParse(body);

  if (!validate.success) {
    return NextResponse.json({ error: validate.error.errors }, { status: 401 });
  }
  const newProduct = await prisma.products.create({
    data: {
      name: body.name,
      price: body.price,
      inStock: body.inStock,
    },
  });

  return NextResponse.json(newProduct, { status: 201 });
}
