import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const ImageGallery = () => {
  // Phagwara, Punjab coordinates
  const position = [31.2240, 75.7788];

  return (
    <div className="mb-8 flex-grow">
      <div className="border-4 border-black shadow-[4px_4px_0_0_#000] bg-blue-50 p-6 h-full">
        <h3 className="text-2xl font-bold mb-4 border-l-4 border-black pl-2">Location</h3>
        <div className="h-64 rounded-lg overflow-hidden border-2 border-black">
          <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }} className="z-0">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                Phagwara, Punjab, India
              </Popup>
            </Marker>
          </MapContainer>
        </div>
        <div className="mt-4 text-center">
          <p className="text-lg font-bold text-gray-800">Phagwara, Punjab, India</p>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;