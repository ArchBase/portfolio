import React from 'react';

const Navbar = ({ sections, activeSection, handleScroll }) => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 shadow-md z-50 rounded-b-lg">
      <ul className="flex justify-center items-center py-4 px-6 list-none m-0 p-0 overflow-hidden">
        {sections.map((section) => (
          <li key={section.id} className="mx-2">
            <a
              href={`#${section.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(section.ref, section.id);
              }}
              className={`block px-4 py-2 text-white text-center no-underline rounded-md transition-colors duration-200
                ${activeSection === section.id ? 'bg-[#0476aa]' : 'hover:bg-gray-700'}`}
            >
              {section.title === 'Launch' ? 'Home' : section.title.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase())}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
