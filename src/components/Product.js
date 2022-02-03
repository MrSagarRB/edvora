import React from "react";
import Data from "../data";

function Product() {
  console.log(Data);

  return (
    <div>
      <div class="flex flex-row bg-slate-900 p-2 rounded-2xl  ">

           {
              Data.map((items)=>{
                 return(
                  <div class="bg-gray-700 p-2 rounded-sm m-3 w-56">
                  <div>
                    <div class="flex">
                      <div class="space-y-4 text-neutral-100">
                        <img
                          class="w-20 h-20 rounded-lg"
                          src={items.image}
                          alt=""
                        />
                        <p>{items.address.state}</p>
                      </div>
        
                      <div class="pl-5 space-y-2 text-neutral-100">
                        <h1>{items.product_name}</h1>
                        <h2>{items.brand_name}</h2>
                        <p>{items.price}</p>
                        <p className="text-sm">Date: {items.date}</p>
                      </div>
                    </div>
                  </div>
                  <h1 class="pt-4 text-gray-400">{items.discription}</h1>
                </div>

                 )
              })
           }



























        
      </div>
    </div>
  );
}

export default Product;
