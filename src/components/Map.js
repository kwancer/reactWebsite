import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const positionLondon = [51.5074, -0.1278];
  const positionColchester = [51.8959, 0.8919];
  const positionWarsaw = [52.2297, 21.0122];

  return (
    <MapContainer center={positionLondon} zoom={6} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={positionLondon}>
        <Popup>
          <b>London</b>
          <br />
          Welcome to London!
        </Popup>
      </Marker>
      <Marker position={positionColchester}>
        <Popup>
          <b>Colchester</b>
          <br />
          Welcome to Colchester!
        </Popup>
      </Marker>
      <Marker position={positionWarsaw}>
        <Popup>
          <b>Warsaw</b>
          <br />
          Welcome to Warsaw!
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
