import React, { useState, useRef, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import logo from "./Images/logo.png";

export default function App() {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ left: 8, top: 80, width: 260 });
  const btnRef = useRef(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // compute & set dropdown position anchored to the left edge of button
  const computePosition = () => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const viewportW = window.innerWidth;
    const desiredWidth = viewportW < 480 ? Math.min(viewportW - 16, 320) : 320; // responsive width
    let left = Math.round(rect.left); // left edge of the Services button
    // clamp so it won't overflow viewport
    const margin = 8;
    if (left + desiredWidth > viewportW - margin) {
      left = Math.max(margin, viewportW - desiredWidth - margin);
    }
    if (left < margin) left = margin;
    const top = Math.round(rect.bottom + 8); // a few px below button (viewport coords)
    setPos({ left, top, width: desiredWidth });
  };

  // open menu (compute pos then open)
  const openDropdown = () => {
    computePosition();
    setOpen(true);
  };

  // close menu
  const closeDropdown = () => setOpen(false);

  // close when clicking outside dropdown or the button
  useEffect(() => {
    function handleDocClick(e) {
      if (
        dropdownRef.current &&
        btnRef.current &&
        !dropdownRef.current.contains(e.target) &&
        !btnRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }
    function handleKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("click", handleDocClick);
    window.addEventListener("keydown", handleKey);
    // reposition on resize/scroll while open
    function onResizeScroll() {
      if (open) computePosition();
    }
    window.addEventListener("resize", onResizeScroll);
    window.addEventListener("scroll", onResizeScroll, { passive: true });

    return () => {
      window.removeEventListener("click", handleDocClick);
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("resize", onResizeScroll);
      window.removeEventListener("scroll", onResizeScroll);
    };
  }, [open]);

  const goToService = (section) => {
    setOpen(false);
    navigate("/services", { state: { openSection: section } });
  };

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

            {/* Services button */}
            <div className="relative">
              <button
                ref={btnRef}
                onClick={(e) => {
                  e.stopPropagation();
                  if (!open) openDropdown();
                  else closeDropdown();
                }}
                className="text-gray-700 hover:text-green-600 font-medium"
                aria-expanded={open}
                aria-haspopup="true"
              >
                Services
              </button>

              {/* Dropdown rendered as fixed positioned element (precise positioning) */}
              <AnimatePresence>
                {open && (
                  <motion.div
                    ref={dropdownRef}
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                    style={{
                      position: "fixed",
                      left: pos.left,
                      top: pos.top,
                      width: pos.width,
                    }}
                    className="bg-white rounded-md shadow-lg border border-gray-100 z-50"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ul className="p-2 space-y-1">
                      <li>
                        <button
                          onClick={() => goToService("digital")}
                          className="block w-full text-left px-3 py-2 rounded hover:bg-gray-50 text-sm text-gray-700"
                        >
                          Energy Digital Transformation
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => goToService("consultancy")}
                          className="block w-full text-left px-3 py-2 rounded hover:bg-gray-50 text-sm text-gray-700"
                        >
                          Consultancy Services
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => goToService("data")}
                          className="block w-full text-left px-3 py-2 rounded hover:bg-gray-50 text-sm text-gray-700"
                        >
                          Data Domains
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => goToService("digital-ai")}
                          className="block w-full text-left px-3 py-2 rounded hover:bg-gray-50 text-sm text-gray-700"
                        >
                          Digital World (AI & Analytics)
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => goToService("energy")}
                          className="block w-full text-left px-3 py-2 rounded hover:bg-gray-50 text-sm text-gray-700"
                        >
                          Energy Transition
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => goToService("training")}
                          className="block w-full text-left px-3 py-2 rounded hover:bg-gray-50 text-sm text-gray-700"
                        >
                          Learning & Development
                        </button>
                      </li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

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
        </Routes>
      </main>
    </div>
  );
}
