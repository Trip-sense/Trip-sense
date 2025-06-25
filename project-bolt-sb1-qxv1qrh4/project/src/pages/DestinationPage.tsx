import React from 'react';
import { MapPin, Star, Calendar, Camera, Thermometer, DollarSign, Clock } from 'lucide-react';

interface DestinationPageProps {
  destination: string;
  onNavigate: (page: string) => void;
}

export function DestinationPage({ destination, onNavigate }: DestinationPageProps) {
  const destinationData = {
    india: {
      name: 'India',
      tagline: 'Incredible India Awaits You',
      description: 'Discover the land of diverse cultures, ancient traditions, and breathtaking landscapes. From the snow-capped Himalayas to the tropical beaches of Goa, India offers an unforgettable journey through time and tradition.',
      hero: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      attractions: [
        {
          name: 'Taj Mahal',
          location: 'Agra',
          image: 'https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
          description: 'One of the Seven Wonders of the World, this marble mausoleum is a symbol of eternal love.',
          rating: 4.8
        },
        {
          name: 'Kerala Backwaters',
          location: 'Kerala',
          image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
          description: 'Serene network of waterways, lagoons, and lakes surrounded by lush greenery.',
          rating: 4.7
        },
        {
          name: 'Rajasthan Palaces',
          location: 'Rajasthan',
          image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
          description: 'Magnificent palaces showcasing royal heritage and architectural brilliance.',
          rating: 4.6
        },
        {
          name: 'Goa Beaches',
          location: 'Goa',
          image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
          description: 'Golden sandy beaches with vibrant nightlife and Portuguese colonial charm.',
          rating: 4.5
        }
      ],
      weather: 'Tropical climate with monsoons (June-September). Best time to visit: October-March.',
      currency: 'Indian Rupee (₹)',
      bestTime: 'October to March',
      avgCost: '₹3,000 - ₹8,000 per day'
    },
    dubai: {
      name: 'Dubai',
      tagline: 'Where Modern Luxury Meets Desert Magic',
      description: 'Experience the dazzling cityscape of Dubai, where futuristic skyscrapers rise from golden deserts. This cosmopolitan hub offers world-class shopping, dining, and entertainment in the heart of the Arabian Peninsula.',
      hero: 'https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      attractions: [
        {
          name: 'Burj Khalifa',
          location: 'Downtown Dubai',
          image: 'https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
          description: 'The world\'s tallest building offering spectacular views of the city skyline.',
          rating: 4.9
        },
        {
          name: 'Desert Safari',
          location: 'Dubai Desert',
          image: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
          description: 'Thrilling desert adventure with dune bashing, camel rides, and traditional entertainment.',
          rating: 4.7
        },
        {
          name: 'Dubai Mall',
          location: 'Downtown Dubai',
          image: 'https://images.pexels.com/photos/2506948/pexels-photo-2506948.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
          description: 'One of the world\'s largest shopping malls with an aquarium and ice rink.',
          rating: 4.6
        },
        {
          name: 'Palm Jumeirah',
          location: 'Dubai Marina',
          image: 'https://images.pexels.com/photos/1157255/pexels-photo-1157255.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
          description: 'Iconic man-made island with luxury resorts and pristine beaches.',
          rating: 4.8
        }
      ],
      weather: 'Desert climate with hot summers. Best time to visit: November-March.',
      currency: 'UAE Dirham (AED)',
      bestTime: 'November to March',
      avgCost: '₹8,000 - ₹15,000 per day'
    },
    california: {
      name: 'California',
      tagline: 'The Golden State of Dreams',
      description: 'From Hollywood glamour to Silicon Valley innovation, California offers diverse experiences. Explore stunning coastlines, majestic redwood forests, and vibrant cities that define the American dream.',
      hero: 'https://images.pexels.com/photos/1680247/pexels-photo-1680247.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      attractions: [
        {
          name: 'Golden Gate Bridge',
          location: 'San Francisco',
          image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
          description: 'Iconic suspension bridge and symbol of San Francisco\'s engineering marvel.',
          rating: 4.8
        },
        {
          name: 'Hollywood Sign',
          location: 'Los Angeles',
          image: 'https://images.pexels.com/photos/1680247/pexels-photo-1680247.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
          description: 'World-famous landmark representing the entertainment capital of the world.',
          rating: 4.6
        },
        {
          name: 'Yosemite National Park',
          location: 'Central California',
          image: 'https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
          description: 'Breathtaking granite cliffs, waterfalls, and giant sequoia trees.',
          rating: 4.9
        },
        {
          name: 'Napa Valley',
          location: 'Northern California',
          image: 'https://images.pexels.com/photos/816608/pexels-photo-816608.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
          description: 'World-renowned wine region with rolling vineyards and luxury resorts.',
          rating: 4.7
        }
      ],
      weather: 'Mediterranean climate with mild winters and warm summers.',
      currency: 'US Dollar ($)',
      bestTime: 'April to October',
      avgCost: '$150 - $300 per day'
    },
    america: {
      name: 'America',
      tagline: 'Land of the Free, Home of the Brave',
      description: 'Explore the vast landscapes and diverse cultures of the United States. From bustling metropolises to pristine national parks, America offers endless adventures and iconic experiences.',
      hero: 'https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      attractions: [
        {
          name: 'Statue of Liberty',
          location: 'New York',
          image: 'https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
          description: 'Symbol of freedom and democracy, welcoming visitors to New York Harbor.',
          rating: 4.8
        },
        {
          name: 'Grand Canyon',
          location: 'Arizona',
          image: 'https://images.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
          description: 'One of the world\'s most spectacular natural wonders carved by the Colorado River.',
          rating: 4.9
        },
        {
          name: 'Times Square',
          location: 'New York',
          image: 'https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
          description: 'The dazzling crossroads of the world with bright lights and Broadway shows.',
          rating: 4.5
        },
        {
          name: 'Yellowstone',
          location: 'Wyoming',
          image: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
          description: 'America\'s first national park featuring geysers, hot springs, and wildlife.',
          rating: 4.8
        }
      ],
      weather: 'Varies by region - from tropical to arctic climates.',
      currency: 'US Dollar ($)',
      bestTime: 'May to September',
      avgCost: '$100 - $250 per day'
    },
    japan: {
      name: 'Japan',
      tagline: 'Land of the Rising Sun',
      description: 'Experience the perfect harmony of ancient traditions and cutting-edge technology. From serene temples to bustling cities, Japan offers a unique cultural journey.',
      hero: 'https://images.pexels.com/photos/161401/fushimi-inari-taisha-shrine-kyoto-japan-temple-161401.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      attractions: [
        {
          name: 'Mount Fuji',
          location: 'Honshu',
          image: 'https://images.pexels.com/photos/161401/fushimi-inari-taisha-shrine-kyoto-japan-temple-161401.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
          description: 'Sacred mountain and symbol of Japan, perfect for hiking and photography.',
          rating: 4.9
        },
        {
          name: 'Tokyo Skyline',
          location: 'Tokyo',
          image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
          description: 'Modern metropolis with skyscrapers, neon lights, and vibrant culture.',
          rating: 4.7
        },
        {
          name: 'Kyoto Temples',
          location: 'Kyoto',
          image: 'https://images.pexels.com/photos/161401/fushimi-inari-taisha-shrine-kyoto-japan-temple-161401.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
          description: 'Ancient temples and traditional architecture preserving Japanese heritage.',
          rating: 4.8
        },
        {
          name: 'Cherry Blossoms',
          location: 'Nationwide',
          image: 'https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
          description: 'Beautiful sakura season celebrating the arrival of spring.',
          rating: 4.9
        }
      ],
      weather: 'Temperate climate with four distinct seasons.',
      currency: 'Japanese Yen (¥)',
      bestTime: 'March to May, September to November',
      avgCost: '¥8,000 - ¥15,000 per day'
    },
    france: {
      name: 'France',
      tagline: 'The Art of Living',
      description: 'Immerse yourself in art, culture, and cuisine in the most romantic country in the world. From Parisian elegance to Mediterranean charm, France captivates every traveler.',
      hero: 'https://images.pexels.com/photos/161853/eiffel-tower-paris-france-tower-161853.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      attractions: [
        {
          name: 'Eiffel Tower',
          location: 'Paris',
          image: 'https://images.pexels.com/photos/161853/eiffel-tower-paris-france-tower-161853.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
          description: 'Iconic iron lattice tower and symbol of Paris and France.',
          rating: 4.8
        },
        {
          name: 'Louvre Museum',
          location: 'Paris',
          image: 'https://images.pexels.com/photos/2675266/pexels-photo-2675266.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
          description: 'World\'s largest art museum housing the Mona Lisa and countless masterpieces.',
          rating: 4.9
        },
        {
          name: 'French Riviera',
          location: 'Southern France',
          image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
          description: 'Glamorous Mediterranean coastline with luxury resorts and beautiful beaches.',
          rating: 4.7
        },
        {
          name: 'Palace of Versailles',
          location: 'Versailles',
          image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
          description: 'Opulent royal palace showcasing French baroque architecture and gardens.',
          rating: 4.8
        }
      ],
      weather: 'Temperate climate with mild winters and warm summers.',
      currency: 'Euro (€)',
      bestTime: 'April to June, September to October',
      avgCost: '€80 - €150 per day'
    }
  };

  const data = destinationData[destination as keyof typeof destinationData];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Destination not found</h1>
          <button
            onClick={() => onNavigate('home')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${data.hero}')`
          }}
        />
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            {data.name}
          </h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
            {data.tagline}
          </p>
          <p className="text-lg mb-8 max-w-4xl mx-auto">
            {data.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('flights')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-200"
            >
              Book Flight
            </button>
            <button
              onClick={() => onNavigate('trains')}
              className="px-8 py-4 bg-white/20 backdrop-blur-md text-white font-semibold rounded-lg border border-white/30 hover:bg-white/30 transform hover:scale-105 transition-all duration-200"
            >
              Book Train
            </button>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-teal-50">
              <Thermometer className="h-8 w-8 mx-auto mb-4 text-blue-600" />
              <h3 className="font-semibold text-gray-900 mb-2">Climate</h3>
              <p className="text-gray-600 text-sm">{data.weather}</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-teal-50">
              <Clock className="h-8 w-8 mx-auto mb-4 text-blue-600" />
              <h3 className="font-semibold text-gray-900 mb-2">Best Time</h3>
              <p className="text-gray-600 text-sm">{data.bestTime}</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-teal-50">
              <DollarSign className="h-8 w-8 mx-auto mb-4 text-blue-600" />
              <h3 className="font-semibold text-gray-900 mb-2">Currency</h3>
              <p className="text-gray-600 text-sm">{data.currency}</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-teal-50">
              <Camera className="h-8 w-8 mx-auto mb-4 text-blue-600" />
              <h3 className="font-semibold text-gray-900 mb-2">Budget</h3>
              <p className="text-gray-600 text-sm">{data.avgCost}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Attractions */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Top Attractions
            </h2>
            <p className="text-xl text-gray-600">
              Must-visit places that define the essence of {data.name}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.attractions.map((attraction, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="relative h-64">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="text-sm font-semibold">{attraction.rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <MapPin className="h-4 w-4 text-gray-500 mr-1" />
                    <span className="text-sm text-gray-500">{attraction.location}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{attraction.name}</h3>
                  <p className="text-gray-600">{attraction.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Explore {data.name}?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Book your journey today and create unforgettable memories
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('flights')}
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-200"
            >
              Book Flight to {data.name}
            </button>
            <button
              onClick={() => onNavigate('trains')}
              className="px-8 py-4 bg-white/20 backdrop-blur-md text-white font-semibold rounded-lg border border-white/30 hover:bg-white/30 transform hover:scale-105 transition-all duration-200"
            >
              Explore Train Routes
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}