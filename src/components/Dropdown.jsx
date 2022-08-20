import React from 'react';
import { Link } from 'react-router-dom';

export default function Dropdown({ toggle, isOpen }) {
    return (
        <div
            className={isOpen
                ? 'flex flex-col justify-center h-screen  items-center font-bold font-serif text-gray-600 z-10 inset-0  mt-16 mb-56 fixed bg-gray-200  md:hidden'
                : ' hidden'
            }
            onClick={toggle}
        >
            <Link className="p-4" to="/">
                Home
            </Link>
            <Link className="p-4" to="/Gallery">
                Gallery
            </Link>
            <Link className="p-4" to="/Contact">
                Contact
            </Link>
            {/* <Link className="p-4" to="/About">
        About
      </Link> */}
        </div>
    );
}
