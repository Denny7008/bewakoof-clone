import React from 'react';
import oversized from '../assets/asset 34.jpeg';
import joggers from '../assets/asset 35.jpeg';
import shirts from '../assets/asset 36.jpeg';
import jeans from '../assets/asset 37.webp';
import pyjamas from '../assets/asset 38.jpeg';
import shorts from '../assets/asset 39.jpeg';
import marvel from '../assets/asset 40.jpeg';
import beigePants from '../assets/asset 41.jpeg';
import creamPants from '../assets/asset 42.jpeg';
import minions from '../assets/asset 43.webp';
import sleeveless from '../assets/asset 44.jpeg';
import shoes from '../assets/asset 45.jpeg';

const categories = [
  { label: 'Oversized T-shirts', image: oversized },
  { label: 'Joggers', image: joggers },
  { label: 'Shirts', image: shirts },
  { label: 'Jeans', image: jeans },
  { label: 'Pyjamas', image: pyjamas },
  { label: 'Shorts', image: shorts },
  { label: 'Marvel Tees', image: marvel },
  { label: 'Beige Pants', image: beigePants },
  { label: 'Cream Pants', image: creamPants },
  { label: 'Minions Tees', image: minions },
  { label: 'Sleeveless Tees', image: sleeveless },
  { label: 'Shoes', image: shoes },
];

const MenCategorySection = () => {
  return (
    <div className="px-4 py-10">
      <h2 className="text-center text-sm text-gray-500 mb-4">
        Shop by Category: <span className="text-black font-semibold">Men</span>
      </h2>

      {/* Mobile: 2-row horizontal scroll */}
      <div className="md:hidden overflow-x-auto">
        <div className="grid grid-rows-2 grid-flow-col auto-cols-[160px] gap-3 w-max pr-4">
          {categories.map((item, index) => (
            <div
              key={index}
              className="rounded overflow-hidden group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-auto object-contain rounded-md"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: Standard multi-row grid */}
      <div className="hidden md:grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((item, index) => (
          <div
            key={index}
            className="rounded overflow-hidden group cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.label}
              className="w-full h-auto object-contain rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenCategorySection;
