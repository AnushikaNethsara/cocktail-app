"use client";
import React, { useState } from "react";
import NavButton from "../atoms/NavButton";
import { usePathname } from "next/navigation";
import NavLinks from "../molecules/NavLinks";
import Link from "next/link";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleLinkClick = () => {
    setIsOpen(false);
  };
  return (
    <header className="bg-white text-black border-b-4 border-gray-200 shadow-md px-8 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold uppercase">
          The Cocktail Collective
        </Link>
        <nav className="hidden md:flex space-x-4">
          <NavLinks currentPath={pathname} />
        </nav>
        <NavButton
          className="md:hidden flex items-center text-gray-400 hover:text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </NavButton>
      </div>

      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 py-5 flex flex-col item-center justify-center text-center">
          <NavLinks currentPath={pathname} />
        </div>
      )}
    </header>
  );
};

export default NavBar;
