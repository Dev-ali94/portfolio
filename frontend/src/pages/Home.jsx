import React from 'react'
import DotGrid from '../components/DotGrid'
import Navbar from '../components/Navbar'
import Hero from './Hero'
import About from './About'
import Skill from './Skill'
import Project from './Project'
import Services from './Services'
import Contact from './Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen overflow-x-hidden">
      {/* 
      */}
      <div className="fixed inset-0 -z-10 bg-[#1f1f23]">
        <DotGrid
          dotSize={6}
          gap={12}
          baseColor="rgba(200,200,200,0.1)"
          activeColor="#A78BFA"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content Container */}
      <div className="flex flex-col items-center justify-start w-full max-w-full">
        {/* Hero Section - Full viewport height minus navbar */}
        <div className="w-full min-h-[calc(100vh-80px)] flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <Hero />
        </div>
     <div className="flex flex-col items-center w-full space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-14 xl:space-y-16 py-4 sm:py-6 md:py-8 lg:py-10">
  {/* About Section */}
  <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
    <About />
  </div>

  {/* Skills Section */}
  <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
    <Skill />
  </div>

  {/* Projects Section */}
  <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
    <Project />
  </div>

  {/* Services Section */}
  <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
    <Services />
  </div>

  {/* Contact Section */}
  <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
    <Contact />
  </div>
</div>   
        {/* Footer */}
        <div className="w-full mt-20 sm:mt-24 md:mt-28 lg:mt-32 xl:mt-36 pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home