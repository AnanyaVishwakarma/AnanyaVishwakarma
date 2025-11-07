import React, { useState } from 'react';
import Header from './components/Layout/Header/Header.jsx';
import Hero from './components/Sections/Hero/Hero.jsx';
import About from './components/Sections/About/About.jsx';
import Skills from './components/Sections/Skills/Skills.jsx';
import Projects from './components/Sections/Projects/Projects.jsx';
import Contact from './components/Sections/Contacts/Contacts.jsx';
import Footer from './components/Layout/Footer/Footer.jsx';
import { useScrollspy } from './Hooks/useScrollspy.js';
import './App.css';

const App = () => {
  const activeSection = useScrollspy(['home', 'about', 'skills', 'projects', 'contact']);

  return (
    <div className="App">
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;