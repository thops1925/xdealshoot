import React, { useState } from 'react';
import { Contact, Gallery, Home } from './pages';
import { Album, Dropdown, Footer, Navbar } from './components';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [isOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!isOpen);

  return (
    <div className='w-full overflow-hidden bg-gradient-to-l from-slate-50 to-transparent' >
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/album/:id" element={<Album />} />
        <Route path="/images/:id" element={<Album />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
