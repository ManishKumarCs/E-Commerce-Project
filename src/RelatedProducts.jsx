import React from 'react';
import { Link } from 'react-router-dom';

function RelatedProducts({ category, title, price, id }) {
  return (
    <div className="p-4 flex flex-col shadow-lg shadow-gray-400 w-48 m-4 border border-gray-300 rounded-lg bg-white hover:scale-105 transition-transform">
      <img 
        className="w-full h-32 object-cover rounded-md" 
        src="https://cdn.pixabay.com/photo/2018/10/29/15/31/laptop-3781384_1280.jpg" 
        alt={title} 
      />
      <div className="flex flex-col mt-3">
        <span className="text-xs text-gray-500 uppercase">{category}</span>
        <h1 className="text-sm font-semibold mt-1 line-clamp-2">{title}</h1>
        
        <img 
          className="w-20 mt-2 self-start" 
          src="https://t4.ftcdn.net/jpg/02/48/25/71/360_F_248257108_7tdPJLNbS3NG3APuozsORP54BTlmUvUS.jpg" 
          alt="Rating" 
        />
        <h3 className="text-md font-semibold text-gray-700 mt-2">Price: ₹{price}</h3>
      </div>
      <Link 
        to={`/viewDetails/${id}`} 
        className="mt-3 py-2 text-center bg-rose-500 text-white rounded-md font-medium hover:bg-rose-600 transition"
      >
        View Details
      </Link>
    </div>
  );
}

export default RelatedProducts;