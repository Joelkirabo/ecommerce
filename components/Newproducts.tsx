import { ProductProps } from "@/app/page";
import { Star } from "lucide-react";
import Image from "next/image";




export default function Newproducts({prods}:{prods:ProductProps[]}) {

    const newproducts = prods;

    return (
     <div className="px-[20px] sm:px-[40px] pt-4" >
       <div className="font-bold text-center">New Products</div>
       <div className="flex pt-3 flex flex-wrap justify-center gap-3">


        {
            newproducts.map((product,i)=>(
                <div key={i} className="flex flex-col border border-gray-100 p-3 w-[150px]">
                <div className="flex justify-center">
                <Image alt="product" src={product.img}  width={100} height={100}/>
                </div>                
                <div>
                    <div className="text-pink-500 text-sm md:text-lg font-bold">{product.prodname}</div>
                    <div className="text-gray-500 text-sm md:text-lg">{product.decription}</div>
                    <div className="flex">
                        {
                            product.rating === 1?( <Star className="text-pink-500 text-sm md:text-lg"/>)
                            :product.rating === 2?
                            ( <>
                            <Star className="text-pink-500 text-sm md:text-lg"/>
                            <Star className="text-pink-500 text-sm md:text-lg"/>
                            </>
                            )
                            :product.rating === 3?
                            ( <>
                            <Star className="text-pink-500 text-sm md:text-lg"/>
                            <Star className="text-pink-500 text-sm md:text-lg"/>
                            <Star className="text-pink-500 text-sm md:text-lg"/>
                            </>
                            )
                            :product.rating === 4?
                            ( <>
                            <Star className="text-pink-500 text-sm md:text-lg"/>
                            <Star className="text-pink-500 text-sm md:text-lg"/>
                            <Star className="text-pink-500 text-sm md:text-lg"/>
                            </>
                            )
                            :product.rating === 5?
                            ( <>
                            <Star className="text-pink-500 text-sm md:text-lg"/>
                            <Star className="text-pink-500 text-sm md:text-lg"/>
                            <Star className="text-pink-500 text-sm md:text-lg"/>
                            <Star className="text-pink-500 text-sm md:text-lg"/>
                            <Star className="text-pink-500 text-sm md:text-lg"/>
                            </>
                            )
                            :""
                        }
                       
                    </div>

                    <div className="flex gap-3">
                        <div className="font-bold text-sm md:text-lg">$<span>{product.price}</span>.00</div>
                        <del className="text-gray-500 text-sm md:text-lg">$<span>{product.price + 20}</span>.00</del>
                    </div>
                </div>
            </div>

            ))
        }

          
          
       </div>
     </div>
    );
  }