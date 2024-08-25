import {useEffect} from 'react';
import {Link} from 'react-router-dom'
import {withCart} from './withProvider';

function ThankYouPage({updateCart}){
  useEffect(function(){
    updateCart({});
  },[]);
  return(
    <div className="flex flex-col justify-center items-center py-2 min-h-screen gap-4">
      <img className="md:w-80 w-40 mb-8" src="https://static.vecteezy.com/system/resources/previews/011/049/143/non_2x/e-commerce-mobile-shopping-illustration-vector.jpg"/>
      <h1 className="md:text-4xl text-2xl font-bold font-serif">Thank Your For Shopping With Us !</h1> 
      <Link className="px-8 py-2 text-xl border border-black hover:bg-rose-500 hover:text-white hover:border-none my-4 rounded-full " to="../">Go Back To Home</Link>
      <h1 className="md:text-4xl text-2xl font-bold font-serif animate-pulse">Continue Shopping !!</h1> 
    </div>

  );
}
export default withCart(ThankYouPage);
