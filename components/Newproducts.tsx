import { Star } from "lucide-react";
import Image from "next/image";




export default function Newproducts() {

    const newproducts = [
        {   
            img: "/jacket-1.jpg",
            prodname: "JACKET",
            decription: "MEN Yarn Fleece Full-Zip Jacket",
            rating: 4,
            price: 45
        },
        {   
            img: "/skirt-1.jpg",
            prodname: "SKIRT",
            decription: "Black Floral Rap Midi Skirt",
            rating: 5,
            price: 55
        },
        {   
            img: "/party-wear-1.jpg",
            prodname: "PARTY WEAR",
            decription: "Women's Party Wear Shoes",
            rating: 3,
            price: 25
        },
        {   
            img: "/shirt-1.jpg",
            prodname: "SHIRT",
            decription: "Pure Garment Dyed Cotton Shirt",
            rating: 4,
            price: 45
        },
        {   
            img: "/sports-1.jpg",
            prodname: "SPORTS",
            decription: "Trecking And running shoes- Black",
            rating: 3,
            price: 58
        },
        {   
            img: "/watch-1.jpg",
            prodname: "WATCHES",
            decription: "Smart Watches Vital Plus",
            rating: 4,
            price: 100
        },
        {   
            img: "/watch-2.jpg",
            prodname: "WATCHES",
            decription: "Pocket Watch LEather Pouch",
            rating: 4,
            price: 120
        },
        {   
            img: "/jacket-1.jpg",
            prodname: "JACKET",
            decription: "MEN Yarn Fleece Full-Zip Jacket",
            rating: 4,
            price: 45
        },
        {   
            img: "/skirt-1.jpg",
            prodname: "SKIRT",
            decription: "Black Floral Rap Midi Skirt",
            rating: 5,
            price: 55
        },
        {   
            img: "/party-wear-1.jpg",
            prodname: "PARTY WEAR",
            decription: "Women's Party Wear Shoes",
            rating: 3,
            price: 25
        },
        {   
            img: "/shirt-1.jpg",
            prodname: "SHIRT",
            decription: "Pure Garment Dyed Cotton Shirt",
            rating: 4,
            price: 45
        },
        {   
            img: "/sports-1.jpg",
            prodname: "SPORTS",
            decription: "Trecking And running shoes- Black",
            rating: 3,
            price: 58
        },
        {   
            img: "/watch-1.jpg",
            prodname: "WATCHES",
            decription: "Smart Watches Vital Plus",
            rating: 4,
            price: 100
        },
        {   
            img: "/watch-2.jpg",
            prodname: "WATCHES",
            decription: "Pocket Watch LEather Pouch",
            rating: 4,
            price: 120
        },
        {   
            img: "/jacket-1.jpg",
            prodname: "JACKET",
            decription: "MEN Yarn Fleece Full-Zip Jacket",
            rating: 4,
            price: 45
        },
        {   
            img: "/skirt-1.jpg",
            prodname: "SKIRT",
            decription: "Black Floral Rap Midi Skirt",
            rating: 5,
            price: 55
        },
        {   
            img: "/party-wear-1.jpg",
            prodname: "PARTY WEAR",
            decription: "Women's Party Wear Shoes",
            rating: 3,
            price: 25
        },
        {   
            img: "/shirt-1.jpg",
            prodname: "SHIRT",
            decription: "Pure Garment Dyed Cotton Shirt",
            rating: 4,
            price: 45
        },
        {   
            img: "/sports-1.jpg",
            prodname: "SPORTS",
            decription: "Trecking And running shoes- Black",
            rating: 3,
            price: 58
        },
        {   
            img: "/watch-1.jpg",
            prodname: "WATCHES",
            decription: "Smart Watches Vital Plus",
            rating: 4,
            price: 100
        },
        {   
            img: "/watch-2.jpg",
            prodname: "WATCHES",
            decription: "Pocket Watch LEather Pouch",
            rating: 4,
            price: 120
        },
        {   
            img: "/jacket-1.jpg",
            prodname: "JACKET",
            decription: "MEN Yarn Fleece Full-Zip Jacket",
            rating: 4,
            price: 45
        },
        {   
            img: "/skirt-1.jpg",
            prodname: "SKIRT",
            decription: "Black Floral Rap Midi Skirt",
            rating: 5,
            price: 55
        },
        {   
            img: "/party-wear-1.jpg",
            prodname: "PARTY WEAR",
            decription: "Women's Party Wear Shoes",
            rating: 3,
            price: 25
        },
        {   
            img: "/shirt-1.jpg",
            prodname: "SHIRT",
            decription: "Pure Garment Dyed Cotton Shirt",
            rating: 4,
            price: 45
        },
        {   
            img: "/sports-1.jpg",
            prodname: "SPORTS",
            decription: "Trecking And running shoes- Black",
            rating: 3,
            price: 58
        },
        {   
            img: "/watch-1.jpg",
            prodname: "WATCHES",
            decription: "Smart Watches Vital Plus",
            rating: 4,
            price: 100
        },
        {   
            img: "/watch-2.jpg",
            prodname: "WATCHES",
            decription: "Pocket Watch LEather Pouch",
            rating: 4,
            price: 120
        },
        {   
            img: "/jacket-1.jpg",
            prodname: "JACKET",
            decription: "MEN Yarn Fleece Full-Zip Jacket",
            rating: 4,
            price: 45
        },
        {   
            img: "/skirt-1.jpg",
            prodname: "SKIRT",
            decription: "Black Floral Rap Midi Skirt",
            rating: 5,
            price: 55
        },
        {   
            img: "/party-wear-1.jpg",
            prodname: "PARTY WEAR",
            decription: "Women's Party Wear Shoes",
            rating: 3,
            price: 25
        },
        {   
            img: "/shirt-1.jpg",
            prodname: "SHIRT",
            decription: "Pure Garment Dyed Cotton Shirt",
            rating: 4,
            price: 45
        },
        {   
            img: "/sports-1.jpg",
            prodname: "SPORTS",
            decription: "Trecking And running shoes- Black",
            rating: 3,
            price: 58
        },
        {   
            img: "/watch-1.jpg",
            prodname: "WATCHES",
            decription: "Smart Watches Vital Plus",
            rating: 4,
            price: 100
        },
        {   
            img: "/watch-2.jpg",
            prodname: "WATCHES",
            decription: "Pocket Watch LEather Pouch",
            rating: 4,
            price: 120
        },
        {   
            img: "/jacket-1.jpg",
            prodname: "JACKET",
            decription: "MEN Yarn Fleece Full-Zip Jacket",
            rating: 4,
            price: 45
        },
        {   
            img: "/skirt-1.jpg",
            prodname: "SKIRT",
            decription: "Black Floral Rap Midi Skirt",
            rating: 5,
            price: 55
        },
        {   
            img: "/party-wear-1.jpg",
            prodname: "PARTY WEAR",
            decription: "Women's Party Wear Shoes",
            rating: 3,
            price: 25
        },
        {   
            img: "/shirt-1.jpg",
            prodname: "SHIRT",
            decription: "Pure Garment Dyed Cotton Shirt",
            rating: 4,
            price: 45
        },
        {   
            img: "/sports-1.jpg",
            prodname: "SPORTS",
            decription: "Trecking And running shoes- Black",
            rating: 3,
            price: 58
        },
        {   
            img: "/watch-1.jpg",
            prodname: "WATCHES",
            decription: "Smart Watches Vital Plus",
            rating: 4,
            price: 100
        },
        {   
            img: "/watch-2.jpg",
            prodname: "WATCHES",
            decription: "Pocket Watch LEather Pouch",
            rating: 4,
            price: 120
        },
    ]

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