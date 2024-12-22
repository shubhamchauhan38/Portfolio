import React from 'react';
import { FaDownload } from 'react-icons/fa';

const Resume = () => {
  const resumeURL = `${process.env.PUBLIC_URL}/resume/Shubam_Kumar_Resume.pdf`;

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
      <div className="text-center mt-8">
        <h1 className="text-4xl font-bold text-teal-400">My Resume</h1>
        <p className="mt-2 text-gray-300">
          View or download my resume for more details about my experience and skills.
        </p>
      </div>
      <div className="w-full max-w-4xl h-full overflow-hidden rounded-lg shadow-lg bg-gray-800 mt-6">
        <embed
          src={resumeURL}
          width="100%"
          height="800px"
          type="application/pdf"
          className="rounded-lg"
        />
      </div>
      <a
        href={resumeURL}
        download="Shubam_Kumar_Resume.pdf"
        className="mt-6 inline-flex items-center bg-teal-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-teal-600 transition duration-300"
      >
        <FaDownload className="mr-2" />
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
