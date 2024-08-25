import React from 'react';
import {Link} from 'react-router-dom'
function RelatedProducts(data) {
  return (
     <div className="py-2 px-6 flex flex-col shadow-md shadow-gray-500 w-40 m-4 border-2 border-black rounded">
       <img className="object-cover" src="https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png" />
       <div className="flex flex-col h-full gap-auto">
         <div className="text-gray-400 grow">{data.category}</div>
         <h1 className="font-semibold grow">{data.title}</h1>
         <img className="w-16" src="https://t4.ftcdn.net/jpg/02/48/25/71/360_F_248257108_7tdPJLNbS3NG3APuozsORP54BTlmUvUS.jpg"/>
         <h3 className="font-semibold grow">Price: Rs.{data.price}</h3>
         <Link to={"/viewDetails/"+data.id} className="hover:bg-rose-500 hover:text-white px-4 py-1 rounded my-2 border text-center">ViewDetails</Link>
       </div>
     </div>
  );
}

export default RelatedProducts;
