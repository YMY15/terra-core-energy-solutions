import { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaDatabase, FaTools, FaRobot, FaLeaf, FaChalkboardTeacher } from "react-icons/fa";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import logo from "./Images/logo.png";

export default function App() {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const goToService = (section) => {
    setShowDropdown(false);
    navigate("/services", { state: { openSection: section } });
  };

  return (
    <div className="font-sans">
      {/* Navbar */}
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

          {/* Services Dropdown */}
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
                  className="absolute left-0 mt-2 w-80 bg-white shadow-lg rounded-md p-4 grid gap-3 z-50"
                >
                  <button
                    onClick={() => goToService("digital")}
                    className="flex items-center space-x-3 hover:text-green-600"
                  >
                    <FaDatabase className="text-green-600" />
                    <span>Energy Digital Transformation</span>
                  </button>

                  <button
                    onClick={() => goToService("consultancy")}
                    className="flex items-center space-x-3 hover:text-green-600"
                  >
                    <FaTools className="text-green-600" />
                    <span>Consultancy Services</span>
                  </button>

                  <button
                    onClick={() => goToService("data")}
                    className="flex items-center space-x-3 hover:text-green-600"
                  >
                    <FaDatabase className="text-green-600" />
                    <span>Data Domains</span>
                  </button>

                  <button
                    onClick={() => goToService("digital-ai")}
                    className="flex items-center space-x-3 hover:text-green-600"
                  >
                    <FaRobot className="text-green-600" />
                    <span>Digital World (AI & Analytics)</span>
                  </button>

                  <button
                    onClick={() => goToService("energy")}
                    className="flex items-center space-x-3 hover:text-green-600"
                  >
                    <FaLeaf className="text-green-600" />
                    <span>Energy Transition</span>
                  </button>

                  <button
                    onClick={() => goToService("training")}
                    className="flex items-center space-x-3 hover:text-green-600"
                  >
                    <FaChalkboardTeacher className="text-green-600" />
                    <span>Learning & Development</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/contact">Contact</Link>
        </div>
      </motion.nav>

      {/* Page content */}
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
