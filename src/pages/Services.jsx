export default function Services() {
  return (
    <section className="max-w-3xl mx-auto grid gap-6 md:grid-cols-2">
      <div className="p-6 bg-white rounded-lg shadow">
        <h3 className="text-xl font-semibold text-green-700">Solar Solutions</h3>
        <p>High-efficiency solar panel systems for homes and businesses.</p>
      </div>
      <div className="p-6 bg-white rounded-lg shadow">
        <h3 className="text-xl font-semibold text-green-700">Wind Power</h3>
        <p>Scalable wind turbine technology to harness natural resources.</p>
      </div>
      <div className="p-6 bg-white rounded-lg shadow">
        <h3 className="text-xl font-semibold text-green-700">Geothermal</h3>
        <p>Innovative geothermal solutions for heating and cooling.</p>
      </div>
      <div className="p-6 bg-white rounded-lg shadow">
        <h3 className="text-xl font-semibold text-green-700">Consulting</h3>
        <p>Expert guidance to transition to renewable energy systems.</p>
      </div>
    </section>
  );
}