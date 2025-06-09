import React from 'react';

const Contact = React.forwardRef((props, ref) => {
  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen pt-24 py-16 px-5 flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-200 to-white"
    >
      <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Me</h2>
      <p className="text-lg text-gray-700 mb-8">
        Feel free to reach out to me! You can connect with me on:
      </p>
      <div className="flex space-x-6">
        <a
          href="mailto:your.email@example.com" // Replace with your actual email
          className="text-blue-600 hover:text-blue-800 transition-colors duration-200 text-xl font-medium"
        >
          Email
        </a>
        <a
          href="https://linkedin.com/in/yourprofile" // Replace with your LinkedIn profile
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition-colors duration-200 text-xl font-medium"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/yourusername" // Replace with your GitHub profile
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition-colors duration-200 text-xl font-medium"
        >
          GitHub
        </a>
      </div>
    </section>
  );
});

export default Contact;
