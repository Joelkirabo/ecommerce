import { tableproducts } from "@/actions/db";

import Productspage from "@/components/Productspage";



export default async function products(){
    const tableprods = await tableproducts()
    return(
         
        <Productspage tableprods = {tableprods}/>
    
    )
}