import './App.css';
import React from "react";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';

function App() {
  return(
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <ContactMe />
    </div>
  );
}

export default App;
