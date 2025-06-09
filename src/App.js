import React, { useEffect, useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Launch from './components/Launch';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';

function App() {
  // State to keep track of the currently active section
  const [activeSection, setActiveSection] = useState('Launch');

  // Create refs for each section to easily access their DOM elements
  const launchRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const aboutMeRef = useRef(null);

  // Array of sections with their IDs and corresponding refs
  const sections = [
    { id: 'Launch', ref: launchRef },
    { id: 'projects', ref: projectsRef },
    { id: 'contact', ref: contactRef },
    { id: 'about_me', ref: aboutMeRef },
  ];

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
  }, [sections]); // Re-run effect if sections array changes (unlikely here but good practice)

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
  }, [sections]); // Re-run effect if sections array changes

  return (
    <div className="min-h-screen bg-blue-300 font-inter text-gray-800">
      {/* Navbar component, passing the active section as a prop */}
      <Navbar activeSection={activeSection} />

      {/* Main content sections, each linked to its ref */}
      <section id="Launch" ref={launchRef} className="pt-20 px-5 h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-500 text-white rounded-lg shadow-lg m-4">
        <Launch />
      </section>

      <section id="projects" ref={projectsRef} className="pt-20 px-5 h-screen bg-gray-100 text-gray-800 rounded-lg shadow-lg m-4">
        <Projects />
      </section>

      <section id="contact" ref={contactRef} className="pt-20 px-5 h-screen flex items-center justify-center bg-gradient-to-br from-green-400 to-teal-500 text-white rounded-lg shadow-lg m-4">
        <Contact />
      </section>

      <section id="about_me" ref={aboutMeRef} className="pt-20 px-5 h-screen flex items-center justify-center bg-orange-100 text-gray-800 rounded-lg shadow-lg m-4">
        <AboutMe />
      </section>
    </div>
  );
}

export default App;
