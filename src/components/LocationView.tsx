import { motion } from 'motion/react';
import { Route } from '../types';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Phone, 
  Navigation, 
  ChevronRight,
  ShieldAlert,
  Sparkles
} from 'lucide-react';
import { useState } from 'react';

interface LocationViewProps {
  onNavigate: (route: Route) => void;
  onOpenBooking: () => void;
}

export default function LocationView({ onNavigate, onOpenBooking }: LocationViewProps) {
  const [directionsActive, setDirectionsActive] = useState(false);
  const [phoneCalled, setPhoneCalled] = useState(false);

  const handleDirectionsClick = () => {
    setDirectionsActive(true);
    setTimeout(() => {
      // Open in Google Maps
      window.open('https://maps.google.com/?q=8255+Van+Nuys+Blvd,+Panorama+City,+CA+91402', '_blank');
      setDirectionsActive(false);
    }, 1200);
  };

  const handleCallClick = () => {
    setPhoneCalled(true);
    setTimeout(() => {
      window.location.href = 'tel:+18188921615';
      setPhoneCalled(false);
    }, 1000);
  };

  return (
    <div className="space-y-0 overflow-x-hidden pt-24 pb-20">
      
      {/* Hero Section */}
      <section className="mb-12 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
          <div className="space-y-3">
            <span className="font-mono text-xs font-bold text-primary uppercase tracking-widest block">
              Premium Service Center
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-on-surface">
              Panorama City HQ
            </h1>
            <p className="font-sans text-sm md:text-base text-secondary max-w-2xl">
              Experience automotive care redefined in our state-of-the-art facility, where engineering precision meets clinical cleanliness.
            </p>
          </div>
          
          <div className="flex items-center gap-2 bg-primary/10 text-primary px-5 py-2.5 rounded-full shadow-sm shrink-0 border border-primary/20">
            <Calendar className="w-4 h-4" />
            <span className="font-mono text-xs font-extrabold uppercase tracking-widest">
              Open 7 Days
            </span>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Map Card */}
          <div className="md:col-span-8 bg-surface-container-low rounded-xl overflow-hidden relative shadow-sm border border-surface-container-high group cursor-pointer bento-card min-h-[400px] md:min-h-[500px]">
            <div 
              className="absolute inset-0 grayscale opacity-45 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 select-none"
              style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuD9E8275-9RMATbAIxL7P02aFfAb2Avi71c7pyud_TksMgIKwDkhs3oS8EOsS7-jLLMOoJruiyAkVvAt0GIRMv_CUDyKE9lAHCkaCeNa2rViRH6S52M8zJm1bACvPsvLUwXrWXZbQIIfYxyobX0_2_7ZXp5-5HArlXIQfs3BpouF366YVaqLPsqiathlamwddSGYJIvgD1CtXswAc4jg-R1zhLAWiiqXn3MZYajmyMPkUUctMvRV49H')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
            
            {/* Map Marker overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-on-primary p-3 rounded-full shadow-xl animate-bounce">
              <MapPin className="w-6 h-6" />
            </div>

            {/* Address Overlay Card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-lg shadow-xl border border-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="font-display text-lg font-extrabold text-on-surface">
                  8255 Van Nuys Blvd
                </h3>
                <p className="font-sans text-xs text-secondary font-medium">
                  Panorama City, CA 91402
                </p>
              </div>
              <button 
                onClick={handleDirectionsClick}
                disabled={directionsActive}
                className="bg-on-surface text-white p-3 rounded-full hover:bg-primary transition-all active:scale-95 cursor-pointer shrink-0"
              >
                {directionsActive ? (
                  <Sparkles className="w-5 h-5 animate-spin" />
                ) : (
                  <Navigation className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Right Column (Hours & Contact) */}
          <div className="md:col-span-4 grid grid-rows-2 gap-6">
            
            {/* Operating Hours Card */}
            <div className="bg-surface-container-highest rounded-xl p-8 shadow-sm border border-surface-container-high bento-card flex flex-col justify-between">
              <div className="flex items-center gap-3.5 border-b border-surface-container-high pb-4">
                <Clock className="w-5 h-5 text-primary" />
                <h4 className="font-mono text-xs font-bold text-on-surface uppercase tracking-widest">
                  Operating Hours
                </h4>
              </div>
              
              <div className="space-y-4 py-4">
                <div className="flex justify-between font-sans text-sm">
                  <span className="text-secondary font-medium">Mon – Sat</span>
                  <span className="font-bold text-on-surface">8:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between font-sans text-sm">
                  <span className="text-secondary font-medium">Sunday</span>
                  <span className="font-bold text-primary">9:00 AM – 4:00 PM</span>
                </div>
              </div>

              <div className="pt-4 border-t border-surface-container-high">
                <p className="text-xs text-secondary italic font-medium">
                  * Walk-ins welcome, appointments preferred.
                </p>
              </div>
            </div>

            {/* Direct Connection Card */}
            <div className="bg-primary rounded-xl p-8 shadow-sm text-on-primary flex flex-col justify-center bento-card relative overflow-hidden group">
              <div className="relative z-10 space-y-4">
                <div className="space-y-1">
                  <h4 className="font-mono text-[10px] uppercase tracking-widest font-bold opacity-80">
                    Direct Line &amp; Email
                  </h4>
                  <p className="font-display text-xl lg:text-2xl font-extrabold tracking-tight">
                    (818) 892-1615
                  </p>
                  <a 
                    href="mailto:mt@tiresandautorepair.com" 
                    className="font-mono text-xs opacity-90 hover:underline block pt-1 break-all"
                  >
                    mt@tiresandautorepair.com
                  </a>
                </div>
                <button 
                  onClick={handleCallClick}
                  disabled={phoneCalled}
                  className="w-full bg-white text-primary py-3 rounded-lg font-mono text-xs font-bold uppercase tracking-widest hover:bg-surface-container-low transition-all active:scale-95 cursor-pointer shadow-sm text-center"
                >
                  {phoneCalled ? 'Connecting...' : 'Call Now'}
                </button>
              </div>
              
              <div className="absolute -right-4 -bottom-4 text-white opacity-[0.06] group-hover:scale-110 transition-transform duration-700 pointer-events-none">
                <Phone className="w-36 h-36" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Visual Tour Section */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="mb-12 space-y-2">
          <span className="font-mono text-xs font-bold text-primary tracking-widest uppercase block">
            Virtual Tour
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-extrabold text-on-surface">
            Our Facility
          </h2>
          <div className="w-12 h-[3px] bg-primary rounded" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Tour Item 1 */}
          <div className="group cursor-pointer space-y-3 bento-card">
            <div className="aspect-video rounded-xl overflow-hidden shadow-sm select-none bg-surface-container">
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                alt="Precision Workshop tour"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNRq_pEr2MJwOmrqndmN19oTK6lamQ4sHyCOnMDMzHD_bnJOK3vUNZqsMq1BrokGFAFvgOgmZElt0V_cXQ__pjeV1xIXvTqisvZadUz9JdtPNFGvmEvzVo4saFOn4otu1oDOkQfDPiQaYjkn16rgodCV-gdA798GiDhz0rfO1slO7HaK739EuRU9MxmY1oCMRKC4Nnk-jKVBB4JHfiV4sXGc2-q2Gp5mbdLz7b_n8brMvrQgMup7E7"
              />
            </div>
            <h5 className="font-display text-base font-bold text-on-surface">
              Precision Workshop
            </h5>
            <p className="font-sans text-xs text-secondary leading-relaxed">
              Dust-free controlled environment optimized for advanced electronics calibration and mechanical racing repairs.
            </p>
          </div>

          {/* Tour Item 2 */}
          <div className="group cursor-pointer space-y-3 bento-card">
            <div className="aspect-video rounded-xl overflow-hidden shadow-sm select-none bg-surface-container">
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                alt="Client Lounge tour"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBz9xorTWzjWpZOvV00T32lXNah8_ygtH93F8Jj9Wadu0y5xK3avlrHhO5yV2jYBNo0-fuyCRUL8roB21ZyMDjmKW9_u-o1ZVEX1JMKkijvW6whMbujT27orojP11iaT5DfxxFCDFeD2TZ4TqtDzW7y7bDu3bWjbPx8qq2HYdqdgOAvHzuIMsoVSSboCtgI2pi9qhKdlqx96me0X2GlP8Ex9npjw98pa6PPp_OIfeuUGYHteEcMkxB3"
              />
            </div>
            <h5 className="font-display text-base font-bold text-on-surface">
              Client Lounge
            </h5>
            <p className="font-sans text-xs text-secondary leading-relaxed">
              High-speed Wi-Fi network and premium gourmet coffee refreshments while our master mechanics tend to your vehicle.
            </p>
          </div>

          {/* Tour Item 3 */}
          <div className="group cursor-pointer space-y-3 bento-card">
            <div className="aspect-video rounded-xl overflow-hidden shadow-sm select-none bg-surface-container">
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                alt="Alignment Bay tour"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAQfyepJoBlLRP40DyIyco9HLMnhJkx8McCletS1gGxQnzMoFriG74-E1LhqX9C2ETzaKlG2sg2TW94FScohHoYEVON4IZI5GCMWXYSB_O8ZQriGcEHyRllAd79TPxas8TgPDbYRUgA0wuugEkNc6y40IlDkaMVx6BMcdZJOsQXZifm3Tq8EUBnAq4DzxoFOXRfXJDf8ElBaaVZ5WFaqcCsT0Djhu0dOsXAC8Lg9tfU3ug8ZR3NJKZ"
              />
            </div>
            <h5 className="font-display text-base font-bold text-on-surface">
              Alignment Bay
            </h5>
            <p className="font-sans text-xs text-secondary leading-relaxed">
              Laser-guided computerized precision machinery for handling geometry and long-lasting tread wear life.
            </p>
          </div>

        </div>
      </section>

      {/* Fleet Service CTA banner */}
      <section className="mb-12 max-w-7xl mx-auto px-6">
        <div className="bg-surface-container rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-surface-container-high shadow-sm">
          <div className="max-w-xl space-y-3">
            <h3 className="font-display text-2xl font-extrabold text-on-surface">
              Fleet Services
            </h3>
            <p className="font-sans text-sm text-secondary leading-relaxed">
              Manage your business commercial fleet with our dedicated concierge services. Priority scheduling blocks, tax billing solutions, and customized mechanical maintenance plans.
            </p>
          </div>
          <button 
            onClick={() => onNavigate('contact')}
            className="whitespace-nowrap border-2 border-on-surface text-on-surface px-8 py-3.5 rounded-lg font-mono text-xs uppercase tracking-widest font-bold hover:bg-on-surface hover:text-white transition-all active:scale-95 cursor-pointer"
          >
            Inquire for Fleet
          </button>
        </div>
      </section>

    </div>
  );
}
