import { useState } from "react";
import Category from "../components/Category";
import ProjectCard from "./ProjectCard";
import { assests } from '../assets/assets'

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
    <div id="project" className=" min-h-screen w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12
       2xl:px-16 py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 2xl:py-24
        flex flex-col items-center gap-y-4 ">
      {/*heading*/}
      <div className="flex flex-col items-center px-4 sm:px-6 md:px-0 mb-2 sm:mb-2 md:mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl uppercase
         text-white font-[font2] text-center leading-tight">
          My Recent Work
        </h2>
        <span className="mt-3 h-1 w-20 sm:w-24 md:w-32 lg:w-40 xl:w-48 bg-purple-900 rounded-2xl"></span>
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