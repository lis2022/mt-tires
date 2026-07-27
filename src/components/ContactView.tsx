import { motion, AnimatePresence } from 'motion/react';
import { Route } from '../types';
import { 
  Phone, 
  ShieldAlert, 
  MapPin, 
  CheckCircle, 
  Send, 
  FileCheck, 
  Award,
  AlertTriangle,
  Mail
} from 'lucide-react';
import React, { useState } from 'react';

interface ContactViewProps {
  onNavigate: (route: Route) => void;
}

export default function ContactView({ onNavigate }: ContactViewProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [vehicleInfo, setVehicleInfo] = useState('');
  const [serviceRequired, setServiceRequired] = useState('Performance Tire Fitting');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;

    // Simulate submission
    setSubmitted(true);
    setTimeout(() => {
      setFullName('');
      setEmail('');
      setVehicleInfo('');
      setMessage('');
      setSubmitted(false);
    }, 4500);
  };

  return (
    <div className="space-y-0 overflow-x-hidden pt-24 pb-20 select-none">
      
      {/* Hero Section */}
      <section className="mb-12 max-w-7xl mx-auto px-6">
        <div className="space-y-3">
          <span className="font-mono text-xs font-bold text-primary uppercase tracking-widest block">
            Get in touch
          </span>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-on-surface leading-tight">
            Engineering Excellence <br />
            at Your Service.
          </h1>
          <p className="font-sans text-sm md:text-base text-secondary max-w-2xl leading-relaxed">
            Whether it's a routine check-up or an emergency repair, our team of meticulous specialists is ready to assist you in our clinical-grade workshop.
          </p>
        </div>
      </section>

      {/* Grid Layout */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Contact Form Card (Large Column) */}
        <div className="lg:col-span-7 bg-surface-container-lowest p-6 sm:p-8 rounded-lg shadow-sm border border-surface-container-high">
          <h2 className="font-display text-xl font-bold text-on-surface mb-6">
            Send an Inquiry
          </h2>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                key="contact-form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit} 
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-mono text-[10px] text-secondary uppercase tracking-widest font-semibold block">
                      Full Name
                    </label>
                    <input 
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      className="w-full bg-surface-container-low border border-transparent p-3 rounded font-sans text-sm focus:bg-white focus:border-primary focus:outline-none transition-all text-on-surface" 
                      placeholder="John Doe" 
                      type="text"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-mono text-[10px] text-secondary uppercase tracking-widest font-semibold block">
                      Email Address
                    </label>
                    <input 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full bg-surface-container-low border border-transparent p-3 rounded font-sans text-sm focus:bg-white focus:border-primary focus:outline-none transition-all text-on-surface" 
                      placeholder="john@example.com" 
                      type="email"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-mono text-[10px] text-secondary uppercase tracking-widest font-semibold block">
                    Vehicle Year, Make &amp; Model
                  </label>
                  <input 
                    value={vehicleInfo}
                    onChange={(e) => setVehicleInfo(e.target.value)}
                    className="w-full bg-surface-container-low border border-transparent p-3 rounded font-sans text-sm focus:bg-white focus:border-primary focus:outline-none transition-all text-on-surface" 
                    placeholder="2024 Porsche 911 GT3" 
                    type="text"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-mono text-[10px] text-secondary uppercase tracking-widest font-semibold block">
                    Service Required
                  </label>
                  <select 
                    value={serviceRequired}
                    onChange={(e) => setServiceRequired(e.target.value)}
                    className="w-full bg-surface-container-low border border-transparent p-3 rounded font-sans text-sm focus:bg-white focus:border-primary focus:outline-none transition-all text-on-surface"
                  >
                    <option>Performance Tire Fitting</option>
                    <option>Precision Alignment</option>
                    <option>Brake Systems Calibration</option>
                    <option>Engine Diagnostics Scan</option>
                    <option>Other / General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-mono text-[10px] text-secondary uppercase tracking-widest font-semibold block">
                    Message
                  </label>
                  <textarea 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full bg-surface-container-low border border-transparent p-3 rounded font-sans text-sm focus:bg-white focus:border-primary focus:outline-none transition-all resize-none text-on-surface" 
                    placeholder="How can our specialists help you today?" 
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full sm:w-auto bg-primary text-on-primary px-8 py-3.5 rounded font-mono text-xs uppercase tracking-widest font-bold hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </motion.form>
            ) : (
              <motion.div 
                key="contact-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-4"
              >
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6 animate-pulse" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-display text-base font-bold text-on-surface">
                    Inquiry Sent Successfully!
                  </h3>
                  <p className="font-sans text-xs text-secondary leading-relaxed max-w-sm mx-auto">
                    Thank you. Our premium service engineers will analyze your vehicle metadata and reply shortly via email.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Contact Information Column */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Hotline Card */}
          <div className="bg-black text-white p-6 rounded-lg flex items-start gap-4">
            <div className="bg-primary p-2.5 rounded-full text-white shrink-0">
              <Phone className="w-5 h-5 animate-pulse" />
            </div>
            <div className="space-y-1">
              <h3 className="font-mono text-[9px] text-surface-container-highest uppercase tracking-widest font-bold">
                Service Hotline
              </h3>
              <a 
                href="tel:+18188921615" 
                className="font-display text-lg sm:text-xl font-extrabold hover:underline text-white block leading-none"
              >
                (818) 892-1615
              </a>
              <p className="font-sans text-xs text-secondary-fixed">
                Mon-Fri: 8:00 AM — 6:00 PM
              </p>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-surface-container p-6 rounded-lg border-l-4 border-primary flex items-start gap-4">
            <div className="text-primary shrink-0 mt-0.5">
              <Mail className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <h3 className="font-mono text-[9px] text-secondary uppercase tracking-widest font-bold">
                Direct Email
              </h3>
              <p className="font-sans text-xs font-bold text-on-surface">
                Get in touch via electronic mail.
              </p>
              <a 
                href="mailto:mt@tiresandautorepair.com" 
                className="font-mono text-[10px] text-primary uppercase font-bold tracking-widest hover:underline inline-block pt-1"
              >
                mt@tiresandautorepair.com
              </a>
            </div>
          </div>

          {/* Emergency Card */}
          <div className="bg-surface-container p-6 rounded-lg border-l-4 border-primary flex items-start gap-4">
            <div className="text-primary shrink-0 mt-0.5">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <h3 className="font-mono text-[9px] text-secondary uppercase tracking-widest font-bold">
                Emergency Roadside
              </h3>
              <p className="font-sans text-xs font-bold text-on-surface">
                Available for select fleet partners 24/7.
              </p>
              <a 
                href="tel:+18188921615" 
                className="font-mono text-[10px] text-primary uppercase font-bold tracking-widest hover:underline inline-block pt-1"
              >
                Call Emergency Line
              </a>
            </div>
          </div>

          {/* Map Image Card */}
          <div className="bg-white p-2 shadow-sm rounded-lg border border-surface-container-high overflow-hidden relative">
            <div className="h-64 bg-surface-variant relative select-none">
              <img 
                alt="HQ Automotive Grid Map" 
                className="w-full h-full object-cover grayscale opacity-75 hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcXt7qaoxvoItXQAuj-TMgIYGUsjEPCRVHclHP4Qk5_VyHsGRuXk_eK7Yy27lFvaYeOTHr1bVuzUVUib57kroQw1Pjvpwx86jYlEKDK9EC8Va7ZUYDHSO876bDE29fRfiuxFyXD1DVWNgnbbmh-V36BBuDubxnECvEbiPFXTlt-wtYCNYMIhprJ5f_FTje9a0Z6LyYyxdD67jIuK0jGvarZ1pBCVyx5uCuZwl1hLlx5wvNCPFKJq-W"
              />
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-3 py-1.5 shadow rounded border border-white flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-primary shrink-0 animate-bounce" />
                <span className="font-mono text-[10px] text-on-surface font-extrabold">
                  8255 Van Nuys Blvd
                </span>
              </div>
            </div>
          </div>

          {/* Verification Chips */}
          <div className="flex flex-wrap gap-2 pt-2">
            <div className="bg-surface-container-low border border-surface-container-high px-4 py-2 rounded-full flex items-center gap-2">
              <Award className="w-4 h-4 text-primary shrink-0" />
              <span className="font-mono text-[9px] uppercase tracking-wider text-secondary font-bold">
                ASE Certified
              </span>
            </div>
            <div className="bg-surface-container-low border border-surface-container-high px-4 py-2 rounded-full flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-primary shrink-0" />
              <span className="font-mono text-[9px] uppercase tracking-wider text-secondary font-bold">
                Fully Insured
              </span>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
}
