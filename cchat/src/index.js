import React from 'react';
import render  from 'react-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// ReactDOM.render(
//   <BrowserRouter>
//       <App />
//   </BrowserRouter>,
//   document.getElementById('root')
// );
