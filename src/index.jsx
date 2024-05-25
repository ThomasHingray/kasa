import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './sass/style.css';
import Header from './components/Header';
import Error from './Pages/Error';
import Footer from './components/Footer';
import About from './Pages/About';
import Lodging from './Pages/Lodging';
import Home from './Pages/Home'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>   
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/lodging/:id" element={<Lodging/>} />
          <Route path="*" element={<Error/>} />
        </Routes>   
      <Footer />
    </Router>
  </React.StrictMode>
);

