import React, { useEffect, useRef, useState } from 'react';
import image1 from '../assets/asset 1.webp';
import image2 from '../assets/asset 2.webp';
import image3 from '../assets/asset 3.jpeg';
import image4 from '../assets/asset 4.webp';
import image5 from '../assets/asset 5.webp';
import image6 from '../assets/asset 6.webp';

const HorizontalCard = () => {
  const [visible, setVisible] = useState(false);
  const scrollRef = useRef(null);
  const scrollAmountRef = useRef(0);

  const cardItems = [
    { label: 'Tom & Jerry', image: image1 },
    { label: 'Summer Pants Edit', image: image2 },
    { label: 'Ultimate Jeans Edit', image: image3 },
    { label: 'Ultimate Jeans Edit', image: image4 },
    { label: 'Ultimate Jeans Edit', image: image5 },
    { label: 'Ultimate Jeans Edit', image: image6 },
  ];

  useEffect(() => {
    setTimeout(() => setVisible(true), 500);

    const updateScrollAmount = () => {
      const screenWidth = window.innerWidth;
      scrollAmountRef.current = screenWidth < 768 ? screenWidth : 600;
    };

    updateScrollAmount();
    window.addEventListener('resize', updateScrollAmount);

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

        if (scrollLeft + clientWidth >= scrollWidth) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({
            left: scrollAmountRef.current,
            behavior: 'smooth',
          });
        }
      }
    }, 3000);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', updateScrollAmount);
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      className="overflow-x-auto px-2 sm:px-4 scroll-smooth scrollbar-hide"
    >
      <div
        className={`flex space-x-2 transition-transform duration-500 ${
          visible ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {cardItems.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[100vw] sm:w-[600px] h-[400px] sm:h-[600px] overflow-hidden shadow-md border border-gray-200"
          >
            <img
              src={item.image}
              alt={item.label}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalCard;
