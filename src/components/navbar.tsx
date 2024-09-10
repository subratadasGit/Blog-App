"use client";

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "@/components/ui/ModeToggle"; // Corrected import statement

const Navbar = () => {
  return (
    <nav className="border-b sticky top-0 bg-background-50 dark:bg-background-900 backdrop-blur p-4 z-10 rounded-none">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black dark:text-white text-lg font-bold">
          <Link href="/">
            SubratasBlog
          </Link>
        </div>
        <div className="hidden md:flex space-x-4 text-black dark:text-white items-center">
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
          <ModeToggle />
        </div>
        <div className='hidden md:flex space-x-4'>
          <Button variant="outline">Login</Button>
          <Button variant="outline">Signup</Button>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="text-black dark:text-white focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-4">
                <Link href="/" className="block text-black dark:text-white p-2">
                  Home
                </Link>
                <Link href="/about" className="block text-black dark:text-white p-2">
                  About
                </Link>
                <Link href="/Blog" className="block text-black dark:text-white p-2">
                  Blog
                </Link>
                <Link href="/contact" className="block text-black dark:text-white p-2">
                  Contact
                </Link>
                <Button variant="outline" className="w-full">Login</Button>
                <Button variant="outline" className="w-full">Signup</Button>
                <ModeToggle />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
