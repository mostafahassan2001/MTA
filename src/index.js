import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Nav from './navbar';
import Tv from './Tv';
import Movies from './movies';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
   <BrowserRouter>
   <Nav/>
   <Routes>
   <Route path="/" element={<Home/>} />
    <Route path="/movies" element={<Movies/>} />
    <Route path="/tv" element={<Tv/>} />
   </Routes>
   </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
