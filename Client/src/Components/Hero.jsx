import React from "react";
import { IoFlashSharp } from "react-icons/io5";

function Hero() {
  return (
    <>
      <div className="w-screen h-[90vh] heroimage border-2 grid grid-cols-10 grid-rows-10 ">
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
              <h1 className="text-6xl font-bold text-white">
                Organic </h1>
             <h1 className="text-6xl font-bold text-white">   Goodness, </h1>
                
               <h1 className="text-6xl font-bold text-[#31e87a]">  Delivered Daily.</h1>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
