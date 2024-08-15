import { NextResponse } from 'next/server';

export async function GET() {
  const products = [
    { id: 1, name: 'Residential Proxies', price: 50 },
    { id: 2, name: 'Data Scraping API', price: 100 },
    { id: 3, name: 'Mobile Proxies', price: 75 },
  ];

  return NextResponse.json(products);
}