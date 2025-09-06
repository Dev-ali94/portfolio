import { useState } from "react";
import Category from "../components/Category";
import ProjectCard from "./ProjectCard";
import {assests} from '../assets/assets'

const Project = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const categories = [
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "tool", name: "Tool" },
  ];

  // 🔹 Data lives here
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A modern responsive portfolio built with React and Tailwind CSS. A modern responsive portfolio built with React and Tailwind CSS.",
      image: assests.github_icon,
      link: "#",
      stack: ["React", "Tailwind", "Framer Motion"],
      category: "frontend",
    },
    {
      id: 2,
      title: "E-commerce Store",
      description: "Full-stack e-commerce store with authentication and payment gateway.",
      image: "https://via.placeholder.com/400x250",
      link: "#",
      stack: ["Next.js", "Node.js", "MongoDB"],
      category: "backend",
    },
    {
      id: 3,
      title: "AI Chatbot",
      description: "AI-powered chatbot with NLP integration and real-time chat.",
      image: "https://via.placeholder.com/400x250",
      link: "#",
      stack: ["Python", "Flask", "React"],
      category: "tool",
    },
     {
      id: 4,
      title: "Portfolio Website",
      description: "A modern responsive portfolio built with React and Tailwind CSS. A modern responsive portfolio built with React and Tailwind CSS.",
      image: assests.github_icon,
      link: "#",
      stack: ["React", "Tailwind", "Framer Motion"],
      category: "frontend",
    },
     {
      id: 5,
      title: "Portfolio Website",
      description: "A modern responsive portfolio built with React and Tailwind CSS. A modern responsive portfolio built with React and Tailwind CSS.",
      image: assests.github_icon,
      link: "#",
      stack: ["React", "Tailwind", "Framer Motion"],
      category: "frontend",
    },
     {
      id: 6,
      title: "Portfolio Website",
      description: "A modern responsive portfolio built with React and Tailwind CSS. A modern responsive portfolio built with React and Tailwind CSS.",
      image: assests.github_icon,
      link: "#",
      stack: ["React", "Tailwind", "Framer Motion"],
      category: "frontend",
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((card) => card.category === activeCategory);

  return (
    <div 
      id="project" 
      className="min-h-screen w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 2xl:py-24 flex flex-col items-center gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16 2xl:gap-20"
    >
      
      {/* Heading */}
      <div className="relative flex flex-col items-center mb-4 sm:mb-6 md:mb-8 lg:mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl uppercase text-white font-[font2] text-center leading-tight px-4">
          My Recent Work
        </h2>
        <span className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 xl:mt-7 h-0.5 sm:h-1 md:h-1.5 lg:h-2 xl:h-2 w-20 sm:w-32 md:w-40 lg:w-48 xl:w-56 2xl:w-64 rounded-full bg-purple-700"></span>
      </div>

      {/* Categories */}
      <div className="w-full max-w-5xl">
        <Category
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          categories={categories}
        />
      </div>

      {/* Projects Grid */}
      <div className="w-full max-w-7xl">
        <ProjectCard projects={filteredProjects} />
      </div>
      
    </div>
  );
};

export default Project;