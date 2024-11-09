import React from 'react';
import Hero from '../components/Home/Hero';
import Stats from '../components/Home/Stats';
import Recognition from '../components/Home/Recognition';
import Features from '../components/Home/Features';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Recognition />
      <Features/>
    </>
  );
};

export default Home;