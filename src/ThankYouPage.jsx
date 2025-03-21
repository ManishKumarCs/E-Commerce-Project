import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { withCart } from './withProvider';

function ThankYouPage({ updateCart }) {
  useEffect(() => {
    updateCart({});
  }, []);

  return (
    <div className="flex flex-col justify-center items-center py-8 min-h-screen bg-gray-100 text-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <img
          className="w-60 md:w-80 mx-auto mb-6"
          src="https://static.vecteezy.com/system/resources/previews/011/049/143/non_2x/e-commerce-mobile-shopping-illustration-vector.jpg"
          alt="Thank You"
        />
        <h1 className="text-3xl md:text-4xl font-bold font-serif text-gray-800">Thank You For Shopping With Us!</h1>
        <p className="text-lg text-gray-600 mt-2">We appreciate your business and hope to see you again soon.</p>
        <div className="mt-6 flex flex-col gap-4">
          <Link
            className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-full font-semibold transition-all"
            to="../"
          >
            Go Back To Home
          </Link>
          <h1 className="text-xl font-semibold text-gray-700 animate-pulse">Continue Shopping!</h1>
        </div>
      </div>
    </div>
  );
}

export default withCart(ThankYouPage);
