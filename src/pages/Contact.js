import React from "react";
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 flex justify-center items-center">
      <div className="max-w-7xl text-center space-y-12">
        <h1 className="text-5xl font-bold text-teal-400">Contact Me</h1>
        <p className="text-xl text-gray-300">
          Feel free to reach out via any of the channels below. I'd love to connect and discuss how we can work together!
        </p>

        {/* Contact Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Phone */}
          <div className="bg-gray-800 text-gray-300 p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 flex flex-col items-center space-y-4">
            <FaPhoneAlt className="text-teal-400 text-4xl" />
            <h2 className="text-2xl font-semibold text-teal-400">Phone</h2>
            <p className="text-lg">+918709330937</p>
          </div>

          {/* Email */}
          <div className="bg-gray-800 text-gray-300 p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 flex flex-col items-center space-y-4">
            <FaEnvelope className="text-teal-400 text-4xl" />
            <h2 className="text-2xl font-semibold text-teal-400">Email</h2>
            <a
              href="mailto:shubham.rathore.0631@gmail.com"
              className="text-lg text-teal-500 hover:text-teal-300"
            >
              shubham.rathore.0631@gmail.com
            </a>
          </div>

          {/* LinkedIn */}
          <div className="bg-gray-800 text-gray-300 p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 flex flex-col items-center space-y-4">
            <FaLinkedin className="text-teal-400 text-4xl" />
            <h2 className="text-2xl font-semibold text-teal-400">LinkedIn</h2>
            <a
              href="https://www.linkedin.com/in/shubham-kumar-25aa30133/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-teal-500 hover:text-teal-300"
            >
              LinkedIn Profile
            </a>
          </div>

          {/* GitHub */}
          <div className="bg-gray-800 text-gray-300 p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 flex flex-col items-center space-y-4">
            <FaGithub className="text-teal-400 text-4xl" />
            <h2 className="text-2xl font-semibold text-teal-400">GitHub</h2>
            <a
              href="https://github.com/shubhamchauhan38"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-teal-500 hover:text-teal-300"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
