import ProductList from './components/ProductList';

const getProducts = async (): Promise<any> => {
  const res = await fetch('http://localhost:3000/api/products');
  return res.json();
};

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">My Products</h1>
      <ProductList products={products} />
    </main>
  );
}
