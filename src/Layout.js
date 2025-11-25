import { NavBar } from "./components/navbar";
import { SubNavbar } from "./components/subnavbar";

import { Outlet } from "react-router-dom";

export function Layout(){
    return(
        <>
            <NavBar/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export function Layout2(){
    return(
        <>
            <NavBar/>
            <main>
                <SubNavbar/>
                <Outlet/>
            </main>
        </>
    );
}