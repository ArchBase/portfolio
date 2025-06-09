import React from 'react';

function Contact() {
  return (
    <div className="text-center p-8 bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
      <h2 className="text-5xl md:text-7xl font-extrabold mb-4 text-white">Get in Touch! 📞</h2>
      <p className="text-2xl md:text-4xl font-light text-white">I'm always open to new opportunities and collaborations.</p>
      {/* You can add a contact form, email, or social links here */}
      <div className="mt-8">
        <a
          href="mailto:akshay.example@email.com"
          className="inline-block bg-white text-teal-600 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out text-lg md:text-xl"
        >
          Email Me
        </a>
      </div>
    </div>
  );
}

export default Contact;
