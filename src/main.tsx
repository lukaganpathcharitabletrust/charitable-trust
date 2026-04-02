import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import './index.css'; // Note: If your main CSS file is named something else (like App.css), change this line!

const rootElement = document.getElementById('root') as HTMLElement;

if (rootElement.hasChildNodes()) {
  // This runs in production on Netlify after react-snap does its job
  hydrateRoot(
    rootElement,
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  // This runs when you use 'npm run dev' on your local machine
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}