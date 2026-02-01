import { useState } from 'react';
import { X, Calendar, MapPin, Clock, Send } from 'lucide-react';
import { visitSchedule } from '../data/hospitalData';
import { AppointmentForm } from '../types';

interface BookAppointmentProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookAppointment = ({ isOpen, onClose }: BookAppointmentProps) => {
  const [formData, setFormData] = useState<AppointmentForm>({
    name: '',
    phone: '',
    email: '',
    city: '',
    problem: '',
    preferredDate: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `New Appointment Request:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
City: ${formData.city}
Problem: ${formData.problem}
Preferred Date: ${formData.preferredDate}`;

    const whatsappNumber = '919876543210';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setFormData({
        name: '',
        phone: '',
        email: '',
        city: '',
        problem: '',
        preferredDate: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto animate-slideUp">
        <div className="sticky top-0 bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-t-3xl flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold">Book Your Appointment</h2>
            <p className="text-green-50 mt-1">Choose your preferred city and schedule</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 md:p-8">
          {submitted ? (
            <div className="text-center py-12 animate-fadeIn">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="text-green-600" size={40} />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Request Sent Successfully!</h3>
              <p className="text-lg text-gray-600">
                Your appointment request has been sent via WhatsApp. Our team will contact you shortly.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Calendar className="text-green-600" />
                  Visit Schedule
                </h3>

                <div className="space-y-4">
                  {visitSchedule.map((schedule, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border-2 border-green-100 hover:border-green-300 transition-all duration-300 transform hover:scale-105"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <MapPin className="text-green-600 flex-shrink-0 mt-1" size={20} />
                        <div>
                          <h4 className="text-xl font-bold text-gray-800">{schedule.city}</h4>
                          <p className="text-gray-600 text-sm">{schedule.address}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg">
                        <Clock className="text-green-600" size={18} />
                        <p className="text-gray-700 font-medium text-sm">{schedule.schedule}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 bg-green-50 p-4 rounded-xl">
                  <p className="text-sm text-gray-700">
                    <strong className="text-green-600">Note:</strong> Please select your preferred city in the form. Appointments are subject to availability.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Appointment Details</h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      pattern="[0-9]{10}"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors"
                      placeholder="10-digit mobile number"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Preferred City *</label>
                    <select
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors"
                    >
                      <option value="">Select a city</option>
                      {visitSchedule.map((schedule, index) => (
                        <option key={index} value={schedule.city}>
                          {schedule.city}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Preferred Date *</label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Health Concern *</label>
                    <textarea
                      name="problem"
                      value={formData.problem}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors resize-none"
                      placeholder="Briefly describe your health concern..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    Send Appointment Request
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
