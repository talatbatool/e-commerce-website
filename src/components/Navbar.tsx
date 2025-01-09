import React from "react";
import { FaPizzaSlice } from "react-icons/fa";
import {FaSearch} from "react-icons/fa";
import {FaBolt} from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div>
        <div className='grid-xl :grid-cols grid-cols-1'>
        <div
        className="p-5">
        <div className='py-3 px-3 rounded-xl border w-full bg-gradient-to-r from-black to-gray-800'>
        <div className='flex justify-between items-center'>
        <div className='flex justify-center-items-center item-center gap-2'>
    {/*logo*/}
    <FaPizzaSlice className="w-6 h-6 text-yellow-400 hover:text-cyan-100" />
    {/*search icons*/}
    <div style={{position: "relative"}}
    > <input className="rounded  -3xl py-3 outline-none  text-xs w-[350px] pr-10 hidden lg:block md:block"
      placeholder="search for your favourite pizza from menu."/>
      <FaSearch className="W-5 H-5 TEXT-LIME-300 absolute right-3 top-1/2 transfom-translate-y-1/2 hidden lg:block md:block"/>
      </div>
    
    </div>
    <div className="flex justify-center items-center gap-2">
      <FaBolt className="w-5 h-5 text-amber-400 hidden lg:block md:block"/>
      <p className="text-sm text-white hidden lg:block md:block">Order now and get it with
        <span className="text-amber-400">15 minutes!</span>
      </p>
    
    {/*cart icon*/}
    <FaCartShopping className="p-1 relative w-8 h-8 rounded-full ring-2 ring-sky-300 hover:ring-amber-400 "/> 
    <img
    className="inline-block w-8 h-8 rounded-full ring-2 ring-sky-400"
    src=""
    alt="useravtar"/>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Navbar
