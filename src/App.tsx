import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Using HashRouter for GH Pages
import Header from './components/Header';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Specialties from './components/Specialties';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import BookAppointment from './components/BookAppointment';
import NotFound from './components/NotFound'; // Your new 404 component

function App() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => setIsAppointmentModalOpen(true);
    window.addEventListener('openAppointmentModal', handleOpenModal);
    return () => window.removeEventListener('openAppointmentModal', handleOpenModal);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header onBookAppointment={() => setIsAppointmentModalOpen(true)} />
        
        <Routes>
          {/* Main Website Content */}
          <Route path="/" element={
            <>
              <Hero onBookAppointment={() => setIsAppointmentModalOpen(true)} />
              <Profile />
              <Specialties />
              <Testimonials />
            </>
          } />

          {/* Fallback 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
        
        <BookAppointment
          isOpen={isAppointmentModalOpen}
          onClose={() => setIsAppointmentModalOpen(false)}
        />
      </div>
    </Router>
  );
}

export default App;