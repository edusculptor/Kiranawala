import React from "react";
import { IoFlashSharp } from "react-icons/io5";
import Navbars from "./Navbars";
import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <>
    <Navbars/>
      <div className="w-screen h-[90vh] heroimage  grid grid-cols-10 grid-rows-10 ">
        <div className="col-span-6 row-span-11  flex justify-center items-center">
          <div className="w-[80%] h-[80%]  grid grid-rows-10 grid-cols-1">
            {/* lightning message */}
            <div className="row-span-1  flex  items-center">
              <div className="w-[40%] h-[60%] bg-[#194a2c] border-[#31e87a] border-2 rounded-[50px] gap-3 flex items-center  ">
                <IoFlashSharp className="text-2xl text-[#31e87a] ml-5" />
                <h1 className=" text-[#31e87a]">
                  FLASH DE LIVERY IN 15 MINS
                </h1>
              </div>
            </div>
            {/* main heading */}
            <div className="row-span-7">
              <h1 className="text-8xl font-bold text-white">
                Organic </h1>
             <h1 className="text-8xl font-bold text-white">   Goodness, </h1>
                
               <h1 className="text-8xl font-bold text-[#31e87a]">  Delivered Daily.</h1>
               <p className="text-[#f3f2f2] text-2xl">Shop fresh produce, dairy, and daily essentials from <br />
local farms directly to your doorstep.</p>
             
            </div>
            <div className="buttons row-span-2 flex gap-15 items-center">
              <button className="bg-[#31e87a] flex items-center p-3 rounded-3xl gap-3">Shop Now <FaArrowRight /></button>
              <button className=" bg-amber-50 flex items-center p-3 rounded-3xl gap-3 pr-7 pl-7">View Deals</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
