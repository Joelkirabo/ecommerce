"use client"

import { Plus } from "lucide-react";
import {useForm} from "react-hook-form"

export type CategoryProps = {
    categoryname:string,
    slug:string,
}

export default function categories(){
    
    const {register, formState:{errors}, handleSubmit} = useForm<CategoryProps>();

    function onsubmit(data:CategoryProps){
        data.slug = data.categoryname.toLowerCase().split(" ").join("-");
        console.log(data)
    }
    

    return(
        <div className="bg-gray-100 h-full p-3">
            <div className="bg-white w-full h-full rounded-[5px] p-3">
                <div className="font-bold text-xl mb-3">Add New Category</div>
                <form onSubmit={handleSubmit(onsubmit)} className="flex flex-col justify-start items-start gap-3">
                    <input {...register("categoryname",{required:"Please enter category!"})} type="text" className="border border-gray-200 p-1 rounded outline-none" placeholder="Enter category..."/>
                   {errors.categoryname?<div className="text-red-500 text-xs font-bold">{errors.categoryname.message}</div>:""}
                    <button type="submit" className="bg-pink-500 py-0.5 px-2 rounded flex gap-1 items-center text-white"><Plus size={20}/>  Add new</button>
                </form>
            </div>
        </div>
    )
}