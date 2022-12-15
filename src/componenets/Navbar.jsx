import React, {useState} from "react";
import { motion } from "framer-motion";
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [Nav,setNav]=useState(true)
    const handleNav=()=>{
        setNav(!Nav)
    }
  return (
    <div
      className="text-black flex justify-between items-center max-w-[1240px] mx-auto px-4 ease-in-out duration-100 transition-all relative"
      
    >
      <h1 className="w-full font-bold text-3xl text-[#000000]">
        IEC<span className="text-[#8470FF]">.</span>
      </h1>
      <ul className="hidden md:flex">
        <motion.li
          whileHover={{ scale: 1.1 }}
          className="p-4 cursor-pointer hover:text-textHoverColor duration-100 transition-all ease-in-out"
        >
          Home
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          className="p-4 cursor-pointer hover:text-textHoverColor duration-100 transition-all ease-in-out"
        >
          About
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          className="p-4 cursor-pointer hover:text-textHoverColor duration-100 transition-all ease-in-out"
        >
          Resource
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          className="p-4 cursor-pointer hover:text-textHoverColor duration-100 transition-all ease-in-out"
        >
          Contact
        </motion.li>
      </ul>
      <div onClick={handleNav} className="  md:hidden">
        {!Nav?<AiOutlineClose className="fixed ml-[-20px] mt-[-10px] z-index-50" size={20}/>:<AiOutlineMenu className="fixed ml-[-20px] mt-[-10px] z-index-50" size={20} />}
        
      </div>
      <div className={!Nav?'fixed left-0 top-0 w-[60%] border-r border-r-[#828282] h-full bg-[#BFBFBF] z-50 ease-in-out duration-500':'fixed left-[-100%]'}>
      <h1 className="w-full font-bold text-3xl m-4 text-[#000000]">
        IEC<span className="text-[#374062]">.</span>
      </h1>
        <ul className=' uppercase text-black'>
            <li className="p-4 border-b border-gray-300">Home</li>
            <li className="p-4 border-b border-gray-300">About</li>
            <li className="p-4 border-b border-gray-300">Resource</li>
            <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
