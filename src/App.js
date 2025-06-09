import React, { useEffect, useState, useRef, useMemo } from 'react';
// Corrected import paths to include .jsx extension and 'components/' subdirectory
import Navbar from './components/Navbar.jsx';
import Launch from './components/Launch.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import AboutMe from './components/AboutMe.jsx';

function App() {
  // State to keep track of the currently active section
  const [activeSection, setActiveSection] = useState('Launch');

  // Create refs for each section to easily access their DOM elements
  const launchRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const aboutMeRef = useRef(null);

  // Use useMemo to ensure the sections array is only created once
  const sections = useMemo(() => [
    { id: 'Launch', ref: launchRef },
    { id: 'projects', ref: projectsRef },
    { id: 'contact', ref: contactRef },
    { id: 'about_me', ref: aboutMeRef },
  ], [launchRef, projectsRef, contactRef, aboutMeRef]);

  // Effect to handle smooth scrolling when a navigation link is clicked
  useEffect(() => {
    const handleNavLinkClick = (e) => {
      // Check if the clicked element or its parent is a navigation link
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault(); // Prevent default anchor link behavior

        // Get the target section ID from the href attribute
        const id = target.getAttribute('href').substring(1); // Remove '#'

        // Find the ref for the target section
        const targetSection = sections.find(section => section.id === id);

        if (targetSection && targetSection.ref.current) {
          // Scroll smoothly to the target section
          targetSection.ref.current.scrollIntoView({
            behavior: 'smooth',
          });
        }
      }
    };

    // Add event listener to the document to handle all clicks
    document.addEventListener('click', handleNavLinkClick);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleNavLinkClick);
    };
  }, [sections]);

  // Effect to observe sections and update activeSection based on visibility
  useEffect(() => {
    // Options for the Intersection Observer
    const observerOptions = {
      root: null, // Observe changes in the viewport
      rootMargin: '0px',
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Set the active section when a section enters the viewport
          setActiveSection(entry.target.id);
        }
      });
    };

    // Create a new Intersection Observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each section ref
    sections.forEach(section => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    // Cleanup the observer on component unmount
    return () => {
      sections.forEach(section => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, [sections]);

  return (
    <div className="min-h-screen bg-blue-300 font-inter text-gray-800">
      {/* Navbar component, passing the active section as a prop */}
      <Navbar activeSection={activeSection} />

      {/* Main content sections, each linked to its ref */}
      {/* Adjusted section heights and padding for better responsiveness and vibrant gradients */}
      <section
        id="Launch"
        ref={launchRef}
        className="pt-20 px-5 min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-lg shadow-lg m-4 py-10"
      >
        <Launch />
      </section>

      <section
        id="projects"
        ref={projectsRef}
        className="pt-20 px-5 min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800 rounded-lg shadow-lg m-4 py-10"
      >
        <Projects />
      </section>

      <section
        id="contact"
        ref={contactRef}
        className="pt-20 px-5 min-h-screen flex items-center justify-center bg-gradient-to-br from-green-500 to-teal-600 text-white rounded-lg shadow-lg m-4 py-10"
      >
        <Contact />
      </section>

      <section
        id="about_me"
        ref={aboutMeRef}
        className="pt-20 px-5 min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 to-yellow-200 text-gray-800 rounded-lg shadow-lg m-4 py-10"
      >
        <AboutMe />
      </section>
    </div>
  );
}

export default App;
