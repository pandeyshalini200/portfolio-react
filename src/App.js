import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Experience from './Components/Experience';
import Contact from './Components/Contact';
import { Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';

const App = ()=>  {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/experience' element={<Experience/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Home />
      <About/>
      <Experience/>
      <Contact />
    </>
  );
}

export default App;
