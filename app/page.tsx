import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Newproducts from "@/components/Newproducts";


export default function Home() {
  return (
   <div className="pb-20">
      <Menu/>
      <Hero/>
      <Newproducts/>
      <Navbar/>
   </div>
  );
}
