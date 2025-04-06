import React, { useState } from "react";
import { Heart, ShoppingBag, Search, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import glasslogo from "../assets/glass.svg"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between px-4 py-3 shadow-md relative">
      {/* Left: Logo and Menu Button */}
      <div className="flex items-center space-x-4">
        {/* Hamburger for mobile */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Logo */}
        <img
          src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg"
          alt="Bewakoof Logo"
          className="h-6 hidden md:block"
        />
        {/* Mobile Logo */}
        <img
          src={glasslogo}
          alt="Bewakoof Glass Logo"
          className="h-6 block md:hidden"
        />

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-sm font-medium ml-6">
          <Link to="/men" className="hover:text-yellow-500">
            MEN
          </Link>
          <a href="#" className="hover:text-yellow-500">
            WOMEN
          </a>
          <a href="#" className="hover:text-yellow-500">
            MOBILE COVERS
          </a>
        </div>
      </div>

      {/* Desktop Search Bar */}
      <div className="hidden md:flex items-center bg-gray-200 rounded-md px-3 py-1 w-1/3">
        <Search className="text-gray-500 w-4 h-4" />
        <input
          type="text"
          placeholder="Search by products"
          className="bg-transparent outline-none px-2 w-full text-sm"
        />
      </div>

      {/* Icons + Login */}
      <div className="flex items-center space-x-4 text-sm font-semibold">
        {/* Mobile search icon */}
        <Search
          className="w-5 h-5 cursor-pointer md:hidden"
          onClick={() => setShowMobileSearch((prev) => !prev)}
        />
        {/* Desktop login link */}
        <a href="#" className="hover:text-yellow-500 hidden md:inline">
          LOGIN
        </a>
        <Heart className="w-5 h-5 cursor-pointer" />
        <ShoppingBag className="w-5 h-5 cursor-pointer" />
      </div>

      {/* Mobile Search Input */}
      {showMobileSearch && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden px-4 py-2 z-50">
          <div className="flex items-center bg-gray-200 rounded-md px-3 py-1">
            <Search className="text-gray-500 w-4 h-4" />
            <input
              type="text"
              placeholder="Search by products"
              className="bg-transparent outline-none px-2 w-full text-sm"
            />
          </div>
        </div>
      )}

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden flex flex-col space-y-4 p-4 text-sm font-medium z-40 mt-[52px]">
          <Link to="/men" className="hover:text-yellow-500">
            MEN
          </Link>
          <a href="#" className="hover:text-yellow-500">
            WOMEN
          </a>
          <a href="#" className="hover:text-yellow-500">
            MOBILE COVERS
          </a>
          <a href="#" className="hover:text-yellow-500">
            LOGIN
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
