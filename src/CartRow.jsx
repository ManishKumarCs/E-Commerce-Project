import React, {useState} from 'react';
import {useEffect} from 'react';
import Button from './Button';
import { RxCrossCircled } from "react-icons/rx";
import {withCart} from './withProvider';

function CartRow({cart, updateCart, title, id, price, noOfProduct, onRemove, updateCartCheckout}){

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
    <tr className="border-b-2">
      <td className="p-2"><button className="ml-2" onClick={handleRemove}><RxCrossCircled className="text-3xl"/></button></td>
      <td className="text-center"><img className="w-24 px-2" src="https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png"/></td>
      <td className="text-rose-400 font-bold p-2">{title}</td>
      <td className="text-center p-2">{price}</td>
      <td className="text-center p-2">
        <input className="text-center border justify-self-center w-16 p-2" onChange={handleCountValue} type="number" value={count} />
      </td>
      <td className="text-center p-2">{price*count}</td>
    </tr>
    </>
  );
}
export default withCart(CartRow);