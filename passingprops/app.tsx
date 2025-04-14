import React from 'react'
import ProductCard from './ProductCard'


const exampleProduct = {
    id:"1",
    name:"vince",
    price:100
}
const app = () => {
  return (
    <div>
        <ProductCard product ={exampleProduct}/>
    </div>
  )
}

export default app