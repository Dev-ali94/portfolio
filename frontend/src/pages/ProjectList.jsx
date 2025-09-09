import React from "react";
import { assests } from "../assets/assets";
import { useParams } from "react-router-dom";
import { projects } from "../data/projectList";

const ProjectList = () => {
  const { slug } = useParams();

  // Example project data
  

  // Find project by slug
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <p className="text-center text-red-500 mt-6">Project not found</p>;
  }

  return (
    <div className="flex flex-col lg:flex-row sm:flex-col space-x-4 space-y-4 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white min-h-screen p-4">
      <main className="p-2 w-full rounded-2xl">
        <div className="text-white space-y-10 p-2">
          {/* Hero Section */}
          <div className="bg-white/10 backdrop-blur-lg w-full rounded-3xl mb-8 shadow-md overflow-hidden">
            <div className="relative">
              <img
                src={project.hero.image}
                alt={project.hero.title}
                className="w-full h-auto max-h-[500px] object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-start p-6 lg:p-16">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-orange-400 mb-2">
                  {project.hero.title}
                </h1>
                <p className="text-sm md:text-lg text-gray-200 mb-4">{project.hero.subtitle}</p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.hero.button1}
                    className="px-4 py-2 bg-orange-600 hover:bg-orange-500 rounded-full text-black font-semibold text-sm md:text-base transition"
                  >
                    Source Code
                  </a>
                  <a
                    href={project.hero.button2}
                    className="px-4 py-2 bg-orange-600 hover:bg-orange-500 rounded-full text-black font-semibold text-sm md:text-base transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-8 bg-white/10 p-4 rounded-lg transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">Project Timeline</h3>
            {project.timeline.map((timeline, index) => (
              <div
                key={index}
                className="bg-white/10 p-4 rounded-lg mb-6 flex flex-row items-center space-x-5"
              >
                <div
                  className={`w-4 h-4 p-2 rounded-full ${
                    timeline.category === "complete" ? "bg-green-500" : "bg-red-500"
                  }`}
                ></div>
                <div>
                  <h4 className="font-semibold text-lg">{timeline.title}</h4>
                  <p className="text-sm">{timeline.subtitle}</p>
                  <p className="text-xs text-gray-400">{timeline.date}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-3xl">
            <h3 className="text-3xl font-bold mb-12">Project Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.features.map((feature, index) => (
                <div key={index} className="bg-white/10 p-6 rounded-3xl shadow-lg transition-all">
                  <div className="mb-4 w-16 h-16 bg-white rounded-2xl flex justify-center items-center overflow-hidden shadow-md">
                    <img src={feature.image} alt={feature.title} className="w-12" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-300">{feature.subtitle}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-3xl">
            <h3 className="text-3xl font-bold mb-8">Project Process</h3>
            {project.projectProcess.map((process, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row ${
                  process.catogre === "right" ? "lg:flex-row-reverse" : ""
                } gap-6 mb-12 items-center`}
              >
                <div className="flex flex-row items-center w-full gap-4 sm:w-1/3">
                  <div className="p-3 bg-white rounded-full flex-shrink-0">
                    <img src={process.image} alt={process.phase} className="w-16" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-white">{process.phase}</h4>
                    <p className="text-gray-400 text-sm">{process.duration}</p>
                  </div>
                </div>
                <div className="w-full sm:w-2/3 bg-white/10 p-4 sm:p-6 rounded-xl">
                  <p className="text-gray-300 mb-4 text-sm sm:text-base">{process.description}</p>
                  <h5 className="text-white font-medium mb-2 text-sm sm:text-base">
                    Tools and technologies
                  </h5>
                  <ul className="flex flex-wrap gap-2">
                    {process.tools.map((tool, idx) => (
                      <li
                        key={idx}
                        className="bg-white/10 text-white text-xs sm:text-sm px-3 py-1 rounded-full"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Technical Stack */}
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl">
            <h3 className="text-3xl font-bold mb-8">Technical Stack</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {project.technicalstack.map((tech, index) => (
                <div
                  key={index}
                  className="bg-white/10 rounded-xl p-5 shadow-md text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-xl flex items-center justify-center">
                    <img
                      src={tech.image}
                      alt={tech.title}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-white">{tech.title}</h4>
                  <p className="text-sm text-gray-400">{tech.subtitle}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery */}
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl">
            <h3 className="text-3xl font-bold text-white mb-8">Project Gallery</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {project.projectgallery.map((projectImg, index) => (
                <div
                  key={index}
                  className="rounded-xl overflow-hidden shadow-lg bg-white/10"
                >
                  <img
                    src={projectImg.image}
                    className="w-full h-64 object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectList;
