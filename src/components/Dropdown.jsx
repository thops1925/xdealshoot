import React from 'react';
import { Link } from 'react-router-dom';

export default function Dropdown({ toggle, isOpen }) {
  const dropdownClass = isOpen ? 'flex flex-col justify-center h-screen items-center font-bold font-serif text-gray-600 z-20 inset-0 mt-16 mb-56 fixed bg-gray-200 md:hidden' : 'hidden';

  return (
    <div className={dropdownClass} onClick={toggle}>
      <Link className="p-4" to="/">
        Home
      </Link>
      <Link className="p-4" to="/Gallery">
        Gallery
      </Link>
      <Link className="p-4" to="/Contact">
        Contact
      </Link>
    </div>
  );
}
