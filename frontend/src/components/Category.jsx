import React from "react";

const Category = ({ setActiveCategory, activeCategory, categories }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 p-2 sm:p-3 md:p-3 lg:p-4 rounded-lg mt-2 mx-auto w-fit">
      {categories.map((categorie) => (
        <button
          key={categorie.id}
          className={`
            px-3 py-1 sm:px-4 sm:py-2 md:px-4 md:py-2 lg:px-5 lg:py-2 xl:px-6 xl:py-2 2xl:px-6 2xl:py-3
            rounded-lg font-semibold text-xs sm:text-sm md:text-sm lg:text-base xl:text-base 2xl:text-base
            transition-colors duration-200
            ${
              activeCategory === categorie.id
                ? "text-white bg-gradient-to-r from-purple-800 via-purple-900 to-purple-950"
                : "text-gray-300 bg-white/10 backdrop-blur-lg hover:bg-white/20"
            }
          `}
          onClick={() => setActiveCategory(categorie.id)}
        >
          {categorie.name}
        </button>
      ))}
    </div>
  );
};

export default Category;
