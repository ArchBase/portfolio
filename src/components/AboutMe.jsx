import React from 'react';
import { User } from 'lucide-react'; // Import User icon

function AboutMe() {
  return (
    <div className="text-center p-6 sm:p-8 bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300 max-w-2xl mx-auto">
      {/* Adjusted font sizes for better responsiveness */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-4 text-gray-800 flex items-center justify-center space-x-2">
        <span>About Me</span> <User size={40} /> {/* User Icon */}
      </h2>
      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-700">
        I am a BTech student with a passion for game development, machine learning, AI, and reinforcement learning and Web development.
        I love building innovative projects and constantly learning new technologies.
          - Akshay Founder of BitWattr.ai
      </p>
      {/* Add more details about yourself here */}
    </div>
  );
}

export default AboutMe;
