import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [activeCategory, setActiveCategory] = useState("about");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const Link = [
    { id: "about", name: "About" },
    { id: "skill", name: "Skill" },
    { id: "project", name: "Project" },
    { id: "services", name: "Services" },
    { id: "contact", name: "Contact" },
  ];

  const handleLinkClick = (id) => {
    setActiveCategory(id);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div className=' my-10 hidden md:flex items-center justify-between px-6 lg:px-10
       bg-white/10 h-16 w-[90%] md:w-[75%] lg:w-[60%] xl:w-[55%] mx-auto rounded-full 
       backdrop-blur-md'>
        {/*all pages link here*/}
        <ul className='flex items-center gap-x-2 md:gap-x-2 lg:gap-x-3 xl:gap-x-4
         2xl:gap-x-12 uppercase cursor-pointer text-white font-[font2]'>
          {Link.map((link) => (
            <li
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className="flex flex-col relative group cursor-pointer list-none">
              <a
                href={`#${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className="text-medium font-[font2] hover:text-purple-500">
                {link.name}
              </a>
              <span
                className="absolute left-0 -bottom-1 transition-all duration-300
     h-[3px] w-[88%] rounded-full group-hover:bg-purple-500"></span>
            </li>
          ))}
        </ul>
        {/*all public link here*/}
        <div className='flex items-center justify-center gap-4 text-xl lg:text-2xl'>
          <a href="#" className="hover:text-purple-500 text-white transition">
            <FaLinkedin />
          </a>
          <a href="#" className="hover:text-purple-500 transition text-white">
            <FaGithub />
          </a>
        </div>
      </div>
      {/* Mobile side navbar */}
      <div className='md:hidden my-4 mx-4'>
        {/*mobile  navbar*/}
        <div className='flex w-[90vw] items-center justify-between px-4
         bg-white/10 h-14 rounded-full backdrop-blur-md'>
          <div className='text-white font-bold text-lg'>
            Portfolio
          </div>
          <button
            onClick={toggleMobileMenu}
            className='text-white text-2xl transition z-50 relative'>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {/*side navbar menu*/}
        <div className={`fixed top-0 right-0 h-full w-[70vw] max-w-[420px] bg-white/10 
        backdrop-blur-md transform transition-transform duration-300 ease-in-out 
        z-50 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className='flex flex-col h-full'>
            {/*topbar of sidebar menu*/}
            <div className='flex items-center justify-between p-4 border-b border-white/20'>
              <h2 className='text-white font-bold text-xl'>Menu</h2>
              <button
                onClick={toggleMobileMenu}
                className='text-white text-2xl transition'
              >
                <FaTimes />
              </button>
            </div>
            {/*side navbar pages link*/}
            <nav className="flex-1 px-4 py-6">
              <ul className="space-y-4">
                {Link.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={() => handleLinkClick(link.id)}
                      className={`block text-white text-start  p-2 rounded-lg transition ${activeCategory === link.id
                          ? "bg-purple-500/30" // active state
                          : "" // inactive + hover
                        }`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            {/*All mobile navbar public link here */}
            <div className='p-4 border-t border-white/20'>
              <div className='flex items-center justify-center gap-6 text-2xl'>
                <a href="#" className=" text-white transition">
                  <FaLinkedin />
                </a>
                <a href="#" className=" transition text-white">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
