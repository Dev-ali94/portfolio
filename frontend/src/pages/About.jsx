import React from 'react'
import { assests } from '../assets/assets'
import { Aboutcard,Progresscard } from '../data/about'
const About = () => {
  return (
    <div id='about' className=' flex flex-col items-center w-full h-full px-4 sm:px-6 
    md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 md:py-12 lg:py-16'>
      {/* Heading */}
      <div className="flex flex-col items-center px-4 sm:px-6 md:px-0 mb-5 sm:mb-2 md:mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl uppercase
         text-white font-[font2] text-center leading-tight">
          About me
        </h2>
        <span className="mt-3 h-1 w-20 sm:w-24 md:w-32 lg:w-40 xl:w-48 bg-purple-900 rounded-2xl"></span>
      </div>
      {/* top boxes */}
      <div className="flex flex-col items-center mb-8 md:mb-12 lg:mb-16 w-full max-w-7xl">
        {/*heading of top box */}
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl
         uppercase font-[font2] text-purple-400 mb-4 md:mb-6 lg:mb-8 text-center">
          MY JOURNEY
        </h3>
        {/* tops boxes Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6
         lg:gap-7 xl:gap-8 w-full justify-items-center">
          {Aboutcard.map((card) => (
            <div
              key={card.id}
              className="w-full max-w-[320px] sm:max-w-[340px] md:max-w-[300px] 
              lg:max-w-[320px] xl:max-w-[400px] min-h-[160px] sm:min-h-[170px] md:min-h-[180px] 
              lg:min-h-[190px] xl:min-h-[200px] rounded-lg bg-white/10 backdrop-blur-md border
               border-white/20 flex flex-col items-start text-white p-4 sm:p-5 md:p-6 space-y-2 
               sm:space-y-3"
            >
              {/*small box with image and title*/}
              <div className="flex items-center gap-2 sm:gap-3">
                {/*small box with image*/}
                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-13 lg:h-13 xl:w-14 
                xl:h-14 rounded-md bg-gradient-to-tr from-purple-800 via-purple-900 to-purple-950 
                flex items-center justify-center">
                  <img src={card.image} alt={card.title} className='w-6 sm:w-7 md:w-8 lg:w-9 xl:w-10' />
                </div>
                {/*title*/}
                <h2 className="text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl font-[font2] text-white/90">
                  {card.title}
                </h2>
              </div>
              {/*description*/}
              <p className="text-xs sm:text-sm md:text-sm lg:text-base xl:text-base leading-relaxed text-gray-300">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* bottom boxes */}
      <div className="flex flex-col items-center w-full max-w-7xl">
        {/*bottom box heading*/}
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl uppercase 
        font-[font2] text-purple-400 mb-4 md:mb-6 lg:mb-8 text-center">
          MY PROGRESS
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6
         xl:gap-7 w-full justify-items-center">
          {Progresscard.map((stat) => (
            <div
              key={stat.id}
              className="w-full max-w-[160px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-[220px] 
              xl:max-w-[450px] 2xl:max-w-[260px] h-[120px] sm:h-[140px] md:h-[150px] lg:h-[160px] 
              xl:h-[170px] 2xl:h-[180px]  bg-white/10 backdrop-blur-md rounded-xl 
              border border-white/30 flex flex-col items-center justify-center
               text-white p-3 sm:p-4 md:p-5 space-y-2 sm:space-y-3"
            >
              {/*small box with image*/}
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-15 xl:h-20
               flex items-center justify-center rounded-lg xl:rounded-xl
                bg-gradient-to-tr from-purple-800 via-purple-900 to-purple-950">
                <img src={stat.image} alt={stat.title} className='w-6 sm:w-7 md:w-8 lg:w-9 xl:w-10' />
              </div>
              {/*Count*/}
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold
               text-white/90">
                {stat.count}
              </h2>
              {/*title*/}
              <h4 className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm text-gray-300
               font-[font1] text-center leading-tight px-1">
                {stat.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About