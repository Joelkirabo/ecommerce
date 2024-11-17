"use client"


import Image from "next/image";
import { useState } from "react";

export default function Hero() {
    const [activeimage, setactiveimage] = useState(0);

    const images = [
        {url:"/banner1.jpg",type:"Trending Item", title:"WOMEN'S LATEST FASHION SALE", amount: 20},
        {url:"/banner2.jpg",type:"Trending Accessories", title:"MODERN SUNGLASSES", amount: 15},
        {url:"/banner3.jpg",type:"Sale Offer", title:"NEW FASHION SUMMER SALE", amount: 30},
    ]
   
           const interval = setInterval(()=>{
            if(activeimage === images.length-1){
                setactiveimage(0)
                clearInterval(interval)                
            }else{
                setactiveimage(activeimage + 1)
                clearInterval(interval)
            }          
        },3000)

    return (
     <div className="px-[40px] w-full">
        <div className="relative flex justify-center max-w-full h-[200px] md:h-[300px] mt-3">
            <Image alt="banner 1" src={images[activeimage].url}  layout="fill" objectFit="cover" className="rounded-[10px] overflow-hidden transition-all duration-300" />
            {
             images.map((image,i)=>(
                activeimage===i?(
                 <div key={i}  className="absolute flex flex-col  gap-2 items-start max-w-[50%] min-w-[60%] p-2 sm:p-5">
                    <div className="text-pink-500 text-lg font-bold md:text-xl">{image.type}</div>
                    <div className="font-bold md:text-3xl">{image.title}</div>
                    <div className="text-gray-500 md:text-xl">starting at <span className="font-bold">$<span>{image.amount}</span></span>.00</div>
                    <button className="bg-pink-500 py-0.5 px-2  rounded-[5px] text-white md:text-xl">Shop Now</button>
                </div>
                    ):""

                ))
            }                 
        </div>
     </div>
    );
  }
  



