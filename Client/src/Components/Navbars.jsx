import React from 'react'
import logo from '../assets/ChatGPT_Image_Dec_16__2025__01_40_16_PM-removebg-preview.png'
import { FaSearch } from "react-icons/fa";
import { MdWindow } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
function Navbars() {
  return (
    <>
    <div className='w-screen h-[10vh] bg-[#111a14] grid grid-cols-10 grid-rows-1'>
      {/* logo */}
      <div className="logo h-full  col-span-2 flex items-center justify-center">
        <img src={logo} alt="Logo" className='' />
      </div>
      <div className="col-span-5   flex items-center  justify-center">
        {/* search bar */}
        <div className='w-[80%] h-8 bg-[#29382f] rounded-4xl flex items-center px-2 gap-2'>
             <FaSearch className='text-white' />
        <input type="text" className='w-full outline-none text-white' placeholder='search anything you need' />
        </div>
       {/* rest icons  */}
      </div>
      {/* categories */}
       <div className="col-span-1    flex gap-2 items-center">
       <MdWindow  className='text-white text-2xl'/>
       <h1 className='text-white '>Categories</h1>
       </div>
        <div className="col-span-2   flex justify-evenly gap-3 items-center ">
        <FaHeart className='text-white text-2xl' />
         <RiAccountCircleFill className='text-white text-2xl' />
         <div className='flex'>
           <FaShoppingCart className='text-white text-[20px]' /><sup className='text-white'>1</sup>
         </div>
        
          </div>
    </div>
    </>
  )
}

export default Navbars