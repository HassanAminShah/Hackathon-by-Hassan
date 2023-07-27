import React from 'react'
// import logo from "/public/logo.webp"
import Image from 'next/image'
const NewsLetter = () => {
  return (

    <section>
    <div className=' m-5 mb-96 grid grid-cols-1 grid-rows-1 text-center'>
        <div className=' text-9xl opacity-10 font-sans-serif font-bold absolute  ml-56'>Newsletter</div>
        <div className=' mb-8 font-bold text-3xl'>
        Subscribe Our Newsletter
        </div>
        <div>
        Get the latest information and promo offers directly
        </div>
    </div>
    {/* <div>
    <Image src={logo} alt='logo' />
    <div>Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</div>
    </div> */}
    </section>
  )
}

export default NewsLetter