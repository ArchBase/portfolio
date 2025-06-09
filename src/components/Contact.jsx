import React from 'react';

function Contact() {
  return (
    <div className="text-center p-6 sm:p-8 bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300 max-w-md mx-auto">
      {/* Adjusted font sizes for better responsiveness */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-4 text-white">Get in Touch! 📞</h2>
      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-white">I'm always open to new opportunities and collaborations.</p>
      <div className="mt-6 sm:mt-8">
        <a
          href="mailto:akshay.example@email.com"
          className="inline-block bg-white text-teal-600 font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out text-base sm:text-lg md:text-xl"
        >
          Email Me
        </a>
      </div>
    </div>
  );
}

export default Contact;
