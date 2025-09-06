export default function Services() {
  return (
    <div className="max-w-6xl mx-auto py-10 space-y-10">
      <h1 className="text-4xl font-bold text-green-700 mb-6">Our Services & Solutions</h1>

      {/* Energy Digital Transformation */}
      <section id="digital">
        <h2 className="text-2xl font-semibold mb-4">Energy Digital Transformation</h2>
        <ul className="list-disc pl-6 space-y-2">
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
      </section>

      {/* Consultancy Services */}
      <section id="consultancy">
        <h2 className="text-2xl font-semibold mb-4">Consultancy Services</h2>
        <ul className="list-disc pl-6 space-y-2">
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
      </section>

      {/* Data Domains */}
      <section id="data">
        <h2 className="text-2xl font-semibold mb-4">Data Domains</h2>
        <p className="italic">Well Data, Seismic Data, Geo Data</p>
        {/* You can add sublists here like Well Data Management, Seismic Data Processing, etc. */}
      </section>

      {/* Digital World */}
      <section id="digital-ai">
        <h2 className="text-2xl font-semibold mb-4">Digital World</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Advanced Data Analytics</li>
          <li>AI/ML</li>
        </ul>
      </section>

      {/* Energy Transition */}
      <section id="energy">
        <h2 className="text-2xl font-semibold mb-4">Energy Transition</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Climate Change & Sustainability</li>
          <li>Green Hydrogen</li>
          <li>Decarbonization</li>
        </ul>
      </section>

      {/* Training */}
      <section id="training">
        <h2 className="text-2xl font-semibold mb-4">Learning & Development</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Training by Discipline (Geology, Geophysics, Reservoir, HSE, etc.)</li>
          <li>Excellence Programs</li>
        </ul>
      </section>
    </div>
  );
}
