import Footer from '@/components/Footer';
import HorizontalCard from '@/components/HorizontalCard';
import MenCategorySection from '@/components/MenCategorySection';
import Navbar from '@/components/Navbar';
import SecondaryNavbar from '@/components/SecondaryNavbar';
import WomenCategorySection from '@/components/WomenCategorySection';
import React from 'react';

const Homepage = () => {
  return (
    <div>
    
      <SecondaryNavbar/>
      <HorizontalCard/>
      <MenCategorySection/>
      <WomenCategorySection/>
     
    </div>
  );
}

export default Homepage;
