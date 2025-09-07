import React from 'react';
import { assests } from '../assets/assets';

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center 
    gap-x-30 w-full min-h-[70vh] lg:h-[70vh] px-4 sm:px-6 md:px-8 lg:px-12
     xl:px-16 2xl:px-20 py-8 lg:py-0 ">
  
  {/* Left Content */}
  <div className="flex flex-col items-center  gap-y-3 sm:gap-y-4 md:gap-y-4 
  order-2 lg:order-2 w-full lg:w-auto">
    {/*heading*/}
    <h1 className="text-4xl sm:text-3xl md:text-5xl lg:text-5xl font-[font2]
     uppercase text-center lg:text-left bg-clip-text text-transparent 
     bg-gradient-to-r from-purple-800 via-purple-900 to-purple-950 ">
      HI I AM ALI IMRAN
    </h1>
    <h2 className="text-2xl sm:text-4xl md:text-4xl lg:text-4xl font-[font2]
     text-center lg:text-left text-white">
      Frontend Developer
    </h2>
    {/* Buttons */}
    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-x-4 
    md:gap-x-5 mt-3 md:mt-3 w-full sm:w-auto">
      <button className=" hover:bg-none hover:border-2 sm:hover:border-3
       border-purple-900 px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 uppercase 
       text-sm sm:text-base md:text-lg font-[font1] rounded-full text-white
       bg-gradient-to-tr from-purple-800 via-purple-900 to-purple-950
        transition-all duration-300 w-full sm:w-auto min-w-[140px] sm:min-w-[160px] md:min-w-[180px]">
        My Work
      </button>
      <button className="border-2 sm:border-3 border-purple-800 px-4 sm:px-6 md:px-8 
      py-2 sm:py-2.5 md:py-3 uppercase text-sm sm:text-base md:text-lg font-[font1] rounded-full text-white
      hover:border-none hover:bg-gradient-to-tl from-purple-800 via-purple-900 to-purple-950 
      transition-all duration-300 w-full sm:w-auto min-w-[140px] sm:min-w-[160px] md:min-w-[180px]">
        Download CV
      </button>
    </div>
  </div>
  
  {/* Right content */}
  <div className="flex items-center justify-center h-auto lg:h-full order-1 lg:order-2 mb-6 lg:mb-0">
    <div className="h-[200px] w-[200px] sm:h-[240px] sm:w-[240px] md:h-[280px] md:w-[280px] lg:h-[320px] 
    lg:w-[320px] xl:h-[360px] xl:w-[360px] 2xl:h-[400px] 2xl:w-[400px] rounded-full 
    bg-gradient-to-r from-purple-800 via-purple-900 to-purple-950 p-[2px]
     sm:p-[3px] shadow-2xl ">
      <div className="h-full w-full rounded-full bg-white/10 backdrop-blur-lg overflow-hidden">
        <img
          src={assests.my_profile}
          alt="Ali Imran "
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</div>

  );
};

export default Hero;