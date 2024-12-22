import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaCalendarAlt } from 'react-icons/fa';

const WorkExperience = () => {
  const experiences = [
    {
      company: 'Accenture',
      role: 'Associate Software Engineer',
      duration: '07/2023 - Present',
      description: [
        'Developed and maintained client-centric software applications using .NET.',
        'Optimized Oracle SQL queries, improving performance by 25%.',
        'Streamlined data transfer processes using .NET frameworks, reducing processing time by 30%.',
        'Actively participated in Agile Scrum ceremonies, contributing to sprint planning, daily stand-ups, and retrospectives.',
        'Diagnosed and resolved complex software issues, ensuring minimal downtime and high system performance.',
        'Collaborated with cross-functional teams via Jira for task management, ensuring timely project deliverables.',
        'Estimated and planned work products during sprint cycles, ensuring timely delivery.',
        'Provided on-call support for critical systems to ensure minimal downtime.'
      ]
    },
    {
      company: 'Cognizant',
      role: 'Full Stack Intern',
      duration: '01/2023 – 06/2023',
      description: [
        'Designed and developed a full-stack web application for operational tasks, including application verification and vehicle management.',
        'Utilized C#, ASP.NET, Angular, and Entity Framework to create a responsive UI and efficient backend logic.',
        'Integrated Oracle SQL for seamless data management between front-end and back-end.',
        'Delivered a fully functional application by the end of the internship, following best practices in the software development lifecycle.'
      ]
    }
  ];

  return (
    <div className="mb-16">
      <motion.h2
        className="text-4xl font-semibold text-center mb-8"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Work Experience
      </motion.h2>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Header with Company Name, Role and Duration */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <FaBuilding className="text-teal-400 text-3xl" />
                <div>
                  <h3 className="text-xl font-semibold text-teal-400">{exp.company}</h3>
                  <p className="text-sm text-gray-400">{exp.role}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <FaCalendarAlt className="text-gray-400" />
                <span className="text-sm text-gray-300">{exp.duration}</span>
              </div>
            </div>

            {/* Description List */}
            <ul className="space-y-2 text-gray-300">
              {exp.description.map((item, idx) => (
                <li key={idx} className="text-sm">{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
