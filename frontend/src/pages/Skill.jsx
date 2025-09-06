import { useState } from "react";
import Category from "../components/Category";
import SkillCard from "./SkillCard";

const Skill = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const categories = [
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "tool", name: "Tool" },
    { id: "ai", name: "AI" },
  ];

  // ✅ Skills Data
  const cards = [
    { id: 1, title: "React", category: "frontend", progress: 92 },
    { id: 2, title: "Node.js", category: "backend", progress: 80 },
    { id: 3, title: "Python AI", category: "ai", progress: 70 },
    { id: 4, title: "Next.js", category: "frontend", progress: 85 },
    { id: 5, title: "Express.js", category: "backend", progress: 75 },
    { id: 6, title: "Git", category: "tool", progress: 90 },
    { id: 7, title: "TailwindCSS", category: "frontend", progress: 88 },
    { id: 8, title: "MongoDB", category: "backend", progress: 78 },
    { id: 9, title: "TensorFlow", category: "ai", progress: 65 },
    { id: 10, title: "TypeScript", category: "frontend", progress: 82 },
    { id: 11, title: "Docker", category: "tool", progress: 72 },
    { id: 12, title: "Linux", category: "tool", progress: 85 },
  ];

  const filteredCards =
    activeCategory === "all"
      ? cards
      : cards.filter((card) => card.category === activeCategory);

  return (
    <div 
      id="skill" 
      className="w-full flex flex-col items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 2xl:gap-16 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 2xl:py-24"
    >
      
      {/* Heading */}
      <div className="relative flex flex-col items-center mb-2 sm:mb-4 md:mb-6 lg:mb-8">
        <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl uppercase text-white font-[font2] text-center leading-tight">
          My Skills
        </h2>
        <span className="mt-2 sm:mt-2 md:mt-3 lg:mt-4 xl:mt-4 h-0.5 sm:h-0.5 md:h-1 lg:h-1 xl:h-1.5 w-16 sm:w-20 md:w-28 lg:w-32 xl:w-36 2xl:w-40 rounded-full bg-purple-700"></span>
      </div>

      {/* Categories - Make responsive */}
      <div className="w-full max-w-6xl">
        <Category
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          categories={categories}
        />
      </div>

      {/* Skills Grid - Make responsive */}
      <div className="w-full max-w-7xl">
        <SkillCard filteredCards={filteredCards} />
      </div>
    </div>
  );
};

export default Skill;