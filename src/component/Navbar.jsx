import React from "react";
import { useState } from "react";

const Navbar = ()=>{
    const [list, setList]= useState(false)
    const handlenav=()=>{
        setList(!list)
    }
    return <>
    <div className="header flex justify-between max-w-[1240px] mx-auto h-fit sm:pt-4">
        <div className="logo p-4">
            <h1 className="font-bold text-green-600 text-xl sm:text-2xl">REACT.</h1>
        </div>
        <div className="toggle p-2 text-xl md:hidden" onClick={handlenav}>
            {list?<i className="ri-close-fill"></i>:<i className="ri-menu-line"></i>}
        </div>
        <div className="nav hidden sm:hidden md:block p-4 pr-4">
            <ul className="nav-lists md:flex gap-6 md:text-lg">
                <li className="navitems"><a href="" className="nav-links font-bold">Home</a></li>
                <li className="navitems"><a href="" className="nav-links font-bold">About</a></li>
                <li className="navitems"><a href="" className="nav-links font-bold">Feature</a></li>
                <li className="navitems"><a href="" className="nav-links font-bold">New</a></li>
                <li className="navitems"><a href="" className="nav-links font-bold bg-white text-black p-2 rounded-lg px-4 hover:bg-gray-600 hover:text-white">Get Started</a></li>
            </ul>
        </div>
        <ul className={list?'nav-lists md:hidden fixed left-0 bg-gray-300  h-full w-[50%] flex flex-col pt-4 items-start p-3 gap-2 text-black ease-in-out duration-500':'fixed left-[-100%]'}>
                <li className="navitems border-black border-b-2 p-2 w-full"><a href="" className="nav-links">Home</a></li>
                <li className="navitems border-black border-b-2 p-2 w-full"><a href="" className="nav-links">About</a></li>
                <li className="navitems border-black border-b-2 p-2 w-full"><a href="" className="nav-links">Feature</a></li>
                <li className="navitems border-black border-b-2 p-2 w-full"><a href="" className="nav-links">New</a></li>
                <li className="navitems border-black border-b-2 p-2 w-full"><a href="" className="nav-links">Feedback</a></li>
            </ul>
    </div>
    
    </>
}

export default Navbar;