import React from 'react';
import { IoIosMail } from "react-icons/io";
import { Link } from 'react-router-dom';

function ForgotPassword() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 px-4">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg flex flex-col items-center gap-4 w-full max-w-md">
        <h1 className="text-3xl font-serif font-semibold text-gray-800">Forgot Password</h1>

        <img 
          className="w-48 md:w-60" 
          src="https://cdni.iconscout.com/illustration/premium/thumb/forgot-password-mobile-8044866-6430775.png?f=webp" 
          alt="Forgot Password Illustration"
        />

        <p className="text-center text-gray-600 px-2">
          Enter your email, and we'll send you a link to reset your password.
        </p>

        <div className="flex items-center w-full border-2 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-blue-400">
          <IoIosMail className="text-gray-500 text-2xl px-3" />
          <input 
            type="email" 
            name="email" 
            className="w-full px-3 py-2 outline-none text-gray-700" 
            placeholder="Enter your email"
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white font-serif py-2 rounded-md mt-2 transition hover:bg-blue-700">
          Submit
        </button>

        <p className="text-gray-700 mt-4">
          Back to Login? 
          <Link className="text-blue-700 font-semibold hover:underline ml-1" to="/">Log In</Link>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;
