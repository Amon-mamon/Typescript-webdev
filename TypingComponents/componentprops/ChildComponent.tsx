import React from 'react'

type Product = {
  id?:string;
  name:string;
  price:number;
}

interface ProductCardProps {
  product:Product
  showId?:boolean
}const ProductCard: React.FC<ProductCardProps> = ({product,showId = false}) => {
  // destructure product, give a fallback for id
  const { id = 'N/A', name, price } = product;

  return (
    <div className="product-card border p-4 rounded-lg shadow-lg">
      {showId && (
        <p className="text-sm text-gray-500">ID: {id}</p>
      )}
      <h2 className="text-xl font-bold mt-2">{name}</h2>
      <p className="text-lg text-green-500">₱{price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;