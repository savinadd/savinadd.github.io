import React from 'react'

const Navbar = () => {
    return(
        <nav className="bg-[#0A043C] sticky">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-mono">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <a href="/" className="">
                <img src='logo.png' alt='logo' className="h-14 w-30 hover:bg-[#864879] hover:bg-opacity-20"></img>
              </a>
            </div>
            <div className="hidden md:block border-">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="/about" className="text-gray-300 hover:bg-[#864879] hover:bg-opacity-60 hover:text-white px-3 py-2 rounded-md text-2xl font-medium">
                  About
                </a>
                <a href="/portfolio" className="text-gray-300 hover:bg-[#864879] hover:bg-opacity-60 hover:text-white px-3 py-2 rounded-md text-2xl font-medium">
                  Portfolio
                </a>
                <a href="/skills" className="text-gray-300 hover:bg-[#864879] hover:bg-opacity-60 hover:text-white px-3 py-2 rounded-md text-2xl font-medium">
                  Skills
                </a>
                <a href="/contact" className="text-gray-300 hover:bg-[#864879] hover:bg-opacity-60 hover:text-white px-3 py-2 rounded-md text-2xl font-medium">
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
};

export default Navbar