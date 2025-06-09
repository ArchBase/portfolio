import React from 'react';

const Launch = React.forwardRef((props, ref) => {
  return (
    <section
      id="Launch"
      ref={ref}
      className="min-h-screen pt-24 py-16 px-5 flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-200 to-white"
    >
      <h2 className="text-5xl font-extrabold text-gray-900 mb-4 animate-fade-in-down">Hey There</h2>
      <p className="text-3xl font-medium text-gray-700 animate-fade-in-up">I'm Akshay</p>
    </section>
  );
});

export default Launch;
