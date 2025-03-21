import React from 'react';
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-4">
        
        {/* Social Icons */}
        <div className="flex gap-6 text-2xl">
          <a href="#" className="hover:text-blue-500 transition"><FaFacebook /></a>
          <a href="#" className="hover:text-pink-500 transition"><AiFillInstagram /></a>
          <a href="#" className="hover:text-gray-400 transition"><FaXTwitter /></a>
        </div>

        {/* Links */}
        <ul className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
          <li><a href="#" className="hover:underline">Contact Us</a></li>
          <li><a href="#" className="hover:underline">Our Services</a></li>
          <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
          <li><a href="#" className="hover:underline">Career</a></li>
        </ul>

        {/* Copyright */}
        <p className="text-center text-sm md:text-base mt-2">
          © 2024 SWIFTCART - All Rights Reserved | Designed By: <span className="font-semibold">Manish Kumar</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
