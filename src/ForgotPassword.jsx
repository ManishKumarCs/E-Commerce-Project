import React from 'react';
import { IoIosMail } from "react-icons/io";
import {Route, Routes, Link} from 'react-router-dom'

function ForgotPassword(){
  return(
    <>
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="bg-white p-4 flex flex-col items-center rounded gap-2 flex-wrap">
        <h1 
          className="text-3xl font-serif">
          Fogot Password
        </h1>
        <img 
          className="w-60" 
          src="https://cdni.iconscout.com/illustration/premium/thumb/forgot-password-mobile-8044866-6430775.png?f=webp"/>
        <p>
          Enter your E-mail and we'll send you a link to reset your password
        </p>
        <div className="flex">
          <IoIosMail className="self-center text-gray-500 text-4xl border-2 border-r-0 p-1"/>
          <input 
            type="email" 
            name="email" 
            className="border-2 px-2 py-1 border-l-0" 
            placeholder="USERNAME">
          </input>
        </div>
         <button 
           type="submit" 
           className="self-center px-4 py-1 text-white rounded bg-blue-600 font-serif">
           SUBMIT
         </button>
         <p 
           className="mt-8 font-serif">
           Back to LogIn ? 
           <Link className="text-blue-700 font-serif" 
             to="/">
             LogIn
           </Link>
         </p>
      </div>
    </div>
    </>
  );
}

export default ForgotPassword;