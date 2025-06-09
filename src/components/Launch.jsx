import React from 'react';

function Launch() {
  return (
    <div className="text-center p-6 sm:p-8 bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300 max-w-md mx-auto">
      {/* Adjusted font sizes for better responsiveness */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-4 animate-fade-in-up">Hey There 👋</h2>
      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light animate-fade-in-up animation-delay-300">I'm Akshay</p>
    </div>
  );
}

export default Launch;
