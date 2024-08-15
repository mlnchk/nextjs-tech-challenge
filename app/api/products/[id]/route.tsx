import { products } from "@/app/api/products/_constants";
import { NextResponse } from "next/server";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;

  await sleep(1000);

  const product = products.find((product) => String(product.id) === id);

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}
