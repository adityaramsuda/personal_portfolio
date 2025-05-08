import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 fixed w-full top-0 z-10">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Aditya's Portfolio</h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link to="/skills" className="hover:underline">
              Skills
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:underline">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
