import React from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Timeline from './components/Timeline';
import ContactForm from './components/ContactForm';

import './App.css';

function App() {
  return (
    <div>
      <ParticleBackground />
      <Navbar />
      <Home />
      <Timeline />
      <ContactForm />
      </div>
  );
}

export default App;


