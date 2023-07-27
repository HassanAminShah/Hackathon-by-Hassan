import Quantity from "@/components/Quantity";
import { Products } from "@/utils/mock"

import { StaticImageData } from "next/image";

import  Image  from "next/image";
const getProductsDetail = ( id : number | string ) => {
    return  Products.filter((product) => product.id == id);
};
const sizes = ["xs", "sm", "md" , "lg", "xl"]
export default function Page({ params }: { params: { id: string } }) {
 const result = getProductsDetail(params.id);


  return (
      <div className='flex mt-16 py-10 flex-wrap w-[380] h-[400]'>
    { result.map((product) => (
       <div key={product.id} className="flex justify-between gap-6">
          {/* Left Image */}
          <div>
          <Image src={product.image} alt={product.name} />
          </div>
          {/* Right Content */}
          <div>
          <div>
          <h1 className="text-2xl">{product.name}</h1>
          <h2 className=" text-base text-gray-400 font-semibold">{product.tagline}</h2>
          </div>
          <div>
            <h3 className=" text-xs mt-6 font-semibold">SELECT SIZE</h3>
            {/* Sizes  */}
            <div className="flex gap-x-4">
            {
                sizes.map((items) => {
                  return ( <div className="h-7 w-7 rounded-full hover:shadow-3 xl duration-300 border mt-2 center"> 
                  <span className="  text-xs font-semibold text-center text-gray-600"> {items}</span>
                  </div>                  
                  );  
              })}
            </div>
            {/* Quantity */}
            <div className="flex gap-x-3 mt-6 items-center">
              <h3 className=" text-base font-semibold">Quantity:</h3>
              <Quantity />
            </div>
          </div>
       </div>
       </div>
      ))} 
   </div>
  );
}