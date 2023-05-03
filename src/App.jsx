import React, { useState } from 'react';
import { Contact, Gallery, Home } from './pages';
import { Album, Dropdown, Footer, Navbar } from './components';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [isOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!isOpen);

  return (
    <div div className='w-full overflow-hidden  bg-slate-50 --tw-gradient-from: inherit var(--tw-gradient-from-position)' >
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route path="/" index element={<Home />} exact />
        <Route path="/Gallery" element={<Gallery />} exact />
        <Route path="/Contact" element={<Contact />} exact />
        <Route path="/album/:id" element={<Album />} exact />
        <Route path="/images/:id" element={<Album />} exact />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
