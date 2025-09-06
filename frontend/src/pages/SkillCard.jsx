
import React from 'react';

const SkillCard = ({ filteredCards }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 2xl:gap-9 w-full justify-items-center">
      {filteredCards.map((card) => (
        <div
          key={card.id}
          className="group w-full max-w-[280px] sm:max-w-[260px] md:max-w-[280px] lg:max-w-[300px] xl:max-w-[280px] 2xl:max-w-[320px] h-[140px] sm:h-[150px] md:h-[160px] lg:h-[170px] xl:h-[180px] 2xl:h-[190px] bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl border border-white/20 p-4 sm:p-5 md:p-6 lg:p-6 xl:p-7 2xl:p-8 flex flex-col justify-between hover:scale-105 hover:bg-white/15 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl hover:shadow-purple-900/20"
        >
          {/* Skill Title */}
          <div className="flex items-center justify-between mb-2 sm:mb-3 md:mb-3 lg:mb-4">
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl font-[font2] text-white/90 group-hover:text-white transition-colors duration-300">
              {card.title}
            </h3>
            <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
              {card.progress}%
            </span>
          </div>
          
          {/* Progress Bar Container */}
          <div className="w-full">
            <div className="w-full h-2 sm:h-2.5 md:h-3 lg:h-3.5 xl:h-4 2xl:h-4 bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm">
              <div
                className="h-full bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 rounded-full transition-all duration-1000 ease-out shadow-lg shadow-purple-900/30 relative overflow-hidden group-hover:shadow-purple-900/40"
                style={{ width: `${card.progress}%` }}
              >
                {/* Animated shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            
            {/* Progress Text (hidden on very small screens) */}
            <div className="mt-2 sm:mt-3 md:mt-4 lg:mt-4 xl:mt-5 2xl:mt-5">
              <p className="text-xs sm:text-sm md:text-base lg:text-base xl:text-lg 2xl:text-lg text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                <span className="hidden sm:inline">Proficiency: </span>
                <span className="text-purple-300 font-medium">{card.progress}%</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillCard;