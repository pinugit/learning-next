import { NextRequest, NextResponse } from "next/server";
import productSchema from "../schema";
import prisma from "@/prisma/client";
import { error } from "console";

interface props {
  params: { productId: string };
}

export async function PUT(
  request: NextRequest,
  { params: { productId } }: props
) {
  const body = await request.json();
  const validate = productSchema.safeParse(body);

  const product = await prisma.products.findUnique({
    where: { id: parseInt(productId) },
  });

  if (!product) {
    return NextResponse.json({ error: "item not found" }, { status: 404 });
  }

  if (!validate.success) {
    return NextResponse.json({ error: validate.error.errors }, { status: 401 });
  }

  const updateProduct = await prisma.products.update({
    where: { id: parseInt(productId) },
    data: {
      name: body.name,
      price: body.price,
      inStock: body.inStock,
    },
  });

  return NextResponse.json(updateProduct, { status: 201 });
}

export async function DELETE(
  request: NextRequest,
  { params: { productId } }: props
) {
  const product = await prisma.products.findUnique({
    where: { id: parseInt(productId) },
  });

  if (!product) {
    return NextResponse.json({ error: "product not found" }, { status: 404 });
  }

  await prisma.products.delete({
    where: {
      id: parseInt(productId),
    },
  });

  return NextResponse.json({});
}
