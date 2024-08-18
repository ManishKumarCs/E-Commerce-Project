import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";


function Footer() {
  return (
    <div className="flex flex-col items-center gap-1 py-1 bg-gray-700 text-white">

      <div className="flex gap-8 mt-2 max-w-6xl mx-auto">
      <a href="#"><FaFacebook className="text-2xl"/></a>
      <a href="#"><AiFillInstagram className="text-2xl"/></a>
      <a href="#"><FaXTwitter className="text-2xl"/></a>
      <a href="#"></a>
      </div>

      <div>
      <ul className="flex gap-4">
      <li><a href="#">Contact us</a></li>
      <li><a href="#">Our Services</a></li>
      <li><a href="#">Privacy Policy</a></li>
      <li><a href="#">Terms & Conditions</a></li>
      <li><a href="#">Career</a></li>
      </ul>
      </div>
      <p className="justify-center">
      SWIFTCART Copyright © 2024 - All rights reserved || Designed By: MANISH KUMAR 
      </p>
    </div>
  );
}

export default Footer;