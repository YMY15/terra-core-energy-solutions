import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Accordion } from "../components/Accordion";

export default function Services() {
  const location = useLocation();
  const [openSection, setOpenSection] = useState(null);

  useEffect(() => {
    if (location.state?.openSection) {
      setOpenSection(location.state.openSection);
      const el = document.getElementById(location.state.openSection);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-green-700 mb-8">Our Services & Solutions</h1>

      <Accordion title="Energy Digital Transformation" id="digital" isOpen={openSection === "digital"}>
        <ul className="list-disc space-y-2">
          <li>Subsurface Data Management</li>
          <li>Data Digitization</li>
          <li>Process Digitalization</li>
          <li>Data Analytics</li>
          <li>Data Backups & Integration</li>
          <li>Resources Preservation</li>
          <li>Data Remastering</li>
          <li>Building Data Repositories</li>
          <li>Eco7 – CMS</li>
        </ul>
      </Accordion>

      <Accordion title="Consultancy Services" id="consultancy" isOpen={openSection === "consultancy"}>
        <ul className="list-disc space-y-2">
          <li>Seismic Processing QA/QC</li>
          <li>Reservoir Characterization</li>
          <li>Cartography & GIS</li>
          <li>GeoChemistry Analysis</li>
          <li>Geomechanical Earth Modelling</li>
          <li>Field Development</li>
          <li>Enhanced Oil Recovery</li>
          <li>Integrated Reservoir Studies</li>
          <li>Petrophysical Analysis</li>
          <li>Borehole Image Analysis</li>
          <li>Well Data Management</li>
          <li>Well Data Processing</li>
          <li>Seismic Data Processing</li>
          <li>Seismic Interpretation</li>
          <li>Seismic Acquisition QA/QC</li>
          <li>Clean Energy Transition</li>
          <li>Green Hydrogen</li>
          <li>Renewable Energy</li>
          <li>Business Process Outsourcing</li>
          <li>Energy Training Solutions</li>
        </ul>
      </Accordion>

      <Accordion title="Data Domains" id="data" isOpen={openSection === "data"}>
        <ul className="list-disc space-y-2">
          <li>Well Data Management</li>
          <li>Well Data Processing</li>
          <li>Well Data Compilation / QC</li>
          <li>Seismic Data Management</li>
          <li>Geo Data (Maps, GIS, Geospatial Analytics)</li>
        </ul>
      </Accordion>

      <Accordion title="Digital World (AI & Analytics)" id="digital-ai" isOpen={openSection === "digital-ai"}>
        <ul className="list-disc space-y-2">
          <li>Advanced Data Analytics</li>
          <li>AI / Machine Learning</li>
        </ul>
      </Accordion>

      <Accordion title="Energy Transition" id="energy" isOpen={openSection === "energy"}>
        <ul className="list-disc space-y-2">
          <li>Climate Change & Sustainability</li>
          <li>Green Hydrogen</li>
          <li>Decarbonization</li>
        </ul>
      </Accordion>

      <Accordion title="Learning & Development" id="training" isOpen={openSection === "training"}>
        <ul className="list-disc space-y-2">
          <li>Geology, Geophysics, Petrophysics</li>
          <li>Geomechanics, Data Management</li>
          <li>Cartography & GIS</li>
          <li>Reservoir & Production Engineering</li>
          <li>Facility Engineering</li>
          <li>Health, Safety & Environment</li>
          <li>Renewable Energy & Green Hydrogen</li>
          <li>Excellence Programs</li>
        </ul>
      </Accordion>
    </div>
  );
}
