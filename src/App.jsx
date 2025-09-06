import { Routes, Route, Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import logo from "./Images/logo.png";

export default function App() {
  // Scroll shrink effect
  const { scrollY } = useScroll();
  const headerHeight = useTransform(scrollY, [0, 150], [96, 72]); // from h-24 to h-18
  const logoSize = useTransform(scrollY, [0, 150], [80, 56]); // logo shrinks too

  return (
    <div className="font-sans">
      {/* Animated Navbar */}
      <motion.nav
        style={{ height: headerHeight }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white text-gray-600 px-10 flex justify-between items-center fixed top-0 left-0 right-0 shadow-md z-50"
      >
        {/* Logo with hover + tap motion */}
        <Link to="/">
          <motion.img
            src={logo}
            alt="TerraCore Energy Logo"
            style={{ height: logoSize }}
            className="w-auto"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </Link>

        {/* Navigation Links (in one line, gray text) */}
        <div className="flex space-x-10 text-lg font-medium">
          <motion.div whileHover={{ scale: 1.1, color: "#16a34a" }}>
            <Link to="/">Home</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1, color: "#16a34a" }}>
            <Link to="/about">About</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1, color: "#16a34a" }}>
            <Link to="/services">Services</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1, color: "#16a34a" }}>
            <Link to="/contact">Contact</Link>
          </motion.div>
        </div>
      </motion.nav>

      {/* Page content with entrance motion */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-28 px-8"
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
