import React, { Suspense } from "react";
import HeroSlider from "../components/HeroSection/HeroSection";
import CategorySection from "../components/CategorySection";
import RecentListing from "../components/Listings/RecentListing";
import WhyAdopt from "../components/WhyAdoptSection/WhyAdopt";
import OurHeros from "../components/OurHerosSection/OurHeros";
import Loading from "../components/Loading";
import { motion, useScroll } from "motion/react";

const Home = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 70,
          left: 0,
          right: 0,
          height: 5,
          originX: 0,
          backgroundColor: "#632ee3",
          zIndex: 100,
        }}
      />
      <div>
        <HeroSlider />
        <CategorySection />
        <RecentListing />
        <WhyAdopt />
        <OurHeros />
      </div>
    </>
  );
};

export default Home;
