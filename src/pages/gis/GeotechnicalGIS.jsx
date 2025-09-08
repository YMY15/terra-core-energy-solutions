// src/pages/gis/GeotechnicalGIS.jsx

import React, { useState, useEffect } from 'react';

// Example: You can later integrate a GIS library like Leaflet or Mapbox here
const GeotechnicalGIS = () => {
  const [mapData, setMapData] = useState([]);

  useEffect(() => {
    // Example: Fetch some GIS-related data
    const fetchData = async () => {
      try {
        // Replace with your actual API or data source
        const response = await fetch('/api/geotechnical-data');
        const data = await response.json();
        setMapData(data);
      } catch (error) {
        console.error('Error fetching GIS data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Geotechnical GIS</h1>
      <p>This is a placeholder component for geotechnical GIS data visualization.</p>
      
      <div>
        <h2>Map Data:</h2>
        {mapData.length > 0 ? (
          <ul>
            {mapData.map((item, index) => (
              <li key={index}>
                {item.name} — {item.value}
              </li>
            ))}
          </ul>
        ) : (
          <p>No GIS data available yet.</p>
        )}
      </div>
    </div>
  );
};

export default GeotechnicalGIS;
