import React, { useState, useEffect } from 'react';
import { RxCrossCircled } from "react-icons/rx";
import { withCart } from './withProvider';

function CartCards({ cart, updateCart, title, id, price, noOfProduct, onRemove, updateCartCheckout }) {
  const [count, setCount] = useState(noOfProduct);

  useEffect(() => {
    updateCartCheckout(id, count);
  }, [count]);

  function handleCountValue(event) {
    setCount(Math.max(1, +event.target.value)); // Prevents negative or zero values
  }

  function handleRemove() {
    onRemove(id);
  }

  return (
    <div className="py-4 px-4 flex flex-col shadow-lg bg-white border border-gray-300 rounded-lg w-48 m-4 gap-2">
      
      {/* Remove Button */}
      <div className="flex justify-end">
        <button className="text-gray-500 hover:text-red-600 transition" onClick={handleRemove}>
          <RxCrossCircled className="text-2xl" />
        </button>
      </div>

      {/* Product Image */}
      <img
        className="object-cover w-24 h-24 mx-auto rounded-lg border"
        src="https://cdn.pixabay.com/photo/2018/10/29/15/31/laptop-3781384_1280.jpg"
        alt={title}
      />

      {/* Product Details */}
      <h1 className="text-center font-semibold text-gray-800">{title}</h1>
      <h3 className="text-center text-gray-700 font-medium">Price: <span className="text-rose-500 font-bold">${price.toFixed(2)}</span></h3>

      {/* Quantity Input */}
      <div className="flex justify-center">
        <input
          className="w-16 p-1 text-center border rounded-lg outline-none focus:ring focus:ring-rose-300"
          onChange={handleCountValue}
          type="number"
          value={count}
          min="1"
        />
      </div>

      {/* Total Price */}
      <h3 className="text-center text-gray-800 font-semibold">
        Total: <span className="text-rose-500 font-bold">${(price * count).toFixed(2)}</span>
      </h3>
    </div>
  );
}

export default withCart(CartCards);
