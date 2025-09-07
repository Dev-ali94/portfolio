import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { gsap } from "gsap";

const ProjectCard = ({ projects }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleTap = (index, link) => {
    if (activeIndex === index) {
      // second tap opens the link
      window.open(link, "_blank");
      setActiveIndex(null);
    } else {
      // first tap shows overlay
      setActiveIndex(index);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className="relative h-[20vw] w-[25vw] bg-white/10 overflow-hidden backdrop-blur-lg rounded-2xl cursor-pointer group"
          onClick={() => handleTap(index, project.link)}
        >
          {/* Image */}
          <div className="h-[80%] w-full rounded-t-2xl bg-white/5 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Title */}
          <h2 className="p-2 font-[font2] text-lg text-white">{project.title}</h2>

          {/* Overlay */}
          <div
            className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${
              activeIndex === index ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            }`}
          >
            <FaEye className="text-white text-3xl" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;

