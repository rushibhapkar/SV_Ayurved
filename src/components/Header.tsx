import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

interface HeaderProps {
  onBookAppointment: () => void;
}

const Header = ({ onBookAppointment }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="bg-green-50 py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+919881893851" className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors">
              <Phone size={16} />
              <span className="hidden sm:inline">+91 9881893851</span>
            </a>
            <a href="mailto:drswapniljagtap7 000@gmail.com" className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors">
              <Mail size={16} />
              <span className="hidden sm:inline">drswapniljagtap7000@gmail.com</span>
            </a>
          </div>
          <p className="text-gray-600 text-xs sm:text-sm">Ancient Healing, Modern Care</p>
        </div>
      </div>

      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">आ</span>
            </div>
            <div>
              <h1 className="text-xl sm:text-1xl font-bold text-gray-800">Shri Vishwambhar Ayurvedic Chikitsalaya & Panchakarma Centre</h1>
              <p className="text-xs sm:text-sm text-green-600">Traditional Wellness Center</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('profile')} className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Profile
            </button>
            <button onClick={() => scrollToSection('specialties')} className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Specialties
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Testimonials
            </button>
            <button
              onClick={onBookAppointment}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Book Appointment
            </button>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-slideDown">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-gray-700 hover:text-green-600 transition-colors font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('profile')} className="block w-full text-left py-2 text-gray-700 hover:text-green-600 transition-colors font-medium">
              Profile
            </button>
            <button onClick={() => scrollToSection('specialties')} className="block w-full text-left py-2 text-gray-700 hover:text-green-600 transition-colors font-medium">
              Specialties
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left py-2 text-gray-700 hover:text-green-600 transition-colors font-medium">
              Testimonials
            </button>
            <button
              onClick={() => {
                onBookAppointment();
                setMobileMenuOpen(false);
              }}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              Book Appointment
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
