import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Trips from './components/Trips';
import Trip from './components/Trip';
import './App.css';
import Footer from './components/Footer';
import Photos from './components/Photos';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route path='/about' Component={About} />
        <Route path='/contact' Component={Contact} />
        <Route path='/trips' Component={Trips} />
        <Route path='/trips/:id' Component={Trip} />
        <Route path='/photos' Component={Photos} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
