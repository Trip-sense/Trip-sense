import React from 'react';
import { Plane, Train, MapPin, Star, TrendingUp, Shield, Clock, Hotel, Bus, Globe, Camera, Compass } from 'lucide-react';
import { motion } from 'framer-motion';
import { TypewriterText } from '../components/TypewriterText';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { CurrencyConverter } from '../components/CurrencyConverter';
import { InteractiveMap } from '../components/InteractiveMap';
import { TripPlanner } from '../components/TripPlanner';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onDestinationNavigate: (destination: string) => void;
}

export function HomePage({ onNavigate, onDestinationNavigate }: HomePageProps) {
  const welcomeTexts = [
    'Welcome to Trip Sense',
    'आपका Trip Sense में स्वागत है',
    'Bienvenue à Trip Sense',
    'Bienvenido a Trip Sense',
    'Willkommen bei Trip Sense'
  ];

  return (
    <div className="min-h-screen relative">
      {/* Hero Section with Clean Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1437846972679-9e6e537be46e?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
          }}
        />
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8"
        >
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <TypewriterText texts={welcomeTexts} speed={150} delay={3000} />
          </motion.h1>
          
          <motion.p 
            className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Discover amazing destinations worldwide, book flights, trains, buses & hotels
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            <motion.button 
              onClick={() => onNavigate('flights')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Your Flight
            </motion.button>
            <motion.button 
              onClick={() => onNavigate('trains')}
              className="px-8 py-4 bg-white/20 backdrop-blur-md text-white font-semibold rounded-lg border border-white/30 hover:bg-white/30 transform hover:scale-105 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Train Routes
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Enhanced Features Section - Below the Image */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Trip Sense?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We make travel planning effortless with our comprehensive booking platform
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Plane className="h-8 w-8" />,
                title: "Flight Booking",
                description: "Find and book the best flights with competitive prices worldwide",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: <Train className="h-8 w-8" />,
                title: "Train Reservations",
                description: "Comfortable train journeys across multiple destinations",
                color: "from-green-500 to-green-600"
              },
              {
                icon: <Bus className="h-8 w-8" />,
                title: "Bus Booking",
                description: "Affordable bus travel with premium comfort options",
                color: "from-orange-500 to-orange-600"
              },
              {
                icon: <Hotel className="h-8 w-8" />,
                title: "Hotel Booking",
                description: "Luxury stays and budget accommodations worldwide",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: <MapPin className="h-8 w-8" />,
                title: "Interactive Maps",
                description: "Explore nearby attractions, restaurants, and services",
                color: "from-red-500 to-red-600"
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Global Coverage",
                description: "Travel to 200+ destinations across 50+ countries",
                color: "from-indigo-500 to-indigo-600"
              },
              {
                icon: <Camera className="h-8 w-8" />,
                title: "Travel Photography",
                description: "Capture and share your travel memories with our community",
                color: "from-pink-500 to-pink-600"
              },
              {
                icon: <Compass className="h-8 w-8" />,
                title: "Smart Recommendations",
                description: "AI-powered suggestions based on your preferences",
                color: "from-teal-500 to-teal-600"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <motion.div 
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} text-white rounded-full mb-4`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tools Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Smart Travel Tools
            </h2>
            <p className="text-xl text-gray-600">
              Plan your perfect trip with our intelligent travel assistance
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <CurrencyConverter />
            <InteractiveMap />
          </div>
          
          <TripPlanner />
        </div>
      </section>

      {/* Enhanced Popular Destinations with More Countries */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Popular Destinations
            </h2>
            <p className="text-xl text-gray-600">
              Explore our most loved travel destinations worldwide
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'India',
                image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
                description: 'Discover the incredible diversity of India, from the majestic Taj Mahal to the serene backwaters of Kerala.',
                highlights: ['Taj Mahal', 'Kerala Backwaters', 'Rajasthan Palaces', 'Goa Beaches'],
                weather: '25°C - 35°C',
                currency: 'INR (₹)',
                bestTime: 'Oct - Mar'
              },
              {
                name: 'Dubai',
                image: 'https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
                description: 'Experience the perfect blend of modern luxury and traditional culture in the heart of the Middle East.',
                highlights: ['Burj Khalifa', 'Desert Safari', 'Dubai Mall', 'Palm Jumeirah'],
                weather: '20°C - 40°C',
                currency: 'AED (د.إ)',
                bestTime: 'Nov - Mar'
              },
              {
                name: 'California',
                image: 'https://images.pexels.com/photos/1680247/pexels-photo-1680247.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
                description: 'From Hollywood glamour to Silicon Valley innovation, California offers diverse experiences and stunning coastlines.',
                highlights: ['Hollywood', 'Golden Gate Bridge', 'Yosemite', 'Napa Valley'],
                weather: '15°C - 25°C',
                currency: 'USD ($)',
                bestTime: 'Apr - Oct'
              },
              {
                name: 'America',
                image: 'https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
                description: 'Explore the land of opportunities with iconic landmarks, diverse cultures, and breathtaking national parks.',
                highlights: ['Statue of Liberty', 'Grand Canyon', 'Times Square', 'Yellowstone'],
                weather: 'Varies by region',
                currency: 'USD ($)',
                bestTime: 'May - Sep'
              },
              {
                name: 'Japan',
                image: 'https://images.pexels.com/photos/161401/fushimi-inari-taisha-shrine-kyoto-japan-temple-161401.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
                description: 'Experience the perfect harmony of ancient traditions and cutting-edge technology in the Land of the Rising Sun.',
                highlights: ['Mount Fuji', 'Tokyo Skyline', 'Kyoto Temples', 'Cherry Blossoms'],
                weather: '10°C - 30°C',
                currency: 'JPY (¥)',
                bestTime: 'Mar - May, Sep - Nov'
              },
              {
                name: 'France',
                image: 'https://images.pexels.com/photos/161853/eiffel-tower-paris-france-tower-161853.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
                description: 'Immerse yourself in art, culture, and cuisine in the most romantic country in the world.',
                highlights: ['Eiffel Tower', 'Louvre Museum', 'French Riviera', 'Versailles'],
                weather: '5°C - 25°C',
                currency: 'EUR (€)',
                bestTime: 'Apr - Jun, Sep - Oct'
              }
            ].map((destination, index) => (
              <motion.div 
                key={destination.name} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">{destination.name}</h3>
                  
                  {/* Weather & Currency Info */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 text-xs">
                    <div className="text-gray-700">{destination.weather}</div>
                    <div className="text-gray-600">{destination.currency}</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <Clock className="h-4 w-4 text-blue-600 mr-2" />
                      <span className="text-sm text-gray-600">Best Time: {destination.bestTime}</span>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Top Attractions:</h4>
                    <div className="flex flex-wrap gap-2">
                      {destination.highlights.map((highlight) => (
                        <motion.span 
                          key={highlight} 
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                          whileHover={{ scale: 1.05 }}
                        >
                          {highlight}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  <motion.button 
                    onClick={() => onDestinationNavigate(destination.name.toLowerCase())}
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Explore {destination.name}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '100K+', label: 'Happy Travelers', icon: '😊' },
              { number: '50+', label: 'Countries', icon: '🌍' },
              { number: '2M+', label: 'Bookings Made', icon: '✈️' },
              { number: '4.9', label: 'Average Rating', icon: '⭐' }
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center text-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div 
                  className="text-4xl mb-2"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                >
                  {stat.icon}
                </motion.div>
                <motion.div 
                  className="text-3xl sm:text-4xl font-bold mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-teal-600 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 80%, rgba(119, 198, 255, 0.3) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Start Your Global Journey?
          </motion.h2>
          <motion.p 
            className="text-xl text-blue-100 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Join millions of travelers who trust Trip Sense for their worldwide adventures
          </motion.p>
          <motion.button 
            onClick={() => onNavigate('signup')}
            className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Exploring Today
          </motion.button>
        </div>
      </section>
    </div>
  );
}