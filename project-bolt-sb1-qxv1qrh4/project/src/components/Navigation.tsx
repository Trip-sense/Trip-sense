import React, { useState } from 'react';
import { Menu, X, Plane, Train, MapPin, User, History, LogOut, Hotel, Bus } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onDestinationNavigate: (destination: string) => void;
}

export function Navigation({ currentPage, onNavigate, onDestinationNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);
  const { user, logout } = useAuth();

  const handleDestinationClick = (destination: string) => {
    onDestinationNavigate(destination);
    setIsMenuOpen(false);
    setIsDestinationsOpen(false);
  };

  const handleLogout = () => {
    logout();
    onNavigate('home');
    setIsMenuOpen(false);
  };

  return (
    <motion.nav 
      className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center cursor-pointer"
            onClick={() => onNavigate('home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="bg-gradient-to-r from-blue-600 to-teal-600 p-2 rounded-lg"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Plane className="h-6 w-6 text-white" />
            </motion.div>
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Trip Sense
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.button
              onClick={() => onNavigate('home')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === 'home' 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Home
            </motion.button>

            {/* Enhanced Booking Dropdown */}
            <div className="relative group">
              <button className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                Booking
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <motion.button
                  onClick={() => onNavigate('flights')}
                  className="flex items-center w-full px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <Plane className="h-4 w-4 mr-3 text-blue-500" />
                  <div className="text-left">
                    <div className="font-medium">Flight Booking</div>
                    <div className="text-xs text-gray-500">Domestic & International</div>
                  </div>
                </motion.button>
                <motion.button
                  onClick={() => onNavigate('trains')}
                  className="flex items-center w-full px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <Train className="h-4 w-4 mr-3 text-green-500" />
                  <div className="text-left">
                    <div className="font-medium">Train Booking</div>
                    <div className="text-xs text-gray-500">All classes available</div>
                  </div>
                </motion.button>
                <motion.button
                  onClick={() => onNavigate('buses')}
                  className="flex items-center w-full px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <Bus className="h-4 w-4 mr-3 text-orange-500" />
                  <div className="text-left">
                    <div className="font-medium">Bus Booking</div>
                    <div className="text-xs text-gray-500">AC & Non-AC buses</div>
                  </div>
                </motion.button>
                <motion.button
                  onClick={() => onNavigate('hotels')}
                  className="flex items-center w-full px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <Hotel className="h-4 w-4 mr-3 text-purple-500" />
                  <div className="text-left">
                    <div className="font-medium">Hotel Booking</div>
                    <div className="text-xs text-gray-500">Luxury to budget stays</div>
                  </div>
                </motion.button>
              </div>
            </div>

            {/* Enhanced Destinations Dropdown */}
            <div className="relative group">
              <button className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                Destinations
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <motion.button
                  onClick={() => handleDestinationClick('india')}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  whileHover={{ x: 5 }}
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  India
                </motion.button>
                <motion.button
                  onClick={() => handleDestinationClick('dubai')}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  whileHover={{ x: 5 }}
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  Dubai
                </motion.button>
                <motion.button
                  onClick={() => handleDestinationClick('california')}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  whileHover={{ x: 5 }}
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  California
                </motion.button>
                <motion.button
                  onClick={() => handleDestinationClick('america')}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  whileHover={{ x: 5 }}
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  America
                </motion.button>
                <motion.button
                  onClick={() => handleDestinationClick('japan')}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  whileHover={{ x: 5 }}
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  Japan
                </motion.button>
                <motion.button
                  onClick={() => handleDestinationClick('france')}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  whileHover={{ x: 5 }}
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  France
                </motion.button>
              </div>
            </div>

            {/* User Menu */}
            {user ? (
              <div className="relative group">
                <button className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                  <User className="h-4 w-4 mr-1" />
                  {user.name}
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <motion.button
                    onClick={() => onNavigate('profile')}
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    whileHover={{ x: 5 }}
                  >
                    <User className="h-4 w-4 mr-2" />
                    Profile
                  </motion.button>
                  <motion.button
                    onClick={() => onNavigate('bookings')}
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    whileHover={{ x: 5 }}
                  >
                    <History className="h-4 w-4 mr-2" />
                    My Bookings
                  </motion.button>
                  <motion.button
                    onClick={handleLogout}
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600"
                    whileHover={{ x: 5 }}
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </motion.button>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <motion.button
                  onClick={() => onNavigate('login')}
                  className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Login
                </motion.button>
                <motion.button
                  onClick={() => onNavigate('signup')}
                  className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-teal-600 rounded-md hover:from-blue-700 hover:to-teal-700 transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Sign Up
                </motion.button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden py-4 border-t border-gray-200"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-2">
                <motion.button
                  onClick={() => { onNavigate('home'); setIsMenuOpen(false); }}
                  className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Home
                </motion.button>
                
                <motion.button
                  onClick={() => setIsDestinationsOpen(!isDestinationsOpen)}
                  className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Destinations
                </motion.button>
                
                <AnimatePresence>
                  {isDestinationsOpen && (
                    <motion.div 
                      className="ml-4 space-y-1"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      {['india', 'dubai', 'california', 'america', 'japan', 'france'].map((dest) => (
                        <motion.button
                          key={dest}
                          onClick={() => handleDestinationClick(dest)}
                          className="block w-full text-left px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors capitalize"
                          whileHover={{ x: 5 }}
                        >
                          {dest}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {user ? (
                  <>
                    <motion.button
                      onClick={() => { onNavigate('flights'); setIsMenuOpen(false); }}
                      className="flex items-center w-full px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <Plane className="h-4 w-4 mr-2" />
                      Flight Booking
                    </motion.button>
                    <motion.button
                      onClick={() => { onNavigate('trains'); setIsMenuOpen(false); }}
                      className="flex items-center w-full px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <Train className="h-4 w-4 mr-2" />
                      Train Booking
                    </motion.button>
                    <motion.button
                      onClick={() => { onNavigate('buses'); setIsMenuOpen(false); }}
                      className="flex items-center w-full px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <Bus className="h-4 w-4 mr-2" />
                      Bus Booking
                    </motion.button>
                    <motion.button
                      onClick={() => { onNavigate('hotels'); setIsMenuOpen(false); }}
                      className="flex items-center w-full px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <Hotel className="h-4 w-4 mr-2" />
                      Hotel Booking
                    </motion.button>
                    <motion.button
                      onClick={() => { onNavigate('profile'); setIsMenuOpen(false); }}
                      className="flex items-center w-full px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <User className="h-4 w-4 mr-2" />
                      Profile
                    </motion.button>
                    <motion.button
                      onClick={() => { onNavigate('bookings'); setIsMenuOpen(false); }}
                      className="flex items-center w-full px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <History className="h-4 w-4 mr-2" />
                      My Bookings
                    </motion.button>
                    <motion.button
                      onClick={handleLogout}
                      className="flex items-center w-full px-3 py-2 rounded-md text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </motion.button>
                  </>
                ) : (
                  <>
                    <motion.button
                      onClick={() => { onNavigate('login'); setIsMenuOpen(false); }}
                      className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium text-blue-600 hover:bg-blue-50 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      Login
                    </motion.button>
                    <motion.button
                      onClick={() => { onNavigate('signup'); setIsMenuOpen(false); }}
                      className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 transition-all duration-200"
                      whileHover={{ x: 5 }}
                    >
                      Sign Up
                    </motion.button>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}