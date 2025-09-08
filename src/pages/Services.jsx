// src/pages/Services.jsx
import { Link } from "react-router-dom";
import GisImage from "G:/page_test/terra-core-energy-solutions/src/Images/Geographic Information Systems (GIS).jpg"; 
import digitalimage from "G:/page_test/terra-core-energy-solutions/src/Images/Energy Digital Transformation.jpg";
import Geodataimage from "G:/page_test/terra-core-energy-solutions/src/Images/GeoData Managment Solutions.png";
import Geophysicalimage from "G:/page_test/terra-core-energy-solutions/src/Images/Geophysical.jpg";


const categories = [
  {
    id: "GIS",
    title: "Geographic Information Systems (GIS)",
    desc: "Enhancing efficiency through data digitization, advanced analytics, and the development of an Enterprise Geodatabase repository.",
    img: GisImage,
  },
  {
    id: "Energy Digital Transformation",
    title: "Energy Digital Transformation",
    desc: "Powering the energy transition with digital innovation, It builds a more resilient, sustainable, and safer future for the energy industry.",
    img: digitalimage,
  },
  {
    id: "GeoData",
    title: "GeoData Managment Solutions",
    desc: "Well, seismic, and geo-data management for reliable energy operations, refines into valuable digital products and services, supporting decision-making.",
    img: Geodataimage,
  },
  {
    id: "digital-ai",
    title: "Geophysical & Petrophysical Services",
    desc: "Our service delivers precise subsurface characterization through cutting-edge data processing and interpretation.",
    img: Geophysicalimage,
  },

];

export default function Services() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-green-700 mb-12">
        Our Services & Solutions
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {categories.map((cat) => (
          <Link
            to={`/services/${cat.id}`}
            key={cat.id}
            className="group border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={cat.img}
              alt={cat.title}
              className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-green-700 mb-2">
                {cat.title}
              </h2>
              <p className="text-gray-600">{cat.desc}</p>
              <p className="mt-3 text-green-600 font-medium group-hover:underline">
                Explore →
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
