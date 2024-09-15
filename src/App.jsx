import './App.css';
import Hero from './components/Hero/Hero';
import Scene from './components/Model/Model';  
import Navbar from './components/Navbar/Navbar';
import Reason from './components/Reason/Reason';
import About from './components/About/About';
import Trainers from './components/Trainers/Trainers';
import Pricing from './components/Pricing/Pricing';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { useEffect, useState } from 'react';
import Scene2 from './components/Model2/Model2';

function App() {
  return (
    <div className='app'>
      <div className="main-content">
        <Navbar />
        <Hero />
        <Reason />
        <About />
        <Trainers />
        <Pricing />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
