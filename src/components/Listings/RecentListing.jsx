import React, { use, useEffect, useState } from "react";
import ListingCard from "./ListingCard";
import useAxios from "../../hooks/useAxios";
import { MyContext } from "../../Contexts/Contexts";
import Loading from "../Loading";
import { Link } from "react-router";

const RecentListing = () => {
  const [recentListing, setRecentListing] = useState([]);
  const axiosInstanse = useAxios();
  const { recentRefetch } = use(MyContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axiosInstanse.get("/listings?recent=true&limit=8").then((data) => {
      setRecentListing(data.data.result);
      setLoading(false);
    });
  }, [axiosInstanse, recentRefetch]);

  return (
    <div className="px-2.5 sm:px-0 my-20">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        Recent Listings
      </h2>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr">
            {recentListing.map((list, index) => (
              <ListingCard key={index} list={list} />
            ))}
          </div>
          <div className="w-full flex items-center justify-center my-12">
            <Link
              to={"/category-filtered-product"}
              className="btn-primary shadow-glow hover:scale-103 transition-transform duration-300 text-white py-3 px-8 rounded-full font-bold cursor-pointer"
            >
              See More
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentListing;
