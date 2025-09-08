import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function GIS() {
  const cards = [
    {
      title: "Geoscience Solutions",
      desc: "Integrating seismic, geological, and reservoir data into GIS platforms for advanced subsurface modeling and analysis.",
      img: "https://picsum.photos/seed/geo/400/300",
      link: "/services/GIS/oil-gas",
      applications: [
        "Seismic data integration",
        "Reservoir modeling",
        "Geological mapping",
        "Subsurface analytics",
      ],
    },
    {
      title: "Field Operations",
      desc: "Supporting seismic surveys, drilling, and monitoring through mobile GIS apps, real-time dashboards, and field-data integration.",
      img: "https://picsum.photos/seed/field/400/300",
      link: "/services/GIS/field-operations",
      applications: [
        "Mobile GIS apps for field teams",
        "Real-time dashboards",
        "Data collection & monitoring",
        "Operational reporting",
      ],
    },
    {
      title: "Mining & Geotechnical",
      desc: "Mapping mineral resources, optimizing mine planning, and assessing geotechnical risks with enterprise GIS solutions.",
      img: "https://picsum.photos/seed/mining/400/300",
      link: "/services/GIS/mining",
      applications: [
        "Mineral resource mapping",
        "Mine planning optimization",
        "Geotechnical risk assessment",
        "Enterprise GIS management",
      ],
    },
  ];

  return (
    <section className="relative max-w-6xl mx-auto py-12 px-6 space-y-16">
      {/* Intro Section */}
      <div className="relative h-96 flex items-center justify-center text-center text-white overflow-hidden rounded-2xl">
        {/* World map background */}
        <img
          src="/images/world-map.png" 
          alt="World Map"
          className="absolute w-full h-full object-cover opacity-20"
        />

        {/* Grid overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>

        {/* Animated nodes */}
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-green-500 rounded-full absolute animate-bounce-slow"
              style={{
                top: `${Math.random() * 90}%`,
                left: `${Math.random() * 90}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Pulsing connection lines (SVG) */}
        <svg className="absolute w-full h-full">
          <line
            x1="10%" y1="20%" x2="70%" y2="50%"
            stroke="#00ffcc" strokeWidth="1" strokeDasharray="4"
          >
            <animate attributeName="stroke-dashoffset" from="0" to="8" dur="2s" repeatCount="indefinite" />
          </line>
          <line
            x1="40%" y1="30%" x2="80%" y2="70%"
            stroke="#00ffcc" strokeWidth="1" strokeDasharray="4"
          >
            <animate attributeName="stroke-dashoffset" from="0" to="8" dur="2s" repeatCount="indefinite" />
          </line>
        </svg>

        {/* Overlay for readability */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

        {/* Intro text */}
        <div className="relative z-10 max-w-3xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Geographic Information Systems (GIS)
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            At <strong>TerraCore Energy</strong>, we deliver advanced GIS solutions
            tailored for the energy and natural resources sectors. By combining
            spatial analytics, digital mapping, and enterprise data management,
            we empower mining, oil & gas, and geotechnical projects with smarter,
            data-driven decisions.
          </p>
        </div>
      </div>

      {/* GIS Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((card, i) => (
          <Link
            to={card.link}
            key={i}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
          >
            <motion.img
              src={card.img}
              alt={card.title}
              className="h-40 w-full object-cover"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-green-700 mb-2">{card.title}</h3>
              <p className="text-gray-600 mb-4">{card.desc}</p>
              {card.applications && (
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  {card.applications.map((app, idx) => (
                    <li key={idx}>{app}</li>
                  ))}
                </ul>
              )}
              <p className="mt-2 text-green-600 font-medium hover:underline">Explore →</p>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-green-50 p-8 rounded-2xl text-center shadow">
        <h3 className="text-2xl font-bold text-green-700 mb-4">Harness the Power of GIS</h3>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Whether in geoscience, field operations, or mining, our GIS solutions
          deliver the spatial intelligence you need to minimize risk, optimize
          operations, and achieve sustainable growth.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-xl shadow hover:bg-green-700 transition"
        >
          Get in Touch
        </Link>
      </div>

      {/* Tailwind CSS Animations */}
      <style>
        {`
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          .animate-bounce-slow {
            animation: bounce-slow 4s ease-in-out infinite;
          }

          /* Grid overlay */
          .bg-grid-pattern {
            background-image:
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
            background-size: 40px 40px;
          }
        `}
      </style>
    </section>
  );
}
