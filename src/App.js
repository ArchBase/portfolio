import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar'; // Import the Navbar component
import Launch from './pages/Launch';     // Import the Launch section component
import Projects from './pages/Projects'; // Import the Projects section component
import Contact from './pages/Contact';   // Import the Contact section component
import AboutMe from './pages/AboutMe';   // Import the AboutMe section component

const App = () => {
  // State to keep track of the currently active navigation link
  const [activeSection, setActiveSection] = useState('Launch');

  // Refs for each section to easily scroll to them and observe their visibility
  const launchRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const aboutMeRef = useRef(null);

  // Array of section configurations for easier mapping and navigation
  const sections = [
    { id: 'Launch', title: 'Launch', ref: launchRef },
    { id: 'projects', title: 'Projects', ref: projectsRef },
    { id: 'contact', title: 'Contact', ref: contactRef },
    { id: 'about_me', title: 'About me', ref: aboutMeRef },
  ];

  // Effect hook to set up the Intersection Observer for active section highlighting
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => {
      sections.forEach(section => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, [sections]); // Ensure sections is stable or handle re-creation

  // Handler for smooth scrolling when a navigation link is clicked
  const handleScroll = (ref, id) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="font-sans bg-[#859fb6] min-h-screen text-gray-800">
      <Navbar sections={sections} activeSection={activeSection} handleScroll={handleScroll} />

      {/* Render each section component, passing its ref */}
      <Launch ref={launchRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
      <AboutMe ref={aboutMeRef} />
    </div>
  );
};

export default App;
