import React, { useState } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarBtn from "./NavbarBtn";
import NavbarLinks from "./NavbarLinks";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from "react"

 const NavbarMain = () => {
    const [menuOpen,setMenuOpen]=useState(false);
    const toggleMenu = ()=>{
        setMenuOpen(menuOpen);
    };
    return ( 

        <nav className="max-w-[1800px] mx-auto w-full  px-4  fixed left-[50%] -translate-x-[50%] z-20 flex gap-10 mt-2">
        <div className="flex justify-between w-full max-w-[1800px] mx-auto  bg-gradient-to-r from-blue2 to-cyan  items-center p-2 rounded-r-full rounded-l-full border-[0.5px] border-orange">

        <NavbarLogo/>
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
        <NavbarLinks/>
        </div>
        <NavbarBtn/>

        </div>
        <div className="flex lg:hidden sm:block p-6 bg-black items-center justify-center rounded-full  border-orange border-[0.5px] ">
            <button className="text-2xl p-3 border border-orange rounded-full text-white"
            onClick={toggleMenu}>
            <GiHamburgerMenu/>
            </button>
        </div>
    </nav>
    );
 };
 export default NavbarMain