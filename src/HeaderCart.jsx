import {useState} from 'react';


function HeaderCart({product, quantity}) {
 
  return (
           <div className="py-2 px-6 flex w-60 border-b-2 border-black rounded">
              <img className="object-cover w-16" src="https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png" />
              <div className="flex flex-col justify-center gap-auto">
                <h1 className="font-semibold text-rose-500">{product.title}</h1>
                <h3 className="font-semibold text-rose-500">Total Items : {quantity}</h3>
              </div>
            </div>
  );
}

export default (HeaderCart);