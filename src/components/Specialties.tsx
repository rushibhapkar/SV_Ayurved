import { Scale, Activity, Heart, Salad, Brain, Bone, Wind, Droplets } from 'lucide-react';import { specialties } from '../data/hospitalData';

const iconMap: Record<string, React.ElementType> = {
  Scale,
  Activity,
  Heart,
  Salad,
  Brain,
  Bone,
  Wind,
  Droplets
};

const Specialties = () => {
  return (
    <section id="specialties" className="py-20 px-4 bg-gradient-to-br from-green-50 via-white to-green-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-green-600">Specialties</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive Ayurvedic treatments for holistic wellness and natural healing
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => {
            const Icon = iconMap[specialty.icon];
            return (
              <div
                key={specialty.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
                style={{
                  animation: `floatCard 3s ease-in-out infinite ${index * 0.2}s`
                }}
              >
                <div className="relative h-48 bg-gradient-to-br from-green-400 to-green-600 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                      <Icon className="text-white" size={48} />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
                  <div className="absolute bottom-4 left-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                    {specialty.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {specialty.description}
                  </p>
                </div>

                <div className="px-6 pb-6">
                  <button className="w-full bg-green-50 text-green-600 py-3 rounded-xl font-semibold hover:bg-green-600 hover:text-white transition-all duration-300 transform hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Healing Journey?
          </h3>
          <p className="text-lg md:text-xl mb-6 text-green-50">
            Book a consultation today and experience the power of Ayurvedic medicine
          </p>
          <button
            onClick={() => {
              const event = new CustomEvent('openAppointmentModal');
              window.dispatchEvent(event);
            }}
            className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Schedule Appointment
          </button>
        </div>
      </div>
    </section>
  );
};

export default Specialties;
