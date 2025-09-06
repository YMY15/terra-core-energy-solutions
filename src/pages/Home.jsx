import { motion } from "framer-motion";
import background from "../Images/Background.png";
import { FaLinkedin, FaFacebook, FaMobileAlt } from "react-icons/fa";

export default function Home() {
  return (
    <div className="text-white">
      {/* Hero Section with Background */}
      <section
        className="relative flex flex-col items-center justify-center min-h-screen text-center px-8 bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>



        <motion.h1
          className="relative text-6xl font-extrabold mb-6 text-yellow-400 z-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          TerraCore Energy
        </motion.h1>

        <motion.p
          className="relative text-xl max-w-3xl mb-8 text-gray-200 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Pioneering excellence in {" "}
          <span className="text-yellow-400">oil & gas upstream</span> and {" "}
          <span className="text-yellow-400">geoscience solutions</span>. Empowering leaders to fuel the future.
        </motion.p>

        <motion.a
          href="/services"
          className="relative px-10 py-4 bg-yellow-500 text-gray-900 font-bold rounded-full shadow-xl hover:bg-yellow-400 transition z-10"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Our Services
        </motion.a>
      </section>

      {/* Services Section */}
      <section className="py-20 px-8 bg-gray-100 text-gray-900">
        <h2 className="text-4xl font-bold text-center mb-12">Our Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Geoscience",
              desc: "Advanced subsurface imaging and geological modeling.",
            },
            {
              title: "Oil & Gas Upstream",
              desc: "Exploration, drilling, and production optimization.",
            },
            {
              title: "Energy Advisory",
              desc: "Strategic insights for sustainable energy growth.",
            },
            {
              title: "Digital Transformation",
              desc: "Integrating technology to optimize operations and drive innovation.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transform transition duration-500 hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-yellow-600 mb-4">{service.title}</h3>
                <p className="text-gray-800">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Partner with TerraCore Energy
        </motion.h2>
        <p className="mb-8 max-w-2xl mx-auto">
          From geoscience insights to upstream operations, we provide the solutions that oil & gas leaders rely on.
        </p>
        <div className="flex justify-center gap-8 text-3xl">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">
            <FaLinkedin />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">
            <FaFacebook />
          </a>
          <a href="tel:+123456789" className="hover:text-gray-700">
            <FaMobileAlt />
          </a>
        </div>
      </section>
    </div>
  );
}
