import React, { useState } from "react";
import { CiLocationOn, CiMail } from "react-icons/ci";

const DetailsPage = () => {
  const { theme } = useState();
  return (
    <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div
        className={`w-full max-w-5xl mx-auto ${
          theme == "light" ? "glass-blur" : "glass-blur-dark"
        } rounded-xl shadow-2xl shadow-black/50 overflow-hidden`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative w-full aspect-square md:aspect-auto">
            <img
              alt="Golden Retriever Puppy looking at the camera"
              className="absolute inset-0 w-full h-full object-cover"
              src="https://i.ibb.co.com/xt5f6BZb/max-puppy.png"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent md:bg-linear-to-r md:from-black/10"></div>
          </div>
          <div className="flex flex-col p-8 md:p-10 lg:p-12 space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl lg:text-4xl font-bold tracking-tight dark:text-white text-secondary">
                Golden Retriever Puppy
              </h1>

              <div className="mt-2.5">
                <span>Category:</span>
                <span className="ml-2.5 bg-primary/20 text-primary font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                  Pets
                </span>
              </div>
            </div>
            <div className="text-4xl lg:text-5xl font-bold gradient-text text-glow">
              $800
            </div>
            <div className="space-y-3 pt-2">
              <h2 className="text-lg font-semibold dark:text-white text-secondary">
                Description
              </h2>
              <p className="text-sm leading-relaxed ">
                Meet Max, an adorable 8-week-old Golden Retriever puppy with a
                heart of gold. He is playful, affectionate, and loves to cuddle.
                Max is up-to-date on all his vaccinations and is looking for a
                loving forever home to grow up in. He gets along well with
                children and other pets.
              </p>
            </div>
            <div className="flex items-center gap-2 dark:text-gray-400 text-gray-700">
              <CiLocationOn className="text-lg" />
              <span className="text-sm">Dhaka, BD</span>
            </div>
            <div className="flex items-center gap-2 dark:text-gray-400 text-gray-700">
              <CiMail className="text-lg" />
              <span className="text-sm">nurnayem768@gmail.com</span>
            </div>

            <div className="pt-6">
              <button className="w-full btn-primary shadow-glow hover:scale-105 transition-transform duration-300 text-white py-3 px-4 rounded-full font-bold cursor-pointer ">
                Adopt Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DetailsPage;
