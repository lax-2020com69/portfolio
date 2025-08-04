import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'; // <-- Add this line

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* <-- Wrap your App inside BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Optional performance logging
reportWebVitals();
