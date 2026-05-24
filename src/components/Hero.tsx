// Hero.tsx
import { useEffect, useRef, useState } from 'react';
import { Award, Star, ChevronDown, Leaf, Shield, Heart } from 'lucide-react';
import { doctorData } from '../data/hospitalData';

interface HeroProps {
  onBookAppointment: () => void;
}

const Hero = ({ onBookAppointment }: HeroProps) => {
  const [visible, setVisible] = useState(false);
  const [countDone, setCountDone] = useState(false);
  const [counts, setCounts] = useState({ years: 0, patients: 0, rate: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  // ── Entrance animation trigger ───────────────────────────────
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  // ── Counter animation ────────────────────────────────────────
  useEffect(() => {
    if (!visible || countDone) return;
    setCountDone(true);
    const targets = { years: 16, patients: 5000, rate: 98 };
    const duration = 1800;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const p = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setCounts({
        years: Math.floor(ease * targets.years),
        patients: Math.floor(ease * targets.patients),
        rate: Math.floor(ease * targets.rate),
      });
      if (p < 1) requestAnimationFrame(tick);
      else setCounts(targets);
    };
    requestAnimationFrame(tick);
  }, [visible, countDone]);

  const scrollToProfile = () => {
    document.getElementById('profile')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');

        .hero-section {
          font-family: 'DM Sans', sans-serif;
        }
        .hero-display {
          font-family: 'Cormorant Garamond', serif;
        }

        /* Floating organic blobs */
        @keyframes blob-drift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33%       { transform: translate(18px, -22px) scale(1.06); }
          66%       { transform: translate(-14px, 12px) scale(0.95); }
        }
        @keyframes blob-drift-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33%       { transform: translate(-20px, 16px) scale(1.08); }
          66%       { transform: translate(12px, -18px) scale(0.94); }
        }
        @keyframes leaf-spin {
          0%   { transform: rotate(0deg) translateY(0px); }
          50%  { transform: rotate(8deg) translateY(-8px); }
          100% { transform: rotate(0deg) translateY(0px); }
        }
        @keyframes shimmer-ring {
          0%   { transform: scale(0.9); opacity: 0.7; }
          50%  { transform: scale(1.05); opacity: 0.3; }
          100% { transform: scale(0.9); opacity: 0.7; }
        }
        @keyframes badge-float {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50%       { transform: translateY(-8px) rotate(2deg); }
        }
        @keyframes card-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes particle-rise {
          0%   { transform: translateY(0) scale(1); opacity: 0.8; }
          100% { transform: translateY(-120px) scale(0); opacity: 0; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-right {
          from { opacity: 0; transform: translateX(-40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-left {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes draw-line {
          from { width: 0; }
          to   { width: 100%; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        .blob-1 { animation: blob-drift 9s ease-in-out infinite; }
        .blob-2 { animation: blob-drift-2 11s ease-in-out infinite; }
        .blob-3 { animation: blob-drift 13s ease-in-out infinite 2s; }

        .animate-leaf { animation: leaf-spin 5s ease-in-out infinite; }
        .animate-card { animation: card-float 6s ease-in-out infinite; }
        .animate-badge { animation: badge-float 4s ease-in-out infinite; }
        .animate-shimmer { animation: shimmer-ring 3s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }

        .reveal-up    { opacity: 0; animation: slide-up 0.8s cubic-bezier(0.16,1,0.3,1) forwards; }
        .reveal-right { opacity: 0; animation: slide-right 0.8s cubic-bezier(0.16,1,0.3,1) forwards; }
        .reveal-left  { opacity: 0; animation: slide-left 0.8s cubic-bezier(0.16,1,0.3,1) forwards; }
        .reveal-fade  { opacity: 0; animation: fade-in 1s ease forwards; }

        .hero-btn-primary {
          background: linear-gradient(135deg, #16a34a 0%, #15803d 50%, #166534 100%);
          box-shadow: 0 8px 32px rgba(22,163,74,0.4), inset 0 1px 0 rgba(255,255,255,0.2);
          transition: all 0.3s cubic-bezier(0.16,1,0.3,1);
        }
        .hero-btn-primary:hover {
          box-shadow: 0 16px 48px rgba(22,163,74,0.5), inset 0 1px 0 rgba(255,255,255,0.2);
          transform: translateY(-3px) scale(1.02);
        }
        .hero-btn-secondary {
          background: rgba(255,255,255,0.8);
          backdrop-filter: blur(12px);
          border: 1.5px solid rgba(22,163,74,0.3);
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
          transition: all 0.3s cubic-bezier(0.16,1,0.3,1);
        }
        .hero-btn-secondary:hover {
          background: rgba(240,253,244,0.95);
          border-color: rgba(22,163,74,0.6);
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(22,163,74,0.15);
        }
        .stat-card {
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.9);
          box-shadow: 0 4px 24px rgba(0,0,0,0.06);
          transition: all 0.3s ease;
        }
        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(22,163,74,0.15);
        }
        .doctor-card {
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(20px);
          box-shadow: 0 32px 80px rgba(0,0,0,0.12), 0 0 0 1px rgba(255,255,255,0.8);
        }
        .particle {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, #86efac, #16a34a);
          pointer-events: none;
        }
        .trust-pill {
          background: linear-gradient(135deg, rgba(240,253,244,0.9), rgba(220,252,231,0.9));
          border: 1px solid rgba(134,239,172,0.5);
          backdrop-filter: blur(8px);
        }
      `}</style>

      <section
        ref={sectionRef}
        id="home"
className="hero-section relative min-h-screen pt-36 pb-16 overflow-hidden"
        style={{
          background: 'linear-gradient(145deg, #f0fdf4 0%, #ffffff 40%, #f0fdf4 70%, #dcfce7 100%)',
        }}
      >
        {/* ── Background blobs ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="blob-1 absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full opacity-30"
            style={{ background: 'radial-gradient(circle, #bbf7d0, transparent)' }} />
          <div className="blob-2 absolute top-[20%] right-[-8%] w-[400px] h-[400px] rounded-full opacity-25"
            style={{ background: 'radial-gradient(circle, #86efac, transparent)' }} />
          <div className="blob-3 absolute bottom-[-5%] left-[30%] w-[350px] h-[350px] rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, #4ade80, transparent)' }} />

          {/* Decorative mandala ring */}
          <div className="animate-spin-slow absolute top-[10%] right-[8%] w-[180px] h-[180px] opacity-[0.07]"
            style={{
              backgroundImage: `repeating-conic-gradient(#16a34a 0deg 10deg, transparent 10deg 30deg)`,
              borderRadius: '50%',
            }} />

          {/* Floating particles */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                width: `${4 + (i % 3) * 3}px`,
                height: `${4 + (i % 3) * 3}px`,
                left: `${10 + i * 11}%`,
                bottom: `${15 + (i % 4) * 12}%`,
                opacity: 0.4 + (i % 3) * 0.15,
                animation: `particle-rise ${4 + i * 0.7}s ease-in infinite`,
                animationDelay: `${i * 0.9}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 min-h-[calc(100vh-6rem)]">

            {/* ══ LEFT COLUMN ══════════════════════════════════════ */}
            <div className="flex-1 space-y-7 text-center lg:text-left">

              {/* Trust pill */}
              <div
                className={`inline-flex items-center gap-2 trust-pill px-4 py-2 rounded-full text-sm font-medium text-green-700 ${visible ? 'reveal-up' : ''}`}
                style={{ animationDelay: '0.1s' }}
              >
                <Leaf size={14} className="animate-leaf text-green-500" />
                <span>Certified Ayurvedic Practitioner</span>
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              </div>

              {/* Headline */}
              <div
                className={`${visible ? 'reveal-right' : ''}`}
                style={{ animationDelay: '0.2s' }}
              >
                <p className="hero-display text-green-600 text-xl sm:text-2xl italic font-light tracking-wide mb-2">
                  Ancient Healing, Modern Care
                </p>
                <h1 className="hero-display text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight">
                  Restore Your
                  <span className="block relative mt-1">
                    <span className="text-green-600">Natural Balance</span>
                    {/* Underline accent */}
                    <span
                      className="absolute -bottom-1 left-0 h-[3px] rounded-full bg-gradient-to-r from-green-400 to-green-600"
                      style={{
                        width: visible ? '100%' : '0%',
                        transition: 'width 1.2s cubic-bezier(0.16,1,0.3,1) 0.8s',
                      }}
                    />
                  </span>
                </h1>
              </div>

              {/* Subtext */}
              <p
                className={`text-base sm:text-lg text-gray-500 max-w-xl leading-relaxed mx-auto lg:mx-0 font-light ${visible ? 'reveal-up' : ''}`}
                style={{ animationDelay: '0.35s' }}
              >
                Experience the ancient wisdom of Ayurveda combined with modern healthcare
                for holistic wellness — healing the root, not just the symptom.
              </p>

              {/* Trust icons */}
              <div
                className={`flex flex-wrap gap-3 justify-center lg:justify-start ${visible ? 'reveal-up' : ''}`}
                style={{ animationDelay: '0.45s' }}
              >
                {[
                  { icon: <Shield size={14} />, label: 'Safe & Natural' },
                  { icon: <Heart size={14} />, label: 'Holistic Care' },
                  { icon: <Award size={14} />, label: 'BAMS Certified' },
                ].map((item, i) => (
                  <span key={i} className="flex items-center gap-1.5 text-xs text-green-700 bg-green-50 border border-green-100 px-3 py-1.5 rounded-full font-medium">
                    {item.icon}
                    {item.label}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div
                className={`flex flex-wrap gap-4 justify-center lg:justify-start ${visible ? 'reveal-up' : ''}`}
                style={{ animationDelay: '0.5s' }}
              >
                <button
                  onClick={onBookAppointment}
                  className="hero-btn-primary text-white px-8 py-4 rounded-2xl font-semibold text-base flex items-center gap-2 group"
                >
                  <span>Book Consultation</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                </button>
                <button
                  onClick={scrollToProfile}
                  className="hero-btn-secondary text-green-700 px-8 py-4 rounded-2xl font-semibold text-base flex items-center gap-2"
                >
                  <span>Meet the Doctor</span>
                </button>
              </div>

              {/* Stats row */}
              <div
                className={`grid grid-cols-3 gap-3 pt-2 ${visible ? 'reveal-up' : ''}`}
                style={{ animationDelay: '0.65s' }}
              >
                {[
                  { value: counts.years, suffix: '+', label: 'Years Experience', icon: <Award size={16} className="text-green-500" /> },
                  { value: counts.patients, suffix: '+', label: 'Happy Patients', icon: <Heart size={16} className="text-green-500" /> },
                  { value: counts.rate, suffix: '%', label: 'Success Rate', icon: <Shield size={16} className="text-green-500" /> },
                ].map((stat, i) => (
                  <div key={i} className="stat-card rounded-2xl p-3 sm:p-4 flex flex-col items-center lg:items-start gap-1">
                    <div className="flex items-center gap-1.5">
                      {stat.icon}
                      <span className="hero-display text-2xl sm:text-3xl font-bold text-gray-900">
                        {stat.value.toLocaleString()}{stat.suffix}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 font-medium leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ══ RIGHT COLUMN — Doctor card ═══════════════════════ */}
            <div
              className={`flex-1 flex justify-center items-center w-full max-w-sm sm:max-w-md lg:max-w-none ${visible ? 'reveal-left' : ''}`}
              style={{ animationDelay: '0.3s' }}
            >
              <div className="relative w-full max-w-[360px] lg:max-w-[400px]">

                {/* Outer glow rings */}
                <div className="animate-shimmer absolute inset-[-20px] rounded-[40px] border-2 border-green-200 opacity-60" />
                <div className="animate-shimmer absolute inset-[-40px] rounded-[50px] border border-green-100 opacity-40"
                  style={{ animationDelay: '1s' }} />

                {/* Floating badge — top left */}
                <div className="animate-badge absolute -top-4 -left-4 z-20 bg-white rounded-2xl shadow-xl px-3 py-2 flex items-center gap-2 border border-green-50">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <Leaf size={16} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-medium leading-none">Specialty</p>
                    <p className="text-xs font-bold text-gray-800 leading-tight">Panchakarma</p>
                  </div>
                </div>

                {/* Floating badge — bottom right */}
                <div className="animate-badge absolute -bottom-4 -right-4 z-20 bg-white rounded-2xl shadow-xl px-3 py-2 flex items-center gap-2 border border-green-50"
                  style={{ animationDelay: '2s' }}>
                  <div className="w-8 h-8 rounded-full bg-yellow-50 flex items-center justify-center">
                    <Star size={14} className="text-yellow-500 fill-yellow-500" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-medium leading-none">Rating</p>
                    <p className="text-xs font-bold text-gray-800 leading-tight">4.9 / 5.0</p>
                  </div>
                </div>

                {/* Main doctor card */}
                <div className="animate-card doctor-card rounded-[32px] overflow-hidden border border-green-50">

                  {/* Image */}
                  <div className="relative">
                    <img
                      src={doctorData.image}
                      alt={doctorData.name}
                      className="w-full h-72 sm:h-80 object-cover"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Stars overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-1 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                        ))}
                        <span className="text-white text-xs font-medium ml-1">4.9</span>
                      </div>
                      <p className="text-white/80 text-xs">Based on 200+ reviews</p>
                    </div>

                    {/* Top right — available badge */}
                    <div className="absolute top-4 right-4 bg-green-500 text-white text-[11px] font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      Available Today
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-5 space-y-3">
                    <div>
                      <h2 className="hero-display text-2xl font-bold text-gray-900">{doctorData.name}</h2>
                      <p className="text-green-600 text-sm font-semibold mt-0.5">{doctorData.title}</p>
                      <p className="text-gray-500 text-xs mt-0.5 leading-snug">{doctorData.specialization}</p>
                    </div>

                    <div className="flex gap-2">
                      <div className="flex-1 bg-green-50 rounded-xl px-3 py-2.5 text-center border border-green-100">
                        <p className="hero-display text-xl font-bold text-green-700">16+</p>
                        <p className="text-[10px] text-gray-500 font-medium">Yrs Exp</p>
                      </div>
                      <div className="flex-1 bg-green-50 rounded-xl px-3 py-2.5 text-center border border-green-100">
                        <p className="hero-display text-xl font-bold text-green-700">5k+</p>
                        <p className="text-[10px] text-gray-500 font-medium">Patients</p>
                      </div>
                      <div className="flex-1 bg-green-50 rounded-xl px-3 py-2.5 text-center border border-green-100">
                        <p className="hero-display text-xl font-bold text-green-700">98%</p>
                        <p className="text-[10px] text-gray-500 font-medium">Success</p>
                      </div>
                    </div>

                    <button
                      onClick={onBookAppointment}
                      className="hero-btn-primary w-full text-white py-3 rounded-xl text-sm font-semibold"
                    >
                      Book Appointment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Scroll cue ── */}
          <div className="flex justify-center mt-4 lg:mt-0">
            <button
              onClick={scrollToProfile}
              className="flex flex-col items-center gap-1 text-green-400 hover:text-green-600 transition-colors group"
              style={{ animation: 'badge-float 2.5s ease-in-out infinite' }}
            >
              <span className="text-xs font-medium text-gray-400 group-hover:text-green-600 transition-colors">Scroll to explore</span>
              <ChevronDown size={20} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;