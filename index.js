import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Missingnumber from './ds_algorithms/Find_missing_Number';
import Removeduplicates from './ds_algorithms/Remove_duplicates.js';
import Recursionvalue from './ds_algorithms/Recursion.js';
import Rotatedarray from './ds_algorithms/Rotate_array.js';
import ReactTask from './App.js';
import ReactTask2 from './Page2.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReactTask/>
    <ReactTask2/>
    <Missingnumber />
    <Removeduplicates />
    <Recursionvalue />
    <Rotatedarray />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
