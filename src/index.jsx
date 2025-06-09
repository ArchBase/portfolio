import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'; // Import the global CSS

// Get the root element from the HTML
const container = document.getElementById('root');
// Create a root for the React application
const root = createRoot(container);

// Render the main App component into the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
