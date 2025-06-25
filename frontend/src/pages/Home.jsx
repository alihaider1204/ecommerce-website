import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import BrandsRow from '../components/sections/BrandsRow';
import NewArrivals from '../components/sections/NewArrivals';
import TopSelling from '../components/sections/TopSelling';
import DressStyle from '../components/sections/DressStyle';
import HappyCustomers from '../components/sections/HappyCustomers';
import Newsletter from '../components/sections/Newsletter';

const Home = () => {
  return (
    <main>
      <HeroSection />
      <BrandsRow />
      <NewArrivals />
      <TopSelling />
      <DressStyle />
      <HappyCustomers />
      <Newsletter />
    </main>
  );
};

export default Home; 