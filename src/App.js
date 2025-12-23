import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Achievements from './components/Achievements';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Achievements />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
