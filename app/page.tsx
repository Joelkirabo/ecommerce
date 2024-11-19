import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Newproducts from "@/components/Newproducts";
import Header1 from "@/components/Header1";
import Header2 from "@/components/Header2";


import {categories, products} from "@/actions/db";

export type ProductProps = {
  index?: number,
  img: string,
  prodname: string,
  decription: string,
  rating: number,
  price: number,
  status?:string
}

export default async function Home() {
  const cats:string[] = await categories()
  const prods:ProductProps[]= await products()
  return (
   <div className="pb-20">
       <Header1/>
       <Header2/>
      <Menu cats = {cats}/>
      <Hero/>
      <Newproducts prods = {prods}/>
      <Navbar cats = {cats}/>
   </div>
  );
}
