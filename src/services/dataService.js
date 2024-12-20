// src/services/dataService.js
const API_URL = 'http://ec2-13-235-79-118.ap-south-1.compute.amazonaws.com:5001/'; // Your backend API URL

// Generic fetch function to handle all API requests
const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${API_URL}/${endpoint}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${endpoint}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    return []; // Return an empty array in case of error
  }
};

// Function to get core skills
export const getCoreSkills = () => {
  return fetchData('CoreSkill');
};

// Function to get work experience
export const getWorkExperience = () => {
  return fetchData('WorkExperience');
};

// Function to get projects
export const getProjects = () => {
  return fetchData('Project');
};
