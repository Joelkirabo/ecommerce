import { tableproducts } from "@/actions/db";
import { ProductProps } from "@/app/page";
import { Filter, Plus } from "lucide-react";


export default async function products(){
    const tableprods:ProductProps[] = await tableproducts()
     

    return(
        <div className="bg-gray-100 h-auto w-full pt-1 sm:p-3">
            <div className="bg-white h-full w-full rounded-[5px]">
                <div className="flex justify-between p-3 border-b border-gray-200">
                    <div className="font-bold text-sm sm:text-md">Products List</div>
                    <div className="flex gap-3">
                        <div className="border text-gray-500 border-gray-200 py-0.5 px-2 rounded text-xs md:text-sm flex gap-1 items-center"><Filter size={15}/> Filter</div>
                        <div className="border bg-gray-100 text-gray-500 border-gray-200 py-0.5 px-2 rounded text-xs md:text-sm flex items-center">See All</div>
                        <div className="border bg-pink-500 text-white border-gray-200 py-0.5 px-2 rounded text-xs md:text-sm flex gap-1 items-center"><Plus size={15}/><span className="hidden sm:block">Add Product</span> </div>
                    </div>
                </div>


                <div className="w-full text-xs ">
                    <table className="w-full table-auto">
                        <thead className="border border-gray-200">
                            <tr className="text-gray-500">
                                <th className="p-1 text-left h-8">Product Name</th>
                                <th className="p-1 text-left">Category</th>
                                <th className="p-1 text-left">Price</th>
                                <th className="p-1 text-left">Status</th>
                                <th className="p-1 text-left">Action</th>
                            </tr>
                        </thead>
                       
                        <tbody>
                        {
                            tableprods.map((prod,i)=>(
                            <tr key={i} className="text-gray-800 border-b border-gray-200">
                                <td className="p-1 text-left h-[45px] lowercase flex items-center"><span className="mr-1 text-[10px] bg-gray-100 border border-gray-200 rounded-full h-3 w-3 flex justify-center items-center">{i+1}</span>{prod.prodname}</td>
                                <td className="p-1 text-left">nil</td>
                                <td className="p-1 text-left">${prod.price}</td>
                                <td className="p-1 text-left"><span className={`${prod.status ==="Active"?"active":prod.status === "Scheduled"?"scheduled":prod.status === "Draft"?"draft":""}`}>{prod.status}</span></td>
                                <td className="p-1 text-left text-pink-500">Details</td>
                            </tr>                                
                            ))
                        }                            
                        </tbody>
                    </table>
                
                </div>
            
            </div>

        </div>      
        
    
    )
}