import React, { useState, useEffect } from 'react';
import { getProductData } from './api';
import { Link, Navigate } from 'react-router-dom';
import Loading from './Loading';
import CartRow from './CartRow';
import CartCards from './CartCards';
import EmptyCart from './EmptyCart';
import Button from './Button';
import BackButton from './BackButton';
import { withCart } from './withProvider';

function Cart({ cart, updateCart }) {
  let totalPrice = 0;
  const [quantityMap, setQuantityMap] = useState({});

  const cartToQuantityMap = () =>
    cart.reduce((m, cartItem) => ({ ...m, [cartItem.product.id]: cartItem.quantity }), {});

  useEffect(() => {
    setQuantityMap(cartToQuantityMap());
  }, [cart]);

  function handleQuantityChange(productId, newValue) {
    setQuantityMap({ ...quantityMap, [productId]: newValue });
  }

  function handleUpdateCart(id, count) {
    quantityMap[id] = count;
  }

  function handleUpdateCartClick() {
    updateCart(quantityMap);
  }

  function handleRemove(productId) {
    const newQuantityMap = cartToQuantityMap();
    delete newQuantityMap[productId];
    updateCart(newQuantityMap);
  }

  if (!cart) {
    return <Loading />;
  }
  if (Object.keys(quantityMap).length === 0) {
    return <EmptyCart />;
  }

  cart.forEach((item) => {
    totalPrice += item.product.price * item.quantity;
  });

  return (
    <div className="bg-gray-100 md:py-8 min-h-screen">
      <div className="p-6 lg:max-w-6xl lg:mx-auto mx-4 bg-white rounded-lg shadow-md relative">
        <div className="text-center my-4">
          <Link className="border bg-white hover:bg-rose-500 text-black hover:text-white px-6 py-2 rounded-lg font-semibold" to="/">
            ADD MORE PRODUCTS
          </Link>
        </div>
        <div>
          <table className="w-full hidden md:table border-collapse border rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-300 text-gray-700">
                <th className="p-4"></th>
                <th className="text-center p-4">Product</th>
                <th className="p-4"></th>
                <th className="p-4">Price</th>
                <th className="p-4">Quantity</th>
                <th className="p-4">SubTotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((cartItem) => (
                <CartRow
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
              ))}
            </tbody>
          </table>

          <div className="max-w-full flex gap-4 flex-wrap md:hidden">
            {cart.map((cartItem) => (
              <CartCards
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
            ))}
          </div>

          <div className="my-6 flex flex-col sm:flex-row-reverse w-full gap-4 justify-between">
            <button
              onClick={handleUpdateCartClick}
              className="hover:bg-rose-600 bg-gray-500 text-white px-6 py-2 rounded-lg font-semibold"
            >
              UPDATE CART
            </button>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                className="border p-2 rounded-md w-full sm:w-auto"
                placeholder="Coupon Code"
              />
              <button className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-lg font-semibold">
                APPLY COUPON
              </button>
            </div>
          </div>
        </div>

        <div className="md:flex justify-end">
          <div className="border rounded-lg shadow-md md:w-1/3 bg-gray-50">
            <h3 className="p-4 text-xl font-semibold bg-gray-200">Cart Totals</h3>
            <div className="p-4 flex flex-col">
              <div className="p-4 border-b flex justify-between">
                <h4>Subtotal</h4>
                <span className="font-semibold">$ {totalPrice}.00</span>
              </div>
              <div className="p-4 border-b flex justify-between">
                <h4>Total</h4>
                <span className="font-semibold">$ {totalPrice}.00</span>
              </div>
              <Link
                className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-lg font-semibold m-4 text-center"
                to="/thankyou"
              >
                PROCEED TO CHECKOUT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withCart(Cart);