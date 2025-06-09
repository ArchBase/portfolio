import React from 'react';
import { Globe, Gamepad2, Brain } from 'lucide-react'; // Removed 'Code' import

function Projects() {
  return (
    <div id="projects" className="container mx-auto p-4 sm:p-8 bg-white rounded-lg shadow-xl mt-8 max-w-4xl">
      {/* Adjusted font sizes for better responsiveness */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center text-gray-800">Project Gallery 🚀</h2>
      <p className="text-base sm:text-lg mb-8 sm:mb-10 text-center text-gray-600">
        I've done a lot of projects in the fields of game industry, machine learning, AI, Reinforcement learning, etc.
      </p>

      {/* "My Websites" Section */}
      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-green-700 flex items-center justify-center space-x-2">
        <Globe size={24} /> <span>My Websites</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
        {/* ExamPRO Website */}
        <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col items-center">
          <h4 className="text-lg sm:text-xl font-semibold mb-3 text-gray-800">ExamPRO</h4>
          <img
            src="/web1.png" // Original path
            alt="ExamPRO Website Preview"
            className="w-full h-auto rounded-lg mb-4 object-cover border border-gray-200"
            style={{ maxHeight: '200px' }} // Optional: limit image height
          />
          <a
            href="https://github.com/ArchBase/ExamPRO"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out text-base sm:text-lg"
          >
            GitHub Repository
          </a>
        </div>

        {/* AI Startup Website */}
        <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col items-center">
          <h4 className="text-lg sm:text-xl font-semibold mb-3 text-gray-800">AI Startup Website</h4>
          <img
            src="web2.png" // Original path
            alt="AI Startup Website Preview"
            className="w-full h-auto rounded-lg mb-4 object-cover border border-gray-200"
            style={{ maxHeight: '200px' }} // Optional: limit image height
          />
          <a
            href="https://github.com/BitWattr/Home"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out text-base sm:text-lg"
          >
            GitHub Repository
          </a>
        </div>
      </div>
      {/* End of "My Websites" Section */}

      {/* "My Games" Section */}
      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-blue-700 flex items-center justify-center space-x-2">
        <Gamepad2 size={24} /> <span>My Games</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
        <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
          <iframe
            title="Assault Auto demo"
            frameBorder="0"
            src="https://itch.io/embed/2801178?border_width=0&amp;bg_color=6382b0&amp;link_color=0a61eb"
            width="100%"
            height="165"
            className="rounded-lg"
          >
            <a href="https://project-unplayed.itch.io/assault-auto-demo">Assault Auto demo by Project_Unplayed</a>
          </iframe>
        </div>
        <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
          <iframe
            title="Exchange Ventures: Profit Pursuit"
            frameBorder="0"
            src="https://itch.io/embed/2835736?bg_color=6382b0&amp;link_color=0a61eb"
            width="100%"
            height="167"
            className="rounded-lg"
          >
            <a href="https://project-unplayed.itch.io/exchange-ventures-profit-pursuit">Exchange Ventures: Profit Pursuit by Project_Unplayed</a>
          </iframe>
        </div>
      </div>
      {/* See Game Dev Portfolio Button for games section */}
      <div className="flex justify-center mt-6">
        <a
          href="https://project-unplayed.itch.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 transition-all duration-300 ease-in-out"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex items-center space-x-2">
            <Gamepad2 size={20} /> {/* Gamepad Icon */}
            <span>See More Games</span>
          </span>
        </a>
      </div>

      {/* Artificial Intelligence Section */}
      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-purple-700 flex items-center justify-center space-x-2">
        <Brain size={24} /> <span>Artificial Intelligence</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6 sm:gap-8">
        {/* Existing Reinforcement Learning Project */}
        <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
          <iframe
            title="Car Reinforcement Learning (live demo)"
            frameBorder="0"
            src="https://itch.io/embed/2688268?bg_color=6382b0&amp;link_color=0a61eb"
            width="100%"
            height="167"
            className="rounded-lg"
          >
            <a href="https://project-unplayed.itch.io/car-reinforcement-learning-demo">Car Reinforcement Learning (live demo) by Project_Unplayed</a>
          </iframe>
        </div>

        {/* NoAI-LG Project */}
        <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col items-center">
          <h4 className="text-lg sm:text-xl font-semibold mb-3 text-gray-800">NoAI-LG (AI for The Last Guardian)</h4>
          <img
            src="https://placehold.co/400x200/D4EDDA/155724?text=NoAI-LG" // Placeholder image for NoAI-LG
            alt="NoAI-LG Project Preview"
            className="w-full h-auto rounded-lg mb-4 object-cover border border-gray-200"
            style={{ maxHeight: '200px' }}
          />
          <a
            href="https://github.com/BitWattr/NoAI-LG"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out text-base sm:text-lg"
          >
            GitHub Repository
          </a>
        </div>

        {/* Koppara Neural Network in GDscript Project */}
        <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col items-center">
          <h4 className="text-lg sm:text-xl font-semibold mb-3 text-gray-800">Koppara Neural Network in GDscript</h4>
          <img
            src="https://placehold.co/400x200/FFE0B2/FF5722?text=Koppara+NN" // Placeholder image for Koppara NN
            alt="Koppara Neural Network Project Preview"
            className="w-full h-auto rounded-lg mb-4 object-cover border border-gray-200"
            style={{ maxHeight: '200px' }}
          />
          <a
            href="https://github.com/ArchBase/Koppara-Neural-Network-in-GDscript"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out text-base sm:text-lg"
          >
            GitHub Repository
          </a>
        </div>

        {/* ran-optimizer Project */}
        <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col items-center">
          <h4 className="text-lg sm:text-xl font-semibold mb-3 text-gray-800">RAN Optimizer</h4>
          <img
            src="https://placehold.co/400x200/B2EBF2/00796B?text=RAN+Optimizer" // Placeholder image for RAN Optimizer
            alt="RAN Optimizer Project Preview"
            className="w-full h-auto rounded-lg mb-4 object-cover border border-gray-200"
            style={{ maxHeight: '200px' }}
          />
          <a
            href="https://github.com/ArchBase/ran-optimizer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out text-base sm:text-lg"
          >
            GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
