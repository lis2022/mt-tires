import { motion } from 'motion/react';
import { Route } from '../types';
import { ShieldCheck, Target, Award, Sparkles, ChevronRight } from 'lucide-react';

interface AboutViewProps {
  onNavigate: (route: Route) => void;
}

export default function AboutView({ onNavigate }: AboutViewProps) {
  return (
    <div className="pt-24 pb-20 select-none space-y-20 overflow-x-hidden">
      
      {/* Editorial Intro */}
      <section className="max-w-7xl mx-auto px-6 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="font-mono text-xs font-bold text-primary uppercase tracking-[0.2em] block">
              Established 1998
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-on-surface leading-tight">
              A Clinical Approach to <br />
              <span className="text-primary">Automotive Care.</span>
            </h1>
            <p className="font-sans text-sm md:text-base text-secondary leading-relaxed">
              We started MT Tires &amp; Auto Repair with a single purpose: to eliminate the dusty, disorganized grease-monkey stereotypes of automotive maintenance. We wanted to build a pristine, clinical showroom where every vehicle is treated with the precision engineering it deserves.
            </p>
            <p className="font-sans text-sm text-secondary leading-relaxed">
              For nearly three decades, we have serviced luxury sports cars, high-capacity commercial business fleets, and everyday passenger vehicles with strict surgical attention.
            </p>
          </div>
          
          <div className="relative rounded-xl overflow-hidden shadow-md select-none bg-surface-container h-[350px] md:h-[450px]">
            <img 
              alt="Pristine white floors automotive workshop elevated car" 
              className="w-full h-full object-cover object-center grayscale opacity-80 hover:grayscale-0 transition-all duration-1000" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWc_F0YEpiZK7rEZoaqzVE3WAY6n0skefUyM6TcpmlsCQ7ei8P6qPQEBZnVYbRsa-ycaYzkcDqGQbkSci8fsx-f7FHoRY_raRjLvDLItK1BL3JqidnWr8yf0fOP5RJrbjQoO3S_3hfH92suH156ztNmWS-rhUhUDYJoQjsNOdsZT2ryVIIk0t1JUgUo4bqq2ztWVqtBwa6ZVbtmWCpzKOogNe4pnJQj6BUeAsSiR1w_hMIJTHKkhQB"
            />
          </div>
        </div>
      </section>

      {/* Philosophy / Core pillars */}
      <section className="bg-surface-container-low py-20 border-y border-surface-container-high">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-2">
            <span className="font-mono text-xs text-primary uppercase tracking-widest font-bold block">
              Core Principles
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-on-surface">
              The Clinical Standard
            </h2>
            <div className="w-12 h-1 bg-primary mx-auto rounded" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Pillar 1 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-black/5 text-center space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-on-surface">
                Engineering Precision
              </h3>
              <p className="font-sans text-xs text-secondary leading-relaxed">
                We do not guess; we measure. Using modern 3D laser diagnostics and computerized balances to align and torque elements to perfect official factory tolerances.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-black/5 text-center space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-on-surface">
                Surgical Honesty
              </h3>
              <p className="font-sans text-xs text-secondary leading-relaxed">
                Transparency in every transaction. Detailed diagnostic checklists, photos of worn parts, and fixed-rate estimates before a single wrench is turned.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-black/5 text-center space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-on-surface">
                Meticulous Cleanliness
              </h3>
              <p className="font-sans text-xs text-secondary leading-relaxed">
                A clean shop is a safe shop. Our white-epoxy floors are washed daily, and technicians utilize pristine, custom shadow-board tools organized symmetrically.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* The Surgical Process Workflow */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-2">
          <span className="font-mono text-xs text-primary uppercase tracking-widest font-bold block">
            The Workflow
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-extrabold text-on-surface">
            Our 3-Stage Protocol
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto rounded" />
        </div>

        <div className="relative border-l-2 border-surface-container-high pl-6 space-y-12 max-w-2xl mx-auto">
          {/* Step 1 */}
          <div className="relative space-y-2">
            <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-white shadow" />
            <span className="font-mono text-[10px] text-primary uppercase tracking-widest font-extrabold">
              Stage 01
            </span>
            <h4 className="font-display text-base font-bold text-on-surface">
              Laser Diagnosis &amp; Scan
            </h4>
            <p className="font-sans text-xs text-secondary leading-relaxed">
              We interface directly with your vehicle telemetry and map alignment profiles with computerized laser sensors to isolate exact wear details.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative space-y-2">
            <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-white shadow" />
            <span className="font-mono text-[10px] text-primary uppercase tracking-widest font-extrabold">
              Stage 02
            </span>
            <h4 className="font-display text-base font-bold text-on-surface">
              Meticulous Consultation
            </h4>
            <p className="font-sans text-xs text-secondary leading-relaxed">
              We guide you through raw telemetry metrics and curate certified tire catalogs or OEM-spec replacements tailored strictly to your road-use objectives.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative space-y-2">
            <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-white shadow" />
            <span className="font-mono text-[10px] text-primary uppercase tracking-widest font-extrabold">
              Stage 03
            </span>
            <h4 className="font-display text-base font-bold text-on-surface">
              Surgical Execution
            </h4>
            <p className="font-sans text-xs text-secondary leading-relaxed">
              Every element of the alignment, mounting, or calibration is carried out by ASE-certified master mechanics utilizing digital torque instruments.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 text-center">
        <div className="bg-primary rounded-xl p-8 md:p-12 text-on-primary space-y-4 shadow-md max-w-4xl mx-auto relative overflow-hidden group">
          <div className="relative z-10 space-y-4">
            <h3 className="font-display text-2xl font-extrabold">
              Experience the Clinical Standard Firsthand.
            </h3>
            <p className="font-sans text-sm text-white/95 leading-relaxed max-w-xl mx-auto">
              Our service hotline is open seven days a week, and booking your vehicle fitment online takes less than sixty seconds.
            </p>
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-white text-primary px-8 py-3 rounded-lg font-mono text-xs uppercase tracking-widest font-bold hover:bg-surface-container-low transition-all active:scale-95 cursor-pointer inline-flex items-center gap-1.5 shadow-sm"
            >
              Contact Specialists
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="absolute -right-12 -bottom-12 opacity-10 text-white pointer-events-none group-hover:scale-105 transition-transform duration-700">
            <Sparkles className="w-64 h-64" />
          </div>
        </div>
      </section>

    </div>
  );
}
