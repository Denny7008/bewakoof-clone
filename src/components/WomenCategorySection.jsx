import React from 'react';

const categories = [
  {
    label: 'Oversized T-shirts',
    image: 'https://images.bewakoof.com/uploads/grid/app/OVERSIZED-T-SHIRTS-DESKTOP-1742209993.jpg',
  },
  {
    label: 'Joggers',
    image: 'https://images.bewakoof.com/uploads/grid/app/444x666-Joggers-Desktop-Trending-Category-Icon-1742209705.jpg',
  },
  {
    label: 'Shirts',
    image: 'https://images.bewakoof.com/uploads/grid/app/444x666-Cargos-Desktop-Trending-Category-Icon--1--1742209719.jpg',
  },
  {
    label: 'Jeans',
    image: 'https://images.bewakoof.com/uploads/grid/app/CASSIC-FIT-T-SHIRTS-DESKTOP-1742209991.jpg',
  },
  {
    label: 'Pyjamas',
    image: 'https://images.bewakoof.com/uploads/grid/app/444x666-Dresses-Desktop-Trending-Category-Icon-1742209719.jpg',
  },
  {
    label: 'Shorts',
    image: 'https://images.bewakoof.com/uploads/grid/app/444x666-Shirts-Msite-Trending-Category-Icon-1742209703.jpg',
  },
  {
    label: 'Dresses',
    image: 'https://images.bewakoof.com/uploads/grid/app/BOYFRIEND-T-SHIRTS-DESKTOP-1742209991.jpg',
  },
  {
    label: 'Hoodies & Sweatshirts',
    image: 'https://images.bewakoof.com/uploads/grid/app/444x666-Pants-Desktop-Trending-Category-Icon-1742209702.jpg',
  },
  {
    label: 'Activewear',
    image: 'https://images.bewakoof.com/uploads/grid/app/444x666-Tops-Desktop-Trending-Category-Icon-1742209702.jpg',
  },
  {
    label: 'Jackets',
    image: 'https://images.bewakoof.com/uploads/grid/app/444x666-Pyjamas-Desktop-Trending-Category-Icon-1742209704.jpg',
  },
  {
    label: 'Tops',
    image: 'https://images.bewakoof.com/uploads/grid/app/CO-ORDS-DESKTOP-1742209992.jpg',
  },
  {
    label: 'Plus Size',
    image: 'https://images.bewakoof.com/uploads/grid/app/444x666-Plus-size-Desktop-Trending-Category-Icon-1742209776.jpg',
  },
];

const WomenCategorySection = () => {
  return (
    <div className="px-4 py-10">
      <h2 className="text-center text-sm text-gray-500 mb-4">
        Shop by Category: <span className="text-black font-semibold">Women</span>
      </h2>

      {/* Mobile view: horizontal scroll */}
      <div className="md:hidden overflow-x-auto">
        <div className="grid grid-rows-2 grid-flow-col auto-cols-[160px] gap-3 w-max pr-4">
          {categories.map((item, index) => (
            <div key={index} className="rounded overflow-hidden group cursor-pointer">
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-auto object-contain rounded-md"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop view: fixed grid */}
      <div className="hidden md:grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((item, index) => (
          <div key={index} className="rounded overflow-hidden group cursor-pointer">
            <img
              src={item.image}
              alt={item.label}
              className="w-full h-auto object-contain rounded-md group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WomenCategorySection;
