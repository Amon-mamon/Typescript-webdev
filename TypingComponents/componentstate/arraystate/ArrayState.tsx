import React, { useState } from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
}

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([
    { id: '1', name: 'Sunglasses', price: 299 },
    { id: '2', name: 'Reading Glasses', price: 199 },
  ]);

  return (
    <div className="p-4 space-y-4">
      {products.map((product) => (
        <div key={product.id} className="border p-2 rounded">
          <h2 className="text-lg font-bold">{product.name}</h2>
          <p className="text-green-600">₱{product.price}</p>
        </div>
      ))}
    </div>
  );
}
