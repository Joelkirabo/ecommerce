"use client"

import { CategoryProps } from "@/app/page";
import { BriefcaseBusiness, MenuIcon, Heart, HomeIcon, User} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";



export default function Navbar({cats}:{cats:CategoryProps[]}) {
    const [visible, setvivisible] = useState(false);
    const route = useRouter();

    function visibility (){
        setvivisible(!visible)
        console.log(visible)
    }

    return (
     <div className="fixed border-t border-gray-200 w-full bottom-0 flex gap-5 bg-white justify-center mx-auto h-10 items-center sm:hidden">
        <div onClick={()=>visibility()} className="relative cursor-pointer">
                <MenuIcon />
                <div className={`${visible?"absolute bottom-full left-[-50%] grid bg-gray-50 rounded w-64 grid-cols-3 gap-2 z-50 mb-5 shadow ":"absolute bottom-full left-[-50%] hidden bg-gray-200 rounded w-64 grid-cols-3 gap-2 z-50 mb-5 "} `}>{
                    cats.map((cat,i)=>(
                        <div className="text-gray-500 hover:text-pink-500 m-2" key={i}>{cat.categoryname}</div>
                    ))
                }
                </div>
        </div>
    

        <User onClick={()=>route.push("/dashboard")} />
                <div className="relative">
                    <Heart/>
                    <div className="absolute top-[-8px] right-[-2px] text-white bg-pink-500 rounded-full h-4 w-4 flex justify-center items-center p-1 text-xs font-bold ">0</div>
                </div>    
                <HomeIcon/>            
                <div className="relative">
                    <BriefcaseBusiness/>
                    <div className="absolute top-[-8px] right-[-2px] text-white bg-pink-500 rounded-full h-4 w-4 flex justify-center items-center p-1 text-xs font-bold">0</div>
                </div>
     </div>
    );
  }
  