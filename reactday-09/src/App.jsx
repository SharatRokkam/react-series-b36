// BrowserRouter, Routes, Route, Link and Navlink

import React from "react";
import './App.css'
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Services from "./Components/Services";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <>
    <header>
      <Navbar />
    </header>
      <h2>React Router DOM</h2>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
};

export default App;
