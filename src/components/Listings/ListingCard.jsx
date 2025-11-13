import React, { use } from "react";
import { CiLocationOn } from "react-icons/ci";
import { ThemeContext } from "../../Contexts/Contexts";
import { Link } from "react-router";

const ListingCard = ({ list }) => {
  const { theme } = use(ThemeContext);
  const { _id, name, category, price, location, image } = list;
  const badges =
    (category == "Accessories" && "bg-[#ff9a85]/30 text-[#8b3f2f]") ||
    (category == "Pets" && "bg-[#8ad6c9] text-[#006251]") ||
    (category == "Pet Food" && "bg-[#C3B091] text-[#5d4a2a]") ||
    "bg-primary/70 text-gray-200";
  return (
    <div
      className={`flex flex-col h-full rounded-xl ${
        theme == "light" ? "glass-blur" : "glass-blur-dark"
      } overflow-hidden shadow-sm hover:scale-103 transition-transform duration-300`}
    >
      <div className="relative w-full aspect-4/3 overflow-hidden">
        <img
          src={image || "/fallback.png"}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "/fallback.png";
          }}
        />
      </div>
      <div className="p-4 flex flex-col flex-1 gap-2">
        <div className="flex justify-between items-start">
          <h3 className=" dark:text-white text-secondary text-lg font-bold">
            {name}
          </h3>
          <span
            className={`dark:bg-gray-600 dark:text-gray-100 ${badges} text-xs font-semibold px-2.5 py-0.5 rounded-full whitespace-nowrap`}
          >
            {category}
          </span>
        </div>
        <p className="dark:text-white text-secondary text-lg font-bold">
          {price == 0 ? "Free for Adoption" : `৳ ${price}`}
        </p>
        <div className="flex items-center dark:text-gray-100 text-gray-600 text-sm">
          <CiLocationOn className="text-base mr-1 shrink-0" />
          <span>{location}</span>
        </div>
        <Link
          to={`/category-filtered-product/pet-and-supplies/${_id}`}
          className="btn-primary py-2 px-4 text-center rounded-full font-bold cursor-pointer shadow-glow hover:scale-101 transition-transform duration-300 dark:text-white text-base-100 mt-auto"
        >
          See Details
        </Link>
      </div>
    </div>
  );
};

export default ListingCard;
