"use client"

import { savecategory } from "@/actions/db";
import { CategoryProps } from "@/app/page";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {useForm} from "react-hook-form"
import { FaExclamation } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

type MessageProps = {
    success:boolean,
    error:string
}

export default function categories(){
    
    const {register,reset, formState:{errors}, handleSubmit} = useForm<CategoryProps>();
    const [messages, setmessages] = useState<MessageProps>()
    const router = useRouter();

    async function onsubmit(data:CategoryProps){
        data.slug = data.categoryname.toLowerCase().split(" ").join("-");
        const returnedmessages = await savecategory(data)
        setmessages(returnedmessages);
        console.log(returnedmessages);
        reset()
        if(returnedmessages.success === true){
            router.push("/")
        }        
    }    

    return(
        <div className="bg-gray-100 h-full p-3">
            <div className="bg-white w-full h-full rounded-[5px] p-3">
                <div className="font-bold text-xl mb-3">Add New Category</div>
                <form onSubmit={handleSubmit(onsubmit)} className="flex flex-col justify-start items-start gap-3">
                    <input {...register("categoryname",{required:"Please enter category!"})} type="text" className="border border-gray-200 p-1 rounded outline-none" placeholder="Enter category..."/>
                   {errors.categoryname?<div className="errors text-red-500 text-xs font-bold">{errors.categoryname.message}</div>:""}
                    <button type="submit" className="bg-pink-500 py-0.5 px-2 rounded flex gap-1 items-center text-white"><Plus size={20}/>  Add new</button>
                    {
                        messages?.success === false?(
                            <div className="error text-red-500 border flex gap-1 items-center mt-10 font-bold boder-red-200 text-xs py-1 px-3 rounded bg-red-50"><FaExclamation size={20} className="boder-red-200 border rounded-full p-1"/>   {messages?.error}</div>
                        ):
                        messages?.success === true?( <div className="error text-green-500 border flex gap-1 items-center mt-10 font-bold boder-green-200 text-xs py-1 px-3 rounded bg-green-50"><TiTick size={20} className="boder-green-200 border rounded-full p-1 error"/> {messages?.error}</div>):""

                    }
                   
                </form>
            </div>
        </div>
    )
}