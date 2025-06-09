import React from 'react';

function AboutMe() {
  return (
    <div className="text-center p-8 bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
      <h2 className="text-5xl md:text-7xl font-extrabold mb-4 text-gray-800">About Me 👨‍💻</h2>
      <p className="text-2xl md:text-4xl font-light text-gray-700">
        I am a BTech student with a passion for game development, machine learning, AI, and reinforcement learning.
        I love building innovative projects and constantly learning new technologies.
      </p>
      {/* Add more details about yourself here */}
    </div>
  );
}

export default AboutMe;
