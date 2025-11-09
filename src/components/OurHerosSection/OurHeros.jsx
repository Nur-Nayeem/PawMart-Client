import React, { use } from "react";
import { ThemeContext } from "../../Contexts/Contexts";

const OurHeros = () => {
  const { theme } = use(ThemeContext);
  return (
    <div className="my-20 px-2.5 sm:px-0">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
        Meet Our Pet Heroes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          className={`rounded-xl ${
            theme == "light" ? "glass-blur" : "glass-blur-dark"
          } p-6 flex flex-col items-center text-center`}
        >
          <img
            alt="Happy adopter with a cat"
            className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-white/50 shadow-md"
            src="https://i.ibb.co.com/TBN4FCn1/rsz-3525.png"
          />
          <p className="dark:text-gray-200 text-gray-700 italic mb-4">
            "Finding Milo on PawMart was the best decision we ever made. He's
            brought so much joy into our lives!"
          </p>
          <p className="font-semibold dark:text-white text-secondary">
            - The Johnson Family
          </p>
        </div>
        <div
          className={`rounded-xl ${
            theme == "light" ? "glass-blur" : "glass-blur-dark"
          } p-6 flex flex-col items-center text-center`}
        >
          <img
            alt="Happy adopter with a dog"
            className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-white/50 shadow-md"
            src="https://i.ibb.co.com/svQdjqmG/rsz-12147911439.png"
          />
          <p className="dark:text-gray-200 text-gray-700 italic mb-4">
            "The process was so simple and transparent. We're so grateful to
            PawMart for helping us find our perfect pup, Luna."
          </p>
          <p className="font-semibold dark:text-white text-secondary">
            - Sarah K.
          </p>
        </div>
        <div
          className={`rounded-xl ${
            theme == "light" ? "glass-blur" : "glass-blur-dark"
          } p-6 flex flex-col items-center text-center`}
        >
          <img
            alt="Happy adopter with a puppy"
            className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-white/50 shadow-md"
            src="https://i.ibb.co.com/4gRdKpm6/rsz-1marko.png"
          />
          <p className="dark:text-gray-200 text-gray-700 italic mb-4">
            "We adopted two kittens, and they are the sweetest pair. Thank you,
            PawMart, for connecting us with our new family members."
          </p>
          <p className="font-semibold dark:text-white text-secondary">
            - Mark & Jenni
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurHeros;
