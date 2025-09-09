import React, { useState } from "react";
import Category from "../components/Category";
import { Skillcards } from "../data/skill";
import CircularProgress from "../components/CircularProgress";

const Skill = () => {
   const [activeCategory, setActiveCategory] = useState("frontend");
  const categories = [
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "tool", name: "Tool" },
    { id: "ai", name: "AI" },
  ];
  const filteredCards =
    activeCategory === "all"
      ? Skillcards
      : Skillcards.filter((card) => card.category === activeCategory);

  return (
    <div>
       <div
      id="skill"
      className="w-full flex flex-col items-center gap-4 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-10">
      {/* Heading */}
      <div className="flex flex-col items-center mb-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase text-white font-[font2] text-center leading-tight">
          My Skills
        </h2>
        <span className="mt-3 h-1 w-20 sm:w-24 md:w-32 bg-purple-900 rounded-2xl"></span>
      </div>
      {/* Categories */}
      <div className="w-full max-w-6xl mb-6">
        <Category
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          categories={categories}
        />
      </div>
      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 w-full max-w-7xl justify-items-center">
        {filteredCards.map((card, index) => (
          <div
            key={index}
            className="relative bg-white/10 backdrop-blur-lg border border-white/20
                       rounded-2xl p-4 flex flex-col items-center text-center
                       h-[17vw] w-[15vw] min-h-[220px] min-w-[180px]"
          >
            {/* Icon + Title */}
            <div className="flex flex-col items-center gap-y-2 mt-2">
              <img src={card.image} alt={card.title} className="w-12 h-12" />
              <h2 className="font-[font2] text-xl text-white">{card.title}</h2>
            </div>

            {/* Progress Circle */}
            <CircularProgress progress={card.progress} />
          </div>
        ))}
      </div>
    </div>
      
    </div>
  )
}

export default Skill
