import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Home = () => {
  const navigate = useNavigate();

  const handleHireMeClick = () => {
    navigate('/contact');
  };

  return (
    <div
      className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: 'url(/path/to/your/background.jpg)',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="bg-black bg-opacity-70 p-8 rounded-lg text-center max-w-4xl mx-auto shadow-lg">
        {/* Introduction Section */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl font-extrabold text-teal-400 mb-4">
            Hello, I'm Shubham Kumar
          </h1>
          <p className="text-2xl text-gray-300 font-light">
            A Passionate <span className="text-teal-400">Backend Developer</span> Building Scalable Solutions
          </p>
        </motion.div>

        {/* About Me Section */}
        <motion.section
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-lg text-gray-300 leading-relaxed">
            I am a dedicated Software Engineer with expertise in .NET, database optimization, and system reliability.
            Welcome to my portfolio, where you can explore my skills, projects, and achievements.
          </p>
        </motion.section>

        {/* Call-to-Actions */}
        <motion.section
          className="mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <button
            onClick={handleHireMeClick}
            className="px-8 py-4 bg-teal-500 text-white font-semibold rounded-full hover:bg-teal-600 transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Hire Me
          </button>
          
        </motion.section>

        {/* Social Links */}
        <motion.section
          className="mt-10 flex justify-center space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <a
            href="https://www.linkedin.com/in/shubham-kumar-25aa30133/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:text-teal-600 transition duration-300 text-3xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/shubhamchauhan38"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:text-teal-600 transition duration-300 text-3xl"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:shubham.rathore.0631@gmail.com"
            className="text-teal-400 hover:text-teal-600 transition duration-300 text-3xl"
          >
            <FaEnvelope />
          </a>
        </motion.section>
      </div>
    </div>
  );
};

export default Home;
