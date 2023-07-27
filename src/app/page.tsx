import Image from 'next/image'
import Hero from '@/views/Hero'
import ProductList from '@/views/ProductList'
import Bottom from '@/views/Bottom'
import NewsLetter from '@/views/NewsLetter'
export default function Home() {
  return (
   <div>
    <Hero/>
    
    {/* Products */}
    <ProductList/>

    {/* Bottom Part */}
    <Bottom/>

    <NewsLetter/>
   </div>
  )
}
