import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      number: "01",
      title: "Frontend Development",
      category: "frontend",
      description:
        "Create stunning, responsive user interfaces using modern frameworks like React, Vue.js, and cutting-edge CSS technologies for exceptional user experiences.",
    },
    {
      id: 2,
      title: "Backend Development",
      category: "backend",
      description:
        "Build robust server-side applications, APIs, and databases ensuring smooth data flow, security, and scalable architecture for your applications.",
    },
    {
      id: 3,
      title: "UI/UX Design",
      category: "design",
      description:
        "Design modern, responsive, and user-friendly interfaces with focus on usability, accessibility, and visual appeal to enhance user experience.",
    },
    {
      id: 4,
      title: "Full Stack Development",
      category: "fullstack",
      description:
        "Combine frontend and backend expertise to create complete, scalable applications with seamless integration and optimal performance.",
    },
  ];

  return (
    <div
      id="services"
      className="px-4 sm:px-6 md:px-6 lg:px-8 xl:px-10 2xl:px-12 py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 2xl:gap-16 items-center"
    >
      {/* Heading */}
      <div className="relative flex flex-col items-center text-center mb-6 sm:mb-8 md:mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl uppercase text-white font-[font2] tracking-wide leading-tight max-w-4xl px-2">
          Services That I Provide
        </h2>
        <span className="mt-2 sm:mt-3 md:mt-3 lg:mt-4 h-0.5 sm:h-1 md:h-1 lg:h-1 xl:h-1.5 2xl:h-2 w-20 sm:w-28 md:w-32 lg:w-36 xl:w-40 2xl:w-48 rounded-full bg-purple-700"></span>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-7 2xl:gap-8 w-full max-w-6xl">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative rounded-lg bg-white/10 backdrop-blur-md border border-white/20 shadow-md 
                      hover:shadow-xl hover:shadow-purple-900/20 transition-all duration-300 flex flex-col items-start 
                      text-white p-3 sm:p-4 md:p-4 lg:p-5 xl:p-5 2xl:p-6 gap-2 sm:gap-3 md:gap-3 lg:gap-4 xl:gap-4 2xl:gap-5 hover:bg-gradient-to-tr from-purple-800/20 via-purple-900/20 to-purple-950/20 hover:scale-105 hover:border-purple-600/40"
          >
            {/* Number + Title */}
            <div className="flex items-start sm:items-center gap-2 sm:gap-3 md:gap-3 lg:gap-4 xl:gap-4 2xl:gap-5 w-full">
              <div className="flex-shrink-0 text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors duration-300 leading-none">
                {service.number ? service.number : `0${index + 1}`}
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-xl font-[font2] text-white group-hover:text-purple-100 transition-colors duration-300 leading-tight break-words">
                  {service.title}
                </h2>
                <span className="inline-block mt-1 px-2 py-0.5 sm:px-3 sm:py-1 md:px-3 md:py-1 lg:px-3 lg:py-1 xl:px-4 xl:py-1 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-base bg-purple-800/30 text-purple-200 rounded-full border border-purple-700/50 group-hover:bg-purple-700/40 group-hover:border-purple-600/60 transition-all duration-300 font-medium uppercase tracking-wider">
                  {service.category}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-base text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
              {service.description}
            </p>

            {/* Bottom visual */}
            <div className="flex items-center justify-between w-full pt-1.5 sm:pt-2 md:pt-2 lg:pt-3 xl:pt-3 border-t border-white/10 group-hover:border-purple-600/30 transition-colors duration-300">
              <div className="flex items-center gap-1.5 sm:gap-2 md:gap-2 lg:gap-3 xl:gap-3">
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 xl:w-3 xl:h-3 rounded-full bg-purple-400 group-hover:bg-purple-300 transition-colors duration-300"></div>
                <span className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300 font-medium">
                  Professional Service
                </span>
              </div>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-purple-600/5 via-transparent to-purple-800/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
