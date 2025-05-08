import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 font-sans">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer className="bg-blue-600 text-white p-4 text-center">
          <p>© {new Date().getFullYear()} Aditya. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
