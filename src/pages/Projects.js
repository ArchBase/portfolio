import React from 'react';

const Projects = React.forwardRef((props, ref) => {
  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen pt-24 py-16 px-5 bg-gradient-to-br from-white to-blue-200"
    >
      <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Project Gallery</h2>
      <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto text-center">
        I've worked on a variety of projects in the fields of game development, machine learning, AI, and reinforcement learning.
      </p>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4">My Games</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        {/* Itch.io iframe for Assault Auto demo */}
        <div className="w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <iframe
            title="Assault Auto Demo"
            frameBorder="0"
            src="https://itch.io/embed/2801178?border_width=0&amp;bg_color=6382b0&amp;link_color=0a61eb"
            width="100%"
            height="165"
            className="rounded-t-lg"
          >
            <a href="https://project-unplayed.itch.io/assault-auto-demo">Assault Auto demo by Project_Unplayed</a>
          </iframe>
          <div className="p-4 bg-gray-100 text-center text-sm text-gray-600">
            Assault Auto demo
          </div>
        </div>

        {/* Itch.io iframe for Exchange Ventures */}
        <div className="w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <iframe
            title="Exchange Ventures: Profit Pursuit"
            frameBorder="0"
            src="https://itch.io/embed/2835736?bg_color=6382b0&amp;link_color=0a61eb"
            width="100%"
            height="167"
            className="rounded-t-lg"
          >
            <a href="https://project-unplayed.itch.io/exchange-ventures-profit-pursuit">Exchange Ventures: Profit Pursuit by Project_Unplayed</a>
          </iframe>
          <div className="p-4 bg-gray-100 text-center text-sm text-gray-600">
            Exchange Ventures: Profit Pursuit
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-12">Reinforcement Learning</h3>
      <div className="grid grid-cols-1 justify-items-center">
        {/* Itch.io iframe for Car Reinforcement Learning */}
        <div className="w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <iframe
            title="Car Reinforcement Learning Demo"
            frameBorder="0"
            src="https://itch.io/embed/2688268?bg_color=6382b0&amp;link_color=0a61eb"
            width="100%"
            height="167"
            className="rounded-t-lg"
          >
            <a href="https://project-unplayed.itch.io/car-reinforcement-learning-demo">Car Reinforcement Learning (live demo) by Project_Unplayed</a>
          </iframe>
          <div className="p-4 bg-gray-100 text-center text-sm text-gray-600">
            Car Reinforcement Learning (Live Demo)
          </div>
        </div>
      </div>
    </section>
  );
});

export default Projects;
