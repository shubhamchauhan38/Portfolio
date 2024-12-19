import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleHireMeClick = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: 'url(/path/to/your/background.jpg)' }}>
      <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center">
        {/* Introduction Section */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold text-white hover:text-teal-400 transition duration-300">
            Hello, I am Shubham Kumar
          </h1>
          <p className="text-xl text-teal-300 mt-4">A Backend Developer</p>
        </motion.div>

        {/* About Me Section */}
        <motion.section
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-semibold text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            I am a dedicated Software Engineer skilled in .NET, database optimization, and system reliability. Here is my personal portfolio showcasing my skills, projects, and more.
          </p>
        </motion.section>

        {/* Hire Me Section */}
        <motion.section
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <button
            onClick={handleHireMeClick}
            className="mt-4 px-6 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-700 transition duration-300 transform hover:scale-105"
          >
            Hire Me
          </button>
        </motion.section>
      </div>
    </div>
  );
};

export default Home;