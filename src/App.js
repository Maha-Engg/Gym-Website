import React from 'react';
import Navbar from './components/Navbar.jsx';
import Header from './components/Header.jsx';
import Feature from './components/Feature.jsx';
import Offer from './components/Offer';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import './App.css';

function App() {
  return (
    <div>
    <Navbar></Navbar>
    <Header></Header>
    <Feature></Feature>
    <Offer></Offer>
    <About></About>
    <Contact></Contact>
    </div>
  );
}

export default App;
