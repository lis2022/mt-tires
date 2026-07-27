import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, MessageSquare, PenTool, CheckCircle, Sliders, Sparkles } from 'lucide-react';
import { Review } from '../types';

export default function ReviewsView() {
  const [filter, setFilter] = useState('All');
  const [reviews, setReviews] = useState<Review[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [author, setAuthor] = useState('');
  const [rating, setRating] = useState(5);
  const [vehicle, setVehicle] = useState('2023 Porsche 911 Carrera');
  const [service, setService] = useState('Precision Tire Care');
  const [text, setText] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Hardcoded premium seed reviews
  const seedReviews: Review[] = [
    {
      id: 'RV-01',
      author: 'Marcus Vance',
      rating: 5,
      date: '2026-06-15',
      vehicle: '2024 Porsche 911 GT3 RS',
      service: 'Precision Tire Care',
      text: 'MT Tires balanced my Cup 2 track tires with extreme precision. The high-speed vibration I experienced at Willow Springs is completely gone. White-glove service at its finest.'
    },
    {
      id: 'RV-02',
      author: 'Evelyn Sterling',
      rating: 5,
      date: '2026-06-28',
      vehicle: '2023 Audi RS E-tron GT',
      service: 'Alignments',
      text: 'Laser-guided wheel alignment is absolutely flawless. The steering wheel is perfectly straight, and highway tracking feels clinical. Incredible transparency with the digital checklists.'
    },
    {
      id: 'RV-03',
      author: 'Julius K.',
      rating: 5,
      date: '2026-07-02',
      vehicle: '2025 Mercedes-AMG C63',
      service: 'Brake Services',
      text: 'Brake performance is better than factory. They fitted high-carbon pads and rotors, torqued everything to exact specs, and cleaned the entire wheel hub assemblies. Outstanding.'
    },
    {
      id: 'RV-04',
      author: 'Samantha Ward',
      rating: 5,
      date: '2026-07-08',
      vehicle: '2022 Rivian R1T',
      service: 'General Maintenance',
      text: 'My business fleet utilizes MT Tires for multi-point scans and maintenance. They have priority schedules that respect our time, and the epoxied workshop floors are clean enough to eat off of.'
    }
  ];

  // Initialize reviews from localStorage or seed
  useEffect(() => {
    const saved = localStorage.getItem('mt_reviews');
    if (saved) {
      try {
        setReviews(JSON.parse(saved));
      } catch (e) {
        setReviews(seedReviews);
      }
    } else {
      setReviews(seedReviews);
    }
  }, []);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author || !text) return;

    const newReview: Review = {
      id: `RV-${Math.floor(1000 + Math.random() * 9000)}`,
      author,
      rating,
      date: new Date().toISOString().split('T')[0],
      vehicle,
      service,
      text
    };

    const updated = [newReview, ...reviews];
    setReviews(updated);
    localStorage.setItem('mt_reviews', JSON.stringify(updated));
    setFormSubmitted(true);

    setTimeout(() => {
      setAuthor('');
      setRating(5);
      setVehicle('2023 Porsche 911 Carrera');
      setService('Precision Tire Care');
      setText('');
      setFormSubmitted(false);
      setShowAddForm(false);
    }, 2500);
  };

  const filteredReviews = reviews.filter(rev => {
    if (filter === 'All') return true;
    return rev.service.toLowerCase().includes(filter.toLowerCase()) || rev.service === filter;
  });

  const filterCategories = [
    { label: 'All', value: 'All' },
    { label: 'Tire Care', value: 'Precision Tire Care' },
    { label: 'Alignments', value: 'Alignments' },
    { label: 'Brakes', value: 'Brake Services' },
    { label: 'General', value: 'General Maintenance' }
  ];

  const serviceOptions = [
    'Precision Tire Care',
    'Alignments',
    'Brake Services',
    'General Maintenance',
    'Advanced Diagnostics'
  ];

  return (
    <div className="pt-24 pb-20 select-none overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="mb-12 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8 text-center md:text-left">
          <div className="space-y-3">
            <span className="font-mono text-xs font-bold text-primary uppercase tracking-widest block">
              Verified Feedback
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-on-surface">
              Customer Testimonials
            </h1>
            <p className="font-sans text-sm md:text-base text-secondary max-w-2xl leading-relaxed">
              Real telemetry, real satisfaction. See what performance car owners and logistics operators say about our clinical, surgical-grade automotive standard.
            </p>
          </div>

          <button 
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-primary text-on-primary px-6 py-3 rounded-lg font-mono text-xs uppercase tracking-widest font-bold hover:opacity-90 active:scale-95 transition-all flex items-center gap-1.5 shadow-sm shrink-0 cursor-pointer"
          >
            <PenTool className="w-3.5 h-3.5" />
            Write Review
          </button>
        </div>

        {/* Overall score indicator */}
        <div className="bg-surface-container border border-surface-container-high p-6 rounded-xl flex flex-col sm:flex-row justify-around items-center gap-6 text-center shadow-sm">
          <div className="space-y-1">
            <span className="font-display text-4xl font-extrabold text-primary">4.9</span>
            <span className="text-secondary font-sans text-xs font-medium block">out of 5.0 stars</span>
          </div>
          <div className="h-px sm:h-12 w-24 sm:w-px bg-surface-container-high" />
          <div className="space-y-1.5">
            <div className="flex text-amber-400 gap-1 justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-secondary font-mono text-[10px] uppercase font-bold tracking-widest block">
              480+ Verified Clients
            </span>
          </div>
          <div className="h-px sm:h-12 w-24 sm:w-px bg-surface-container-high" />
          <div className="space-y-1">
            <span className="font-mono text-sm font-bold text-on-surface">100% Torque Calibration</span>
            <span className="text-secondary font-sans text-xs font-medium block">All fittings checked via laser telemetry</span>
          </div>
        </div>
      </section>

      {/* Main layout */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Review timeline catalog (takes 8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Timeline Category Filters */}
          <div className="flex flex-wrap gap-2 items-center border-b border-surface-container-high pb-4">
            <Sliders className="w-4 h-4 text-primary mr-1.5 shrink-0" />
            {filterCategories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`px-4 py-1.5 text-xs rounded-full font-sans font-semibold transition-all cursor-pointer ${
                  filter === cat.value
                    ? 'bg-primary text-white'
                    : 'bg-surface-container hover:bg-surface-container-high text-secondary'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Timeline cards */}
          <div className="space-y-4">
            {filteredReviews.length === 0 ? (
              <div className="text-center py-16 bg-surface-container-low rounded-xl border border-dashed border-surface-container-high space-y-4">
                <MessageSquare className="w-10 h-10 mx-auto text-secondary opacity-35" />
                <div>
                  <p className="font-sans text-sm font-bold text-on-surface">No reviews under this category yet</p>
                  <p className="font-sans text-xs text-secondary mt-1">Be the first to leave a verified feedback review!</p>
                </div>
              </div>
            ) : (
              <AnimatePresence mode="popLayout">
                {filteredReviews.map((rev) => (
                  <motion.div
                    layout
                    key={rev.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="bg-white p-6 rounded-xl border border-black/5 hover:border-outline-variant/20 shadow-sm bento-card space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                      {/* Name & Star rating */}
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-display text-base font-extrabold text-on-surface">
                            {rev.author}
                          </h4>
                          <span className="font-mono text-[9px] font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded">
                            {rev.id}
                          </span>
                        </div>
                        <div className="flex text-amber-400 gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-3.5 h-3.5 ${
                                i < rev.rating ? 'fill-current' : 'text-surface-container-high'
                              }`} 
                            />
                          ))}
                        </div>
                      </div>

                      {/* Date & Vehicle details */}
                      <div className="sm:text-right font-sans text-xs space-y-0.5 shrink-0 text-secondary">
                        <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">
                          {rev.vehicle}
                        </p>
                        <p className="font-medium">
                          Service: <span className="text-on-surface font-semibold">{rev.service}</span>
                        </p>
                        <p className="opacity-75 font-mono text-[10px]">Date: {rev.date}</p>
                      </div>
                    </div>

                    <p className="font-sans text-sm text-secondary leading-relaxed pt-2">
                      "{rev.text}"
                    </p>
                  </motion.div>
                ))}
              </AnimatePresence>
            )}
          </div>

        </div>

        {/* Right Side: Add review slide Form (takes 4 cols) */}
        <div className="lg:col-span-4">
          <AnimatePresence>
            {showAddForm && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="bg-surface-container p-6 rounded-xl border border-surface-container-high shadow-sm space-y-5"
              >
                <div className="flex justify-between items-center border-b border-surface-container-high pb-3">
                  <h3 className="font-display text-sm font-bold text-on-surface uppercase tracking-wider flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    Verified Feedback
                  </h3>
                  <button 
                    onClick={() => setShowAddForm(false)}
                    className="text-[10px] font-mono font-bold text-secondary hover:text-primary cursor-pointer"
                  >
                    Close
                  </button>
                </div>

                {!formSubmitted ? (
                  <form onSubmit={handleAddReview} className="space-y-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="font-mono text-[9px] uppercase font-bold text-secondary tracking-widest block">
                        Your Name
                      </label>
                      <input 
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                        className="w-full bg-white border border-surface-container-high px-3 py-2 text-xs rounded text-on-surface focus:outline-none focus:border-primary font-sans"
                        placeholder="Marcus Vance"
                        type="text"
                      />
                    </div>

                    {/* Vehicle */}
                    <div className="space-y-1.5">
                      <label className="font-mono text-[9px] uppercase font-bold text-secondary tracking-widest block">
                        Your Vehicle Model
                      </label>
                      <input 
                        value={vehicle}
                        onChange={(e) => setVehicle(e.target.value)}
                        required
                        className="w-full bg-white border border-surface-container-high px-3 py-2 text-xs rounded text-on-surface focus:outline-none focus:border-primary font-sans"
                        placeholder="2024 Porsche 911 GT3 RS"
                        type="text"
                      />
                    </div>

                    {/* Service */}
                    <div className="space-y-1.5">
                      <label className="font-mono text-[9px] uppercase font-bold text-secondary tracking-widest block">
                        Service Received
                      </label>
                      <select 
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full bg-white border border-surface-container-high px-3 py-2 text-xs rounded text-on-surface focus:outline-none focus:border-primary font-sans"
                      >
                        {serviceOptions.map(opt => (
                          <option key={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    {/* Rating */}
                    <div className="space-y-1.5">
                      <label className="font-mono text-[9px] uppercase font-bold text-secondary tracking-widest block">
                        Service Rating
                      </label>
                      <div className="flex gap-2 items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            type="button"
                            key={star}
                            onClick={() => setRating(star)}
                            className="text-amber-400 hover:scale-110 transition-transform cursor-pointer"
                          >
                            <Star 
                              className={`w-5 h-5 ${
                                star <= rating ? 'fill-current' : 'text-surface-container-high'
                              }`} 
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Text */}
                    <div className="space-y-1.5">
                      <label className="font-mono text-[9px] uppercase font-bold text-secondary tracking-widest block">
                        Comments / Feedback
                      </label>
                      <textarea 
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        required
                        rows={4}
                        className="w-full bg-white border border-surface-container-high px-3 py-2 text-xs rounded text-on-surface focus:outline-none focus:border-primary font-sans resize-none"
                        placeholder="Describe the balancing calibration speed, torque accuracy, or lounge standard."
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-primary text-white py-2.5 rounded font-mono text-[10px] uppercase tracking-widest font-bold hover:bg-primary-container active:scale-95 transition-all shadow-sm cursor-pointer"
                    >
                      Post Feedback
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-10 space-y-3">
                    <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-sans text-xs font-bold text-on-surface">Feedback Logged!</p>
                      <p className="font-sans text-[11px] text-secondary leading-relaxed">
                        Thank you for providing verified performance reviews for MT Tires &amp; Auto Repair.
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {!showAddForm && (
            <div className="bg-surface-container p-6 rounded-xl border border-surface-container-high shadow-sm text-center space-y-4">
              <MessageSquare className="w-8 h-8 text-primary mx-auto opacity-35" />
              <div className="space-y-1">
                <h4 className="font-display text-sm font-bold text-on-surface uppercase tracking-wider">
                  Verified Clients
                </h4>
                <p className="font-sans text-xs text-secondary leading-relaxed">
                  We collect real-time data and torque logs directly from our client accounts to secure certified reviews.
                </p>
              </div>
              <button 
                onClick={() => setShowAddForm(true)}
                className="text-xs font-mono font-bold text-primary hover:underline cursor-pointer uppercase tracking-wider"
              >
                Log New Feedback
              </button>
            </div>
          )}
        </div>

      </section>

    </div>
  );
}
