import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { Info } from '../components/Info';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import { AboutData, DiscoverData, SignUpData } from '../data/InfoData';
import { Services } from '../components/Services';

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <Info {...AboutData} />
      <Info {...DiscoverData} />
      <Info {...SignUpData} />
      <Services />
    </>
  );
};
