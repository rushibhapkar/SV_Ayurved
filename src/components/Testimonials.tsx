import { useState } from 'react';
import { Play, X } from 'lucide-react';
import { galleryMedia } from '../data/hospitalData';

const Testimonials = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const photos = galleryMedia.filter(item => item.type === 'photo');
  const videos = galleryMedia.filter(item => item.type === 'video');

  return (
    <section id="testimonials" className="py-20 px-4 bg-gray-50/50">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Patient <span className="text-green-600">Gallery</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See the real transformations and healing moments at our clinic
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* --- Video Testimonials Section (Compact Vertical Grid) --- */}
        {videos.length > 0 && (
          <div className="mb-20">
            <h3 className="text-xl font-bold text-gray-800 mb-6 border-l-4 border-green-500 pl-4">
              Success Stories
            </h3>
            {/* Increased column count to make cards smaller: 2 mobile, 4 tablet, 5 desktop */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
              {videos.map((video) => (
                <div 
                  key={video.id}
                  className="group relative cursor-pointer bg-white p-1.5 rounded-xl shadow-sm ring-1 ring-gray-200/60 hover:ring-green-500 transition-all duration-300 flex flex-col"
                  onClick={() => setSelectedVideo(video.url)}
                >
                  <div className="relative aspect-[9/16] overflow-hidden rounded-lg bg-gray-100">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform shadow-lg">
                        <Play fill="currentColor" size={20} className="ml-0.5" />
                      </div>
                    </div>
                  </div>
                  <div className="p-2 mt-1">
                    <h4 className="font-bold text-gray-800 text-xs md:text-sm line-clamp-1">{video.title}</h4>
                    <p className="text-gray-500 text-[10px] md:text-xs line-clamp-1 mt-0.5">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- Photo Gallery Section --- */}
        <div className="mb-20">
          <h3 className="text-xl font-bold text-gray-800 mb-6 border-l-4 border-green-500 pl-4">
            Treatment Gallery
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="group relative bg-white p-1.5 rounded-xl shadow-sm ring-1 ring-gray-200/60 hover:ring-green-500/50 transition-all duration-300 overflow-hidden"
              >
                <div className="relative overflow-hidden rounded-lg h-48 md:h-64">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-3">
                    <h4 className="text-sm font-bold text-white mb-0.5">{photo.title}</h4>
                    <p className="text-green-300 text-[10px] opacity-90">{photo.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- Stats Section --- */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-green-600 to-green-800 text-white rounded-[2rem] p-8 md:p-12 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -mr-24 -mt-24 blur-3xl"></div>
            <h3 className="text-2xl md:text-4xl font-bold mb-8 relative z-10">Join Our Growing Community</h3>
            <div className="flex flex-wrap gap-4 md:gap-8 justify-center relative z-10">
              <StatCard value="98%" label="Satisfaction" />
              <StatCard value="5000+" label="Lives Changed" />
              <StatCard value="15+" label="Years Exp" />
            </div>
          </div>
        </div>
      </div>

      {/* --- Video Modal --- */}
      {/* --- Enhanced Video Modal --- */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 transition-all duration-500"
          onClick={() => setSelectedVideo(null)}
        >
          {/* Animated Background: Glassmorphism + Radial Gradient */}
          <div className="absolute inset-0 bg-gray-900/90 backdrop-blur-xl transition-opacity">
            {/* Soft decorative glow behind the video */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[500px] bg-green-500/20 blur-[120px] rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[400px] bg-emerald-400/10 blur-[80px] rounded-full"></div>
          </div>

          {/* Close Button: More prominent with background */}
          <button
            onClick={() => setSelectedVideo(null)}
            className="fixed top-6 right-6 text-white/50 hover:text-white transition-all z-[110] bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-md border border-white/10"
          >
            <X size={28} />
          </button>

          <div 
            className="relative w-full max-w-[320px] md:max-w-[360px] aspect-[9/16] z-[105] group"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Outer Glow Effect around the phone frame */}
            <div className="absolute -inset-1 bg-gradient-to-b from-green-500/50 to-emerald-600/50 rounded-[2rem] blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative w-full h-full bg-black rounded-[2rem] overflow-hidden border-[6px] border-gray-800 shadow-2xl">
              <iframe
                src={selectedVideo}
                title="Patient Testimonial"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Hint to close */}
            <p className="absolute -bottom-10 left-0 right-0 text-center text-white/40 text-xs tracking-widest uppercase">
              Click anywhere to close
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-white/10 flex flex-col items-center min-w-[120px]">
    <p className="text-2xl md:text-3xl font-black">{value}</p>
    <p className="text-green-100 text-[10px] uppercase tracking-wider font-bold">{label}</p>
  </div>
);

export default Testimonials;