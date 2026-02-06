import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Partners from '../components/Partners';
import Products from '../components/Products';

const Home = () => {
  return (
    <div className="pt-20"> 
      <Hero />
      <About />
      <Partners />
      <Products />
    </div>
  );
};

export default Home;