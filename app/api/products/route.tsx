import { products } from "@/app/api/products/_constants";
import { NextResponse } from "next/server";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function GET() {
  await sleep(1000);

  return NextResponse.json(products);
}
