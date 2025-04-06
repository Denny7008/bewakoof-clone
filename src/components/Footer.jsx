import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP, FaSnapchatGhost, FaApple } from 'react-icons/fa';
import { SiGooglepay, SiPaytm, SiVisa, SiRazorpay, SiMastercard, SiAppstore, SiGoogleplay } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-[#1c1c1c] text-white py-10 px-6 mt-20 md:px-20 w-full 0 left-0 z-50">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">

        {/* Logo and Customer Service */}
        <div>
          <img
            src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg"
            alt="Logo"
            className="h-6 mb-4"
          />
          <h3 className="text-yellow-400 font-bold text-sm mb-2">CUSTOMER SERVICE</h3>
          <ul className="text-sm space-y-1">
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Track Order</a></li>
            <li><a href="#">Return Order</a></li>
            <li><a href="#">Cancel Order</a></li>
          </ul>
          <div className="text-xs mt-4 space-y-1">
            <p>📦 15 Days Return Policy*</p>
            <p>💰 Cash On Delivery*</p>
          </div>
        </div>

        {/* Company Info */}
        <div>
          <h3 className="text-yellow-400 font-bold text-sm mb-2">COMPANY</h3>
          <ul className="text-sm space-y-1">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">We are Hiring</a></li>
          </ul>
          <h3 className="text-yellow-400 font-bold text-sm mt-6 mb-2">DOWNLOAD THE APP</h3>
          <div className="flex space-x-2">
            <a href="#"><SiGoogleplay className="h-8 w-8" /></a>
            <a href="#"><SiAppstore className="h-8 w-8" /></a>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-yellow-400 font-bold text-sm mb-2">CONNECT WITH US</h3>
          <ul className="text-sm space-y-1">
            <li className="flex items-center gap-2"><FaFacebookF /> 4.7M People like this</li>
            <li className="flex items-center gap-2"><FaInstagram /> 1M People like this</li>
          </ul>
          <div className="flex space-x-4 mt-4 text-lg">
            <FaTwitter />
            <FaPinterestP />
            <FaSnapchatGhost />
            <FaApple />
          </div>
        </div>

        {/* Newsletter */}
        <div className="md:col-span-2">
          <h3 className="text-yellow-400 font-bold text-sm mb-3">KEEP UP TO DATE</h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter Email Id:"
              className="px-4 py-2 text-sm w-full outline-none bg-black border border-gray-600"
            />
            <button className="bg-yellow-400 text-black px-4 py-2 text-sm font-bold">
              SUBSCRIBE
            </button>
          </div>
          <h3 className="text-yellow-400 font-bold text-sm mt-6 mb-2">100% SECURE PAYMENT</h3>
          <div className="flex space-x-3 mt-2 text-2xl">
            <SiGooglepay />
            <SiPaytm />
            <SiVisa />
            <SiRazorpay />
            <SiMastercard />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
