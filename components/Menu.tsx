"use client"


import { useState } from "react";

export default function Menu({cats}:{cats:string[]}) {
    
    const [visible, setvivisible] = useState(false);

    const menu = [
        {name:"CATEGORIES",
            details:cats},
        {name:"MEN",
            details:[]},
        {name:"WOMEN",
            details:[]},
        {name:"BLOG",
            details:[]},
        {name:"HOT OFFERS",
            details:[]}
       ]
    return (
     <div className="px-[40px] mt-[50px]">
        <div className="p-2 hidden sm:flex gap-2 justify-center items-center font-bold text-gray-500">
            {
                menu.map((item,i)=>(
                    <div key={i} onClick={()=>setvivisible(true)} className="menu relative hover:text-pink-500 hover:scale-1 cursor-pointer group">{item.name}
                        <div className={`absolute top-full left-0 hidden bg-gray-50 transition-all duration-1000 rounded w-64 grid-cols-3 gap-0.5 ${visible?"grid":""} group-hover:grid z-50`}>{
                                item.details.map((detail,i)=>(
                                    <div className="text-gray-500 hover:text-pink-500 m-2" key={i}>{detail}</div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
     </div>
    );
  }
  