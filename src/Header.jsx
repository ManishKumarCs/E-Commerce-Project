import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import { withUser, withAlert, withCart } from "./withProvider";
import HeaderCart from "./HeaderCart";

function Header({ cartCount, setUser, setAlert, cart }) {
  const [displayCart, setDisplayCart] = useState(false);

  function handleLogout() {
    localStorage.removeItem("user-token");
    setUser(undefined);
    setAlert({ type: "success", message: "Logged Out Successfully" });
  }

  return (
    <header className="flex justify-between items-center max-w-6xl mx-auto bg-white px-6 py-3 rounded-lg relative">
      {/* Logo */}
      <Link to="/">
        <img
          className="w-24 md:w-32 object-cover rounded-lg"
          src="https://i.pinimg.com/originals/9e/cd/f6/9ecdf63bd49055a132a7d091712d7486.jpg"
          alt="Logo"
        />
      </Link>

      {/* Navigation Icons */}
      <div className="flex items-center gap-6">
        {/* Cart Icon with Dropdown */}
        <div 
          className="relative" 
          onMouseEnter={() => setDisplayCart(true)}
          onMouseLeave={() => setDisplayCart(false)}
        >
          <Link to="/cart" className="relative flex items-center">
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-rose-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                {cartCount}
              </span>
            )}
            <IoCartOutline className="text-2xl md:text-4xl text-gray-700 hover:text-rose-500 transition" />
          </Link>

          {/* Cart Dropdown */}
          {displayCart && cart.length > 0 && (
            <div className="absolute right-0 mt-3 w-64 rounded-lg p-3 z-50 min-h-20">
              {cart.map((item) => (
                <HeaderCart key={item.product.id} product={item.product} quantity={item.quantity} />
              ))}
            </div>
          )}
        </div>

        {/* Logout Button */}
        <button className="hover:text-rose-500 transition" onClick={handleLogout}>
          <IoIosLogOut className="text-2xl md:text-4xl text-gray-700" />
        </button>
      </div>
    </header>
  );
}

export default withAlert(withUser(withCart(Header)));
