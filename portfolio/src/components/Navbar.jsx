import { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="text-red-100 text-2xl p-4 flex flex-row-reverse justify-end items-center md:justify-start font-sora">
      <ul className="hidden md:flex ml-auto">
        <li className="mx-4 cursor-pointer">
          <Link to="home" smooth={true} duration={500}>Home</Link>
        </li>
        <li className="mx-4 cursor-pointer">
          <Link to="about" smooth={true} duration={500}>About Me</Link>
        </li>
        <li className="mx-4 cursor-pointer">
          <Link to="portfolio" smooth={true} duration={500}>Portfolio</Link>
        </li>
        <li className="mx-4 cursor-pointer">
          <Link to="contact" smooth={true} duration={500}>Contact Me</Link>
        </li>
      </ul>
      <div className="md:hidden">
        <button className="flex items-center" onClick={() => setShowMenu(!showMenu)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {showMenu && (
          <ul className="text-white text-2xl sticky top-0 right-0 w-full">
            <li className="mx-4 py-2 border-b border-white hover:cursor-pointer">
              <Link to="home" smooth={true} duration={500} onClick={() => setShowMenu(false)}>Home</Link>
            </li>
            <li className="mx-4 py-2 border-b border-white">
              <Link to="about" smooth={true} duration={500} onClick={() => setShowMenu(false)}>About Me</Link>
            </li>
            <li className="mx-4 py-2 border-b border-white">
              <Link to="portfolio" smooth={true} duration={500} onClick={() => setShowMenu(false)}>Portfolio</Link>
            </li>
            <li className="mx-4 py-2">
              <Link to="contact" smooth={true} duration={500} onClick={() => setShowMenu(false)}>Contact Me</Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

