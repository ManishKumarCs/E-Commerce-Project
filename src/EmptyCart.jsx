import React from 'react';
import {Link} from 'react-router-dom'
function EmptyCart(){
  return(
    <div className="flex flex-col justify-center items-center py-8 bg-gray-200 min-h-screen">
      <img className="md:w-80 w-40 my-8" src="https://static-00.iconduck.com/assets.00/shopping-cart-icon-512x462-yrde1eu0.png" alt="empty_cart_img"/>
      <h1 className="md:text-4xl text-2xl font-bold font-serif">Your Cart is Empty</h1> 
      <h1 className="md:text-4xl text-2xl font-bold font-serif animate-pulse">( Add Some Products to Cart )</h1> 
      <Link className="px-8 py-2 text-xl border border-black hover:bg-rose-500 hover:text-white hover:border-none my-8 rounded-full " to="../">Go Back To Home</Link>
    </div>

  );
}
export default EmptyCart;
