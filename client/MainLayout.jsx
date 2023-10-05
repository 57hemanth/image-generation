import { Outlet } from "react-router-dom";
import { NavBar } from "./src/components";

export default function MainLayout() {
    return(
        <>
            <NavBar />
            <main className="w-full mx-auto py-4 px-4 sm:px-8 bg-[#cad4ff]">
                <Outlet />
            </main>
        </>
    )
}