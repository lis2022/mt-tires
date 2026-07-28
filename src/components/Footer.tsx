import { Globe, Share2, ThumbsUp, Send, MapPin, Phone, Mail } from 'lucide-react';
import { Route } from '../types';
import React, { useState } from 'react';

interface FooterProps {
  onNavigate: (route: Route) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="w-full bg-surface-container-highest border-t border-surface-container-high text-on-surface">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
        
        {/* Left Column - Brand Info */}
        <div className="md:col-span-4 space-y-6">
          <div className="flex items-center gap-3">
            <img 
              alt="MT Tires Logo" 
              className="h-10 w-auto object-contain" 
              src="https://i.ibb.co/HpDDDSNt/Whats-App-Image-2026-07-09-at-11-42-52-PM-2-Photoroom.png"
            />
          </div>
          <p className="font-sans text-sm text-secondary leading-relaxed max-w-sm">
            Bringing surgical precision to every alignment, tire service, and vehicle repair since 1998. Your safety and vehicle performance represent our signature.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-8 h-8 rounded-full bg-surface-container-low hover:bg-primary hover:text-white flex items-center justify-center text-secondary transition-all" aria-label="Website">
              <Globe className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-surface-container-low hover:bg-primary hover:text-white flex items-center justify-center text-secondary transition-all" aria-label="Share">
              <Share2 className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-surface-container-low hover:bg-primary hover:text-white flex items-center justify-center text-secondary transition-all" aria-label="Like">
              <ThumbsUp className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Center Columns - Links */}
        <div className="md:col-span-4 grid grid-cols-2 gap-6">
          <div>
            <h4 className="font-mono text-xs font-semibold text-primary uppercase tracking-widest mb-4">
              Services
            </h4>
            <ul className="space-y-3 font-sans text-sm text-on-surface-variant">
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-primary transition-colors cursor-pointer text-secondary text-left">
                  Tire Care &amp; Balance
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-primary transition-colors cursor-pointer text-secondary text-left">
                  Wheel Alignment
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-primary transition-colors cursor-pointer text-secondary text-left">
                  Diagnostics Scan
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-primary transition-colors cursor-pointer text-secondary text-left">
                  Brake Calibration
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-xs font-semibold text-primary uppercase tracking-widest mb-4">
              Company
            </h4>
            <ul className="space-y-3 font-sans text-sm text-on-surface-variant">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-primary transition-colors cursor-pointer text-secondary text-left">
                  Fleet Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-primary transition-colors cursor-pointer text-secondary text-left">
                  Warranty Info
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-primary transition-colors cursor-pointer text-secondary text-left">
                  About Our Team
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-primary transition-colors cursor-pointer text-secondary text-left">
                  Contact Support
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column - Find Us & Newsletter */}
        <div className="md:col-span-4 space-y-6">
          <div>
            <h4 className="font-mono text-xs font-semibold text-primary uppercase tracking-widest mb-4">
              Find Us
            </h4>
            <div className="space-y-3 text-sm text-secondary">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>
                  8255 Van Nuys Blvd, <br />
                  Panorama City, CA 91402
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+18188921615" className="hover:text-primary transition-colors">
                  (818) 892-1615
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:mt@tiresandautorepair.com" className="hover:text-primary transition-colors">
                  mt@tiresandautorepair.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs font-semibold text-primary uppercase tracking-widest mb-3">
              Stay Updated
            </h4>
            <form onSubmit={handleSubscribe} className="flex">
              <input 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-surface-container-low border border-surface-container-high rounded-l px-3 py-2 text-sm w-full focus:outline-none focus:border-primary transition-all text-on-surface" 
                placeholder="Enter email address" 
                type="email"
                required
              />
              <button 
                type="submit"
                className="bg-primary text-on-primary px-4 py-2 rounded-r hover:bg-primary-container active:scale-95 transition-all flex items-center justify-center cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            {subscribed && (
              <p className="text-xs text-primary font-mono mt-2 animate-pulse">
                ✓ Thank you! You've been subscribed.
              </p>
            )}
          </div>
        </div>

      </div>

      {/* Bottom Row - Copyright */}
      <div className="max-w-7xl mx-auto px-6 py-6 border-t border-surface-container-high flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-sans text-xs text-secondary text-center sm:text-left opacity-75">
          © 2026 MT Tires &amp; Auto Repair. All Rights Reserved.
        </p>
        <div className="flex gap-6 text-xs text-secondary font-mono">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
