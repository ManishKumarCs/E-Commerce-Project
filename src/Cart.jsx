import React,{useState,useEffect} from 'react';
import {getProductData} from './api';
import {Link, Navigate} from 'react-router-dom'
import Loading from './Loading';
import CartRow from './CartRow';
import CartCards from './CartCards';
import EmptyCart from './EmptyCart';
import Button from './Button';
import BackButton from './BackButton';
import {withCart} from './withProvider';

function Cart({cart, updateCart}) {
  let totalPrice = 0;
  const [quantityMap, setQuantityMap] = useState({});
  const cartToQuantityMap = () => cart.reduce((m, cartItem) => ({ ...m, [cartItem.product.id]: cartItem.quantity}),
      {}
     );  
  useEffect(function(){
    setQuantityMap(cartToQuantityMap());
  },[cart])
  
  function handleQuantityChange(productId, newValue){
    const newQuantityMap =  {...quantityMap, [productId]: newValue};
    setQuantityMap(newQuantityMap);
  }

  function handleUpdateCart(id, count){
    quantityMap[id] = count;
  }
  function handleUpdateCartClick(){ 
    updateCart(quantityMap);
  }

  function handleRemove(productId){
    const newQuantityMap = cartToQuantityMap();  
    delete newQuantityMap[productId];
    updateCart(newQuantityMap);  
  }
  if(!cart){
    return <Loading></Loading>;
  }
  if(Object.keys(quantityMap).length === 0 ){
    return <EmptyCart></EmptyCart>
  }
  
  cart.map(function(item){
    totalPrice = item.product.price * item.quantity + totalPrice;   
  },0)
  return (
    <>
      <div className="bg-gray-200 md:py-1 min-h-screen">
        <div className="sm:max-w-6xl sm:mx-auto "><BackButton to="/"></BackButton></div>
        <div className="p-8 lg:max-w-6xl lg:mx-auto mx-8 bg-white rounded">
    <div>
      <table className="border w-full hidden md:table">
          <thead>
             <tr className="border bg-gray-300">
                <th className="p-2"></th>
                <th className="text-center p-2">Product</th>
                <th className="p-2"></th>
                <th className="p-2">Price</th>
                <th className="p-2">Quantity</th>
                <th className="p-2">SubTotal</th>
               </tr>
             </thead>
             <tbody>
                {cart.map(function(cartItem){ //here map is used to create an array of cart rows 
              return <CartRow
                       key={cartItem.product.title}
                       thumbnail={cartItem.thumbnail}
                       price={cartItem.product.price}
                       noOfProduct={quantityMap[cartItem.product.id] || cartItem.quantity}
                       title={cartItem.product.title}
                       id={cartItem.product.id}
                       onQuantityChange={handleQuantityChange}
                       onRemove={handleRemove}
                       updateCartCheckout={handleUpdateCart}
                       ></CartRow>
                  })}
             </tbody>
           </table>
           <div className="max-w-80 flex gap-2 flex-wrap md:hidden">
      {cart.map(function(cartItem){
           return <CartCards 
                    key={cartItem.product.title}
                     thumbnail={cartItem.thumbnail}
                     price={cartItem.product.price}
                     noOfProduct={quantityMap[cartItem.product.id] || cartItem.quantity}
                     title={cartItem.product.title}
                     id={cartItem.product.id}
                     onQuantityChange={handleQuantityChange}
                     onRemove={handleRemove}
                     updateCartCheckout={handleUpdateCart}
                />
             })}</div>
           <div className="my-4 flex flex-col sm:flex-row-reverse w-full gap-4 justify-between">
             <button onClick={handleUpdateCartClick} className="hover:bg-rose-500 bg-gray-400 text-white px-4 py-1 rounded-md font-semibold justify-self-end md:my-0">UPDATE CART</button>  
          <div className="sm:flex-row gap-4 flex flex-col"> <input className="border p-1" placeholder="Coupon Code"></input>
           <button className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-1 rounded-md font-semibold mx-1">APPLY COUPON</button></div>
           </div>
    </div>
     <div className="md:flex justify-end">
       <div className="border self-end md:w-1/3">
         <h3 className="p-2 text-xl border bg-gray-200">Cart Totals</h3>
         <div className="p-2 flex flex-col">
           <div className="p-2 border-b flex justify-between">
             <h4>Subtotal</h4>
             <span className="px-8">Rs. {totalPrice}.00</span>
           </div>
           <div className="p-2 border-b flex justify-between">
             <h4>Total</h4>
             <span className="px-8">Rs. {totalPrice}.00</span>
           </div>
            <Link className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-1 rounded-md font-semibold m-2 text-center" to="/thankyou">PROCEED TO CHECKOUT</Link>
         </div>
       </div>
     </div>
        </div>
      </div>
      </>
  );
}

export default withCart(Cart);
