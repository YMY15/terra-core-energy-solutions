import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Accordion({ title, children, id, isOpen: controlledOpen }) {
  const [isOpen, setIsOpen] = useState(false);

  // Sync external state with accordion
  useEffect(() => {
    if (controlledOpen !== undefined) {
      setIsOpen(controlledOpen);
    }
  }, [controlledOpen]);

  return (
    <div id={id} className="border-b border-gray-300 py-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left text-xl font-semibold text-green-700"
      >
        {title}
        <motion.span
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
          className="ml-2 text-gray-500"
        >
          ▶
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden mt-2 pl-6 text-gray-600"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
