import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // This can be used for global CSS or Tailwind directives
import App from './App'; // Import your App component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
