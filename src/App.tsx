import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Header from './components/Header';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import HomeView from './components/HomeView';
import ServicesView from './components/ServicesView';
import LocationView from './components/LocationView';
import ContactView from './components/ContactView';
import TiresView from './components/TiresView';
import AboutView from './components/AboutView';
import ReviewsView from './components/ReviewsView';
import { Route } from './types';

export default function App() {
  const [route, setRoute] = useState<Route>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Scroll to top of window when navigating between routes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [route]);

  const handleNavigate = (newRoute: Route) => {
    setRoute(newRoute);
  };

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const renderActiveView = () => {
    switch (route) {
      case 'home':
        return (
          <HomeView 
            onNavigate={handleNavigate} 
            onOpenBooking={handleOpenBooking} 
          />
        );
      case 'services':
        return (
          <ServicesView 
            onNavigate={handleNavigate} 
            onOpenBooking={handleOpenBooking} 
          />
        );
      case 'location':
        return (
          <LocationView 
            onNavigate={handleNavigate} 
            onOpenBooking={handleOpenBooking} 
          />
        );
      case 'contact':
        return (
          <ContactView 
            onNavigate={handleNavigate} 
          />
        );
      case 'tires':
        return (
          <TiresView 
            onOpenBooking={handleOpenBooking} 
          />
        );
      case 'about':
        return (
          <AboutView 
            onNavigate={handleNavigate} 
          />
        );
      case 'reviews':
        return (
          <ReviewsView />
        );
      default:
        return (
          <HomeView 
            onNavigate={handleNavigate} 
            onOpenBooking={handleOpenBooking} 
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface flex flex-col justify-between selection:bg-primary selection:text-white">
      
      {/* Premium Header */}
      <Header 
        currentRoute={route} 
        onNavigate={handleNavigate} 
        onOpenBooking={handleOpenBooking} 
      />

      {/* Main Viewport Content with animated transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={route}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Premium Footer */}
      <Footer 
        onNavigate={handleNavigate} 
      />

      {/* Global Clinical Booking Modal */}
      <AnimatePresence>
        {isBookingOpen && (
          <BookingModal 
            isOpen={isBookingOpen} 
            onClose={() => setIsBookingOpen(false)} 
          />
        )}
      </AnimatePresence>

    </div>
  );
}
