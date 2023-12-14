import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import polyline from '@mapbox/polyline';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './Ubicacion.css';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const Ubicacion = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [routePoints, setRoutePoints] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const userLoc = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      setUserLocation(userLoc);
  
      const jardinLocation = {
        lat: -17.37766,
        lng: -66.14044,
      };
  
      fetch(`https://graphhopper.com/api/1/route?point=${userLoc.lat},${userLoc.lng}&point=${jardinLocation.lat},${jardinLocation.lng}&vehicle=foot&locale=es&key=aec7b23b-156f-4e15-8a18-f4fca25ff3ff`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Error en la respuesta de la API');
          }
          return response.json();
        })
        .then(data => {
          if (data.paths && data.paths.length > 0) {
            const points = polyline.decode(data.paths[0].points);
            const latLngs = points.map(point => ({ lat: point[0], lng: point[1] }));
            setRoutePoints(latLngs);
          } else {
            throw new Error('Datos de ruta no encontrados');
          }
        })
        .catch(error => console.error('Error al obtener ruta:', error));
    });
  }, []);
  

  if (!userLocation) {
    return <div>Cargando ubicación del usuario...</div>;
  }

  return (
    <div className="map-container">
      <MapContainer center={userLocation} zoom={13} style={{ width: '100%', height: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {routePoints.length > 0 && <Polyline positions={routePoints} color="blue" />}
        <Marker position={userLocation}>
          <Popup>Tu ubicación</Popup>
        </Marker>
        <Marker position={{lat: -17.37766, lng: -66.14044}}>
          <Popup>Jardín Botánico</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Ubicacion;
