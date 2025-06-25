import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Plus, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface TripItem {
  id: string;
  time: string;
  title: string;
  location: string;
  type: 'flight' | 'hotel' | 'activity' | 'restaurant';
  notes?: string;
}

interface TripDay {
  date: string;
  items: TripItem[];
}

export function TripPlanner() {
  const [tripDays, setTripDays] = useState<TripDay[]>([
    {
      date: '2024-03-15',
      items: [
        {
          id: '1',
          time: '09:00',
          title: 'Flight to Mumbai',
          location: 'Mumbai Airport',
          type: 'flight',
          notes: 'Check-in 2 hours early'
        },
        {
          id: '2',
          time: '14:00',
          title: 'Hotel Check-in',
          location: 'Taj Mahal Palace',
          type: 'hotel'
        },
        {
          id: '3',
          time: '16:00',
          title: 'Gateway of India',
          location: 'Colaba',
          type: 'activity'
        }
      ]
    }
  ]);

  const [newItem, setNewItem] = useState({
    time: '',
    title: '',
    location: '',
    type: 'activity' as TripItem['type'],
    notes: ''
  });

  const addTripItem = (dayIndex: number) => {
    if (!newItem.time || !newItem.title || !newItem.location) return;

    const item: TripItem = {
      id: Date.now().toString(),
      ...newItem
    };

    setTripDays(prev => prev.map((day, index) => 
      index === dayIndex 
        ? { ...day, items: [...day.items, item].sort((a, b) => a.time.localeCompare(b.time)) }
        : day
    ));

    setNewItem({ time: '', title: '', location: '', type: 'activity', notes: '' });
  };

  const removeItem = (dayIndex: number, itemId: string) => {
    setTripDays(prev => prev.map((day, index) => 
      index === dayIndex 
        ? { ...day, items: day.items.filter(item => item.id !== itemId) }
        : day
    ));
  };

  const getTypeColor = (type: TripItem['type']) => {
    switch (type) {
      case 'flight': return 'bg-blue-100 text-blue-800';
      case 'hotel': return 'bg-purple-100 text-purple-800';
      case 'activity': return 'bg-green-100 text-green-800';
      case 'restaurant': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-xl p-6"
    >
      <div className="flex items-center mb-6">
        <Calendar className="h-6 w-6 text-blue-600 mr-2" />
        <h3 className="text-lg font-semibold text-gray-900">Trip Itinerary Planner</h3>
      </div>

      {tripDays.map((day, dayIndex) => (
        <div key={day.date} className="mb-8">
          <div className="flex items-center mb-4">
            <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
            <h4 className="text-lg font-semibold text-gray-900">
              {new Date(day.date).toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </h4>
          </div>

          <div className="ml-6 border-l-2 border-gray-200 pl-6 space-y-4">
            <AnimatePresence>
              {day.items.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="relative bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="absolute -left-9 top-4 w-4 h-4 bg-white border-2 border-blue-600 rounded-full"></div>
                  
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <Clock className="h-4 w-4 text-gray-500 mr-2" />
                        <span className="text-sm font-medium text-gray-900">{item.time}</span>
                        <span className={`ml-3 px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                          {item.type}
                        </span>
                      </div>
                      
                      <h5 className="font-semibold text-gray-900 mb-1">{item.title}</h5>
                      
                      <div className="flex items-center text-sm text-gray-600 mb-2">
                        <MapPin className="h-4 w-4 mr-1" />
                        {item.location}
                      </div>
                      
                      {item.notes && (
                        <p className="text-sm text-gray-600 italic">{item.notes}</p>
                      )}
                    </div>
                    
                    <button
                      onClick={() => removeItem(dayIndex, item.id)}
                      className="text-red-500 hover:text-red-700 p-1"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Add New Item Form */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-blue-50 rounded-lg p-4 border-2 border-dashed border-blue-200"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                <input
                  type="time"
                  value={newItem.time}
                  onChange={(e) => setNewItem(prev => ({ ...prev, time: e.target.value }))}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <select
                  value={newItem.type}
                  onChange={(e) => setNewItem(prev => ({ ...prev, type: e.target.value as TripItem['type'] }))}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="activity">Activity</option>
                  <option value="flight">Flight</option>
                  <option value="hotel">Hotel</option>
                  <option value="restaurant">Restaurant</option>
                </select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                <input
                  type="text"
                  placeholder="Activity title"
                  value={newItem.title}
                  onChange={(e) => setNewItem(prev => ({ ...prev, title: e.target.value }))}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <input
                  type="text"
                  placeholder="Location"
                  value={newItem.location}
                  onChange={(e) => setNewItem(prev => ({ ...prev, location: e.target.value }))}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <input
                type="text"
                placeholder="Notes (optional)"
                value={newItem.notes}
                onChange={(e) => setNewItem(prev => ({ ...prev, notes: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-3"
              />
              
              <button
                onClick={() => addTripItem(dayIndex)}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add to Itinerary
              </button>
            </motion.div>
          </div>
        </div>
      ))}
    </motion.div>
  );
}