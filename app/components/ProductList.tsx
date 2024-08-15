import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products }: any) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product: any) => (
        <ProductItem product={product} />
      ))}
    </div>
  );
};

export default ProductList;
