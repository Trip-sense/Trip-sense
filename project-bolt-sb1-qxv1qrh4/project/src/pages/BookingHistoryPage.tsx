import React, { useState, useEffect } from 'react';
import { Plane, Train, Calendar, MapPin, Users, DollarSign, CheckCircle, Clock } from 'lucide-react';

interface BookingHistoryPageProps {
  onNavigate: (page: string) => void;
}

interface Booking {
  id: string;
  type: 'flight' | 'train';
  details: any;
  bookingDate: string;
  status: 'confirmed' | 'pending' | 'cancelled';
  passengers: number;
}

export function BookingHistoryPage({ onNavigate }: BookingHistoryPageProps) {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [filter, setFilter] = useState<'all' | 'flights' | 'trains'>('all');

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem('trip-sense-bookings') || '[]');
    setBookings(storedBookings);
  }, []);

  const filteredBookings = bookings.filter(booking => {
    if (filter === 'all') return true;
    if (filter === 'flights') return booking.type === 'flight';
    if (filter === 'trains') return booking.type === 'train';
    return true;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'text-green-600 bg-green-100';
      case 'pending':
        return 'text-yellow-600 bg-yellow-100';
      case 'cancelled':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <CheckCircle className="h-4 w-4" />;
      case 'pending':
        return <Clock className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  if (bookings.length === 0) {
    return (
      <div className="min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">My Bookings</h1>
            <div className="bg-white rounded-2xl shadow-xl p-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Plane className="h-12 w-12 text-gray-400" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">No bookings yet</h2>
              <p className="text-gray-600 mb-8">Start planning your next adventure!</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => onNavigate('flights')}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-200"
                >
                  Book a Flight
                </button>
                <button
                  onClick={() => onNavigate('trains')}
                  className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200"
                >
                  Book a Train
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">My Bookings</h1>
          <p className="text-gray-600">Track and manage all your travel bookings</p>
        </div>

        {/* Filter Tabs */}
        <div className="bg-white rounded-lg p-2 mb-8 inline-flex">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-md font-medium transition-colors ${
              filter === 'all'
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
            }`}
          >
            All Bookings ({bookings.length})
          </button>
          <button
            onClick={() => setFilter('flights')}
            className={`px-6 py-2 rounded-md font-medium transition-colors ${
              filter === 'flights'
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
            }`}
          >
            Flights ({bookings.filter(b => b.type === 'flight').length})
          </button>
          <button
            onClick={() => setFilter('trains')}
            className={`px-6 py-2 rounded-md font-medium transition-colors ${
              filter === 'trains'
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
            }`}
          >
            Trains ({bookings.filter(b => b.type === 'train').length})
          </button>
        </div>

        {/* Bookings List */}
        <div className="space-y-6">
          {filteredBookings.map((booking) => (
            <div key={booking.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  {/* Booking Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center mr-4">
                        {booking.type === 'flight' ? (
                          <Plane className="h-6 w-6 text-white" />
                        ) : (
                          <Train className="h-6 w-6 text-white" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {booking.type === 'flight' ? booking.details.airline : booking.details.trainName}
                        </h3>
                        <p className="text-sm text-gray-500">
                          Booking ID: {booking.id}
                        </p>
                      </div>
                    </div>
                    <div className={`flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(booking.status)}`}>
                      {getStatusIcon(booking.status)}
                      <span className="ml-1 capitalize">{booking.status}</span>
                    </div>
                  </div>

                  {/* Route Information */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                      <div>
                        <p className="text-sm text-gray-500">From</p>
                        <p className="font-medium text-gray-900">{booking.details.from}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                      <div>
                        <p className="text-sm text-gray-500">To</p>
                        <p className="font-medium text-gray-900">{booking.details.to}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                      <div>
                        <p className="text-sm text-gray-500">Departure</p>
                        <p className="font-medium text-gray-900">{booking.details.departure}</p>
                      </div>
                    </div>
                  </div>

                  {/* Additional Details */}
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{booking.passengers} {booking.passengers === 1 ? 'Passenger' : 'Passengers'}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Booked on {new Date(booking.bookingDate).toLocaleDateString()}</span>
                    </div>
                    {booking.type === 'train' && booking.details.trainNumber && (
                      <span>Train #{booking.details.trainNumber}</span>
                    )}
                  </div>
                </div>

                {/* Price and Actions */}
                <div className="mt-4 lg:mt-0 lg:ml-8 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <DollarSign className="h-5 w-5 text-green-600" />
                    <span className="text-2xl font-bold text-gray-900">
                      ₹{(booking.details.price * booking.passengers).toLocaleString()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">Total Amount</p>
                  <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <button
            onClick={() => onNavigate('home')}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-200"
          >
            Plan Another Trip
          </button>
        </div>
      </div>
    </div>
  );
}