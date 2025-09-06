import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1f1f23] text-gray-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand / About */}
        <div>
          <h2 className="text-xl font-bold text-white">MyPortfolio</h2>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            Showcasing my work, skills, and projects.  
            Let’s build something great together 🚀
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#home" className="hover:text-purple-400 transition">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-purple-400 transition">About</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Me</h3>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-purple-400"><FaGithub /></a>
            <a href="#" className="hover:text-purple-400"><FaLinkedin /></a>
            <a href="#" className="hover:text-purple-400"><FaTwitter /></a>
            <a href="#" className="hover:text-purple-400"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 mt-6 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MyPortfolio. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
