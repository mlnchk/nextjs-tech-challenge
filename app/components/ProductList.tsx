import React from "react";
import ProductItem from "./ProductItem";
import { Product } from "@/app/api/products/_constants";

const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
