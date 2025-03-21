import React from "react";
import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="flex flex-col justify-center items-center py-16 bg-gray-100 min-h-screen">
      <img
        className="w-48 md:w-64 my-6 opacity-90"
        src="https://static-00.iconduck.com/assets.00/shopping-cart-icon-512x462-yrde1eu0.png"
        alt="empty_cart_img"
      />
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 font-serif">
        Your Cart is Empty
      </h1>
      <p className="text-lg md:text-xl text-gray-600 font-medium animate-pulse mt-2">
        (Add some products to your cart)
      </p>
      <Link
        className="mt-6 px-6 py-3 text-lg font-semibold text-white bg-rose-500 rounded-full shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
        to="../"
      >
        Go Back to Home
      </Link>
    </div>
  );
}

export default EmptyCart;
