import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { coreSkills } from '../services/dataService';
import { FaCode, FaDatabase, FaTools } from 'react-icons/fa';
import Spinner from '../component/Spinner'; // Import the Spinner component

const About = () => {
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const fetchData = async () => {
      // Simulate a delay for fetching data (e.g., 2 seconds)
      setTimeout(() => {
        setLoading(false); // After data is fetched, set loading to false
      });
    };

    fetchData();
  }, []);

  const getIcon = (category) => {
    switch (category) {
      case 'Programming Languages':
        return <FaCode className="text-teal-400 text-3xl mb-2" />;
      case 'Web Development':
        return <FaTools className="text-teal-400 text-3xl mb-2" />;
      case 'Database Management':
        return <FaDatabase className="text-teal-400 text-3xl mb-2" />;
      case 'DevOps Tools':
        return <FaTools className="text-teal-400 text-3xl mb-2" />;
      case 'Version Control':
        return <FaTools className="text-teal-400 text-3xl mb-2" />;
      case 'Core Concepts':
        return <FaTools className="text-teal-400 text-3xl mb-2" />;
      default:
        return <FaTools className="text-teal-400 text-3xl mb-2" />;
    }
  };

  if (loading) {
    return <Spinner />; // Show Spinner component while fetching data
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto p-8">
        <motion.h1
          className="text-4xl font-bold text-white text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h1>
        <motion.p
          className="mt-4 text-gray-300 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          I am a dedicated Software Engineer skilled in .NET, database optimization, and system reliability.
        </motion.p>
        <section className="mt-12">
          <motion.h2
            className="text-3xl font-semibold text-white text-center"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            My Skills
          </motion.h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                {getIcon(skill.category)}
                <h3 className="text-2xl font-semibold text-teal-400">{skill.category}</h3>
                <ul className="mt-4 text-gray-300 text-center">
                  {Array.isArray(skill.skills) ? (
                    skill.skills.map((item, idx) => (
                      <li key={idx} className="text-sm mt-1">{item}</li>
                    ))
                  ) : (
                    <li className="text-sm mt-1">{skill.skills}</li>
                  )}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
