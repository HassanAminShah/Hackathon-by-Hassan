
import React from 'react'
import featured from "/public/Featured5.webp"
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Header from '@/components/layout/Header'
import Link from 'next/link'
const Bottom = () => {
  return (
   <section className=' mb-60 mt-96'>
   <div className=' text-end  font-bold mb-10 text-4xl mr-56'>
    <div>Unique and Authentic  Vintage <br /> Designer Jewellery</div>
    </div>
    <div className='grid grid-cols-2 '>
      
    {/* Left Div */} 
    <div className=' grid grid-cols-2 m-10 '>
    <div className=' text-8xl opacity-10 font-sans-serif font-bold absolute'>Different <br /> from <br /> others</div>
    <div>
    <h1 className=' font-bold text-xl mb-3'>Using Good Quality Materials</h1>
    <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
    </div>
    <div>
    <h1 className=' font-bold  text-xl mb-3'>100% Handmade Products</h1>
    <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
    </div>
    <div>
    <h1 className=' font-bold  text-xl mb-3'>Modern Fashion Design</h1>
    <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
    </div>
    <div>
    <h1 className=' font-bold  text-xl mb-3'>Discount for Bulk Orders</h1>
    <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
    </div>
    </div>
    
    {/* Right Div */}
    <div className=' grid grid-cols-2'>
    <div>
    <Image src={featured} alt='picture' />
    </div>
    <div className=' m-10 mt-24 font-sans-serif'>
    This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable. <br />
    <Button className='mt-10' >  <Link rel="stylesheet" href="/"></Link> See All Products </Button>
    </div>
    </div>
    </div>
    </section>
  )
}

export default Bottom