import Link from "next/link"
import logo from "/public/logo.webp"
import Image from "next/image"
import { Input } from "@/components/ui/input"

import{ShoppingCart} from "lucide-react"
import {SearchIcon} from "lucide-react";
const Header = () => {
  return (
    <div className="flex justify-between items-center py-6 px-32">
      {/* <Link href={"../"}><Image src={logo} alt="logo" className="w-40"/></Link> */}
      <Link href={"/"}></Link>
      <Image src={logo} alt="logo" className="w-40"/>
        <ul className="flex gap-x-10">
            <li className="text-lg">
                <Link href={"category/female"}>
                Female
                </Link>
                </li>
                <li className="text-lg">
                <Link href={"category/male"}>
                Male
                </Link>
                </li><li className="text-lg">
                <Link href={"category/kids"}>
                Kids
                </Link>
                </li><li className="text-lg">
                <Link href={"products"}>
                All Products
                </Link>
                </li>
        </ul>
        <div className="flex px-0 py-0 border-solid border-2 border-slate-200 rounded-sm">
        <SearchIcon />
        <input type="text" placeholder="What are you looking for"/>
        </div>
        <div className="h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center">
    <ShoppingCart className="w-6 h-6"/>
        </div>
    </div>
      
  )
}

export default Header
