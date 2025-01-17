"use client"
import HorizontalNavbar from "./component/horizontal-nav-bar";
import VerticalNavbar from "./component/vertical-nav-bar";


const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    return (
        <div className="flex h-screen bg-white">
            <div className="h-full">
                <VerticalNavbar />
            </div>

            <div className="flex-1 flex flex-col">
                <HorizontalNavbar />

                <div className="p-6 flex-1 overflow-y-auto">
                    {children}  
                </div>
            </div>
        </div>
    )

}


export default Layout;
