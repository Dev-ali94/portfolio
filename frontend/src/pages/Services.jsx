import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      number: "01",
      title: "Frontend Development",
      category: "frontend",
      description:
        "Create stunning, responsive user interfaces using modern frameworks like React, Vue.js, and CSS technologies for exceptional UX.",
    },
    {
      id: 2,
      number: "02",
      title: "Backend Development",
      category: "backend",
      description:
        "Build robust server-side applications, APIs, and databases ensuring smooth data flow, security, and scalability.",
    },
    {
      id: 3,
      number: "03",
      title: "UI/UX Design",
      category: "design",
      description:
        "Design modern, responsive, and user-friendly interfaces with focus on usability, accessibility, and visual appeal.",
    },
    {
      id: 4,
      number: "04",
      title: "Full Stack Development",
      category: "fullstack",
      description:
        "Combine frontend and backend expertise to create complete, scalable applications with seamless integration.",
    },
  ];

  return (
    <div id="services" className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-10 sm:py-12 md:py-14 
      flex flex-col items-center gap-8">
      {/*heading*/}
      <div className="flex flex-col items-center px-4 sm:px-6 md:px-0 mb-2 sm:mb-2 md:mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl uppercase
       text-white font-[font2] text-center leading-tight">
          service i provide
        </h2>
        <span className="mt-3 h-1 w-20 sm:w-24 md:w-32 lg:w-40 xl:w-48 bg-purple-900 rounded-2xl"></span>
      </div>
      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-6xl">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative rounded-lg bg-white/10 border border-white/10 backdrop-blur-md 
            p-4 sm:p-5 md:p-5 lg:p-5 flex flex-col gap-3 max-w-lg mx-auto">
            {/* Number + Title */}
            <div className="flex items-center  gap-3">
              <h1 className="text-3xl font-bold text-purple-500">
                {service.number}
              </h1>
              <h3 className="text-sm sm:text-base md:text-base lg:text-lg 
                font-[font2]  text-white -mb-2">
                {service.title}
              </h3>
            </div>
            {/* Description */}
            <p className="text-xs sm:text-sm md:text-sm lg:text-base text-gray-300 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
