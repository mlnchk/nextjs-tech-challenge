import React from "react";
import Link from "next/link";
import { Product } from "@/app/api/products/_constants";

const ProductItem = ({ product }: { product: Product }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <Link
        href={`/product/${product.id}`}
        className="text-blue-600 hover:underline"
      >
        <h3 className="text-xl font-semibold">{product.name}</h3>
      </Link>
      <p className="mt-2">Price: ${product.price}</p>
    </div>
  );
};

export default ProductItem;
