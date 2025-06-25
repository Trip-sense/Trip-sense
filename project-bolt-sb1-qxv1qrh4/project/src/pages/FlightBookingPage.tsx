import React, { useState } from 'react';
import { Plane, Calendar, MapPin, Users, Search, ArrowRight, Clock, DollarSign } from 'lucide-react';

interface FlightBookingPageProps {
  onNavigate: (page: string) => void;
}

interface Flight {
  id: string;
  airline: string;
  from: string;
  to: string;
  departure: string;
  arrival: string;
  duration: string;
  price: number;
  stops: number;
}

export function FlightBookingPage({ onNavigate }: FlightBookingPageProps) {
  const [searchData, setSearchData] = useState({
    from: '',
    to: '',
    departure: '',
    return: '',
    passengers: 1,
    class: 'economy',
    tripType: 'round-trip'
  });
  const [flights, setFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const mockFlights: Flight[] = [
    {
      id: '1',
      airline: 'Air India',
      from: 'Mumbai',
      to: 'Dubai',
      departure: '14:30',
      arrival: '17:45',
      duration: '3h 15m',
      price: 25000,
      stops: 0
    },
    {
      id: '2',
      airline: 'Emirates',
      from: 'Delhi',
      to: 'Dubai',
      departure: '09:15',
      arrival: '12:30',
      duration: '3h 45m',
      price: 28000,
      stops: 0
    },
    {
      id: '3',
      airline: 'IndiGo',
      from: 'Bangalore',
      to: 'Mumbai',
      departure: '18:20',
      arrival: '20:05',
      duration: '1h 45m',
      price: 8500,
      stops: 0
    },
    {
      id: '4',
      airline: 'Vistara',
      from: 'Chennai',
      to: 'Delhi',
      departure: '11:40',
      arrival: '14:55',
      duration: '3h 15m',
      price: 12000,
      stops: 0
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
    
    // Simulate API call
    setTimeout(() => {
      setFlights(mockFlights);
      setLoading(false);
    }, 1500);
  };

  const handleBookFlight = (flight: Flight) => {
    // Save booking to localStorage
    const bookings = JSON.parse(localStorage.getItem('trip-sense-bookings') || '[]');
    const newBooking = {
      id: Date.now().toString(),
      type: 'flight',
      details: flight,
      bookingDate: new Date().toISOString(),
      status: 'confirmed',
      passengers: searchData.passengers
    };
    bookings.push(newBooking);
    localStorage.setItem('trip-sense-bookings', JSON.stringify(bookings));
    
    alert('Flight booked successfully! Check your booking history.');
    onNavigate('bookings');
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Flight Booking
          </h1>
          <p className="text-xl text-gray-600">
            Find and book the best flights for your journey
          </p>
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8">
          <form onSubmit={handleSearch} className="space-y-6">
            {/* Trip Type */}
            <div className="flex flex-wrap gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="tripType"
                  value="round-trip"
                  checked={searchData.tripType === 'round-trip'}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                Round Trip
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="tripType"
                  value="one-way"
                  checked={searchData.tripType === 'one-way'}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                One Way
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* From */}
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

              {/* To */}
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

              {/* Departure Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Departure</label>
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

              {/* Return Date */}
              {searchData.tripType === 'round-trip' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Return</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="date"
                      name="return"
                      value={searchData.return}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Passengers */}
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

              {/* Class */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Class</label>
                <select
                  name="class"
                  value={searchData.class}
                  onChange={handleInputChange}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="economy">Economy</option>
                  <option value="premium-economy">Premium Economy</option>
                  <option value="business">Business</option>
                  <option value="first">First Class</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-teal-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                  Searching Flights...
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <Search className="h-5 w-5 mr-2" />
                  Search Flights
                </div>
              )}
            </button>
          </form>
        </div>

        {/* Flight Results */}
        {searched && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {loading ? 'Searching for flights...' : `Found ${flights.length} flights`}
            </h2>
            
            {flights.map((flight) => (
              <div key={flight.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1 space-y-4 lg:space-y-0 lg:flex lg:items-center lg:space-x-8">
                    {/* Airline */}
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                        <Plane className="h-6 w-6 text-white" />
                      </div>
                      <div className="ml-3">
                        <p className="font-semibold text-gray-900">{flight.airline}</p>
                        <p className="text-sm text-gray-500">{flight.stops === 0 ? 'Non-stop' : `${flight.stops} stop(s)`}</p>
                      </div>
                    </div>

                    {/* Flight Details */}
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <p className="text-xl font-bold text-gray-900">{flight.departure}</p>
                        <p className="text-sm text-gray-500">{flight.from}</p>
                      </div>
                      <div className="flex-1 relative">
                        <div className="border-t-2 border-gray-300"></div>
                        <ArrowRight className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white h-5 w-5 text-gray-400" />
                      </div>
                      <div className="text-center">
                        <p className="text-xl font-bold text-gray-900">{flight.arrival}</p>
                        <p className="text-sm text-gray-500">{flight.to}</p>
                      </div>
                    </div>

                    {/* Duration */}
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{flight.duration}</span>
                    </div>
                  </div>

                  {/* Booking Section */}
                  <div className="mt-4 lg:mt-0 lg:ml-8 text-center">
                    <div className="flex items-center justify-center mb-2">
                      <DollarSign className="h-5 w-5 text-green-600" />
                      <span className="text-2xl font-bold text-gray-900">₹{flight.price.toLocaleString()}</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-3">per person</p>
                    <button
                      onClick={() => handleBookFlight(flight)}
                      className="px-6 py-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-200"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}