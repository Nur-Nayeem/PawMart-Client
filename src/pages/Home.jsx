import React from "react";
import HeroSlider from "../components/HeroSection/HeroSection";
import CategorySection from "../components/CategorySection";
import RecentListing from "../components/Listings/RecentListing";
import WhyAdopt from "../components/WhyAdoptSection/WhyAdopt";
import OurHeros from "../components/OurHerosSection/OurHeros";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <CategorySection />
      <RecentListing />
      <WhyAdopt />
      <OurHeros />
    </div>
  );
};

export default Home;
