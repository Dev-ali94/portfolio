import React from 'react'
import DotGrid from '../components/DotGrid'
import Navbar from '../components/Navbar'
import Hero from './Hero'
import About from './About'

import Project from './Project'
import Services from './Services'
import Contact from './Contact'
import Footer from '../components/Footer'

import Skill from './Skill'

const Home = () => {
  return (
    <div className=" flex flex-col items-center w-full min-h-screen overflow-x-hidden">
      {/* Dot Grid Background */}
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

      {/* Navbar */}
      <Navbar />

      {/* Main Sections */}
      <div className="flex flex-col items-center w-full max-w-full">
        <Hero />
        <About />
       <Skill />
        <Project />
        <Services />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default Home
