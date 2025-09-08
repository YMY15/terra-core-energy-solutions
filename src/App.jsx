import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import GIS from "./pages/GIS"; // GIS main page

import logo from "./Images/logo.png";

export default function App() {
  return (
    <div className="font-sans">
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.32 }}
        className="fixed top-0 left-0 right-0 bg-white shadow-md z-50"
      >
        <div className="w-full flex items-center justify-between px-6 py-3">
          {/* Logo pinned to left */}
          <Link to="/" className="flex-shrink-0">
            <motion.img
              src={logo}
              alt="TerraCore Energy Logo"
              className="h-20 w-auto"
              whileHover={{ scale: 1.06 }}
            />
          </Link>

          {/* Nav links on the right */}
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-green-600">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-green-600">
              About
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-green-600">
              Services
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-green-600">
              Contact
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* MAIN CONTENT */}
      <main className="pt-28 px-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />

          {/* GIS route */}
          <Route path="/services/GIS" element={<GIS />} />
        </Routes>
      </main>
    </div>
  );
}
