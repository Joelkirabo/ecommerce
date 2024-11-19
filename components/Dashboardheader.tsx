"use client"

import {  ArrowDown, Bell, Search, User } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Dashboardheader(){
    const[heading,setHeading] = useState("");
    const path = usePathname();

    useEffect(()=>{
        updateheader()       

    },[heading])

    function updateheader(){

        if(path === "/dashboard"){
            setHeading("Dashboard")
        }else if(path === "/dashboard/products"){
            setHeading("Products")
        }else if(path === "/dashboard/categories"){
            setHeading("Categories")
        }    
    }
   
    
    return(
        
            <div className="w-full">

                <div className="flex gap-2 sm:gap-5 p-3 justify-between items-center relative border-b border-gray-200">
                <div className="text-sm sm:text-2xl font-bold">{heading}</div>
                <div className="w-full  flex justify-center items-center w-[80%] relative">
                    <input className="border border-gray-200  w-full px-2 py-1 rounded text-sm" type="search"  placeholder="Search products..."/>
                    <Search size={20} className="absolute right-2 text-gray-500"/>
                </div>
               
                <div className="flex gap-2 text-gray-500 font-bold">
                    <Bell size={20}/>
                    <User size={20}/>
                    <ArrowDown size={20}/>
                </div>

            </div>
            
            </div>
    
    )
}