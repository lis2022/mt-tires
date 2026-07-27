import { motion } from 'motion/react';
import { Route } from '../types';
import { 
  Wrench, 
  Settings, 
  Cpu, 
  ShieldCheck, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Activity, 
  ArrowRight,
  TrendingUp,
  Sliders,
  Disc
} from 'lucide-react';
import { useState } from 'react';

interface HomeViewProps {
  onNavigate: (route: Route) => void;
  onOpenBooking: () => void;
}

export default function HomeView({ onNavigate, onOpenBooking }: HomeViewProps) {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const services = [
    {
      num: '01',
      title: 'Advanced Brake Systems',
      description: 'Ultra-precise pad, rotor, and caliper replacement paired with state-of-the-art digital fluid calibration and hydraulic leak scans.',
      icon: Disc
    },
    {
      num: '02',
      title: 'Computerized Wheel Alignment',
      description: 'Using high-resolution laser sensors to align steering angles to exact manufacturer tolerances for reduced wear and precise handling.',
      icon: Sliders
    },
    {
      num: '03',
      title: 'Engine Performance Tuning',
      description: 'Comprehensive software scanning, direct fuel injector cleansing, spark timing calibration, and oxygen sensor analysis.',
      icon: Cpu
    },
    {
      num: '04',
      title: 'Suspension & Steering Geometry',
      description: 'Meticulous overhaul of struts, control arms, ball joints, and tie rods, tuned to factory ride height and compliance specifications.',
      icon: TrendingUp
    }
  ];

  return (
    <div className="space-y-0 overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-surface select-none pt-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Ambient gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/65 to-transparent z-10" />
          <img 
            alt="Pristine white-floored automotive workshop" 
            className="w-full h-full object-cover object-center transform scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWc_F0YEpiZK7rEZoaqzVE3WAY6n0skefUyM6TcpmlsCQ7ei8P6qPQEBZnVYbRsa-ycaYzkcDqGQbkSci8fsx-f7FHoRY_raRjLvDLItK1BL3JqidnWr8yf0fOP5RJrbjQoO3S_3hfH92suH156ztNmWS-rhUhUDYJoQjsNOdsZT2ryVIIk0t1JUgUo4bqq2ztWVqtBwa6ZVbtmWCpzKOogNe4pnJQj6BUeAsSiR1w_hMIJTHKkhQB"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-2xl space-y-6"
          >
            <span className="inline-block font-mono text-xs font-semibold text-primary uppercase tracking-[0.2em] bg-primary/10 px-3 py-1 rounded">
              Excellence in Motion
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-on-surface leading-tight tracking-tight">
              Elite Precision for <br />
              <span className="text-primary">Every Mile.</span>
            </h1>
            <p className="font-sans text-base md:text-lg text-secondary leading-relaxed max-w-lg">
              Experience a clinical approach to automotive care. We combine master craftsmanship with modern diagnostics to ensure your vehicle performs with factory-spec precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button 
                onClick={() => onNavigate('services')}
                className="bg-primary text-on-primary px-8 py-3.5 rounded font-mono text-xs uppercase tracking-widest font-bold hover:opacity-90 active:scale-95 transition-all shadow-md cursor-pointer text-center"
              >
                Explore Services
              </button>
              <button 
                onClick={() => onNavigate('about')}
                className="border border-outline text-on-surface hover:bg-surface-container px-8 py-3.5 rounded font-mono text-xs uppercase tracking-widest font-bold active:scale-95 transition-all cursor-pointer text-center"
              >
                Our Process
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Expertise Section */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-2">
            <span className="font-mono text-xs text-primary uppercase tracking-widest font-bold block">
              Automotive Diagnostics &amp; Care
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-on-surface">
              Our Core Expertise
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Grid Item 1: Tire Care */}
            <div className="md:col-span-8 bg-surface rounded-xl p-8 shadow-sm border border-surface-container relative overflow-hidden group bento-card">
              <div className="relative z-10 max-w-lg space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  <Wrench className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-on-surface">
                  Precision Tire Engineering
                </h3>
                <p className="font-sans text-sm text-secondary leading-relaxed">
                  Beyond simple changes. We utilize laser-guided balancing and computerized 3D alignment for optimal contact patches and flawless road safety.
                </p>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-4 w-1/3 h-auto opacity-[0.03] group-hover:opacity-[0.08] group-hover:rotate-45 transition-all duration-700 pointer-events-none">
                <Settings className="w-64 h-64 text-on-surface" />
              </div>
            </div>

            {/* Grid Item 2: Full Diagnostics */}
            <div className="md:col-span-4 bg-primary text-on-primary rounded-xl p-8 shadow-sm flex flex-col justify-between bento-card group">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-on-primary">
                <Activity className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </div>
              <div className="space-y-2 mt-8">
                <h3 className="font-display text-lg font-bold">
                  Full Diagnostics
                </h3>
                <p className="font-sans text-xs text-white/90 leading-relaxed">
                  Advanced digital scanning for engine control, transmission telemetry, and safety sensor calibrated lines.
                </p>
              </div>
            </div>

            {/* Grid Item 3: Safety Guarantee */}
            <div className="md:col-span-4 bg-surface-container rounded-xl p-8 flex flex-col items-center justify-center text-center space-y-4 bento-card">
              <div className="w-12 h-12 bg-primary/5 text-primary rounded-full flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-display text-base font-bold text-on-surface">
                  Safety Guarantee
                </h3>
                <p className="font-sans text-xs text-secondary max-w-xs">
                  Every critical bolt torqued strictly to official manufacturer specification guidelines.
                </p>
              </div>
            </div>

            {/* Grid Item 4: Fleet Care */}
            <div className="md:col-span-8 bg-surface rounded-xl shadow-sm border border-surface-container overflow-hidden flex flex-col md:flex-row bento-card">
              <div className="p-8 md:w-1/2 flex flex-col justify-center space-y-3">
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest font-bold">
                  Fleet Concierge
                </span>
                <h3 className="font-display text-xl font-bold text-on-surface">
                  Elite Fleet Care
                </h3>
                <p className="font-sans text-sm text-secondary leading-relaxed">
                  Dedicated support systems, prioritized scheduling queues, and customized maintenance workflows for corporate and commercial operations.
                </p>
                <button 
                  onClick={() => onNavigate('contact')}
                  className="text-primary font-mono text-xs uppercase tracking-widest font-bold flex items-center gap-1.5 hover:gap-2.5 transition-all text-left pt-2 cursor-pointer"
                >
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              <div 
                className="md:w-1/2 h-48 md:h-auto bg-cover bg-center select-none" 
                style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuB6PI3tEAm5zgjN4HOZx95L3H9PL821lUnEgPzP33qWlp6ouPDEu2DW87oDZgz0rjk_M48bmZlo1iAljYOrV1v_NvnHZpXbnkuoxHxJr8XaOxt9kXJLO5uCmugG8wt0yNP0qwOyHx8MWZubdklxWCyhwj4XVepWbkbolWk049oTJCHni-4dI5r8LXOKlX0l0h4M-zFXH_ckbCI1v5ReDHxIppekLx4mgC2jIISzEyYdOHyfKyTX7WXA')` }}
                aria-label="Commercial vehicles fleet line"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            
            {/* Sticky info */}
            <div className="lg:w-1/3 lg:sticky lg:top-32 space-y-6">
              <div className="space-y-2">
                <span className="font-mono text-xs text-primary uppercase tracking-widest font-bold block">
                  Mechanical Mastery
                </span>
                <h2 className="font-display text-3xl font-extrabold text-on-surface">
                  Professional Grade Services
                </h2>
              </div>
              <p className="font-sans text-sm text-secondary leading-relaxed">
                Meticulous attention to detail across every critical automotive mechanical system. Our specialists treat your luxury, racing, or utility vehicle like high-performance machinery.
              </p>
              <div className="flex gap-4 pt-2">
                <div className="p-4 bg-surface-container rounded-lg border border-surface-container-high">
                  <span className="font-mono text-xs font-bold text-primary block">Est. 1998</span>
                  <span className="text-[10px] uppercase font-bold text-secondary">Acreddited care</span>
                </div>
                <div className="p-4 bg-surface-container rounded-lg border border-surface-container-high">
                  <span className="font-mono text-xs font-bold text-primary block">ASE CERT</span>
                  <span className="text-[10px] uppercase font-bold text-secondary">Expert technicians</span>
                </div>
              </div>
            </div>

            {/* Accordion list */}
            <div className="lg:w-2/3 w-full border-t border-surface-container-high divide-y divide-surface-container-high">
              {services.map((item, idx) => {
                const isOpen = activeAccordion === idx;
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="group py-6 transition-all">
                    <button 
                      onClick={() => setActiveAccordion(isOpen ? null : idx)}
                      className="w-full flex justify-between items-center text-left cursor-pointer"
                      id={`home-service-acc-${idx}`}
                    >
                      <div className="flex items-center gap-6">
                        <span className="font-mono text-sm text-secondary opacity-50 group-hover:text-primary group-hover:opacity-100 transition-colors">
                          {item.num}
                        </span>
                        <div className="flex items-center gap-3">
                          <IconComponent className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline" />
                          <h4 className="font-display text-lg font-bold text-on-surface group-hover:text-primary transition-colors">
                            {item.title}
                          </h4>
                        </div>
                      </div>
                      <ChevronRight className={`w-5 h-5 text-secondary group-hover:text-primary transform transition-transform ${isOpen ? 'rotate-90 text-primary' : ''}`} />
                    </button>
                    
                    {isOpen && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        className="pl-12 pt-4 pr-6"
                      >
                        <p className="font-sans text-sm text-secondary leading-relaxed">
                          {item.description}
                        </p>
                        <button 
                          onClick={() => onNavigate('services')}
                          className="font-mono text-[10px] uppercase tracking-widest font-bold text-primary hover:underline mt-4 flex items-center gap-1 cursor-pointer"
                        >
                          View packages <ChevronRight className="w-3 h-3" />
                        </button>
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* Facility / Location Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-surface rounded-xl shadow-md border border-surface-container overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              
              <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                <span className="font-mono text-xs text-primary uppercase tracking-widest font-bold">
                  Our Location
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-extrabold text-on-surface">
                  Visit Our Facility
                </h2>
                <p className="font-sans text-sm text-secondary leading-relaxed">
                  Located in the clinical core of the automotive district, our state-of-the-art facility is custom-engineered for efficiency, transparency, and clean, high-performance maintenance.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-sans text-sm font-bold text-on-surface">Main HQ Workshop</p>
                      <p className="font-sans text-xs text-secondary">8255 Van Nuys Blvd, Panorama City, CA 91402</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-sans text-sm font-bold text-on-surface">Operating Hours</p>
                      <p className="font-sans text-xs text-secondary">
                        Mon – Sat: 8:00 AM – 6:00 PM <br />
                        Sunday: 9:00 AM – 4:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex gap-3">
                  <button 
                    onClick={() => onNavigate('location')}
                    className="bg-primary text-on-primary px-6 py-3 rounded font-mono text-xs uppercase tracking-widest font-bold hover:opacity-90 active:scale-95 transition-all cursor-pointer inline-flex items-center gap-1.5"
                  >
                    Get Directions
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <button 
                    onClick={onOpenBooking}
                    className="border border-outline text-on-surface hover:bg-surface-container px-6 py-3 rounded font-mono text-xs uppercase tracking-widest font-bold active:scale-95 transition-all cursor-pointer"
                  >
                    Schedule Online
                  </button>
                </div>
              </div>

              {/* Monochromatic map rendering */}
              <div className="h-96 md:h-auto bg-surface-container overflow-hidden relative group">
                <img 
                  alt="Minimalist topographical map view" 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all duration-700 select-none" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSvgS_in3wZ0-O-84ATEhP3MsmC09RVFkB5RY8gaoB2yYDo3m_8yOF7z-v1csH18aFbv5G0hEMBUVrxwTNZ0fCBr8mo1JoumGsPyzphIuiO9nwdF4l4Yb9kDuGctZC2snYL9jq5bu0-NtujrAmDArSHX_xVc3bhfA68289MJZyq3bkcDSXL4k06jkEdkRKYMNEuVpM3meBRM08-kmQE74iJXy3fMOERgk-vG07iCX2A6oVQyrZERfB"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-on-primary p-2.5 rounded-full shadow-lg animate-pulse">
                  <MapPin className="w-5 h-5" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
