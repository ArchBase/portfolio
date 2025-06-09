import React from 'react';

const AboutMe = React.forwardRef((props, ref) => {
  return (
    <section
      id="about_me"
      ref={ref}
      className="min-h-screen pt-24 py-16 px-5 flex flex-col justify-center items-center text-center bg-gradient-to-br from-white to-blue-200"
    >
      <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto">
        As a BTech student, I'm passionate about exploring cutting-edge technologies in game development, machine learning, AI, and reinforcement learning. I enjoy building interactive experiences and solving complex problems. My goal is to contribute to innovative projects that push the boundaries of what's possible in these exciting fields.
      </p>
    </section>
  );
});

export default AboutMe;
