import React from "react";
import { Link } from "react-router-dom";

function Product({ id, thumbnail, category, title, price }) {
  return (
    <div className="p-4 flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 rounded-lg border border-gray-200 bg-white w-64 md:w-full">
      <img
        className="w-40 h-40 object-cover mx-auto rounded-md"
        src="https://cdn.pixabay.com/photo/2018/10/29/15/31/laptop-3781384_1280.jpg"
        alt={title}
      />
      <div className="flex flex-col items-center text-center mt-4 space-y-2">
        <span className="text-sm text-gray-500">{category}</span>
        <h1 className="font-semibold text-lg">{title}</h1>
        <img
          className="w-16"
          src="https://t4.ftcdn.net/jpg/02/48/25/71/360_F_248257108_7tdPJLNbS3NG3APuozsORP54BTlmUvUS.jpg"
          alt="Rating"
        />
        <h3 className="font-semibold text-gray-700">Price: Rs. {price}</h3>
        <Link
          to={`/viewDetails/${id}`}
          className="mt-3 px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default Product;
