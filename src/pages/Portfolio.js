import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../services/dataService'; // Import projects
import Spinner from '../component/Spinner'; // Import Spinner component

const Portfolio = () => {
  const [projectsData, setProjects] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    // Set loading state to true and immediately set the projects
    const fetchData = async () => {
      setProjects(projects); // Directly set the static data
      setLoading(false); // Set loading to false immediately after setting data
    };

    fetchData();
  }, []); // Empty dependency array means it runs once when the component mounts

  if (loading) {
    return <Spinner />; // Show Spinner while data is being fetched
  }

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
          {projectsData.length === 0 && (
            <p className="text-gray-400 text-center mt-4">Unable to load projects. Please try again later.</p>
          )}
          {projectsData.map((project, index) => (
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
                href={project.link || 'https://github.com/shubhamchauhan38/RideSharingPlatform'} // Dynamic link if available
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
