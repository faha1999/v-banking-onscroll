import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';

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
    </>
  );
};
