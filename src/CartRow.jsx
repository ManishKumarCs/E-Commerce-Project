import React, { useState, useEffect } from 'react';
import { RxCrossCircled } from "react-icons/rx";
import { withCart } from './withProvider';

function CartRow({ cart, updateCart, title, id, price, noOfProduct, onRemove, updateCartCheckout }) {
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
    <tr className="border-b border-gray-300 hover:bg-gray-100 transition">
      <td className="p-2">
        <button className="ml-2 text-gray-500 hover:text-red-600 transition" onClick={handleRemove}>
          <RxCrossCircled className="text-3xl" />
        </button>
      </td>
      <td className="text-center p-2">
        <img
          className="w-24 h-24 object-cover rounded-lg border"
          src="https://cdn.pixabay.com/photo/2018/10/29/15/31/laptop-3781384_1280.jpg"
          alt={title}
        />
      </td>
      <td className="text-rose-500 font-semibold p-2">{title}</td>
      <td className="text-center p-2 text-gray-800 font-medium">${price.toFixed(2)}</td>
      <td className="text-center p-2">
        <input
          className="w-16 p-1 text-center border rounded-lg outline-none focus:ring focus:ring-rose-300"
          onChange={handleCountValue}
          type="number"
          value={count}
          min="1"
        />
      </td>
      <td className="text-center p-2 font-bold text-gray-900">${(price * count).toFixed(2)}</td>
    </tr>
  );
}

export default withCart(CartRow);
