import React, { useState } from 'react';
import { Contact, Gallery, Home } from './pages';
import { Dropdown, Footer, Navbar } from './components';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [isOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!isOpen);

  return (
    <div className='w-full overflow-hidden '>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />

      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
