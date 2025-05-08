import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Aditya</h1>
        <p className="text-xl mb-6">
          A Web Developer Crafting Modern & Responsive Applications
        </p>
        <Link
          to="/contact"
          className="inline-block bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-blue-100 transition duration-300"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
};

export default Hero;
