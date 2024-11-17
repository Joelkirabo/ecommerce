import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";


export default function Header1() {
    return (
     <div className="px-[40px] border-b border-gray-200">
        <div className="p-[10px] flex justify-between items-center">
            <div className="gap-1 flex">
                <Facebook className="border border-gray-200 p-1 text-gray-500 hover:text-white bg-gray-100 rounded cursor-pointer hover:bg-pink-500 transition-all duration-500" size={30}/>
                <Twitter className="border border-gray-200 p-1 text-gray-500 hover:text-white bg-gray-100 rounded cursor-pointer hover:bg-pink-500 transition-all duration-500" size={30}/>
                <Instagram className="border border-gray-200 p-1 text-gray-500 hover:text-white bg-gray-100 rounded cursor-pointer hover:bg-pink-500 transition-all duration-500" size={30}/>
                <Youtube className="border border-gray-200 p-1 text-gray-500 hover:text-white bg-gray-100 rounded cursor-pointer hover:bg-pink-500 transition-all duration-500" size={30}/>
                </div>
            <div className="text-sm text-gray-500 hidden md:block"><span className="font-bold">FREE SHIPPING </span>THIS WEEK ORDER OVER - $55</div>
            <div className="hidden sm:flex text-gray-500 text-sm gap-2">
                <div>
                    <select className="bg-gray-200" name="currency" id="currency">                        
                        <option className="bg-white text-sm"  value="">USD </option>
                        <option  className="bg-white text-sm" value="">EURO </option>
                        <option className="bg-white text-sm"  value="">UGX</option>
                    </select>
                </div>
                <div >
                <select className="bg-gray-200" name="languages" id="languages">                        
                        <option value="">English </option>
                        <option value="">Spanish </option>
                        <option value="">Arabic</option>
                    </select>
                </div>
            </div>
        </div>
     </div>
    );
  }
  