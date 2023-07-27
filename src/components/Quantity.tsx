"use client"

import React,{useState} from 'react'
import { Button } from './ui/button';

const Quantity = () => {
    
    const [num , setNum] = useState(1 );
    

  return (
    <div className=' center  gap-x-3'>
        {/* Minus */}
        <Button className='border  text-black bg-white hover:bg-white text-black h-8 w-7 rounded-full center'
        onClick={() =>{ 
            setNum(num <= 1 ? 1 : num - 1)
        }
         }>
            -
        </Button>
        {/* Number */}
          <span className=' text-xl '> {num} </span> 
        {/* Plus */}
        <Button className='border  text-black bg-white hover:bg-white text-black h-8 w-7 rounded-full center' 
        onClick={() =>{ 
            setNum(num + 1)
        }
         }>
            +
        </Button>
    </div>
  )
}

export default Quantity