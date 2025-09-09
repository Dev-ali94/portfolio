import { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";
import { Projectcards } from "../data/project";
import Category from "../components/Category";
import { useNavigate } from "react-router-dom"; // ✅ Import navigate hook

const Project = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [activeIndex, setActiveIndex] = useState(null);
  const [isTouch, setIsTouch] = useState(false);
  const navigate = useNavigate(); // ✅ Initialize navigate

  const categories = [
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "tool", name: "Tool" },
    { id: "all", name: "All" },
  ];

  // Detect touch device
  useEffect(() => {
    const checkTouch = () =>
      setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
    checkTouch();
    window.addEventListener("resize", checkTouch);
    return () => window.removeEventListener("resize", checkTouch);
  }, []);

  const handleTap = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const filteredProjects =
    activeCategory === "all"
      ? Projectcards
      : Projectcards.filter((card) => card.category === activeCategory);

  return (
    <div
      id="project"
      className="min-h-screen w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-12 flex flex-col items-center gap-y-4"
    >
      {/* Heading */}
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl uppercase text-white font-[font2] text-center">
          My Recent Work
        </h2>
        <span className="mt-3 h-1 w-32 bg-purple-900 rounded-2xl"></span>
      </div>

      {/* Categories */}
      <div className="w-full max-w-5xl mb-6">
        <Category
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          categories={categories}
        />
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl px-4 md:px-6">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="relative w-full rounded-2xl overflow-hidden cursor-pointer bg-white/10 backdrop-blur-lg group"
            onClick={() => isTouch && handleTap(index)} // touch devices toggle overlay
          >
            {/* Image */}
            <div className="w-full aspect-[4/3] bg-white/5 overflow-hidden rounded-b-3xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            {/* Title */}
            <h2 className="p-2 font-[font2] text-lg text-white">
              {project.title}
            </h2>

            {/* Overlay */}
            <div
              className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 rounded-2xl
                ${
                  isTouch
                    ? activeIndex === index
                      ? "opacity-100"
                      : "opacity-0"
                    : "opacity-0 group-hover:opacity-100"
                }`}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/project/${project.slug}`); // ✅ Navigate to slug route
                }}
                className="bg-gradient-to-br from-purple-800 via-purple-900 to-purple-950 
                         hover:from-purple-700 hover:via-purple-800 hover:to-purple-900
                         text-white p-4 rounded-full shadow-lg transition-all duration-300"
              >
                <FaEye className="text-2xl" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
