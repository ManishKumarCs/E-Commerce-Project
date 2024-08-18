import {useState} from 'react';
import { IoHomeOutline, IoCartOutline} from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { BiCategory } from "react-icons/bi";
import {Link, Navigate} from 'react-router-dom'
import {withUser, withAlert, withCart} from './withProvider'
import HeaderCart from './HeaderCart'

function Header({cartCount, setUser, setAlert,cart}) {
  const [displayCart, setDisplayCart] = useState(false);
  function handleLogout(){
    localStorage.removeItem("user-token");
    setUser(undefined);
    setAlert({type:"success", message:"Logged Out Successfully"})
  }
  function handleHover(){
    setDisplayCart(true);
  }
  function handleHoverOut(){
    setDisplayCart(false);
  }
  return (
    <div className="flex justify-between max-w-6xl mx-auto py-1 gap-16 bg-white md:max-h-16 my-2 px-6 md:px-2">
     <img className="md:w-2/12 w-3/12 object-cover" src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo-640x400.png"/> 
      <div className="flex items-center gap-4">
       <Link onMouseOver={handleHover} onMouseOut={handleHoverOut} className="hover:border-b-2 border-rose-500 relative pb-2" to="/cart">
         {cartCount>0 && <div className=" border-2 border-white bg-rose-600 px-2 text-white absolute -top-2 -right-2 rounded-full">{cartCount}</div>}
         <IoCartOutline className="text-2xl md:text-4xl"/>
         <div className="flex flex-col flex-wrap absolute right-0 border-2  rounded bg-white">
         {displayCart && cart.map((item)=>{
              return <HeaderCart
                 key={item.product.id} 
                 product={item.product} 
                 quantity={item.quantity}>
               </HeaderCart>  
            })
         }
         </div>
       </Link>
      <button className="hover:border-b-2 border-rose-500 pb-2" onClick={handleLogout}><IoIosLogOut className="text-2xl md:text-4xl" /></button>
      </div>
      </div>
  );
}

export default withAlert(withUser(withCart(Header)));