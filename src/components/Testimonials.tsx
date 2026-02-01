import { useState } from 'react';
import { Play, X } from 'lucide-react';
import { galleryMedia } from '../data/hospitalData';

const Testimonials = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const photos = galleryMedia.filter(item => item.type === 'photo');
  // const videos = galleryMedia.filter(item => item.type === 'video');

  return (
    <section id="testimonials" className="py-20 px-4 bg-white">
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

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">Treatment Gallery</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <div
                key={photo.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                  <h4 className="text-xl font-bold text-white mb-2">{photo.title}</h4>
                  <p className="text-green-100 text-sm">{photo.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">Patient Testimonials</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <div
                key={video.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`
                }}
                onClick={() => setSelectedVideo(video.url)}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-64 object-cover group-hover:brightness-75 transition-all duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Play className="text-white fill-white" size={28} />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="text-lg font-bold text-white mb-1">{video.title}</h4>
                  <p className="text-green-200 text-sm">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        <div className="text-center">
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Growing Community
            </h3>
            <p className="text-lg md:text-xl mb-8 text-green-50 max-w-3xl mx-auto">
              Thousands of patients have experienced transformative healing through our Ayurvedic treatments
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-xl">
                <p className="text-3xl font-bold">98%</p>
                <p className="text-green-50 text-sm">Patient Satisfaction</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-xl">
                <p className="text-3xl font-bold">5000+</p>
                <p className="text-green-50 text-sm">Lives Changed</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-xl">
                <p className="text-3xl font-bold">15+</p>
                <p className="text-green-50 text-sm">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-green-400 transition-colors"
            >
              <X size={32} />
            </button>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src={selectedVideo}
                title="Patient Testimonial"
                className="absolute inset-0 w-full h-full rounded-2xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
