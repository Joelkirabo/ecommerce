"use client"


import { Bell, ChartNoAxesCombined, LayoutDashboard, LogOutIcon, MenuIcon, Settings, ShoppingCart, TagIcon, Users, X } from "lucide-react"
import { useRouter } from "next/navigation";
import { useState } from "react"


export default function Dashboardsidebar(){

    const [visible, setvisible] = useState(false);
    const [clickedindex, setclickedindex] = useState(0)
    const [open, setopen] = useState(false)
    const route = useRouter()

    const sideitems = [
        {
            icon: <LayoutDashboard/>,
            title: "Dashboard",
            contents: [],            
        },
        {
            icon: <ShoppingCart/>,
            title: "Products",
            contents: [
                {name:"Product List",href:"/dashboard/products"},{name:"Categories", href:"/dashboard/categories"}
            ],  
        },
        {
            icon: <TagIcon/>,
            title: "Sales",
            contents: [],            
        },
        {
            icon: <Users/>,
            title: "Customers",
            contents: [],            
        },
        {
            icon: <ChartNoAxesCombined/>,
            title: "Analytics",
            contents: [],            
        },
        {
            icon: <Bell/>,
            title: "Notificatons",
            contents: [],            
        },
        {
            icon: <Settings/>,
            title: "Settings",
            contents: [],            
        },
    ]
     function visibility (i:number){
        setvisible(!visible)
        setclickedindex(i)
     }

     function showMenu (){
        setopen(!open)
     }

    return(
        <>
             <div className={`w-[200px] h-screen bg-white ${open?"flex":"hidden"} sm:flex flex-col gap-5 pt-6 px-4 border-r border-gray-200 pb-10 absolute sm:relative z-50`}>
                <h1 className="text-pink-500 font-bold text-3xl flex justify-between"><span onClick={()=>route.push('/')}  className="cursor-pointer">Ecom</span><X onClick={()=>showMenu()} className="bg-gray-200 rounded sm:hidden "/></h1>
                <ul className="flex flex-col">
                    {
                        sideitems.map((item,i)=>(
                            <div key={i} className="flex flex-col cursor-pointer p-3 hover:bg-pink-50">
                                <li onClick={()=>visibility(i)}   className="text-gray-700 text-sm flex items-center gap-2 hover:text-bold"><span className="font-[900px] text-xs sm:text-xl">{item.icon}</span>{item.title}</li>
                                <ul className={`${visible && i === clickedindex ?"block pl-8":"hidden"}`}> 
                                    {
                                        item.contents.map((content,i)=>(
                                            <li key={i} onClick={()=>{route.push(content.href); setopen(false)}} className="text-sm py-1 text-gray-500">{content.name}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                     
                        ))
                    }
             
                </ul>
    
                <div onClick={()=>route.push('/')} className="pl-5 mt-auto flex text-gray-700 text-sm flex items-center gap-2 hover:text-bold cursor-pointer"><span><LogOutIcon/></span>Logout</div>
                </div>
            
                <div className="bg-gray-100 h-screen px-1 py-5 sm:hidden">
                    <MenuIcon onClick={()=>showMenu()}/>
                </div>
                
        </>
    )
}