import React from "react";

const SkillCard = ({ filteredCards }) => {
  return (
    <>
      {/*skill card*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
     2xl:grid-cols-4 gap-4 sm:gap-4 md:gap-4 lg:gap-4 xl:gap-5 2xl:gap-5 w-full justify-items-center">
        {filteredCards.map((card) => (
          <div
            key={card.id}
            className="group w-full max-w-[280px] sm:max-w-[260px] md:max-w-[280px] 
          lg:max-w-[300px] xl:max-w-[280px] 2xl:max-w-[320px] h-auto bg-white/10 backdrop-blur-md 
          rounded-xl md:rounded-2xl border border-white/20 p-4 sm:p-5 md:p-6 lg:p-6 xl:p-7 2xl:p-8
           flex flex-col justify-between "
          >
            {/* Skill Title and image box */}
            <div className="flex items-center mb-4">
              {/*image box*/}
              <div className="flex items-center justify-center h-12 w-12 
            bg-gradient-to-tr from-purple-800 via-purple-900 to-purple-950 rounded-lg">
                <img src={card.image} alt="" className="w-7.5" />
              </div>
              {/*title*/}
              <h3 className="ml-3 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 
            2xl:text-2xl font-[font2] text-white/90 ">
                {card.title}
              </h3>
            </div>
            {/* Progress Counter */}
            <div className="text-right text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg 
          2xl:text-xl font-bold text-gray-300  mb-1 ">
              {card.progress}%
            </div>
            {/* Progress Bar */}
            <div className="w-full">
              <div className="w-full h-2 sm:h-2 md:h-2 lg:h-3 xl:h-2.5 2xl:h-4 bg-gray-700/50 backdrop-blur-sm
              rounded-3xl ">
                <div
                  className="h-full bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 
                  rounded-full relative overflow-hidden " style={{ width: `${card.progress}%` }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>

  );
};

export default SkillCard;
