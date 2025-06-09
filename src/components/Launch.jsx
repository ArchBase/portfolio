import React from 'react';
import { Github, Gamepad2, Bot } from 'lucide-react'; // Import icons

function Launch() {
  return (
    <div className="text-center p-6 sm:p-8 bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300 max-w-2xl mx-auto">
      {/* Adjusted font sizes for better responsiveness */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-4 animate-fade-in-up">Hey There 👋</h2>
      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light animate-fade-in-up animation-delay-300">I'm Akshay</p>

      {/* Button Container: Using flexbox for alignment and spacing */}
      <div className="mt-8 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
        {/* View on GitHub Button */}
        <a
          href="https://github.com/ArchBase/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 transition-all duration-300 ease-in-out"
        >
          {/* Inner span for background and text/icon styling */}
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex items-center space-x-2">
            <Github size={20} /> {/* GitHub Icon */}
            <span>View on GitHub</span>
          </span>
        </a>

        {/* See Game Dev Portfolio Button */}
        <a
          href="https://project-unplayed.itch.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 transition-all duration-300 ease-in-out"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex items-center space-x-2">
            <Gamepad2 size={20} /> {/* Gamepad Icon */}
            <span>See Game Dev Portfolio</span>
          </span>
        </a>

        {/* BitWattr Styled Button */}
        <a
          href="https://bitwattr.github.io/Home/projects.html"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 transition-all duration-300 ease-in-out"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex items-center space-x-2">
            <Bot size={20} /> {/* Bot Icon */}
            <span>BitWattr.ai</span>
          </span>
        </a>
      </div>
    </div>
  );
}

export default Launch;
