
import ProductCard from '@/components/ProductCard'
import React from 'react'
import P1 from "/public/p1.png"
import P2 from "/public/p2.png"
import P3 from "/public/p3.png"
import { Products } from '@/utils/mock'

const ProductList = () => {
    const productChecks = Products.slice(0,3);
  return (
   <div className='flex justify-evenly mt-16 py-10 w-[380] h-[400]'>

    {
      
      productChecks.map((product) => (
        <ProductCard 
        key={product.id}
         title= {product.name} 
         price={product.price} 
         img={product.image}
         category={product.category}
         id={product.id}
         />
      ))
    }
   </div>
  )
}

export default ProductList    