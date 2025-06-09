import React from 'react';

// Navbar component receives activeSection as a prop
function Navbar({ activeSection }) {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-lg z-50 rounded-b-lg">
      <ul className="flex justify-center p-0 m-0 list-none overflow-hidden">
        {/* Navigation links, dynamically applying 'active' class */}
        <li>
          <a
            href="#Launch"
            className={`block py-4 px-6 text-center no-underline transition duration-300 ease-in-out hover:bg-gray-700 rounded-lg m-1
              ${activeSection === 'Launch' ? 'bg-blue-600 text-white shadow-md' : 'text-white'}`
            }
          >
            Launch
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={`block py-4 px-6 text-center no-underline transition duration-300 ease-in-out hover:bg-gray-700 rounded-lg m-1
              ${activeSection === 'projects' ? 'bg-blue-600 text-white shadow-md' : 'text-white'}`
            }
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={`block py-4 px-6 text-center no-underline transition duration-300 ease-in-out hover:bg-gray-700 rounded-lg m-1
              ${activeSection === 'contact' ? 'bg-blue-600 text-white shadow-md' : 'text-white'}`
            }
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="#about_me"
            className={`block py-4 px-6 text-center no-underline transition duration-300 ease-in-out hover:bg-gray-700 rounded-lg m-1
              ${activeSection === 'about_me' ? 'bg-blue-600 text-white shadow-md' : 'text-white'}`
            }
          >
            About me
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
