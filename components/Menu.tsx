



export default function Menu() {
    const menu = ["HOME", "CATEGORIES","MEN", "WOMEN","BLOG","HOT OFFERS"]
    return (
     <div className="px-[40px] mt-[50px]">
        <div className="p-2 hidden sm:flex gap-2 justify-center items-center font-bold text-gray-500">
            {
                menu.map((item,i)=>(
                    <div key={i} className="menu relative hover:text-pink-500 hover:scale-1">{item}</div>
                ))
            }
        </div>
     </div>
    );
  }
  