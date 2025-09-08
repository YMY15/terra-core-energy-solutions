// src/pages/Contact.jsx
import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';

// Fix default Leaflet marker icons for Vite + React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function Contact() {
  const [selectedPosition, setSelectedPosition] = useState(null);

  const locations = [
    {
      name: "EGYPT Office",
      address: "Arabella Plaza, 3rd floor, Office Building 1, Gamal Abdel Nasser Square, Cairo Governorate",
      email: "info@terra-energy.com",
      position: [29.9913, 31.4319], // precise Cairo coordinates
    },
    {
      name: "UAE Office",
      address: "Level 23, Boulevard Plaza Tower 2, Dubai, UAE",
      email: "info@terra-energy.com",
      position: [25.1996, 55.2735], // precise Dubai coordinates
    },
  ];

  return (
    <section className="max-w-6xl mx-auto py-12 px-6">
      <h2 className="text-4xl font-bold text-green-700 mb-8 text-center">
        Contact Us
      </h2>

      <div className="grid md:grid-cols-2 gap-10 mb-12">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-green-700">
            Send Us a Message
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="w-full py-3 bg-green-700 text-white font-semibold rounded-lg shadow hover:bg-green-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Map */}
        <div className="h-[500px] rounded-xl overflow-hidden shadow-lg">
          <MapContainer
            bounds={locations.map(loc => loc.position)} // fit map to markers
            scrollWheelZoom={true}
            className="w-full h-full"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
            />
            {locations.map((loc, idx) => (
              <Marker key={idx} position={loc.position}>
                <Popup>
                  <strong>{loc.name}</strong><br />
                  {loc.address}<br />
                  <a
                    href={`mailto:${loc.email}`}
                    className="text-green-700 underline"
                  >
                    {loc.email}
                  </a>
                </Popup>
              </Marker>
            ))}

            {/* Zoom map when a card is clicked */}
            {selectedPosition && <MapZoom position={selectedPosition} />}
          </MapContainer>
        </div>
      </div>

      {/* Cards under map */}
      <div className="grid md:grid-cols-2 gap-8">
        {locations.map((loc, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedPosition(loc.position)}
            className="cursor-pointer bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
          >
            <h3 className="text-xl font-semibold text-green-700 mb-2">{loc.name}</h3>
            <p className="text-gray-600 mb-2">{loc.address}</p>
            <p className="text-gray-600 font-medium">
              Email:{" "}
              <a href={`mailto:${loc.email}`} className="text-green-700 underline">
                {loc.email}
              </a>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ====================== MapZoom Component ======================
function MapZoom({ position }) {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.flyTo(position, 12, { duration: 1.5 }); // smooth zoom to selected location
    }
  }, [position, map]);

  return null;
}
