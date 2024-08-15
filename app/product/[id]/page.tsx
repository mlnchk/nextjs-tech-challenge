import { notFound } from 'next/navigation';

async function getProduct(id: string): Promise<any> {
  const res = await fetch(`http://localhost:3000/api/products/${id}`);
  if (!res.ok) return null;
  return res.json();
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-xl">Price: ${product.price}</p>
    </div>
  );
}