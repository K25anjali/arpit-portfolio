import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedCursor from './components/AnimatedCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="bg-[#0a0a0a] text-gray-100 min-h-screen font-sans overflow-x-hidden">
        <AnimatedCursor />
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;