import React, { useState } from 'react';
import { Hotel, Calendar, MapPin, Users, Search, Star, Wifi, Car, Coffee, Utensils } from 'lucide-react';
import { motion } from 'framer-motion';

interface HotelBookingPageProps {
  onNavigate: (page: string) => void;
}

interface HotelResult {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  price: number;
  originalPrice?: number;
  image: string;
  amenities: string[];
  description: string;
  availability: number;
}

export function HotelBookingPage({ onNavigate }: HotelBookingPageProps) {
  const [searchData, setSearchData] = useState({
    destination: '',
    checkin: '',
    checkout: '',
    guests: 2,
    rooms: 1
  });
  const [hotels, setHotels] = useState<HotelResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const mockHotels: HotelResult[] = [
    {
      id: '1',
      name: 'Taj Mahal Palace Mumbai',
      location: 'Colaba, Mumbai',
      rating: 4.8,
      reviews: 2847,
      price: 15000,
      originalPrice: 18000,
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      amenities: ['wifi', 'parking', 'restaurant', 'spa', 'pool'],
      description: 'Iconic luxury hotel overlooking the Gateway of India',
      availability: 3
    },
    {
      id: '2',
      name: 'The Oberoi Dubai',
      location: 'Business Bay, Dubai',
      rating: 4.9,
      reviews: 1923,
      price: 12000,
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      amenities: ['wifi', 'parking', 'restaurant', 'gym', 'concierge'],
      description: 'Contemporary luxury with stunning Burj Khalifa views',
      availability: 5
    },
    {
      id: '3',
      name: 'ITC Grand Chola Chennai',
      location: 'Guindy, Chennai',
      rating: 4.7,
      reviews: 3156,
      price: 8500,
      originalPrice: 10000,
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      amenities: ['wifi', 'restaurant', 'spa', 'pool', 'business'],
      description: 'Grand luxury hotel inspired by Chola architecture',
      availability: 7
    },
    {
      id: '4',
      name: 'The Leela Palace New Delhi',
      location: 'Chanakyapuri, New Delhi',
      rating: 4.6,
      reviews: 2234,
      price: 11000,
      image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      amenities: ['wifi', 'parking', 'restaurant', 'spa', 'butler'],
      description: 'Palatial luxury in the heart of diplomatic enclave',
      availability: 2
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
      setHotels(mockHotels);
      setLoading(false);
    }, 1500);
  };

  const handleBookHotel = (hotel: HotelResult) => {
    const bookings = JSON.parse(localStorage.getItem('trip-sense-bookings') || '[]');
    const newBooking = {
      id: Date.now().toString(),
      type: 'hotel',
      details: {
        ...hotel,
        checkin: searchData.checkin,
        checkout: searchData.checkout,
        guests: searchData.guests,
        rooms: searchData.rooms
      },
      bookingDate: new Date().toISOString(),
      status: 'confirmed',
      passengers: searchData.guests
    };
    bookings.push(newBooking);
    localStorage.setItem('trip-sense-bookings', JSON.stringify(bookings));
    
    alert('Hotel booked successfully! Check your booking history.');
    onNavigate('bookings');
  };

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case 'wifi': return <Wifi className="h-4 w-4" />;
      case 'parking': return <Car className="h-4 w-4" />;
      case 'restaurant': return <Utensils className="h-4 w-4" />;
      default: return <Coffee className="h-4 w-4" />;
    }
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
            Hotel Booking
          </h1>
          <p className="text-xl text-gray-600">
            Find and book the perfect accommodation for your stay
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="destination"
                    value={searchData.destination}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Where are you going?"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Check-in</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="date"
                    name="checkin"
                    value={searchData.checkin}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Check-out</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="date"
                    name="checkout"
                    value={searchData.checkout}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <select
                    name="guests"
                    value={searchData.guests}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {[1, 2, 3, 4, 5, 6].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Rooms</label>
                <div className="relative">
                  <Hotel className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <select
                    name="rooms"
                    value={searchData.rooms}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {[1, 2, 3, 4].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Room' : 'Rooms'}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-teal-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              whileHover={{ scale: loading ? 1 : 1.02 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                  Searching Hotels...
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <Search className="h-5 w-5 mr-2" />
                  Search Hotels
                </div>
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Hotel Results */}
        {searched && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {loading ? 'Searching for hotels...' : `Found ${hotels.length} hotels`}
            </h2>
            
            {hotels.map((hotel, index) => (
              <motion.div 
                key={hotel.id} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3">
                    <motion.img
                      src={hotel.image}
                      alt={hotel.name}
                      className="w-full h-64 lg:h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  
                  <div className="lg:w-2/3 p-6">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <h3 className="text-xl font-bold text-gray-900 mr-3">{hotel.name}</h3>
                          <div className="flex items-center">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < Math.floor(hotel.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                }`}
                              />
                            ))}
                            <span className="ml-1 text-sm text-gray-600">
                              {hotel.rating} ({hotel.reviews} reviews)
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex items-center text-gray-600 mb-3">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{hotel.location}</span>
                        </div>
                        
                        <p className="text-gray-600 mb-4">{hotel.description}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {hotel.amenities.slice(0, 4).map((amenity) => (
                            <div key={amenity} className="flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                              {getAmenityIcon(amenity)}
                              <span className="ml-1 capitalize">{amenity}</span>
                            </div>
                          ))}
                          {hotel.amenities.length > 4 && (
                            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                              +{hotel.amenities.length - 4} more
                            </span>
                          )}
                        </div>
                        
                        <p className="text-sm text-green-600 font-medium">
                          {hotel.availability} rooms left at this price
                        </p>
                      </div>
                      
                      <div className="mt-4 lg:mt-0 lg:ml-8 text-center lg:text-right">
                        <div className="mb-2">
                          {hotel.originalPrice && (
                            <span className="text-sm text-gray-500 line-through mr-2">
                              ₹{hotel.originalPrice.toLocaleString()}
                            </span>
                          )}
                          <span className="text-2xl font-bold text-gray-900">
                            ₹{hotel.price.toLocaleString()}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 mb-4">per night</p>
                        <motion.button
                          onClick={() => handleBookHotel(hotel)}
                          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-200"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Book Now
                        </motion.button>
                      </div>
                    </div>
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