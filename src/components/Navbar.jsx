import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Import icons for menu and close

// Navbar component receives activeSection as a prop
function Navbar({ activeSection }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar visibility

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Function to close sidebar when a navigation link is clicked
  const handleNavLinkClick = () => {
    setIsSidebarOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-lg z-50 rounded-b-lg">
      {/* Mobile Menu Button (Hamburger Icon) */}
      <div className="md:hidden flex justify-between items-center p-4">
        <span className="text-xl font-bold">Akshay's Portfolio</span> {/* Site Title/Logo for mobile */}
        <button
          onClick={toggleSidebar}
          className="text-white focus:outline-none"
          aria-label="Open menu"
        >
          {isSidebarOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Desktop Navigation (always visible on md screens and up) */}
      <ul className="hidden md:flex justify-center p-0 m-0 list-none overflow-hidden">
        <li>
          <a
            href="#Launch"
            className={`block py-3 px-4 sm:py-4 sm:px-6 text-center no-underline transition duration-300 ease-in-out hover:bg-gray-700 rounded-lg m-1 text-sm sm:text-base
              ${activeSection === 'Launch' ? 'bg-blue-600 text-white shadow-md' : 'text-white'}`
            }
          >
            Launch
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={`block py-3 px-4 sm:py-4 sm:px-6 text-center no-underline transition duration-300 ease-in-out hover:bg-gray-700 rounded-lg m-1 text-sm sm:text-base
              ${activeSection === 'projects' ? 'bg-blue-600 text-white shadow-md' : 'text-white'}`
            }
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={`block py-3 px-4 sm:py-4 sm:px-6 text-center no-underline transition duration-300 ease-in-out hover:bg-gray-700 rounded-lg m-1 text-sm sm:text-base
              ${activeSection === 'contact' ? 'bg-blue-600 text-white shadow-md' : 'text-white'}`
            }
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="#about_me"
            className={`block py-3 px-4 sm:py-4 sm:px-6 text-center no-underline transition duration-300 ease-in-out hover:bg-gray-700 rounded-lg m-1 text-sm sm:text-base
              ${activeSection === 'about_me' ? 'bg-blue-600 text-white shadow-md' : 'text-white'}`
            }
          >
            About me
          </a>
        </li>
      </ul>

      {/* Mobile Sidebar (conditionally rendered) */}
      {/* Overlay to dim background and capture clicks to close sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar} // Close sidebar when clicking outside
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:hidden
          ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}` // Slide in/out effect
        }
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleSidebar}
            className="text-white focus:outline-none"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>
        <ul className="flex flex-col p-4">
          <li>
            <a
              href="#Launch"
              onClick={handleNavLinkClick}
              className={`block py-3 px-4 text-white text-lg transition duration-300 ease-in-out hover:bg-gray-700 rounded-lg m-1
                ${activeSection === 'Launch' ? 'bg-blue-600 shadow-md' : ''}`
              }
            >
              Launch
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={handleNavLinkClick}
              className={`block py-3 px-4 text-white text-lg transition duration-300 ease-in-out hover:bg-gray-700 rounded-lg m-1
                ${activeSection === 'projects' ? 'bg-blue-600 shadow-md' : ''}`
              }
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={handleNavLinkClick}
              className={`block py-3 px-4 text-white text-lg transition duration-300 ease-in-out hover:bg-gray-700 rounded-lg m-1
                ${activeSection === 'contact' ? 'bg-blue-600 shadow-md' : ''}`
              }
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#about_me"
              onClick={handleNavLinkClick}
              className={`block py-3 px-4 text-white text-lg transition duration-300 ease-in-out hover:bg-gray-700 rounded-lg m-1
                ${activeSection === 'about_me' ? 'bg-blue-600 shadow-md' : ''}`
              }
            >
              About me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
