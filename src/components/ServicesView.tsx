import { motion } from 'motion/react';
import { Route } from '../types';
import { 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Disc, 
  Gauge, 
  Wrench,
  AlertCircle
} from 'lucide-react';

interface ServicesViewProps {
  onNavigate: (route: Route) => void;
  onOpenBooking: () => void;
}

export default function ServicesView({ onNavigate, onOpenBooking }: ServicesViewProps) {
  
  const scrollToCapabilities = () => {
    document.getElementById('professional-capabilities')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="space-y-0 overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-surface-container-lowest pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Pristine clinical workshop backdrop" 
            className="w-full h-full bg-cover bg-center opacity-40 mix-blend-multiply object-cover select-none" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJonHHIXsy3Rp_nl8QXaQhW_vZxDcz_7t-BIfaNMSMgv828GNcCZfhh_7_aD768yRA2srAx1D832muUST5cih-dCV-Pli5XmbcDN12_2Qg94yZjfoOTj-9nKZvFvJKZPIGnhtL9CN_R_txB2eeTvif42XGjhKtGMb-_l4lm0996pljSpYylAxpMi5znlR9wvu8tPX1eW1jAA_L11FETd2MWLQrWZ5d6gbiYj2CbRhNUp9e4Mknvm04"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent" />
        </div>

        <div className="relative z-10 px-6 max-w-7xl mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-2xl space-y-6"
          >
            <span className="inline-block font-mono text-xs font-semibold text-primary tracking-[0.2em] uppercase">
              Engineering Excellence
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-on-surface leading-tight tracking-tight">
              Mastering Every <br />
              <span className="text-primary">Contact Patch</span>
            </h1>
            <p className="font-sans text-base md:text-lg text-secondary leading-relaxed max-w-lg">
              From high-performance tire fitment to surgical mechanical repairs, we treat every vehicle with the meticulous care it deserves. Experience the next level of automotive precision.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                onClick={scrollToCapabilities}
                className="bg-primary text-on-primary px-8 py-3.5 rounded-lg font-mono text-xs uppercase tracking-widest font-bold hover:opacity-90 active:scale-95 transition-all flex items-center gap-2 shadow-sm cursor-pointer"
              >
                Explore Services
                <ArrowRight className="w-3.5 h-3.5 animate-pulse" />
              </button>
              <button 
                onClick={() => onNavigate('tires')}
                className="border border-on-background text-on-background hover:bg-on-background hover:text-white px-8 py-3.5 rounded-lg font-mono text-xs uppercase tracking-widest font-bold active:scale-95 transition-all cursor-pointer"
              >
                View Tire Inventory
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Bento Grid Section */}
      <section id="professional-capabilities" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-3">
          <h2 className="font-display text-2xl md:text-3xl font-extrabold text-on-background uppercase tracking-widest">
            Professional Capabilities
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Service 1: Precision Tire Care (Large, 8-col) */}
          <div className="md:col-span-8 bg-white p-8 rounded-xl border border-black/5 flex flex-col md:flex-row gap-8 group bento-card shadow-sm">
            <div className="flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  <Disc className="w-6 h-6 animate-spin-slow" />
                </div>
                <h3 className="font-display text-xl font-bold text-on-surface">
                  Precision Tire Care
                </h3>
                <p className="font-sans text-sm text-secondary leading-relaxed">
                  Advanced computerized balancing and laser-guided alignment ensuring maximum grip, performance metrics, and tread longevity for your vehicle.
                </p>
              </div>

              <ul className="space-y-2 text-xs text-on-surface font-sans font-semibold">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Nitrogen Inflation Systems</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>High-Speed Road Force Balancing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Run-Flat Specialized Mounting Lines</span>
                </li>
              </ul>

              <button 
                onClick={onOpenBooking}
                className="text-primary font-mono text-xs uppercase tracking-widest font-bold inline-flex items-center gap-1.5 hover:gap-2.5 transition-all text-left cursor-pointer"
              >
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
            
            <div className="flex-1 h-64 md:h-auto rounded-lg overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 select-none">
              <img 
                alt="Precision tire balancing machine" 
                className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIP6Yf-FXtQh5Baszpj_bdEhg9a3NgqbMshWDx_wGOgX25-5qFRCOAABjCX8gIVQh3GdQDOOl_7eHS67LNaGX5mzqgbJgiR5nAI4r45gjVSXjhez3RhZoabivU7bvErMMeAd7dREDxt6mIXi09Lztf_lmaoK0uoAmrOuNBAsF6kODDcG1UR8N3ducSABmFLEi8wJaXwOWdlksr9_9oda0-8hUjA9UMOPol4GyHGHsMCHORPEZy34If"
              />
            </div>
          </div>

          {/* Service 2: Advanced Diagnostics (Small, 4-col) */}
          <div className="md:col-span-4 bg-white p-8 rounded-xl border border-black/5 flex flex-col justify-between bento-card shadow-sm group">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                <Cpu className="w-6 h-6 group-hover:rotate-6 transition-transform" />
              </div>
              <h3 className="font-display text-xl font-bold text-on-surface">
                Advanced Diagnostics
              </h3>
              <p className="font-sans text-sm text-secondary leading-relaxed">
                State-of-the-art diagnostic interface software systems for precise error codes and electronic module fault telemetry detection in luxury vehicles.
              </p>
            </div>
            <button 
              onClick={onOpenBooking}
              className="text-primary font-mono text-xs uppercase tracking-widest font-bold inline-flex items-center gap-1.5 hover:gap-2.5 transition-all text-left pt-6 cursor-pointer"
            >
              Schedule Scan <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Service 3: Brake Systems (Small, 4-col) */}
          <div className="md:col-span-4 bg-white p-8 rounded-xl border border-black/5 flex flex-col justify-between bento-card shadow-sm group">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                <Gauge className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-on-surface">
                Brake Performance
              </h3>
              <p className="font-sans text-sm text-secondary leading-relaxed">
                Premium high-carbon pad and rotor replacement utilizing strict OEM-spec materials for uncompromising stop-safety and thermal compliance.
              </p>
            </div>
            <button 
              onClick={onOpenBooking}
              className="text-primary font-mono text-xs uppercase tracking-widest font-bold inline-flex items-center gap-1.5 hover:gap-2.5 transition-all text-left pt-6 cursor-pointer"
            >
              View Packages <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Service 4: General Maintenance (Large, 8-col) */}
          <div className="md:col-span-8 bg-surface-container-low p-8 rounded-xl border border-black/5 flex flex-col-reverse md:flex-row gap-8 group bento-card shadow-sm">
            <div className="flex-1 h-64 md:h-auto rounded-lg overflow-hidden relative select-none">
              <img 
                alt="White-Glove Engine fluid services" 
                className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOfmXL2-GJiChksURTsPDaBlU3RdEw7k3Yc7B660nJQlCz7M62a4erXLls4w56yi4vsv7U29_HZPjZ04nF0fdDksVDed4VMLq0SuxER97yiphoOSMO2kBR_5gUfy5N6vN0PUtKcqXXL1Ct30DwnqKIcGe96XfojfAbP_7sxaZg_FvAGxlB68lch1dYkDg-2SBORnyA-KNBJrd1YIfcAG568vItE0iQ1PGOXMEHr_bA8D1EHvIvlSmM"
              />
            </div>
            
            <div className="flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  <Wrench className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-on-surface">
                  White-Glove Maintenance
                </h3>
                <p className="font-sans text-sm text-secondary leading-relaxed">
                  Our signature service protocol includes a comprehensive 50-point diagnostic inspection and fluid laboratory-grade analysis with every visit.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs font-semibold text-secondary">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span>Full Synthetic Oil</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span>Filter Replacement</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span>Battery Load Testing</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span>Suspension Geometry</span>
                </div>
              </div>

              <button 
                onClick={onOpenBooking}
                className="text-primary font-mono text-xs uppercase tracking-widest font-bold inline-flex items-center gap-1.5 hover:gap-2.5 transition-all text-left pt-2 cursor-pointer"
              >
                Book Service <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-24 select-none">
        <div className="px-6 max-w-7xl mx-auto text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold">
              Ready for a smoother ride?
            </h2>
            <p className="font-sans text-sm text-surface-variant leading-relaxed opacity-85">
              Join the thousands of car enthusiasts and business organizations who trust MT Tires for their precision clinical automotive needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <button 
                onClick={onOpenBooking}
                className="bg-primary text-white px-8 py-3.5 rounded-lg font-mono text-xs uppercase tracking-widest font-bold hover:bg-primary-container active:scale-95 transition-all cursor-pointer shadow-md"
              >
                Schedule Appointment
              </button>
              <button 
                onClick={() => onNavigate('contact')}
                className="bg-white/10 backdrop-blur text-white px-8 py-3.5 rounded-lg font-mono text-xs uppercase tracking-widest font-bold hover:bg-white/20 transition-all border border-white/20 cursor-pointer"
              >
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
