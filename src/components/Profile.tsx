import { GraduationCap, Award, CheckCircle } from 'lucide-react';
import { doctorData } from '../data/hospitalData';

const Profile = () => {
  return (
    <section id="profile" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            About <span className="text-green-600">Dr. Swapnil</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-3xl transform rotate-3"></div>
              <img
                src={doctorData.image}
                alt={doctorData.name}
                className="relative w-full h-96 object-cover rounded-3xl shadow-2xl transform -rot ate-3 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="flex-1 space-y-8">
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg border border-green-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <Award className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Professional Journey</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {doctorData.about}
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-green-50 p-8 rounded-2xl shadow-lg border border-green-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Qualifications & Certifications</h3>
              </div>

              <div className="space-y-4">
                {doctorData.qualifications.map((qualification, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:translate-x-2 transition-transform"
                  >
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <p className="text-gray-700 font-medium">{qualification}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-500 text-white p-6 rounded-xl text-center shadow-lg transform hover:scale-105 transition-all duration-300">
                <p className="text-3xl font-bold mb-2">15+</p>
                <p className="text-green-100">Years of Practice</p>
              </div>
              <div className="bg-green-600 text-white p-6 rounded-xl text-center shadow-lg transform hover:scale-105 transition-all duration-300">
                <p className="text-3xl font-bold mb-2">5000+</p>
                <p className="text-green-100">Lives Transformed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
