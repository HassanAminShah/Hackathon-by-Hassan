import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Button } from '@/components/ui/button'
import heroImage from "/public/hero-img.webp"
import featured1 from "/public/Featured1.webp"
import featured2 from "/public/Featured2.webp"
import featured3 from "/public/Featured3.webp"
import featured4 from "/public/Featured4.webp"


import event1 from"/public/event1.webp"
import event2 from"/public/event2.webp"
import event3 from"/public/event3.webp"
import Image from 'next/image'
const Hero = () => {
  return (
    <section >
      <div className='flex flex-col lg:flex-row  gap-y-10py-6 '>
        {/* Left div */}
        <div className='flex-1 py-24'>
        <Badge className='py-3 px-8 rounded-lg bg-blue-100 text-blue-700 hover:bg-blue-100 text-sm'>Sale 70%</Badge>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-6xl mt-6">
        An Industrial Take <br/> on Streetwear
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6 text-slate-500">
      Anyone can beat you but no one can beat your<br/> outfit as long as you wear Dine outfits.
      </p>
      <Button className='bg-black h-12 px-8 mt-4'>Start Shopping</Button>
      <div className='flex'>
        <Image className='mt-20 mr-20' src={featured1} alt='BAZAAR'/>
        <Image className='mt-20 mr-20' src={featured2} alt='BUSTLE'/>
        <Image className='mt-20 mr-20' src={featured3} alt='VERSACE'/>
        <Image className='mt-20 mr-20' src={featured4} alt='InStyle'/>
      
      </div>
        </div>

        
        {/* Right div */}
        <div className=' w-[650] h-[650]  rounded-full bg-amber-100 flex justify-center items-center'>    
        <Image src={heroImage}alt='hero-image'/>
        </div>
        </div>

        <ul className='text-center mt-28'>
          <li className=' text-xl text-blue-700 font-bold'>Promotions</li>
          <li className=' pb-10 text-4xl font-bold'>Our Promotions Events</li>
          </ul>
        
          <div className='flex items-between p-10'>
                  {/* Left Div */}
        
        <div className='flex-1  pr-10'>

            {/* Up Div */}
            <div className='flex  mb-5 bg-slate-100'>
         <h1 className='text-center flex-row justify-between m-5 p-5'> 
         <span className='text-3xl font-bold '> GET UP TO 60%</span>
          <br />For the summer season          
          </h1>
          <Image src={event1} alt='event1'/>
          </div>
            {/* Down Div */}
          <div className='text-white px-10 py-16 text-center  bg-slate-700'>
            <h1 className=' text-3xl font-bold '>
            GET 30% Off
            </h1>
               <p>  USE PROMO CODE</p>
            
          </div>
          </div>
          
          {/* Right Div */}
          <div className='flex '>
          <div className='flex-row mr-5 pt-5 pl-3  bg-orange-100'>
          <h1>Flex Sweatshirt <br />
                <span className='line-through pr-1'>$100.00</span> <span className=' font-bold'>$75.00</span></h1>
                <Image src={event2} alt='event2'/>
          </div>
          <div className='bg-slate-200 pt-5 pl-3 '>
          <h1>Flex Push Button Bomber <br />
                <span className='line-through pr-1'>$225.00</span> <span className=' font-bold'>$190.00</span></h1>
                <Image src={event3} alt='event3'/>
  
          </div>

          </div>
          </div>
          
      

    </section>
    
  )
}

export default Hero