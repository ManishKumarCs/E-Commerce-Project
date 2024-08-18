import React, {useState} from 'react';
import {useEffect} from 'react';
import Button from './Button';
import { RxCrossCircled } from "react-icons/rx";
import {withCart} from './withProvider';

function CartCards({cart, updateCart, title, id, price, noOfProduct, onRemove, updateCartCheckout}){

  const [count,setCount]=useState(noOfProduct);
  useEffect(function(){
          updateCartCheckout(id, count);
  },[count])
  function handleCountValue(event){
    setCount(+event.target.value); 
  }
  function handleRemove(){
    onRemove(id);
  }
  return( 

    <>
      <div className="py-2 px-2 flex flex-col shadow-2xl shadow-gray-500 w-40 m-4 border-2 border-black rounded gap-1">
      <div className="p-2 flex justify-center"><button className="ml-2" onClick={handleRemove}><RxCrossCircled className="text-3xl"/></button></div>
        <img className="object-cover w-20 self-center" src="https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png" />
        <h1 className="font-semibold">{title}</h1>
      <h3>Price : {price}</h3> 
        <input className=" border justify-self-center w-16 p-2" onChange={handleCountValue} type="number" value={count} />
      <h3>Total Price : {price*count}</h3>
    </div>
    </>
  );
}
export default withCart(CartCards);

// <div className="py-2 px-6 flex flex-col shadow-2xl shadow-gray-500 w-40 m-4 border-2 border-black rounded">
//    <img className="object-cover" src="https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png" />
//    <div className="flex flex-col h-full gap-auto">
//      <div className="text-gray-400">{data.category}</div>
//      <h1 className="font-semibold">{data.title}</h1>
//      <img className="w-16" src="https://t4.ftcdn.net/jpg/02/48/25/71/360_F_248257108_7tdPJLNbS3NG3APuozsORP54BTlmUvUS.jpg"/>
//      <h3 className="font-semibold">Price: Rs.{data.price}</h3>
//      <Link to={"/viewDetails/"+data.id} className="hover:bg-rose-500 hover:text-white px-4 py-1 rounded my-2 border text-center">ViewDetails</Link>
//    </div>
//  </div>
