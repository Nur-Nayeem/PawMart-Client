import React from "react";
import ListingCard from "./ListingCard";

const RecentListing = () => {
  return (
    <div className="px-2.5 sm:px-0 my-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        Recent Listings
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
      </div>
    </div>
  );
};

export default RecentListing;
