import React from 'react';
import Slider2 from '../components/slider-2';
import About from '../components/About';
import Products from '../components/Products';
import Applications from '../components/Applications';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Slider2 />
      
      <section className="py-20 bg-gray-50">
        <About />
      </section>
      
      <section className="py-20 bg-white">
        <Products />
      </section>
      
      <section className="py-20 bg-gray-50">
        <Applications />
      </section>
      
      <section className="py-20 bg-white">
        <Contact />
      </section>
    </div>
  );
};

export default Home;