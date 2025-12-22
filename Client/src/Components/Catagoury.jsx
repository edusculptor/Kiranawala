import React, { useState, useEffect } from 'react';
import { FaArrowRight } from "react-icons/fa6";
import Catdata from "./../../public/catagoura.json"

function Catagoury() {
  return (
    <>
      <div className='h-screen w-screen bg-[#112117] grid grid-rows-2 grid-cols-1'>
        {/* catagoury */}
        <div className='row-span-1 '>
          <div className="heading h-[40%] flex flex-col justify-end  ">
            <h1 className='font-extrabold text-3xl text-amber-50'>Shop by Category</h1>
            <div className='flex justify-between self-center w-[80%] mt-3'>
              <h1 className='text-amber-50'>Essential items for your daily needs</h1>
              <h1 className='flex items-center gap-4 text-[#31e87a] font-medium'>View All Categories <FaArrowRight/> </h1>
            </div>
          </div>
          <div className="cards h-[60%] grid grid-cols-5 wrap-break-word">
             {
          Catdata.map(records =>{
            return(
              <>
              <div className='text-amber-50 h-full w-full flex flex-col items-center box-border' key={records.id}>
                <img src={records.url} alt="" height="100" width="140" className='h-[70%]  rounded-[50%] mt-2'/>
                <h1>{records.name}</h1>
                <h1>{records.tagline}</h1>
              </div>
              
              </>
            )
          })
        }
          </div>
        </div>
        <div className=''>
       
        </div>
      </div>
    </>
  );
}

export default Catagoury;