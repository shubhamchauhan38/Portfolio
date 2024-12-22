// // src/services/dataService.js
// const API_URL = 'https://ec2-13-235-79-118.ap-south-1.compute.amazonaws.com:5002'; // Your backend API URL

// // Generic fetch function to handle all API requests
// const fetchData = async (endpoint) => {
//   try {
//     const response = await fetch(`${API_URL}/${endpoint}`);
//     if (!response.ok) {
//       throw new Error(`Failed to fetch ${endpoint}`);
//     }
//     return await response.json();
//   } catch (error) {
//     console.error(`Error fetching ${endpoint}:`, error);
//     return []; // Return an empty array in case of error
//   }
// };

// // Function to get core skills
// export const getCoreSkills = () => {
//   return fetchData('api/CoreSkill/all');
// };

// // Function to get work experience
// export const getWorkExperience = () => {
//   return fetchData('api/WorkExperience/all');
// };

// // Function to get projects
// export const getProjects = () => {
//   return fetchData('api/Project/all');
// };


// src/services/dataService.js

export const coreSkills = [
  {
    category: 'Programming Languages',
    skills: ['C#', 'Python', 'Java', 'C'],
  },
  {
    category: 'Web Development',
    skills: ['ASP.NET MVC', 'ASP.NET Web API', '.NET Core', 'Angular', 'React', 'HTML', 'CSS', 'Bootstrap'],
  },
  {
    category: 'Database Management',
    skills: ['Oracle', 'SQL', 'NoSQL'],
  },
  {
    category: 'DevOps Tools',
    skills: ['Azure DevOps', 'CI/CD pipelines'],
  },
  {
    category: 'Version Control',
    skills: ['Git'],
  },
  {
    category: 'Core Concepts',
    skills: [
      'Data Structures & Algorithms',
      'Software Development Life Cycle (SDLC)',
      'Object-Oriented Programming (OOP)',
      'Agile/Scrum',
    ],
  },
];

export const workExperience = [
  {
    title: 'Software Engineer',
    company: 'Accenture',
    duration: 'July 2023 - Present',
    description: 'Developing software solutions using .NET technologies.',
  },
  // Add more static work experience here
];

export const projects = [
  {
    title: 'Ride Sharing Platform',
    description: 'A platform to connect drivers and passengers for carpooling.',
    link: 'https://github.com/shubhamchauhan38/RideSharingPlatform',
  },
  // Add more static projects here
];
