import Dashboardheader from "@/components/Dashboardheader";
import Dashboardsidebar from "@/components/Dashboardsidebar";


export default function DashboardLayout({children}:{children:React.ReactNode}){
    
    return (
        <div className="flex relative">
            <Dashboardsidebar/>
            <div className="w-full">
                <Dashboardheader/>
                {children}
            </div>
            
        </div>
    )
}




