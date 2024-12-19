import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getProjects } from '../services/dataService';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedProjects = await getProjects();
      setProjects(fetchedProjects);
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white bg-cover bg-center" style={{ backgroundImage: 'url(/path/to/your/background.jpg)' }}>
      <div className="bg-black bg-opacity-50 p-8 rounded-lg">
        <motion.h1
          className="text-4xl font-bold text-white text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Portfolio
        </motion.h1>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
              <p className="mt-2 text-gray-300">{project.description}</p>
              <a
                href='https://github.com/shubhamchauhan38/RideSharingPlatform'
                className="mt-4 inline-block text-teal-500 hover:text-teal-400 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;