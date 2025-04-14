// pages/index.tsx
import React from 'react';
import ProductCard from './ChildComponent';

export default function Home() {
  const apple = { id: '123', name: 'Apple', price: 10 };
  const banana = { name: 'Banana', price: 5 };

  return (
    <div className="p-8 space-y-4">
      {/* showId defaults to false, so ID is hidden */}
      <ProductCard product={apple} />

      {/* explicitly show the ID */}
      <ProductCard product={apple} showId />

      {/* banana has no id, showId true → falls back to "N/A" */}
      <ProductCard product={banana} showId />
    </div>
  );
}
