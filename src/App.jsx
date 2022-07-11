import React from 'react';
import { Navbar } from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
