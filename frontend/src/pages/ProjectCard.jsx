import React from "react";

const ProjectCard = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
      {projects.map((project) => (
        <div
          key={project.id}
          className="group relative bg-white/5 backdrop-blur-md rounded-2xl border
           border-white/10 overflow-hidden "
        >
          {/* Image Section */}
          <div className="relative w-full h-45 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-container group-hover:scale-105 transition-transform 
              duration-500"
            />
          </div>
          {/* Content Section */}
          <div className="flex flex-col p-4">
            {/* Title */}
            <h2 className="text-lg uppercase text-purple-400 mb-2 font-[font2] tracking-wide">
              {project.title}
            </h2>
            {/* Description */}
            <p className="text-sm font-[font1] text-gray-300 mb-3 leading-relaxed line-clamp-2">
              {project.description}
            </p>
            {/* Stack Pills */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.stack.map((tech, index) => (
                <span
                  key={index}
                  className="text-[11px] font-[font1] px-2.5 py-1 rounded-full
                   bg-white/10 backdrop-blur-sm text-gray-300 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
            {/* Buttons */}
            <div className="mt-auto flex gap-2">
              <a
                href={project.link}
                className="flex-1 px-3 py-2 rounded-full text-white text-[11px] font-[font1] uppercase 
                bg-gradient-to-tr from-purple-800 via-purple-900 to-purple-950
                 hover:bg-none hover:border border-purple-900 transition text-center">
                Live Demo
              </a>
              <a
                href={project.link}
                className="flex-1 px-3 py-2 rounded-full text-white text-[11px] font-[font1] uppercase border
                 border-purple-700 hover:bg-gradient-to-tr from-purple-800 via-purple-900 to-purple-950
                  hover:border-transparent transition text-center">
                View Detail
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
