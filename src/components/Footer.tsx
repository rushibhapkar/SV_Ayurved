import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">आ</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Shri Vishwambhar Ayurvedic Chikitsalaya & Panchakarma Centre</h3>
                <p className="text-sm text-gray-400">Traditional Wellness Center</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Experience authentic Ayurvedic healing with modern healthcare standards. Your journey to wellness begins here.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-green-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('home');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('profile');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Doctor Profile
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('specialties');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Our Specialties
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('testimonials');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Success Stories
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-green-400">Our Specialties</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Weight Management</li>
              <li>Fissure Treatment</li>
              <li>Haemorrhoids (Piles) Treatment</li>
              <li>Asthma Care</li>
              <li>Rhinorrhea Relief</li>
              <li>Joint & Pain Relief</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-green-400">Contact Us</h4>
            <div className="space-y-3">
              <a href="tel:+919881893851" className="flex items-start gap-3 text-gray-300 hover:text-green-400 transition-colors">
                <Phone size={20} className="flex-shrink-0 mt-1" />
                <span>+91 9881893851, 8378819163,</span>
              </a>
              <a href="mailto:drswapniljagtap7000@gmail.com" className="flex items-start gap-3 text-gray-300 hover:text-green-400 transition-colors">
                <Mail size={20} className="flex-shrink-0 mt-1" />
                <span>drswapniljagtap7000@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span>Dr Swapnil Jagtap, Shri Vishwambhar Ayurvediya chikitsalay and panchakarm kendra, near PDCC BANK, CHELADI STOP, at post Nasrapur, tal bhor dist pune. 412213.</span>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={() => {
                  const event = new CustomEvent('openAppointmentModal');
                  window.dispatchEvent(event);
                }}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {currentYear} Ayur Healing Hospital. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Made with <Heart size={16} className="text-red-500 fill-current" /> for your wellness
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
