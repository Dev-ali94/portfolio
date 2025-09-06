import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-16 sm:py-20 md:py-24 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="flex flex-col relative items-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl uppercase text-white font-[font2] leading-tight">
              Contact Me
            </h2>
            <span className="h-1 w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 2xl:w-48 rounded-full bg-purple-700 absolute top-12"></span>
          </div>
          <p className="text-gray-400 mt-6 sm:mt-8 md:mt-10 text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl max-w-2xl mx-auto leading-relaxed">
            I’m always interested in new opportunities and exciting projects. Let’s create something amazing together!
          </p>
        </div>

        {/* Contact Layout */}
        <div className="flex flex-col sm:flex-row md:flex-row gap-8 sm:gap-8 md:gap-10 justify-center items-start">
          {/* Left Side - Form */}
          <div className="flex-1 w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl p-6 sm:p-8 md:p-10">
            <form className="space-y-4 sm:space-y-5 md:space-y-6">
              <input
                type="text"
                placeholder="Your full name"
                className="w-full px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 text-sm sm:text-base md:text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="email"
                placeholder="your.email@example.com"
                className="w-full px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 text-sm sm:text-base md:text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <textarea
                placeholder="Tell me about your project or just say hello..."
                rows="5"
                className="w-full px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 text-sm sm:text-base md:text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-2.5 sm:py-3 rounded-xl bg-gradient-to-tr from-purple-800 via-purple-900 to-purple-950 text-sm sm:text-base md:text-base font-medium hover:opacity-90 transition shadow-lg"
              >
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>

          {/* Right Side - Info */}
          <div className="flex flex-col gap-6 w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
            {/* Contact Info */}
            <div className="rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl p-5 sm:p-6 md:p-8 w-full">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Contact Information</h3>
              <div className="flex items-center gap-3 text-sm sm:text-base">
                <Mail className="text-purple-500" size={18} />
                <span>sheikhaliimran5452@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm sm:text-base">
                <Phone className="text-purple-500" size={18} />
                <span>03294704692</span>
              </div>
              <div className="flex items-center gap-3 text-sm sm:text-base">
                <MapPin className="text-purple-400" size={18} />
                <span>Multan, Punjab, Pakistan</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl p-5 sm:p-6 md:p-8 w-full">
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Follow Me</h3>
              <div className="flex gap-4 text-xl sm:text-2xl">
                <a href="#" className="hover:text-purple-500 transition">
                  <FaLinkedin />
                </a>
                <a href="#" className="hover:text-purple-500 transition">
                  <FaGithub />
                </a>
                <a href="#" className="hover:text-purple-500 transition">
                  <FaTwitter />
                </a>
                <a href="#" className="hover:text-purple-500 transition">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
