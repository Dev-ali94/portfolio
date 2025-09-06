import React from 'react'
import {assests} from '../assets/assets'

const About = () => {
  
  const Aboutcard = [
    { id: 1, title: "React", image:assests.github_icon, description:"Full-stack developer with over 1 year of experience in web development." },
    { id: 2, title: "Node.js", image:assests.github_icon, description:"I enjoy building scalable backend systems and APIs." },
    { id: 3, title: "MongoDB", image:assests.github_icon, description:"Passionate about data-driven applications and clean architecture." },
  ];
  
  const Progresscard =[
    { id:1, title:"Projects Completed", count:2, image:assests.github_icon },
    { id:2, title:"Technologies Used", count:10, image:assests.github_icon },
    { id:3, title:"Years of Experience", count:1, image:assests.github_icon },
    { id:4, title:"Clients Worked With", count:5, image:assests.github_icon }
  ];
  
  return (
    <div id='about' className='flex flex-col items-center w-full h-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 md:py-12 lg:py-16'>
             
      {/* Main Heading */}
      <div className='flex flex-col relative items-center mb-8 md:mb-12 lg:mb-16'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl uppercase text-white font-[font2] text-center'>
          ABOUT ME
        </h2>
        <span className='h-0.5 sm:h-1 w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 rounded-full bg-purple-700 mt-2 md:mt-3'></span>
      </div>
      
      {/* ================== MY JOURNEY ================== */}
      <section className="flex flex-col items-center mb-8 md:mb-12 lg:mb-16 w-full max-w-7xl">
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl uppercase font-[font2] text-purple-400 mb-4 md:mb-6 lg:mb-8 text-center">
          MY JOURNEY
        </h3>
        
        {/* About Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 w-full justify-items-center">
          {Aboutcard.map((card)=>(
            <div 
              key={card.id} 
              className="w-full max-w-[320px] sm:max-w-[340px] md:max-w-[300px] lg:max-w-[320px] xl:max-w-[360px] min-h-[160px] sm:min-h-[170px] md:min-h-[180px] lg:min-h-[190px] xl:min-h-[200px] rounded-lg bg-white/10 backdrop-blur-md border border-white/20 flex flex-col items-start text-white p-4 sm:p-5 md:p-6 space-y-2 sm:space-y-3 hover:scale-105 transition-transform duration-300 hover:bg-white/15"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-13 lg:h-13 xl:w-14 xl:h-14 rounded-md bg-gradient-to-tr from-purple-800 via-purple-900 to-purple-950 flex items-center justify-center">
                  <img src={card.image} alt={card.title} className='w-6 sm:w-7 md:w-8 lg:w-9 xl:w-10'/>
                </div>
                <h2 className="text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl font-[font2] text-white/90">
                  {card.title}
                </h2>
              </div>
              <p className="text-xs sm:text-sm md:text-sm lg:text-base xl:text-base leading-relaxed text-gray-300">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      
      {/* ================== MY PROGRESS ================== */}
      <section className="flex flex-col items-center w-full max-w-7xl">
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl uppercase font-[font2] text-purple-400 mb-4 md:mb-6 lg:mb-8 text-center">
          MY PROGRESS
        </h3>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7 w-full justify-items-center">
          {Progresscard.map((stat)=>(
            <div 
              key={stat.id} 
              className="w-full max-w-[140px] h-[120px] sm:max-w-[160px] sm:h-[130px] md:max-w-[180px] md:h-[140px] lg:max-w-[200px] lg:h-[150px] xl:max-w-[220px] xl:h-[160px] 2xl:max-w-[240px] 2xl:h-[170px] bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl border border-white/30 flex flex-col items-center justify-center text-white p-2 sm:p-3 md:p-4 space-y-1 sm:space-y-2 hover:scale-105 transition-transform duration-300 hover:bg-white/15"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-13 lg:h-13 xl:w-14 xl:h-14 flex items-center justify-center rounded-lg xl:rounded-xl bg-gradient-to-tr from-purple-800 via-purple-900 to-purple-950">
                <img src={stat.image} alt={stat.title} className='w-5 sm:w-6 md:w-7 lg:w-8 xl:w-8'/>
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold text-white/90">
                {stat.count}
              </h2>
              <h4 className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm text-gray-300 font-[font1] text-center leading-tight px-1">
                {stat.title}
              </h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default About