import { useState } from "react";
import Category from "../components/Category";
import SkillCard from "./SkillCard";
import { assests } from '../assets/assets'

const Skill = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const categories = [
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "tool", name: "Tool" },
    { id: "ai", name: "AI" },
  ];

  const cards = [
    { id: 1, title: "React", category: "frontend", progress: 92, image: assests.arrow_icon },
    { id: 2, title: "React", category: "frontend", progress: 92, image: assests.arrow_icon },
    { id: 3, title: "React", category: "frontend", progress: 92, image: assests.arrow_icon },
    { id: 4, title: "React", category: "frontend", progress: 92, image: assests.arrow_icon },
    { id: 5, title: "React", category: "frontend", progress: 92, image: assests.arrow_icon },
    { id: 6, title: "React", category: "frontend", progress: 92, image: assests.arrow_icon },
    { id: 7, title: "React", category: "frontend", progress: 92, image: assests.arrow_icon },
    { id: 8, title: "React", category: "frontend", progress: 92, image: assests.arrow_icon },
    { id: 9, title: "React", category: "frontend", progress: 92, image: assests.arrow_icon },
  ];

  const filteredCards =
    activeCategory === "all"
      ? cards
      : cards.filter((card) => card.category === activeCategory);

  return (
    <div id="skill" className=" w-full flex flex-col items-center gap-3 sm:gap-4 md:gap-5 lg:gap-4
       xl:gap-4 2xl:gap-4 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-6 sm:py-8 md:py-10 
       lg:py-12 xl:py-14">
        {/*heading */}
      <div className="flex flex-col items-center px-4 sm:px-6 md:px-0 mb-2 sm:mb-2 md:mb-0">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl uppercase
         text-white font-[font2] text-center leading-tight">
          My Skills
        </h2>
        <span className="mt-3 h-1 w-20 sm:w-24 md:w-32 lg:w-40 xl:w-48 bg-purple-900 rounded-2xl"></span>
      </div>
      {/* Categories */}
      <div className="w-full max-w-6xl mb-3 sm:mb-4 md:mb-5">
        <Category
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          categories={categories}
        />
      </div>
      {/* Skills Grid */}
      <div className="w-full max-w-7xl">
        <SkillCard filteredCards={filteredCards} />
      </div>
    </div>
  );
};

export default Skill;
