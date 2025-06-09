import React from 'react';

function Projects() {
  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-xl mt-8">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Project Gallery 🚀</h2>
      <p className="text-lg mb-10 text-center text-gray-600">
        I've done a lot of projects in the fields of game industry, machine learning, AI, Reinforcement learning, etc.
      </p>

      <h3 className="text-3xl font-semibold mb-6 text-blue-700">My Games 🎮</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
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
        <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
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

      <h3 className="text-3xl font-semibold mb-6 text-purple-700">Reinforcement Learning 🧠</h3>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
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
