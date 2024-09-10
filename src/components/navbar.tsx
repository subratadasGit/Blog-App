"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import clsx from 'clsx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="border-b sticky top-0 bg-background-50 backdrop-blur p-4 z-10 rounded-none">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black text-lg font-bold">
          <Link href="/">
            SubratasBlog
          </Link>
        </div>
        <div className="hidden md:flex space-x-4 text-black">
          <Link href="/">
            Home
          </Link>
          <Link href="/about">
            About
          </Link>
          <Link href="/Blog">
            Blog
          </Link>
          <Link href="/contact">
            Contact
          </Link>
        </div>
        <div className='hidden md:flex space-x-4 shadow-inner'>
          <Button variant="outline">Login</Button>
          <Button variant="outline">Signup</Button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      <div className={clsx("md:hidden transition-all duration-300 ease-in-out overflow-hidden", {
        "max-h-0": !isOpen,
        "max-h-screen": isOpen
      })}>
        <Link href="/" className="block text-black p-2">
          Home
        </Link>
        <Link href="/about" className="block text-black p-2">
          About
        </Link>
        <Link href="/Blog" className="block text-black p-2">
          Blog
        </Link>
        <Link href="/contact" className="block text-black p-2">
          Contact
        </Link>
        <Button variant="outline" className="block w-full">Login</Button>
        <Button variant="outline" className="block w-full">Signup</Button>
      </div>
    </nav>
  );
};

export default Navbar;
