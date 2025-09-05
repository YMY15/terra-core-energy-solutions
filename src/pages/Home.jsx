import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="text-white">
      {/* Hero Section with Background */}
      <section
        className="relative flex flex-col items-center justify-center min-h-screen text-center px-8 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        <motion.h1
          className="relative text-6xl font-extrabold mb-6 text-yellow-400 z-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Terracore Energy
        </motion.h1>

        <motion.p
          className="relative text-xl max-w-3xl mb-8 text-gray-200 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Pioneering excellence in{" "}
          <span className="text-yellow-400">oil & gas upstream</span> and{" "}
          <span className="text-yellow-400">geoscience solutions</span>.  
          Empowering leaders to fuel the future.
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Geoscience",
              desc: "Advanced subsurface imaging and geological modeling.",
              img: "https://images.unsplash.com/photo-1604937455094-efb6e1b5f7aa?auto=format&fit=crop&w=800&q=80",
            },
            {
              title: "Oil & Gas Upstream",
              desc: "Exploration, drilling, and production optimization.",
              img: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80",
            },
            {
              title: "Energy Advisory",
              desc: "Strategic insights for sustainable energy growth.",
              img: "https://images.unsplash.com/photo-1581090700227-4c4d98a2efb1?auto=format&fit=crop&w=800&q=80",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src={service.img}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover opacity-20"
              />
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
          Partner with Terracore Energy
        </motion.h2>
        <p className="mb-8 max-w-2xl mx-auto">
          From geoscience insights to upstream operations, we provide the solutions that
          oil & gas leaders rely on.
        </p>
        <motion.a
          href="/contact"
          className="px-10 py-4 bg-gray-900 text-yellow-400 font-bold rounded-full shadow-lg hover:bg-black transition"
          whileHover={{ scale: 1.1 }}
        >
          Contact Us
        </motion.a>
      </section>
    </div>
  );
}
