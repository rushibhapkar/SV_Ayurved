import { useState } from 'react';
import { Play, X } from 'lucide-react';
import { galleryMedia } from '../data/hospitalData';

const Testimonials = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const photos = galleryMedia.filter(item => item.type === 'photo');
  // const videos = galleryMedia.filter(item => item.type === 'video');

  return (
    <section id="testimonials" className="py-20 px-4 bg-gray-50/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Patient <span className="text-green-600">Gallery</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See the real transformations and healing moments at our clinic
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 border-l-4 border-green-500 pl-4">
            Treatment Gallery
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {photos.map((photo, index) => (
              <div
                key={photo.id}
                className="group relative bg-white p-2 rounded-2xl shadow-sm ring-1 ring-gray-200/60 hover:ring-green-500/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Image Container with inner border */}
                <div className="relative overflow-hidden rounded-xl h-64 border border-gray-100">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    loading="lazy"
                  />
                  
                  {/* Glassmorphism Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                    <h4 className="text-xl font-bold text-white mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {photo.title}
                    </h4>
                    <p className="text-green-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                      {photo.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Join Community Section */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-green-600 to-green-800 text-white rounded-[2rem] p-8 md:p-14 shadow-2xl relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            
            <h3 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">
              Join Our Growing Community
            </h3>
            <p className="text-lg md:text-xl mb-10 text-green-50 max-w-3xl mx-auto relative z-10 opacity-90">
              Thousands of patients have experienced transformative healing through our Ayurvedic treatments
            </p>
            
            <div className="flex flex-wrap gap-4 md:gap-8 justify-center relative z-10">
              <StatCard value="98%" label="Patient Satisfaction" />
              <StatCard value="5000+" label="Lives Changed" />
              <StatCard value="15+" label="Years Experience" />
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal remains the same but with better backdrop */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-[100] flex items-center justify-center p-4">
          <div className="relative w-full max-w-5xl aspect-video shadow-2xl">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-14 right-0 text-white hover:text-green-400 p-2 transition-all hover:rotate-90"
            >
              <X size={40} />
            </button>
            <iframe
              src={selectedVideo}
              title="Patient Testimonial"
              className="w-full h-full rounded-2xl border-2 border-white/10"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

// Helper Component for Stats
const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div className="bg-white/10 backdrop-blur-md px-8 py-5 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors">
    <p className="text-4xl font-black mb-1">{value}</p>
    <p className="text-green-100 text-xs uppercase tracking-widest font-bold">{label}</p>
  </div>
);

export default Testimonials;