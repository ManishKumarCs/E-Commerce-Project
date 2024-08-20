import {useContext, useState, useEffect} from 'react';
import {cartContext} from '../src/Contexts';
import {saveCart, getCart, getProductByIds} from '../src/api';

function CartProvider({children, isLoggedIn }){
  const [cart, setCart]=useState([]);
  // if(!isLoggedIn)  localStorage.setItem("my-cart", '{}');
  useEffect(function(){
    if(isLoggedIn){
      getCart().then(function(response){
          setCart(response)
        });
      }
    else{
      const getSavedCartCount = localStorage.getItem("my-cart" || "{}");
      const savedData = JSON.parse(getSavedCartCount);
      quantityMapToCart(savedData);
    }
  },[isLoggedIn])


  function quantityMapToCart(quantityMap){
    if(quantityMap){
       getProductByIds(Object.keys(quantityMap)).then(function(products){
        const savedCart = products.map((p) => ({ product: p, quantity: quantityMap[p.id]}));
        setCart(savedCart);
        });
    }
  }
  
  function addToCart(productId, count){
    console.log("cart",cart)
        const quantityMap = cart.reduce((m, cartItem) => ({ ...m, [cartItem.product.id]:             cartItem.quantity}),{}
        );  
    const oldCount = quantityMap[productId] || 0;
   
        const newCart = {...quantityMap, [productId]: oldCount + count};
        updateCart(newCart);
      }
  
  function updateCart(quantityMap){
    if(isLoggedIn)  saveCart(quantityMap).then(function(response){
      //setCart(response);
      quantityMapToCart(quantityMap);
    });
    else  {
      const quantityMapString = JSON.stringify(quantityMap);
      localStorage.setItem("my-cart", quantityMapString);
      quantityMapToCart(quantityMap);
    }
  }

    const cartCount = cart.reduce(function(prev, curr){
      return prev + curr.quantity;
    },0);
  
  
  return(
    <>
       <cartContext.Provider value={{cart, updateCart, addToCart, cartCount}}>
     {children}
       </cartContext.Provider>
     </>
  );
}

export default (CartProvider);
