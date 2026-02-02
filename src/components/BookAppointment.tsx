import { useState, useMemo } from 'react';
import { X, Calendar, MapPin, Clock, Send } from 'lucide-react';
import { visitSchedule } from '../data/hospitalData';
// Ensure AppointmentForm is correctly imported
// import { AppointmentForm } from '../types'; 

interface BookAppointmentProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookAppointment = ({ isOpen, onClose }: BookAppointmentProps) => {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', city: '', problem: '', preferredDate: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `New Appointment Request:\nName: ${formData.name}\nPhone: ${formData.phone}\nCity: ${formData.city}\nProblem: ${formData.problem}\nDate: ${formData.preferredDate}`;
    const whatsappNumber = '919881893851';
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); onClose(); }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-[60] flex items-center justify-center p-2 md:p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl max-w-6xl w-full h-[95vh] md:h-full md:max-h-[90vh] flex flex-col overflow-hidden animate-slideUp will-change-transform">
        
        {/* Header - Simplified for performance */}
        <div className="bg-green-600 text-white p-5 flex justify-between items-center shrink-0 shadow-md">
          <div>
            <h2 className="text-xl md:text-2xl font-bold">Book Appointment</h2>
            <p className="text-green-50 text-xs mt-0.5">Fill in the details below</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto md:overflow-hidden">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center p-8 text-center animate-fadeIn">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Send className="text-green-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Request Sent!</h3>
              <p className="text-gray-600 mt-2">Redirecting to WhatsApp...</p>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row h-full">
              
              {/* LEFT: Visit Schedule - Hidden or Collapsed on small mobile if needed, but here we just stack */}
              <div className="md:w-5/12 bg-gray-50 p-5 md:overflow-y-auto border-b md:border-b-0 md:border-r border-gray-100 will-change-scroll">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Calendar className="text-green-600" size={18} />
                  Visit Schedule
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {visitSchedule.map((schedule, index) => (
                    <div key={index} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-start gap-3">
                        <MapPin className="text-green-600 shrink-0 mt-1" size={16} />
                        <div>
                          <h4 className="font-bold text-sm text-gray-800">{schedule.city}</h4>
                          <p className="text-gray-500 text-[11px] leading-tight">{schedule.address}</p>
                          <div className="mt-2 inline-flex items-center gap-1.5 bg-green-50 px-2 py-1 rounded-md">
                             <Clock className="text-green-700" size={12} />
                             <span className="text-green-800 text-[10px] font-bold uppercase">{schedule.schedule}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT: Form - Prioritized scrolling */}
              <div className="md:w-7/12 p-6 md:p-8 md:overflow-y-auto bg-white will-change-scroll">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputField label="Full Name" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" />
                    <InputField label="Phone" name="phone" value={formData.phone} onChange={handleChange} required type="tel" pattern="[0-9]{10}" placeholder="10-digit number" />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1 ml-1">Preferred Clinic</label>
                    <select
                      name="city"
                      value={formData.city}
                      required
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500/20 outline-none bg-white text-sm"
                    >
                      <option value="">Select a location</option>
                      {visitSchedule.map((s, i) => <option key={i} value={s.city}>{s.city}</option>)}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputField label="Preferred Date" name="preferredDate" type="date" value={formData.preferredDate} onChange={handleChange} required min={new Date().toISOString().split('T')[0]} />
                    <InputField label="Email (Optional)" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Optional" />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1 ml-1">Health Concern</label>
                    <textarea
                      name="problem"
                      value={formData.problem}
                      required
                      rows={3}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500/20 outline-none resize-none text-sm"
                      placeholder="Describe your issue..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold shadow-lg shadow-green-200 transition-transform active:scale-95 flex items-center justify-center gap-2 mt-2"
                  >
                    <Send size={18} />
                    Confirm via WhatsApp
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

// Sub-component to clean up the main render
const InputField = ({ label, ...props }: any) => (
  <div>
    <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1 ml-1">{label}</label>
    <input
      {...props}
      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500/20 outline-none text-sm transition-all"
    />
  </div>
);

export default BookAppointment;