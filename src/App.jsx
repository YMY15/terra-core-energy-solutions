import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import logo from "./Images/logo.png";

export default function App() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="font-sans">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white text-gray-600 px-10 flex justify-between items-center fixed top-0 left-0 right-0 shadow-md z-50 h-24"
      >
        {/* Logo */}
        <Link to="/">
          <motion.img
            src={logo}
            alt="TerraCore Energy Logo"
            className="h-16 w-auto"
            whileHover={{ scale: 1.1 }}
          />
        </Link>

        {/* Nav Links */}
        <div className="flex space-x-10 text-lg font-medium relative">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <span className="cursor-pointer">Services</span>

            <AnimatePresence>
              {showDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md p-4 grid grid-cols-1 gap-2 z-50"
                >
                  <Link to="/services#digital">Energy Digital Transformation</Link>
                  <Link to="/services#consultancy">Consultancy Services</Link>
                  <Link to="/services#data">Data Domains</Link>
                  <Link to="/services#digital-ai">Digital World (AI & Analytics)</Link>
                  <Link to="/services#energy">Energy Transition</Link>
                  <Link to="/services#training">Learning & Development</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/contact">Contact</Link>
        </div>
      </motion.nav>

      {/* Main content */}
      <motion.div className="pt-28 px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </div>
  );
}
