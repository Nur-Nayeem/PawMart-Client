import React from "react";
import ListingCard from "./ListingCard";

const RecentListing = ({ recentListing }) => {
  console.log(recentListing);

  return (
    <div className="px-2.5 sm:px-0 my-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        Recent Listings
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        {recentListing.map((list, index) => (
          <ListingCard key={index} list={list} />
        ))}
      </div>
    </div>
  );
};

export default RecentListing;
