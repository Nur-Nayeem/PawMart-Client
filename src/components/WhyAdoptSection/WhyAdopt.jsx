import React, { use } from "react";
import { GoVerified } from "react-icons/go";
import { MdFavoriteBorder, MdGroups } from "react-icons/md";
import { ThemeContext } from "../../contexts/ThemeContext";

const WhyAdopt = () => {
  const { theme } = use(ThemeContext);
  return (
    <div className="px-2.5 sm:px-0 my-20">
      <div
        className={`rounded-xl ${
          theme == "light" ? "glass-blur" : "glass-blur-dark"
        } p-8`}
      >
        <h2 className="dark:text-white text-secondary text-3xl sm:text-4xl font-bold leading-tight tracking-[-0.015em] text-center mb-8">
          Why Adopt from PawMart
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-[#A0D2EB]/30 p-4 rounded-full text-primary mb-4">
              <MdFavoriteBorder className="text-3xl" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Save a Life</h3>
            <p className="dark:text-gray-200 text-gray-700 text-sm">
              Give a deserving pet a second chance and a loving forever home.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#A0D2EB]/30 p-4 rounded-full text-primary mb-4">
              <GoVerified className="text-3xl" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Verified Listings</h3>
            <p className="dark:text-gray-200 text-gray-700 text-sm">
              We partner with trusted shelters and breeders to ensure healthy,
              happy pets.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#A0D2EB]/30 p-4 rounded-full text-primary mb-4">
              <MdGroups className="text-3xl" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Join a Community</h3>
            <p className="dark:text-gray-200 text-gray-700 text-sm">
              Connect with fellow pet lovers and find support on your journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyAdopt;
