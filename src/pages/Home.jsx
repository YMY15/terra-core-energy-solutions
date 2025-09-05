import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="text-center space-y-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-green-700"
      >
        Powering a Sustainable Future
      </motion.h2>
      <p className="text-lg text-gray-700">
        Terra Core Energy Solutions provides renewable energy innovations that
        drive change.
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-2 bg-green-700 text-white rounded-lg shadow"
      >
        Learn More
      </motion.button>
    </section>
  );
}