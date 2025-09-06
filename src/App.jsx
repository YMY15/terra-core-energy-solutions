import { Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import logo from "./Images/logo.png";

export default function App() {
  return (
    <div className="font-sans">
      {/* Animated Navbar */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-green-700 text-white px-8 py-4 flex justify-between items-center h-24 shadow-lg"
      >
        {/* Logo with hover + tap motion */}
        <Link to="/">
          <motion.img
            src={logo}
            alt="TerraCore Energy Logo"
            className="h-20 w-auto"
            whileHover={{ scale: 1.15, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </Link>

        {/* Navigation Links */}
        <div className="space-x-8 text-xl font-semibold tracking-wide">
          <motion.div whileHover={{ scale: 1.1, color: "#FFD700" }}>
            <Link to="/">Home</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1, color: "#FFD700" }}>
            <Link to="/about">About</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1, color: "#FFD700" }}>
            <Link to="/services">Services</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1, color: "#FFD700" }}>
            <Link to="/contact">Contact</Link>
          </motion.div>
        </div>
      </motion.nav>

      {/* Page content with entrance motion */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="p-8"
      >
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
