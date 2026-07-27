import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, SlidersHorizontal, ShoppingBag, ArrowRight, Star, AlertCircle, Sparkles } from 'lucide-react';
import { TireItem } from '../types';

interface TiresViewProps {
  onOpenBooking: () => void;
}

export default function TiresView({ onOpenBooking }: TiresViewProps) {
  const [search, setSearch] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedSize, setSelectedSize] = useState('All');

  // Hardcoded real premium high-performance tire inventory
  const tireInventory: TireItem[] = [
    {
      id: 'TR-01',
      brand: 'Michelin',
      model: 'Pilot Sport 4S',
      type: 'Performance',
      size: '20"',
      price: 349,
      rating: 4.9,
      stock: 12,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIP6Yf-FXtQh5Baszpj_bdEhg9a3NgqbMshWDx_wGOgX25-5qFRCOAABjCX8gIVQh3GdQDOOl_7eHS67LNaGX5mzqgbJgiR5nAI4r45gjVSXjhez3RhZoabivU7bvErMMeAd7dREDxt6mIXi09Lztf_lmaoK0uoAmrOuNBAsF6kODDcG1UR8N3ducSABmFLEi8wJaXwOWdlksr9_9oda0-8hUjA9UMOPol4GyHGHsMCHORPEZy34If',
      features: ['Ultra-reactive tread design', 'Excellent dry & wet braking', 'High-speed track stability']
    },
    {
      id: 'TR-02',
      brand: 'Pirelli',
      model: 'P Zero (PZ4)',
      type: 'Track/Competition',
      size: '21"',
      price: 419,
      rating: 4.8,
      stock: 8,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIP6Yf-FXtQh5Baszpj_bdEhg9a3NgqbMshWDx_wGOgX25-5qFRCOAABjCX8gIVQh3GdQDOOl_7eHS67LNaGX5mzqgbJgiR5nAI4r45gjVSXjhez3RhZoabivU7bvErMMeAd7dREDxt6mIXi09Lztf_lmaoK0uoAmrOuNBAsF6kODDcG1UR8N3ducSABmFLEi8wJaXwOWdlksr9_9oda0-8hUjA9UMOPol4GyHGHsMCHORPEZy34If',
      features: ['F1-derived design philosophy', 'Optimal dry traction compound', 'Enhanced lateral grip']
    },
    {
      id: 'TR-03',
      brand: 'Continental',
      model: 'ExtremeContact DWS06 Plus',
      type: 'All-Season',
      size: '19"',
      price: 245,
      rating: 4.7,
      stock: 16,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIP6Yf-FXtQh5Baszpj_bdEhg9a3NgqbMshWDx_wGOgX25-5qFRCOAABjCX8gIVQh3GdQDOOl_7eHS67LNaGX5mzqgbJgiR5nAI4r45gjVSXjhez3RhZoabivU7bvErMMeAd7dREDxt6mIXi09Lztf_lmaoK0uoAmrOuNBAsF6kODDcG1UR8N3ducSABmFLEi8wJaXwOWdlksr9_9oda0-8hUjA9UMOPol4GyHGHsMCHORPEZy34If',
      features: ['Sport Plus technology', 'Superior snow and ice grip', 'Outstanding tread life wear']
    },
    {
      id: 'TR-04',
      brand: 'Bridgestone',
      model: 'Blizzak LM-32',
      type: 'Winter',
      size: '18"',
      price: 219,
      rating: 4.8,
      stock: 6,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIP6Yf-FXtQh5Baszpj_bdEhg9a3NgqbMshWDx_wGOgX25-5qFRCOAABjCX8gIVQh3GdQDOOl_7eHS67LNaGX5mzqgbJgiR5nAI4r45gjVSXjhez3RhZoabivU7bvErMMeAd7dREDxt6mIXi09Lztf_lmaoK0uoAmrOuNBAsF6kODDcG1UR8N3ducSABmFLEi8wJaXwOWdlksr9_9oda0-8hUjA9UMOPol4GyHGHsMCHORPEZy34If',
      features: ['Multicell compound tech', 'Exceptional sub-zero braking', 'Severe snow certified']
    },
    {
      id: 'TR-05',
      brand: 'Michelin',
      model: 'Pilot Sport Cup 2 R',
      type: 'Track/Competition',
      size: '20"',
      price: 529,
      rating: 5.0,
      stock: 4,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIP6Yf-FXtQh5Baszpj_bdEhg9a3NgqbMshWDx_wGOgX25-5qFRCOAABjCX8gIVQh3GdQDOOl_7eHS67LNaGX5mzqgbJgiR5nAI4r45gjVSXjhez3RhZoabivU7bvErMMeAd7dREDxt6mIXi09Lztf_lmaoK0uoAmrOuNBAsF6kODDcG1UR8N3ducSABmFLEi8wJaXwOWdlksr9_9oda0-8hUjA9UMOPol4GyHGHsMCHORPEZy34If',
      features: ['Ultimate hypercar track tires', 'Extreme dry-grip compound', 'Record-breaking performance']
    },
    {
      id: 'TR-06',
      brand: 'Pirelli',
      model: 'Winter Sottozero 3',
      type: 'Winter',
      size: '19"',
      price: 289,
      rating: 4.6,
      stock: 10,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIP6Yf-FXtQh5Baszpj_bdEhg9a3NgqbMshWDx_wGOgX25-5qFRCOAABjCX8gIVQh3GdQDOOl_7eHS67LNaGX5mzqgbJgiR5nAI4r45gjVSXjhez3RhZoabivU7bvErMMeAd7dREDxt6mIXi09Lztf_lmaoK0uoAmrOuNBAsF6kODDcG1UR8N3ducSABmFLEi8wJaXwOWdlksr9_9oda0-8hUjA9UMOPol4GyHGHsMCHORPEZy34If',
      features: ['Dual-compound construction', 'High density siping matrix', 'Excellent cold wet behavior']
    }
  ];

  // Filtering logic
  const filteredTires = tireInventory.filter(tire => {
    const matchesSearch = tire.model.toLowerCase().includes(search.toLowerCase()) || 
                          tire.brand.toLowerCase().includes(search.toLowerCase());
    const matchesBrand = selectedBrand === 'All' || tire.brand === selectedBrand;
    const matchesType = selectedType === 'All' || tire.type === selectedType;
    const matchesSize = selectedSize === 'All' || tire.size === selectedSize;

    return matchesSearch && matchesBrand && matchesType && matchesSize;
  });

  const brands = ['All', 'Michelin', 'Pirelli', 'Continental', 'Bridgestone'];
  const types = ['All', 'Performance', 'All-Season', 'Winter', 'Track/Competition'];
  const sizes = ['All', '18"', '19"', '20"', '21"'];

  return (
    <div className="pt-24 pb-20 select-none">
      
      {/* Hero Section */}
      <section className="mb-12 max-w-7xl mx-auto px-6">
        <div className="space-y-3 text-center md:text-left">
          <span className="font-mono text-xs font-bold text-primary uppercase tracking-widest block">
            Premium Inventory
          </span>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-on-surface">
            Bespoke Tire Catalog
          </h1>
          <p className="font-sans text-sm md:text-base text-secondary max-w-2xl leading-relaxed">
            Every millimeter of tread scrutinized. Explore high-performance and luxury-grade tire inventory, curated for pristine grip, braking safety, and clinical durability.
          </p>
        </div>
      </section>

      {/* Catalog Filters and Layout */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Filters Sidebar */}
        <div className="lg:col-span-3 bg-surface-container p-6 rounded-lg border border-surface-container-high h-fit space-y-6">
          <div className="flex justify-between items-center border-b border-surface-container-high pb-3">
            <h3 className="font-display text-sm font-bold text-on-surface uppercase tracking-wider flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-primary" />
              Tread Filters
            </h3>
            {(selectedBrand !== 'All' || selectedType !== 'All' || selectedSize !== 'All' || search) && (
              <button 
                onClick={() => {
                  setSelectedBrand('All');
                  setSelectedType('All');
                  setSelectedSize('All');
                  setSearch('');
                }}
                className="text-[10px] font-mono font-bold text-primary hover:underline cursor-pointer"
              >
                Reset
              </button>
            )}
          </div>

          {/* Search */}
          <div className="space-y-1.5">
            <label className="font-mono text-[9px] uppercase font-bold text-secondary tracking-widest block">
              Search Model
            </label>
            <div className="relative">
              <input 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white border border-surface-container-high pl-8 pr-3 py-2 text-xs rounded text-on-surface focus:outline-none focus:border-primary font-sans"
                placeholder="Pilot Sport, P Zero..."
                type="text"
              />
              <Search className="w-3.5 h-3.5 text-secondary absolute left-2.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* Brands */}
          <div className="space-y-1.5">
            <label className="font-mono text-[9px] uppercase font-bold text-secondary tracking-widest block">
              Manufacturer
            </label>
            <div className="flex flex-col gap-1">
              {brands.map(brand => (
                <button
                  key={brand}
                  onClick={() => setSelectedBrand(brand)}
                  className={`text-left text-xs px-2.5 py-1.5 rounded transition-all cursor-pointer font-sans ${
                    selectedBrand === brand 
                      ? 'bg-primary text-white font-bold' 
                      : 'hover:bg-white hover:text-primary text-secondary'
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>

          {/* Types */}
          <div className="space-y-1.5">
            <label className="font-mono text-[9px] uppercase font-bold text-secondary tracking-widest block">
              Usage Terrain
            </label>
            <div className="flex flex-col gap-1">
              {types.map(type => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`text-left text-xs px-2.5 py-1.5 rounded transition-all cursor-pointer font-sans ${
                    selectedType === type 
                      ? 'bg-primary text-white font-bold' 
                      : 'hover:bg-white hover:text-primary text-secondary'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Wheel Size */}
          <div className="space-y-1.5">
            <label className="font-mono text-[9px] uppercase font-bold text-secondary tracking-widest block">
              Diameter (Inches)
            </label>
            <div className="flex flex-wrap gap-1.5">
              {sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`text-xs px-3 py-1.5 rounded transition-all cursor-pointer font-mono font-bold border ${
                    selectedSize === size 
                      ? 'bg-primary border-primary text-white' 
                      : 'bg-white hover:text-primary hover:border-primary border-surface-container-high text-secondary'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Catalog Grid */}
        <div className="lg:col-span-9 space-y-6">
          <div className="flex justify-between items-center">
            <span className="text-xs font-mono text-secondary">
              Showing <span className="font-bold text-primary">{filteredTires.length}</span> luxury tire matches
            </span>
          </div>

          {filteredTires.length === 0 ? (
            <div className="text-center py-20 bg-surface-container-low rounded-xl border border-dashed border-surface-container-high space-y-4">
              <AlertCircle className="w-10 h-10 mx-auto text-secondary opacity-35" />
              <div>
                <p className="font-sans text-sm font-bold text-on-surface">No matching tires found</p>
                <p className="font-sans text-xs text-secondary mt-1">Try resetting your filter parameters or search terms.</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredTires.map(tire => (
                  <motion.div
                    layout
                    key={tire.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white rounded-xl overflow-hidden border border-black/5 hover:border-outline-variant/20 shadow-sm flex flex-col justify-between group bento-card p-5"
                  >
                    <div className="space-y-4">
                      {/* Brand name & Stock status */}
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-[10px] uppercase font-extrabold tracking-widest text-secondary bg-surface-container-low px-2 py-0.5 rounded">
                          {tire.brand}
                        </span>
                        <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded ${
                          tire.stock > 5 ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'
                        }`}>
                          {tire.stock > 5 ? 'IN STOCK' : `LOW STOCK (${tire.stock})`}
                        </span>
                      </div>

                      {/* Tire visual showcase image (micro balancing wheel illustration) */}
                      <div className="h-44 bg-surface-container-low rounded-lg overflow-hidden relative select-none flex items-center justify-center">
                        <img 
                          alt={`${tire.brand} ${tire.model}`} 
                          className="w-full h-full object-cover grayscale opacity-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                          src={tire.image}
                        />
                        <div className="absolute top-2.5 right-2.5 bg-black/90 text-white font-mono text-[9px] px-2 py-0.5 rounded tracking-wider uppercase font-bold flex items-center gap-1">
                          <Sparkles className="w-2.5 h-2.5 text-primary" />
                          {tire.type}
                        </div>
                      </div>

                      {/* Info & Rating */}
                      <div className="space-y-1">
                        <div className="flex justify-between items-start">
                          <h4 className="font-display text-base font-extrabold text-on-surface group-hover:text-primary transition-colors leading-tight">
                            {tire.model}
                          </h4>
                          <span className="font-mono text-xs font-extrabold text-primary shrink-0">
                            ${tire.price} <span className="text-[10px] text-secondary font-medium font-sans">/ ea</span>
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="flex text-amber-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-current" />
                            ))}
                          </div>
                          <span className="font-mono text-[10px] text-secondary font-bold">
                            {tire.rating} (ASE verified feedback)
                          </span>
                        </div>
                      </div>

                      {/* Spec Bullets */}
                      <div className="border-t border-surface-container-high pt-3 space-y-1.5 text-xs text-secondary leading-relaxed font-sans">
                        <p className="font-mono text-[9px] font-extrabold tracking-wider text-primary uppercase">
                          Product Specifications:
                        </p>
                        {tire.features.map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 text-[11px] font-medium text-secondary">
                            <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                    </div>

                    <div className="pt-4 mt-4 border-t border-surface-container-high">
                      <button 
                        onClick={onOpenBooking}
                        className="w-full bg-surface-container text-on-surface hover:bg-primary hover:text-on-primary py-2.5 rounded font-mono text-[10px] uppercase tracking-widest font-bold flex items-center justify-center gap-1 transition-all active:scale-95 cursor-pointer"
                      >
                        Inquire &amp; Book Fitment
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}

        </div>

      </section>

    </div>
  );
}
