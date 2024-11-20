"use server"


import { CategoryProps } from '@/app/page';
import { prisma } from '@/lib/prisma';

export async function  categories(){
    try {
        const categories = await prisma.category.findMany();
        return categories as CategoryProps[]
    }  
    catch (error) {
        console.log(error)
    }
}

export async function savecategory(data:CategoryProps){
    const{categoryname,slug} = data;

    const alreadyexists = await prisma.category.findUnique({
        where: {slug:slug}
    })
    if(alreadyexists){
        return {
            success:false,
            error: 'Category already exists'
        }
    }else{
        await prisma.category.create({
            data:{
                categoryname,
                slug
            }
         }       
        )
        return {
            success:true,
            error:'Category added successfully'
        }

    }
   
}

export async function  products(){
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
    return newproducts;
}

export async function tableproducts(){
    const products = [
        {   
            index: 1,
            img: "/shirt-1.jpg",
            prodname: "SHIRT",
            decription: "Pure Garment Dyed Cotton Shirt",
            rating: 4,
            price: 45,
            status:"Active"
        },
        {   
            index: 2,
            img: "/sports-1.jpg",
            prodname: "SPORTS",
            decription: "Trecking And running shoes- Black",
            rating: 3,
            price: 58,
            status:"Scheduled"
        },
        {   
            index: 3,
            img: "/watch-1.jpg",
            prodname: "WATCHES",
            decription: "Smart Watches Vital Plus",
            rating: 4,
            price: 100,
            status:"Draft"
        },
        {   
            index: 4,
            img: "/watch-2.jpg",
            prodname: "WATCHES",
            decription: "Pocket Watch LEather Pouch",
            rating: 4,
            price: 120,
            status:"Draft"
        },
        {   
            index: 5,
            img: "/shirt-1.jpg",
            prodname: "SHIRT",
            decription: "Pure Garment Dyed Cotton Shirt",
            rating: 4,
            price: 45,
            status:"Active"
        },
        {   
            index: 6,
            img: "/sports-1.jpg",
            prodname: "SPORTS",
            decription: "Trecking And running shoes- Black",
            rating: 3,
            price: 58,
            status:"Scheduled"
        },
        {   
            index: 7,
            img: "/watch-1.jpg",
            prodname: "WATCHES",
            decription: "Smart Watches Vital Plus",
            rating: 4,
            price: 100,
            status:"Draft"
        },
        {   
            index: 8,
            img: "/watch-2.jpg",
            prodname: "WATCHES",
            decription: "Pocket Watch LEather Pouch",
            rating: 4,
            price: 120,
            status:"Draft"
        },
        {   
            index: 9,
            img: "/shirt-1.jpg",
            prodname: "SHIRT",
            decription: "Pure Garment Dyed Cotton Shirt",
            rating: 4,
            price: 45,
            status:"Active"
        },
        {   
            index: 10,
            img: "/sports-1.jpg",
            prodname: "SPORTS",
            decription: "Trecking And running shoes- Black",
            rating: 3,
            price: 58,
            status:"Scheduled"
        },
        {   
            index: 11,
            img: "/watch-1.jpg",
            prodname: "WATCHES",
            decription: "Smart Watches Vital Plus",
            rating: 4,
            price: 100,
            status:"Draft"
        },
        {   
            index: 12,
            img: "/watch-2.jpg",
            prodname: "WATCHES",
            decription: "Pocket Watch LEather Pouch",
            rating: 4,
            price: 120,
            status:"Draft"
        },
        {   
            index: 13,
            img: "/shirt-1.jpg",
            prodname: "SHIRT",
            decription: "Pure Garment Dyed Cotton Shirt",
            rating: 4,
            price: 45,
            status:"Active"
        },
        {   
            index: 14,
            img: "/sports-1.jpg",
            prodname: "SPORTS",
            decription: "Trecking And running shoes- Black",
            rating: 3,
            price: 58,
            status:"Scheduled"
        },
        {   
            index: 15,
            img: "/watch-1.jpg",
            prodname: "WATCHES",
            decription: "Smart Watches Vital Plus",
            rating: 4,
            price: 100,
            status:"Draft"
        },
        {   
            index: 16,
            img: "/watch-2.jpg",
            prodname: "WATCHES",
            decription: "Pocket Watch LEather Pouch",
            rating: 4,
            price: 120,
            status:"Draft"
        },
    ]
    return products;
}


