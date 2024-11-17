import { BriefcaseBusiness, MenuIcon, Heart, HomeIcon} from "lucide-react";



export default function Navbar() {
    return (
     <div className="fixed border-t border-gray-200 w-full bottom-0 flex gap-5 bg-white justify-center mx-auto h-10 items-center sm:hidden">
        <MenuIcon/>
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
  