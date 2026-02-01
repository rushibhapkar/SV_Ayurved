import { Award, Star } from 'lucide-react';
import { doctorData } from '../data/hospitalData';

interface HeroProps {
  onBookAppointment: () => void;
}

const Hero = ({ onBookAppointment }: HeroProps) => {
  return (
    <section id="home" className="pt-32 pb-16 px-4 bg-gradient-to-br from-green-50 via-white to-green-50">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <div className="inline-block">
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
                ✨ Certified Ayurvedic Practitioner
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Welcome to
              <span className="block text-green-600 mt-2">Natural Healing</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl">
              Experience the ancient wisdom of Ayurveda combined with modern healthcare approach for holistic wellness and natural healing.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button
                onClick={onBookAppointment}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Book Your Consultation
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('profile');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg border-2 border-green-600 hover:bg-green-50 transition-all duration-300"
              >
                Learn More
              </button>
            </div>

            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600">16+</p>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600">5000+</p>
                <p className="text-gray-600">Happy Patients</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600">98%</p>
                <p className="text-gray-600">Success Rate</p>
              </div>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative max-w-md mx-auto">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-200 rounded-full blur-3xl opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-green-300 rounded-full blur-3xl opacity-60 animate-pulse delay-75"></div>

              <div className="relative bg-white rounded-3xl shadow-2xl p-6 border-4 border-green-100 transform hover:scale-105 transition-all duration-300">
                <div className="absolute -top-3 -right-3 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-1">
                  <Star size={16} fill="currentColor" />
                  <span>Top Rated</span>
                </div>

                <div className="relative">
                  <img
                    src={doctorData.image}
                    alt={doctorData.name}
                    className="w-full h-80 object-cover rounded-2xl"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-2xl">
                    <div className="flex items-center gap-2 text-yellow-400 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800">{doctorData.name}</h2>
                    <p className="text-green-600 font-semibold">{doctorData.title}</p>
                    <p className="text-gray-600 text-sm mt-1">{doctorData.specialization}</p>
                  </div>

                  <div className="flex items-center justify-center gap-2 bg-green-50 px-4 py-3 rounded-xl">
                    <Award className="text-green-600" size={20} />
                    <span className="text-gray-700 font-medium">{doctorData.experience}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
