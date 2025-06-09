import React from 'react';

function Projects() {
  return (
    <div className="container mx-auto p-4 sm:p-8 bg-white rounded-lg shadow-xl mt-8 max-w-4xl">
      {/* Adjusted font sizes for better responsiveness */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center text-gray-800">Project Gallery 🚀</h2>
      <p className="text-base sm:text-lg mb-8 sm:mb-10 text-center text-gray-600">
        I've done a lot of projects in the fields of game industry, machine learning, AI, Reinforcement learning, etc.
      </p>

      {/* "My Websites" Section */}
      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-green-700">My Websites 🌐</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
        {/* ExamPRO Website */}
        <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
          <h4 className="text-lg sm:text-xl font-semibold mb-3 text-gray-800">ExamPRO</h4>
          <img
            src="/web1.png" // Path to the image in the public folder
            alt="ExamPRO Website Preview"
            className="w-full h-auto rounded-lg mb-4 object-cover"
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
        <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
          <h4 className="text-lg sm:text-xl font-semibold mb-3 text-gray-800">AI Startup Website</h4>
          <img
            src="/web2.png" // Path to the image in the public folder
            alt="AI Startup Website Preview"
            className="w-full h-auto rounded-lg mb-4 object-cover"
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

      {/* Adjusted font sizes for subheadings */}
      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-blue-700">My Games 🎮</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
        <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
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
        <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
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

      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-purple-700">Reinforcement Learning 🧠</h3>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6 sm:gap-8">
        <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
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
      </div>
    </div>
  );
}

export default Projects;