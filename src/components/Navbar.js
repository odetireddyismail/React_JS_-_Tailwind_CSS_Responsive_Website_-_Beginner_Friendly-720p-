import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
const Navbar = () => {
    const[nav,setNav]=useState(true)


    const handleNav=()=>{
        setNav(!nav)
    }

  return (
    <div className="text-white h-24 justify-between flex items-center max-w-[1240px] px-4 mx-auto">
      <h1 className="w-full text-3xl font-bold text-[#00df9a] cursor-pointer">REACT...</h1>

      <ul className=" hidden md:flex">
        <li className="p-4 cursor-pointer  hover:text-orange-500 ">Home</li>
        <li className="p-4 cursor-pointer  hover:text-orange-500 ">Company</li>
        <li className="p-4 cursor-pointer  hover:text-orange-500 ">Reources</li>
        <li className="p-4 cursor-pointer  hover:text-orange-500 ">About</li>
        <li className="p-4 cursor-pointer  hover:text-orange-500 ">ContactUs</li>
      </ul>
      <div onClick={handleNav} className=" block md:hidden">
       {nav?  <AiOutlineMenu size={30} />: <AiOutlineClose size={30}/>}
      </div>
      <div className={!nav?'md:hidden fixed left-0 top-0 w-[50%] border-r border-r-gray-900 bg-black ease-in-out duration-500 h-screen':'fixed left-[-100%]'}>
      <h1 className="w-full text-3xl font-bold text-[#00df9a]  m-4">REACT.. .</h1>
        <ul className="pt-24 uppercase">
          <li className="p-4 cursor-pointer hover:text-orange-500 border-b border-gray-600">Home</li>
          <li className="p-4 cursor-pointer hover:text-orange-500 border-b border-gray-600">Company</li>
          <li className="p-4 cursor-pointer hover:text-orange-500 border-b border-gray-600">Reources</li>
          <li className="p-4 cursor-pointer hover:text-orange-500 border-b border-gray-600">About</li>
          <li className="p-4 cursor-pointer hover:text-orange-500 border-b border-gray-600">Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
