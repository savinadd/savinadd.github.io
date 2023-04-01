import { useState } from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-end font-sora">
      <div className="flex items-left flex-col justify-between w-full max-w-6xl px-4 py-3 mx-auto md:px-6 lg:px-8">
        <div className="hidden md:flex justify-end">
          <Link to="home" spy={true} smooth={true} className="mr-4  text-red-100 hover:text-[#CFD6EA] cursor-pointer">Home</Link>
          <Link to="about" spy={true} smooth={true} className="mr-4  text-red-100 hover:text-[#CFD6EA] cursor-pointer">About</Link>
          <Link to="portfolio" spy={true} smooth={true} className="mr-4  text-red-100 hover:text-[#CFD6EA] cursor-pointer">Portfolio</Link>
          <Link to="contact" spy={true} smooth={true} className=" text-red-100 hover:text-[#CFD6EA] cursor-pointer">Contact Me</Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="block text-gray-400 hover:text-white focus:text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="px-4 pt-2 pb-4 md:hidden">
          <Link to="home" spy={true} smooth={true} onClick={() => setIsOpen(false)} className="block font-mono text-red-100 hover:text-white cursor-pointer mb-2">Home</Link>
          <Link to="about" spy={true} smooth={true} onClick={() => setIsOpen(false)} className="block font-mono text-red-100 hover:text-white cursor-pointer mb-2">About</Link>
          <Link to="portfolio" spy={true} smooth={true} onClick={() => setIsOpen(false)} className="block font-mono text-red-100 hover:text-white cursor-pointer mb-2">Portfolio</Link>
          <Link to="contact" spy={true} smooth={true} onClick={() => setIsOpen(false)} className="block font-mono text-red-100 hover:text-white cursor-pointer">Contact Me</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;


