import React, { useState } from 'react';
import { Bus, Calendar, MapPin, Users, Search, ArrowRight, Clock, DollarSign, Wifi, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

interface BusBookingPageProps {
  onNavigate: (page: string) => void;
}

interface BusRoute {
  id: string;
  operatorName: string;
  busType: string;
  from: string;
  to: string;
  departure: string;
  arrival: string;
  duration: string;
  price: number;
  amenities: string[];
  seatsAvailable: number;
  rating: number;
}

export function BusBookingPage({ onNavigate }: BusBookingPageProps) {
  const [searchData, setSearchData] = useState({
    from: '',
    to: '',
    departure: '',
    passengers: 1
  });
  const [buses, setBuses] = useState<BusRoute[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const mockBuses: BusRoute[] = [
    {
      id: '1',
      operatorName: 'RedBus Premium',
      busType: 'Volvo Multi-Axle AC Sleeper',
      from: 'Mumbai',
      to: 'Pune',
      departure: '23:30',
      arrival: '03:30+1',
      duration: '4h 00m',
      price: 800,
      amenities: ['AC', 'WiFi', 'Charging Point', 'Water Bottle'],
      seatsAvailable: 12,
      rating: 4.5
    },
    {
      id: '2',
      operatorName: 'Travels India',
      busType: 'Scania AC Seater',
      from: 'Delhi',
      to: 'Jaipur',
      departure: '06:00',
      arrival: '11:30',
      duration: '5h 30m',
      price: 650,
      amenities: ['AC', 'Snacks', 'Charging Point'],
      seatsAvailable: 8,
      rating: 4.2
    },
    {
      id: '3',
      operatorName: 'VRL Travels',
      busType: 'Mercedes Multi-Axle AC Sleeper',
      from: 'Bangalore',
      to: 'Hyderabad',
      departure: '21:00',
      arrival: '06:00+1',
      duration: '9h 00m',
      price: 1200,
      amenities: ['AC', 'WiFi', 'Blanket', 'Water Bottle', 'Snacks'],
      seatsAvailable: 15,
      rating: 4.7
    },
    {
      id: '4',
      operatorName: 'SRS Travels',
      busType: 'Volvo AC Semi Sleeper',
      from: 'Chennai',
      to: 'Coimbatore',
      departure: '22:45',
      arrival: '06:15+1',
      duration: '7h 30m',
      price: 950,
      amenities: ['AC', 'Charging Point', 'Water Bottle'],
      seatsAvailable: 6,
      rating: 4.3
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setSearchData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSearched(true);
    
    setTimeout(() => {
      setBuses(mockBuses);
      setLoading(false);
    }, 1500);
  };

  const handleBookBus = (bus: BusRoute) => {
    const bookings = JSON.parse(localStorage.getItem('trip-sense-bookings') || '[]');
    const newBooking = {
      id: Date.now().toString(),
      type: 'bus',
      details: bus,
      bookingDate: new Date().toISOString(),
      status: 'confirmed',
      passengers: searchData.passengers
    };
    bookings.push(newBooking);
    localStorage.setItem('trip-sense-bookings', JSON.stringify(bookings));
    
    alert('Bus booked successfully! Check your booking history.');
    onNavigate('bookings');
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Bus Booking
          </h1>
          <p className="text-xl text-gray-600">
            Comfortable and affordable bus travel across the country
          </p>
        </motion.div>

        {/* Search Form */}
        <motion.div 
          className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <form onSubmit={handleSearch} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="from"
                    value={searchData.from}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Departure city"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="to"
                    value={searchData.to}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Destination city"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Journey Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="date"
                    name="departure"
                    value={searchData.departure}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Passengers</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <select
                    name="passengers"
                    value={searchData.passengers}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {[1, 2, 3, 4, 5, 6].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Passenger' : 'Passengers'}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              className="w-full py-4 px-6 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-lg shadow-lg hover:from-orange-700 hover:to-red-700 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              whileHover={{ scale: loading ? 1 : 1.02 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                  Searching Buses...
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <Search className="h-5 w-5 mr-2" />
                  Search Buses
                </div>
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Bus Results */}
        {searched && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {loading ? 'Searching for buses...' : `Found ${buses.length} buses`}
            </h2>
            
            {buses.map((bus, index) => (
              <motion.div 
                key={bus.id} 
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1 space-y-4 lg:space-y-0 lg:flex lg:items-center lg:space-x-8">
                    {/* Bus Info */}
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center">
                        <Bus className="h-6 w-6 text-white" />
                      </div>
                      <div className="ml-3">
                        <p className="font-semibold text-gray-900">{bus.operatorName}</p>
                        <p className="text-sm text-gray-500">{bus.busType}</p>
                      </div>
                    </div>

                    {/* Route Details */}
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <p className="text-xl font-bold text-gray-900">{bus.departure}</p>
                        <p className="text-sm text-gray-500">{bus.from}</p>
                      </div>
                      <div className="flex-1 relative">
                        <div className="border-t-2 border-gray-300"></div>
                        <ArrowRight className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white h-5 w-5 text-gray-400" />
                      </div>
                      <div className="text-center">
                        <p className="text-xl font-bold text-gray-900">{bus.arrival}</p>
                        <p className="text-sm text-gray-500">{bus.to}</p>
                      </div>
                    </div>

                    {/* Duration & Amenities */}
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{bus.duration}</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {bus.amenities.slice(0, 3).map((amenity) => (
                          <span key={amenity} className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">
                            {amenity}
                          </span>
                        ))}
                        {bus.amenities.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                            +{bus.amenities.length - 3}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-orange-600">{bus.seatsAvailable} seats available</p>
                    </div>
                  </div>

                  {/* Booking Section */}
                  <div className="mt-4 lg:mt-0 lg:ml-8 text-center">
                    <div className="flex items-center justify-center mb-2">
                      <DollarSign className="h-5 w-5 text-green-600" />
                      <span className="text-2xl font-bold text-gray-900">₹{bus.price.toLocaleString()}</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-3">per person</p>
                    <motion.button
                      onClick={() => handleBookBus(bus)}
                      className="px-6 py-2 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Book Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}