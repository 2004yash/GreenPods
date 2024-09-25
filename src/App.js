import React from 'react';
import '../src/components/styles.css';
import Header from './components/Header';
import Hero from './components/Hero';
import PricingTables from './components/PricingTables';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <PricingTables />
      <About />
      <Contact />
    </div>
  );
}

export default App;
