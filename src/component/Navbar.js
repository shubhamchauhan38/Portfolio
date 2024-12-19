import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">My Portfolio</div>
        <div className="space-x-4">
          <Link to="/" className="text-gray-300 hover:text-teal-400 transition duration-300">Home</Link>
          <Link to="/about" className="text-gray-300 hover:text-teal-400 transition duration-300">About</Link>
          <Link to="/portfolio" className="text-gray-300 hover:text-teal-400 transition duration-300">Portfolio</Link>
          <Link to="/contact" className="text-gray-300 hover:text-teal-400 transition duration-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
