import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine';
import './Ubicacion.css';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const RoutingLayer = ({ userLocation, jardinLocation }) => {
  const map = useMap();

  useEffect(() => {
    if (userLocation) {
      L.Routing.control({
        waypoints: [
          L.latLng(userLocation.lat, userLocation.lng),
          L.latLng(jardinLocation.lat, jardinLocation.lng)
        ],
        routeWhileDragging: true
      }).addTo(map);
    }
  }, [userLocation, map, jardinLocation]);

  return null;
};

const Ubicacion = () => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setUserLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
    });
  }, []);

  const jardinLocation = {
    lat: -17.37766,
    lng: -66.14044
  };

  if (!userLocation) {
    return <div>Cargando ubicación del usuario...</div>;
  }

  return (
    <div className="map-container">    
      <MapContainer center={userLocation} zoom={13} style={{ width: '100%', height: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <RoutingLayer userLocation={userLocation} jardinLocation={jardinLocation} />
        <Marker position={userLocation}>
          <Popup>Tu ubicación</Popup>
        </Marker>
        <Marker position={jardinLocation}>
          <Popup>Jardín Botánico</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Ubicacion;

