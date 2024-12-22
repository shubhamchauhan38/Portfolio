// filepath: /d:/Programming/React/Portfolio/portfolio/src/component/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-black to-gray-900 p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-extrabold tracking-wide">
          <Link to="/" className="hover:text-teal-400 transition duration-300">
            My<span className="text-teal-400">Portfolio</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link
            to="/"
            className="text-gray-300 hover:text-teal-400 text-lg font-medium transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-300 hover:text-teal-400 text-lg font-medium transition duration-300"
          >
            About
          </Link>
          <Link
            to="/portfolio"
            className="text-gray-300 hover:text-teal-400 text-lg font-medium transition duration-300"
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            className="text-gray-300 hover:text-teal-400 text-lg font-medium transition duration-300"
          >
            Contact
          </Link>
          <Link
            to="/resume"
            className="text-gray-300 hover:text-teal-400 text-lg font-medium transition duration-300"
          >
            Resume
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-teal-400 transition duration-300"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-gray-800 rounded-lg shadow-md">
          <Link
            to="/"
            className="block text-gray-300 hover:text-teal-400 py-2 px-4 text-center font-medium transition duration-300"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-gray-300 hover:text-teal-400 py-2 px-4 text-center font-medium transition duration-300"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/portfolio"
            className="block text-gray-300 hover:text-teal-400 py-2 px-4 text-center font-medium transition duration-300"
            onClick={toggleMenu}
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            className="block text-gray-300 hover:text-teal-400 py-2 px-4 text-center font-medium transition duration-300"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <Link
            to="/resume"
            className="block text-gray-300 hover:text-teal-400 py-2 px-4 text-center font-medium transition duration-300"
            onClick={toggleMenu}
          >
            Resume
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;