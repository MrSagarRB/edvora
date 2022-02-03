import React from "react";

function Filter() {

  





  return (
    <div className="p-5">
      <div class="w-[228px] h-[275px] flex flex-col justify-center items-center space-y-2 bg-slate-900 p-10 rounded-[15px]">

      <h4 className="text-white  text-2xl pb-2 relative left-0"> Filters</h4>
   <hr className="w-[165px]"/>
        <div class="flex flex-col gap-2 pt-8">
          
            <select class="text-black w-[168.45px] h-[37.5px]  ">
              <option value="BMW">Product</option>
            </select>

            <select class="text-black w-[168.45px] h-[37.5px]">
              <option value="BMW">State</option>
            </select>

            <select class="text-black w-[168.45px] h-[37.5px]">
              <option value="BMW">City</option>
            </select>
 
        </div>
      </div>
    </div>
  );
}

export default Filter;
