import React from "react";
import HeroSlider from "../components/HeroSection/HeroSection";
import CategorySection from "../components/CategorySection";
import RecentListing from "../components/Listings/RecentListing";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <CategorySection />
      <RecentListing />
    </div>
  );
};

export default Home;
