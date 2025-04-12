import React from 'react'


type Product = {
  id?:string;
  name:string;
  price:number;
}

interface ProductCardProps {
  product:Product
}
const ProductCard: React.FC<ProductCardProps> = ({product}) => {
  return (
    <div className="product-card border p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mt-4">{product.name}</h2>
      <p className="text-lg text-green-500">₱{product.price}</p>
    </div>
  )
}

export default ProductCard