// src/pages/CategoryPage.jsx
import { useParams, Link } from "react-router-dom";

// Define categories with sub-services including placeholders
const categoryData = {
  digital: {
    title: "Energy Digital Transformation",
    services: [
      {
        name: "Subsurface Data Management",
        img: "https://picsum.photos/seed/subsurface/400/250",
        desc: "Efficiently manage and organize subsurface data for improved insights.",
      },
      {
        name: "Data Digitization",
        img: "https://picsum.photos/seed/digitization/400/250",
        desc: "Transform physical records into digital assets for accessibility.",
      },
      {
        name: "Process Digitalization",
        img: "https://picsum.photos/seed/process/400/250",
        desc: "Automate and optimize upstream energy workflows.",
      },
      {
        name: "Data Analytics",
        img: "https://picsum.photos/seed/analytics/400/250",
        desc: "Extract valuable insights with advanced analytics.",
      },
      {
        name: "Eco7 – CMS",
        img: "https://picsum.photos/seed/eco7/400/250",
        desc: "Streamlined content management for energy operations.",
      },
    ],
  },
  consultancy: {
    title: "Consultancy Services",
    services: [
      {
        name: "Seismic Processing QA/QC",
        img: "https://picsum.photos/seed/seismic/400/250",
        desc: "Quality assurance for seismic data processing.",
      },
      {
        name: "Reservoir Characterization",
        img: "https://picsum.photos/seed/reservoir/400/250",
        desc: "Understand reservoirs for optimized recovery.",
      },
      {
        name: "GeoChemistry Analysis",
        img: "https://picsum.photos/seed/geochem/400/250",
        desc: "Comprehensive geochemical evaluations.",
      },
      {
        name: "Field Development",
        img: "https://picsum.photos/seed/field/400/250",
        desc: "Plan and execute efficient field development.",
      },
    ],
  },
  data: {
    title: "Data Domains",
    services: [
      {
        name: "Well Data Management",
        img: "https://picsum.photos/seed/welldata/400/250",
        desc: "Organize, manage, and secure well data.",
      },
      {
        name: "Seismic Data Management",
        img: "https://picsum.photos/seed/seismicdata/400/250",
        desc: "Handle seismic data for accurate exploration.",
      },
      {
        name: "Geo Data (GIS & Maps)",
        img: "https://picsum.photos/seed/geodata/400/250",
        desc: "Digitize and reconcile maps and geospatial data.",
      },
    ],
  },
  "digital-ai": {
    title: "Digital World (AI & Analytics)",
    services: [
      {
        name: "Advanced Data Analytics",
        img: "https://picsum.photos/seed/advanced/400/250",
        desc: "Leverage analytics to enhance energy operations.",
      },
      {
        name: "AI / Machine Learning",
        img: "https://picsum.photos/seed/ai/400/250",
        desc: "Adopt AI and ML for predictive and smart solutions.",
      },
    ],
  },
  energy: {
    title: "Energy Transition",
    services: [
      {
        name: "Climate Change & Sustainability",
        img: "https://picsum.photos/seed/climate/400/250",
        desc: "Innovative practices for sustainability.",
      },
      {
        name: "Green Hydrogen",
        img: "https://picsum.photos/seed/hydrogen/400/250",
        desc: "Driving the adoption of clean hydrogen energy.",
      },
      {
        name: "Decarbonization",
        img: "https://picsum.photos/seed/decarbon/400/250",
        desc: "Reducing carbon footprints for a greener future.",
      },
    ],
  },
  training: {
    title: "Learning & Development",
    services: [
      {
        name: "Geology & Geophysics",
        img: "https://picsum.photos/seed/geo/400/250",
        desc: "Training in geoscience disciplines.",
      },
      {
        name: "Reservoir & Production Engineering",
        img: "https://picsum.photos/seed/reservoirtrain/400/250",
        desc: "Skill development for reservoir engineers.",
      },
      {
        name: "Renewable Energy & Green Hydrogen",
        img: "https://picsum.photos/seed/renewable/400/250",
        desc: "Courses on clean and renewable energy.",
      },
    ],
  },
};

export default function CategoryPage() {
  const { categoryId } = useParams();
  const category = categoryData[categoryId];

  if (!category) return <h2 className="p-6">Category not found</h2>;

  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <Link to="/services" className="text-green-600 hover:underline text-sm">
        ← Back to Services
      </Link>

      <h1 className="text-4xl font-bold text-green-700 mb-10">
        {category.title}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {category.services.map((s, i) => (
          <div
            key={i}
            className="border rounded-lg shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={s.img}
              alt={s.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-green-700 mb-2">
                {s.name}
              </h2>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
