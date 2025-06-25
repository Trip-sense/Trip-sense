import React, { useState } from 'react';
import { MapPin, Navigation, Star, Coffee, Hotel, Utensils } from 'lucide-react';
import { motion } from 'framer-motion';

interface MapLocation {
  id: string;
  name: string;
  type: 'restaurant' | 'hotel' | 'attraction' | 'cafe';
  rating: number;
  distance: string;
  price: string;
  coordinates: { x: number; y: number };
}

export function InteractiveMap() {
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null);
  
  const locations: MapLocation[] = [
    {
      id: '1',
      name: 'Taj Mahal Palace Hotel',
      type: 'hotel',
      rating: 4.8,
      distance: '0.5 km',
      price: '₹15,000/night',
      coordinates: { x: 20, y: 30 }
    },
    {
      id: '2',
      name: 'Gateway of India',
      type: 'attraction',
      rating: 4.6,
      distance: '0.2 km',
      price: 'Free',
      coordinates: { x: 60, y: 40 }
    },
    {
      id: '3',
      name: 'Leopold Cafe',
      type: 'restaurant',
      rating: 4.4,
      distance: '0.3 km',
      price: '₹800 for two',
      coordinates: { x: 40, y: 60 }
    },
    {
      id: '4',
      name: 'Starbucks Marine Drive',
      type: 'cafe',
      rating: 4.2,
      distance: '0.8 km',
      price: '₹300 for two',
      coordinates: { x: 70, y: 20 }
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'hotel': return <Hotel className="h-4 w-4" />;
      case 'restaurant': return <Utensils className="h-4 w-4" />;
      case 'cafe': return <Coffee className="h-4 w-4" />;
      case 'attraction': return <Star className="h-4 w-4" />;
      default: return <MapPin className="h-4 w-4" />;
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case 'hotel': return 'bg-purple-500';
      case 'restaurant': return 'bg-red-500';
      case 'cafe': return 'bg-orange-500';
      case 'attraction': return 'bg-green-500';
      default: return 'bg-blue-500';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-2xl shadow-xl p-6"
    >
      <div className="flex items-center mb-4">
        <Navigation className="h-6 w-6 text-blue-600 mr-2" />
        <h3 className="text-lg font-semibold text-gray-900">Nearby Explorer</h3>
      </div>
      
      <div className="relative">
        {/* Map Container */}
        <div className="relative h-80 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg overflow-hidden">
          {/* Map Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#3B82F6" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          {/* Location Markers */}
          {locations.map((location) => (
            <motion.button
              key={location.id}
              className={`absolute w-8 h-8 ${getColor(location.type)} text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform`}
              style={{
                left: `${location.coordinates.x}%`,
                top: `${location.coordinates.y}%`,
              }}
              onClick={() => setSelectedLocation(location)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {getIcon(location.type)}
            </motion.button>
          ))}
          
          {/* User Location */}
          <motion.div
            className="absolute w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-lg"
            style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
        
        {/* Location Details */}
        {selectedLocation && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg"
          >
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-gray-900">{selectedLocation.name}</h4>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-500 mr-1" />
                <span className="text-sm text-gray-600">{selectedLocation.rating}</span>
              </div>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>{selectedLocation.distance} away</span>
              <span>{selectedLocation.price}</span>
            </div>
            <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
              Get Directions
            </button>
          </motion.div>
        )}
      </div>
      
      {/* Legend */}
      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
          <span>Hotels</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
          <span>Restaurants</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
          <span>Cafes</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
          <span>Attractions</span>
        </div>
      </div>
    </motion.div>
  );
}