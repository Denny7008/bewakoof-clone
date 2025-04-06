import React from 'react';
import {
  Shirt,
  ShoppingBag,
  Play,
  Expand,
  Watch,
  Star,
  Footprints,
  Wind,
  Hammer,
  Brush,
  Snowflake,
} from 'lucide-react';

const navItems = [
  { label: 'MEN', icon: <Shirt className="w-5 h-5 mb-1" /> },
  { label: 'WOMEN', icon: <ShoppingBag className="w-5 h-5 mb-1" /> },
  { label: 'LIVE NOW', icon: <Play className="w-5 h-5 mb-1" /> },
  { label: 'PLUS SIZE', icon: <Expand className="w-5 h-5 mb-1" /> },
  { label: 'ACCESSORIES', icon: <Watch className="w-5 h-5 mb-1" /> },
  { label: 'OFFICIAL MERCH', icon: <Star className="w-5 h-5 mb-1" /> },
  { label: 'SNEAKERS', icon: <Footprints className="w-5 h-5 mb-1" /> },
  { label: 'BEWAKOOF AIR', icon: <Wind className="w-5 h-5 mb-1" /> },
  { label: 'HEAVY DUTY', icon: <Hammer className="w-5 h-5 mb-1" /> },
  { label: 'CUSTOMIZATION', icon: <Brush className="w-5 h-5 mb-1" /> },
  { label: 'WINTERWEAR', icon: <Snowflake className="w-5 h-5 mb-1" /> },
];

const SecondaryNavbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      {/* Desktop View */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-6 hidden md:block">
        <ul className="flex flex-wrap justify-center space-x-8 py-4">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="text-sm font-medium text-gray-800 hover:text-yellow-600 cursor-pointer"
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile View */}
      <div className="md:hidden overflow-x-auto scrollbar-hide">
        <ul className="flex items-center space-x-6 px-4 py-3">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="flex flex-col items-center text-[12px] font-medium text-gray-700 hover:text-yellow-500 min-w-fit"
            >
              {item.icon}
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default SecondaryNavbar;
