import React from "react";

const ProjectCard = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-6">
      {projects.map((project) => (
        <div
          key={project.id}
          className="max-w-[340px] h-full bg-white/5 backdrop-blur-md 
                     rounded-2xl border border-white/10 
                     flex flex-col overflow-hidden hover:shadow-xl hover:shadow-purple-900/30 
                     transition-transform duration-300 hover:scale-[1.02]"
        >
          {/* Image Section */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-56 object-cover"
          />

          {/* Content Section */}
          <div className="flex flex-col flex-grow p-4">
            <h2 className="text-lg uppercase text-purple-400 mb-2 font-[font2] tracking-wide">
              {project.title}
            </h2>
            <p className="text-sm font-[font1] text-gray-300 mb-3 leading-relaxed line-clamp-3">
              {project.description}
            </p>

            {/* Stack Pills */}
            <div className="flex flex-wrap gap-2 mb-5">
              {project.stack.map((tech, index) => (
                <span
                  key={index}
                  className="text-[11px] font-[font1] px-2.5 py-1 rounded-full 
                             bg-white/10 backdrop-blur-lg text-gray-300 
                             border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-auto flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={project.link}
                className="w-full sm:w-auto px-6 py-2 rounded-lg 
                           text-white text-[11px] font-[font1] uppercase 
                           bg-gradient-to-tr from-purple-800 via-purple-900 to-purple-950 
                           hover:opacity-90 transition text-center"
              >
                Live Demo
              </a>
              <a
                href={project.link}
                className="w-full sm:w-auto px-6 py-2 rounded-lg 
                           border-2 border-purple-900 text-white text-[11px] font-[font1] uppercase 
                           transition hover:bg-gradient-to-tr from-purple-800 via-purple-900 to-purple-950 
                           hover:border-transparent text-center"
              >
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
