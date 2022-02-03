import React from "react";
import Data from "../data";

function Filter() {

  





  return (
    <div className="p-5">
      <div class="w-[228px] h-[275px] flex flex-col justify-center items-center space-y-2 bg-slate-900 p-10 rounded-[15px]">

      <h4 className="text-white  text-2xl pb-2 relative left-0 mr-auto"> Filters</h4>
   <hr className="w-[165px]"/>
        <div class="flex flex-col gap-2 pt-8">
          
            <select class="text-white font-medium w-[168.45px] h-[37.5px]  rounded-sm bg-gray-700">
              {
                Data.map((items)=>{
                  return(
                    <option value="BMW">{items.product_name}</option>
                  )
                })
              }
              
              
              
              
              
            </select>

            <select class="text-white font-medium w-[168.45px] h-[37.5px]  rounded-sm bg-gray-700">
            {
                Data.map((items)=>{
                  return(
                    <option value="BMW">{items.address.state}</option>
                  )
                })
              }
              
              
              
              
              
            
            </select>

            <select class="text-white font-medium w-[168.45px] h-[37.5px]  rounded-sm bg-gray-700">
            {
                Data.map((items)=>{
                  return(
                    <option value="BMW">{items.address.city}</option>
                  )
                })
              }
              
            </select>
 
        </div>
      </div>
    </div>
  );
}

export default Filter;
