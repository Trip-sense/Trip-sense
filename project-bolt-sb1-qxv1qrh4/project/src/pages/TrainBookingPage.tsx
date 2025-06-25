import React, { useState } from 'react';
import { Train, Calendar, MapPin, Users, Search, ArrowRight, Clock, DollarSign } from 'lucide-react';

interface TrainBookingPageProps {
  onNavigate: (page: string) => void;
}

interface TrainRoute {
  id: string;
  trainName: string;
  trainNumber: string;
  from: string;
  to: string;
  departure: string;
  arrival: string;
  duration: string;
  price: number;
  class: string;
  availability: number;
}

export function TrainBookingPage({ onNavigate }: TrainBookingPageProps) {
  const [searchData, setSearchData] = useState({
    from: '',
    to: '',
    departure: '',
    passengers: 1,
    class: 'sleeper'
  });
  const [trains, setTrains] = useState<TrainRoute[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const mockTrains: TrainRoute[] = [
    {
      id: '1',
      trainName: 'Rajdhani Express',
      trainNumber: '12951',
      from: 'New Delhi',
      to: 'Mumbai Central',
      departure: '16:55',
      arrival: '08:35+1',
      duration: '15h 40m',
      price: 2800,
      class: 'AC 2 Tier',
      availability: 25
    },
    {
      id: '2',
      trainName: 'Shatabdi Express',
      trainNumber: '12002',
      from: 'New Delhi',
      to: 'Chandigarh',
      departure: '07:40',
      arrival: '11:05',
      duration: '3h 25m',
      price: 850,
      class: 'AC Chair Car',
      availability: 45
    },
    {
      id: '3',
      trainName: 'Duronto Express',
      trainNumber: '12259',
      from: 'Sealdah',
      to: 'New Delhi',
      departure: '21:50',
      arrival: '05:40+1',
      duration: '7h 50m',
      price: 1950,
      class: 'AC 3 Tier',
      availability: 18
    },
    {
      id: '4',
      trainName: 'Garib Rath',
      trainNumber: '12910',
      from: 'Mumbai Central',
      to: 'Ahmedabad',
      departure: '23:05',
      arrival: '06:30+1',
      duration: '7h 25m',
      price: 450,
      class: 'AC 3 Tier',
      availability: 32
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
      setTrains(mockTrains);
      setLoading(false);
    }, 1500);
  };

  const handleBookTrain = (train: TrainRoute) => {
    // Save booking to localStorage
    const bookings = JSON.parse(localStorage.getItem('trip-sense-bookings') || '[]');
    const newBooking = {
      id: Date.now().toString(),
      type: 'train',
      details: train,
      bookingDate: new Date().toISOString(),
      status: 'confirmed',
      passengers: searchData.passengers
    };
    bookings.push(newBooking);
    localStorage.setItem('trip-sense-bookings', JSON.stringify(bookings));
    
    alert('Train booked successfully! Check your booking history.');
    onNavigate('bookings');
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Train Booking
          </h1>
          <p className="text-xl text-gray-600">
            Book comfortable train journeys across the country
          </p>
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8">
          <form onSubmit={handleSearch} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                    placeholder="Departure station"
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
                    placeholder="Destination station"
                    required
                  />
                </div>
              </div>

              {/* Departure Date */}
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
                  <option value="sleeper">Sleeper</option>
                  <option value="ac-3">AC 3 Tier</option>
                  <option value="ac-2">AC 2 Tier</option>
                  <option value="ac-1">AC 1 Tier</option>
                  <option value="ac-chair">AC Chair Car</option>
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
                  Searching Trains...
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <Search className="h-5 w-5 mr-2" />
                  Search Trains
                </div>
              )}
            </button>
          </form>
        </div>

        {/* Train Results */}
        {searched && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {loading ? 'Searching for trains...' : `Found ${trains.length} trains`}
            </h2>
            
            {trains.map((train) => (
              <div key={train.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1 space-y-4 lg:space-y-0 lg:flex lg:items-center lg:space-x-8">
                    {/* Train Info */}
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                        <Train className="h-6 w-6 text-white" />
                      </div>
                      <div className="ml-3">
                        <p className="font-semibold text-gray-900">{train.trainName}</p>
                        <p className="text-sm text-gray-500">#{train.trainNumber}</p>
                      </div>
                    </div>

                    {/* Route Details */}
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <p className="text-xl font-bold text-gray-900">{train.departure}</p>
                        <p className="text-sm text-gray-500">{train.from}</p>
                      </div>
                      <div className="flex-1 relative">
                        <div className="border-t-2 border-gray-300"></div>
                        <ArrowRight className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white h-5 w-5 text-gray-400" />
                      </div>
                      <div className="text-center">
                        <p className="text-xl font-bold text-gray-900">{train.arrival}</p>
                        <p className="text-sm text-gray-500">{train.to}</p>
                      </div>
                    </div>

                    {/* Duration & Class */}
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{train.duration}</span>
                      </div>
                      <p className="text-sm text-blue-600 font-medium">{train.class}</p>
                      <p className="text-sm text-green-600">{train.availability} seats available</p>
                    </div>
                  </div>

                  {/* Booking Section */}
                  <div className="mt-4 lg:mt-0 lg:ml-8 text-center">
                    <div className="flex items-center justify-center mb-2">
                      <DollarSign className="h-5 w-5 text-green-600" />
                      <span className="text-2xl font-bold text-gray-900">₹{train.price.toLocaleString()}</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-3">per person</p>
                    <button
                      onClick={() => handleBookTrain(train)}
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