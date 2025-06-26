import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { FlightBookingPage } from './pages/FlightBookingPage';
import { TrainBookingPage } from './pages/TrainBookingPage';
import { BusBookingPage } from './pages/BusBookingPage';
import { HotelBookingPage } from './pages/HotelBookingPage';
import { DestinationPage } from './pages/DestinationPage';
import { ProfilePage } from './pages/ProfilePage';
import { BookingHistoryPage } from './pages/BookingHistoryPage';
import { AuthProvider, useAuth } from './context/AuthContext';
import { AnimatedBackground } from './components/AnimatedBackground';

function AppContent() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedDestination, setSelectedDestination] = useState('');
  const { user } = useAuth();

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} onDestinationNavigate={navigateToDestination} />;
      case 'login':
        return <LoginPage onNavigate={setCurrentPage} />;
      case 'signup':
        return <SignupPage onNavigate={setCurrentPage} />;
      case 'flights':
        return user ? <FlightBookingPage onNavigate={setCurrentPage} /> : <LoginPage onNavigate={setCurrentPage} />;
      case 'trains':
        return user ? <TrainBookingPage onNavigate={setCurrentPage} /> : <LoginPage onNavigate={setCurrentPage} />;
      case 'buses':
        return user ? <BusBookingPage onNavigate={setCurrentPage} /> : <LoginPage onNavigate={setCurrentPage} />;
      case 'hotels':
        return user ? <HotelBookingPage onNavigate={setCurrentPage} /> : <LoginPage onNavigate={setCurrentPage} />;
      case 'destination':
        return <DestinationPage destination={selectedDestination} onNavigate={setCurrentPage} />;
      case 'profile':
        return user ? <ProfilePage onNavigate={setCurrentPage} /> : <LoginPage onNavigate={setCurrentPage} />;
      case 'bookings':
        return user ? <BookingHistoryPage onNavigate={setCurrentPage} /> : <LoginPage onNavigate={setCurrentPage} />;
      default:
        return <HomePage onNavigate={setCurrentPage} onDestinationNavigate={navigateToDestination} />;
    }
  };

  const navigateToDestination = (destination: string) => {
    setSelectedDestination(destination);
    setCurrentPage('destination');
  };

  return (
    <div className="min-h-screen relative">
      {currentPage === 'home' && <AnimatedBackground />}
      <Navigation 
        currentPage={currentPage} 
        onNavigate={setCurrentPage}
        onDestinationNavigate={navigateToDestination}
      />
      <main>
        {renderPage()}
      </main>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;