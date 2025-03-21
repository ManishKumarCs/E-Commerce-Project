import { useState } from 'react';

function HeaderCart({ product, quantity }) {
  return (
    <div className="fixed top-16 right-20 z-50 bg-white shadow-lg rounded-lg p-4 flex items-center w-64 border border-gray-300">
      <img 
        className="w-16 h-16 rounded-lg border p-1 object-cover" 
        src="https://cdn.pixabay.com/photo/2018/10/29/15/31/laptop-3781384_1280.jpg" 
        alt={product.title} 
      />
      <div className="ml-1 flex flex-col justify-center">
        <h1 className="font-semibold text-gray-800">{product.title}</h1>
        <h3 className="text-sm text-gray-600">Total Items: 
          <span className="text-rose-500 font-bold"> {quantity}</span>
        </h3>
      </div>
    </div>
  );
}

export default HeaderCart;
