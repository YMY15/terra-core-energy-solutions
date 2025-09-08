"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const timeline = [
  {
    year: "2022",
    text: "Founded with a core focus on geodata management solutions, we have built a strong foundation in developing and managing large-scale data repository systems, enabling efficient storage, integration, and analysis of exploration and production datasets.",
  },
  {
    year: "2023",
    text: "Expanded into field operations for data acquisition, covering both seismic surveys and potential field studies, to support comprehensive subsurface exploration.",
  },
  {
    year: "2024",
    text: "Diversified into seismic processing and interpretation services – delivering advanced imaging, reservoir characterization, and geophysical modeling capabilities.",
  },
  {
    year: "Now",
    text: "Introduced digital transformation and AI-driven workflows – integrating big data analytics, cloud platforms, and machine learning to optimize exploration and production decision-making.",
  },
];

const whyChooseUs = [
  {
    title: "Integrated Approach",
    text: "We bring together multi-disciplinary expertise across engineering, geoscience, and digital technologies to deliver energy solutions.",
  },
  {
    title: "Cutting-Edge Technology",
    text: "Leveraging AI, big data, and smart-grid innovations to optimize performance, reduce costs, and enhance efficiency for energy projects.",
  },
  {
    title: "Trusted Partnership",
    text: "We collaborate closely with clients to design tailored solutions that align with their goals, ensuring measurable, sustainable results.",
  },
];

export default function About() {
  return (
    <>
      <section className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        {/* Company Overview */}
        <div>
          <h2 className="text-4xl font-bold text-green-700 mb-4">
            About TerraCore Energy
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Since our establishment, <strong>TerraCore Energy</strong> has been
            at the forefront of advancing geoscience and upstream exploration
            services, delivering innovative and integrated solutions that
            support the entire exploration and production lifecycle. We
            specialize in subsurface data management, seismic interpretation,
            reservoir characterization, and digital transformation strategies
            designed to optimize decision-making and reduce operational risks.
            Our goal is to empower national oil companies, independents, and
            energy operators with accurate insights, cost-effective workflows,
            and future-ready technologies that drive sustainable growth in the
            energy sector.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold text-green-600 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To deliver cutting-edge technologies and services that transform
              resources into sustainable solutions—enabling smarter decisions,
              reducing environmental impact, and fostering energy independence
              for communities worldwide.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-green-600 mb-2">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To be a trusted global leader in energy innovation, driving the
              transition toward a net-zero future through technology, expertise,
              and uncompromising commitment to sustainability.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-2xl font-semibold text-green-600 mb-4">
            Our Values
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <strong>Innovation:</strong> Blending proven methods with modern
              technology to deliver transformative energy solutions.
            </li>
            <li>
              <strong>Sustainability:</strong> Integrating renewable energy into
              business and community practices for long-term resilience.
            </li>
            <li>
              <strong>Excellence:</strong> Providing accurate, efficient, and
              cost-effective solutions without compromise.
            </li>
            <li>
              <strong>Partnership:</strong> Building trusted, long-term
              relationships with our clients, stakeholders, and communities.
            </li>
          </ul>
        </div>

        {/* Why Choose Us */}
        <div>
          <h3 className="text-2xl font-semibold text-green-600 mb-8">
            Why Choose Terra Core?
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-gray-700">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-white p-6 rounded-2xl shadow transition-transform"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{
                  y: -8,
                  boxShadow: "0px 12px 24px rgba(16, 185, 129, 0.2)",
                }}
              >
                <h4 className="font-bold text-green-700 mb-2">{item.title}</h4>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Our Journey */}
        <div>
          <h3 className="text-2xl font-semibold text-green-600 mb-8">
            Our Journey
          </h3>
          <div className="relative border-l-4 border-green-600 space-y-12 pl-6">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <CheckCircle2 className="text-green-600 w-6 h-6 mt-1" />
                <div>
                  <p className="font-bold text-green-700">{item.year}</p>
                  <p className="text-gray-700">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-green-50 rounded-2xl p-8 text-center shadow">
          <h3 className="text-2xl font-bold text-green-700 mb-4">
            Let’s Build a Sustainable Future Together
          </h3>
          <p className="text-gray-700 mb-6">
            Whatever your energy challenge, our team is ready to listen and
            deliver tailored, future-proof solutions that meet your business and
            community needs.
          </p>
          <a
            href="/contact"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-xl shadow hover:bg-green-700 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
