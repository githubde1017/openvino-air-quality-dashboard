import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = ({ data }) => {
  return (
    <MapContainer center={[23.5, 121]} zoom={7} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {data.map(sensor => (
        <Marker key={sensor.id} position={[sensor.location.geometry.coordinates[1], sensor.location.geometry.coordinates[0]]}>
          <Popup>
            {sensor.name}: {sensor.aqi} AQI
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
