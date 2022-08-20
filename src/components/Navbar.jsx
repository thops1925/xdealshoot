import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar({ toggle }) {
    return (
        <nav className="flex px-4 sticky z-20 top-0 pt-2 justify-between  md:justify-center md:items-center  h-16 bg-white text-black  mx-90 shadow-sm font-mono "
        >
            <Link to="/" className="h-12 w-12 rounded-full text-s bg-black text-gray-200 flex select-none border-4 border-red-900 justify-center  items-center overflow-hidden  justify md:ml-32 box-content">
                Thopz
            </Link>

            <div className="px-4 cursor-pointer md:hidden">
                <svg
                    onClick={toggle}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-6 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </div>
            <div className="md:mx-32 md:flex item-content justify-content hidden">
                <Link className="p-4 font-poppins font-semibold" to="/">
                    Home
                </Link>
                <Link className="p-4 font-poppins font-semibold" to="/Gallery">
                    Gallery
                </Link>
                <Link className="p-4 font-poppins font-semibold" to="/Contact">
                    Contact Us
                </Link>
                {/* <Link className="p-4" to="/About">
          Stories
        </Link> */}
            </div>
        </nav>
    );
}
