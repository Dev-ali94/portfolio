import React from 'react'
import { Send, Mail, Phone, MapPin } from 'react-feather'
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id="contact" className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-10 
      sm:py-12 md:py-14 text-white">
      <div className="max-w-7xl mx-auto">
        {/*heading*/}
        <div className="flex flex-col items-center px-4 sm:px-6 md:px-0 mb-8 sm:mb-2 md:mb-13">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl uppercase text-white font-[font2] text-center leading-tight">
            Contact Me
          </h2>
          <span className="mt-3 h-1 w-20 sm:w-24 md:w-32 lg:w-40 xl:w-48 bg-purple-900 rounded-2xl"></span>
        </div>
        {/* Contact Layout */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-start">
          {/*left side with Form */}
          <div className="flex-1 w-full sm:w-1/2 rounded-2xl bg-white/10 backdrop-blur-lg 
          border border-white/20 shadow-2xl p-6 sm:p-8 md:p-10">
            <form className="space-y-4 sm:space-y-5 md:space-y-6">
              <input
                type="text"
                placeholder="Your full name"
                className="w-full px-4 py-2 sm:py-2.5 rounded-xl bg-white/5 border
                 border-white/20 text-white placeholder-gray-400 text-sm 
                 sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="email"
                placeholder="your.email@example.com"
                className="w-full px-4 py-2 sm:py-2.5 rounded-xl
                 bg-white/5 border border-white/20 text-white placeholder-gray-400
                  text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <textarea
                placeholder="Tell me about your project or just say hello..."
                rows="5"
                className="w-full px-4 py-2 sm:py-2.5 rounded-xl bg-white/5 border
                 border-white/20 text-white placeholder-gray-400 text-sm sm:text-base
                  focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-2 sm:py-2.5 
                rounded-full bg-gradient-to-tr from-purple-800 via-purple-900 to-purple-950
                 text-sm sm:text-base font-medium hover:bg-none hover:border-3 border-purple-900"
              >
                <Send size={18} /> Send Message</button>
            </form>
          </div>
          {/* right side with contact information */}
          <div className="flex flex-col gap-4 sm:gap-6 w-full sm:w-1/2">
            {/* Contact Information top box */}
            <div className="rounded-2xl bg-white/10 backdrop-blur-lg border
             border-white/20 shadow-xl p-5 sm:p-6 md:p-8 w-full">
              {/*heading*/}
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Contact Information</h3>
              {/*contact information*/}
              <div className="flex items-center gap-3 text-sm sm:text-base mb-1">
                <Mail className="text-purple-500" size={18} />
                <span>sheikhaliimran5452@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm sm:text-base mb-1">
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
                <a href="#" className="hover:text-purple-500 transition"><FaLinkedin /></a>
                <a href="#" className="hover:text-purple-500 transition"><FaGithub /></a>
                <a href="#" className="hover:text-purple-500 transition"><FaTwitter /></a>
                <a href="#" className="hover:text-purple-500 transition"><FaInstagram /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
