import React from 'react'

import FeaturesBar from "../Components/Home/FeaturesBar";
// import CategoryCard from "../Components/Home/CategoryCard";
import CategoriesSection from "../Components/Home/CategoriesSection";
import ChooseUs from "../Components/Home/ChooseUs";
import Testimonials from "../Components/Home/Testimonials";
import Promo from "../Components/Home/Promo";
import HeroSection from '../Components/Home/HeroSection';

const Home = () => {
  return (
    <div>

      <HeroSection />
      <FeaturesBar />
      {/* <CategoryCard /> */}
      <CategoriesSection />
      <ChooseUs />
      <Testimonials />
      <Promo />
      
    </div>
  )
}

export default Home
