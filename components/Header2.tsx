import { BriefcaseBusiness, Heart, Search, User } from "lucide-react";



export default function Header2() {
    return (
     <div className="px-[40px] border-b border-gray-200 fixed z-50 w-full bg-white">
        <div className="flex gap-4 p-2 items-center">
            <div className="font-bold text-2xl">Ecom</div>
            <div className="w-full flex justify-center items-center relative">
                <input className="border border-gray-200 w-full px-2 py-1 rounded text-xs" type="search"  placeholder="Search products..."/>
                <Search size={20} className="absolute right-2 text-gray-500"/>
            </div>
            <div className="hidden sm:flex gap-2 text-gray-500">
                <User/>
                <div className="relative">
                    <Heart/>
                    <div className="absolute top-[-8px] right-[-2px] text-white bg-pink-500 rounded-full h-4 w-4 flex justify-center items-center p-1 text-xs font-bold ">0</div>
                </div>                
                <div className="relative">
                    <BriefcaseBusiness/>
                    <div className="absolute top-[-8px] right-[-2px] text-white bg-pink-500 rounded-full h-4 w-4 flex justify-center items-center p-1 text-xs font-bold">0</div>
                </div>
                
            </div>
        </div>
     </div>
    );
  }
  