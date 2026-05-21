import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  Compass, 
  Layers, 
  ExternalLink, 
  Car, 
  Sparkles, 
  Milestone,
  TreePine,
  Activity,
  Waves,
  Heart,
  Store
} from 'lucide-react';

interface MappingItem {
  id: string;
  name: string;
  category: 'Adventure' | 'Nature' | 'Leisure' | 'Transit';
  distance: string;
  timeDev: string;
  desc: string;
  lat: number;
  lng: number;
  // Coordinate coordinates scaled for our SVG interactive display (0 - 100)
  x: number; 
  y: number;
  icon: any;
  highlight: string;
  googleMapsUrl: string;
}

const mapLocations: MappingItem[] = [
  {
    id: 'epicenter',
    name: 'Vagamon 4X Site Epicenter',
    category: 'Transit',
    distance: '0 km',
    timeDev: '0 mins',
    desc: 'Your premium 4X estate, tucked on a high elevation valley facing complete natural serenity.',
    lat: 9.6823,
    lng: 76.9015,
    x: 50,
    y: 50,
    icon: Compass,
    highlight: 'Project Location',
    googleMapsUrl: 'https://maps.google.com/?q=Vagamon+Kerala'
  },
  {
    id: 'glass-bridge',
    name: 'Vagamon Glass Bridge',
    category: 'Adventure',
    distance: '3.2 km',
    timeDev: '8 mins',
    desc: "India's longest cantilever glass bridge and adventure base, offering breathtaking valley looks and ultimate outdoor thrills.",
    lat: 9.6953,
    lng: 76.9095,
    x: 65,
    y: 28,
    icon: Activity,
    highlight: 'Cantilever Walk, Sky Cycling, Zip-line',
    googleMapsUrl: 'https://maps.google.com/?q=Vagamon+Glass+Bridge+Kerala'
  },
  {
    id: 'paragliding',
    name: 'Paragliding Point',
    category: 'Adventure',
    distance: '5.8 km',
    timeDev: '14 mins',
    desc: "Kerala's premium paragliding destination. Annual international paragliding festivals take place on this wide aerodynamic ridge.",
    lat: 9.6890,
    lng: 76.9240,
    x: 82,
    y: 42,
    icon: Activity,
    highlight: 'Tandem flights, high-gulf thermal glide',
    googleMapsUrl: 'https://maps.google.com/?q=Vagamon+Paragliding+Point'
  },
  {
    id: 'pine-forest',
    name: 'British Pine Forest',
    category: 'Nature',
    distance: '4.5 km',
    timeDev: '11 mins',
    desc: 'Beautifully aligned pine tree columns across step slopes. A calm, highly popular site for walks and filming.',
    lat: 9.6710,
    lng: 76.8850,
    x: 28,
    y: 68,
    icon: TreePine,
    highlight: 'Quiet woodland hikes, photography',
    googleMapsUrl: 'https://maps.google.com/?q=Vagamon+Pine+Forest'
  },
  {
    id: 'meadows',
    name: 'Vagamon Meadows',
    category: 'Nature',
    distance: '5.0 km',
    timeDev: '12 mins',
    desc: 'Lush green velvet grass hills spanning vast areas with cool, descending mist and cozy boating ponds.',
    lat: 9.6920,
    lng: 76.8920,
    x: 35,
    y: 32,
    icon: TreePine,
    highlight: 'Boating, hiking, mist valleys',
    googleMapsUrl: 'https://maps.google.com/?q=Vagamon+Meadows+Kerala'
  },
  {
    id: 'kurisumala',
    name: 'Kurisumala Ashram & Hill',
    category: 'Leisure',
    distance: '6.2 km',
    timeDev: '15 mins',
    desc: 'An iconic Christian pilgrimage sanctuary coupled with a peaceful milk dairy pasture, oozing high European countryside beauty.',
    lat: 9.6630,
    lng: 76.9140,
    x: 72,
    y: 78,
    icon: Heart,
    highlight: 'Monastery hike, dairy estate products',
    googleMapsUrl: 'https://maps.google.com/?q=Kurisumala+Ashram+Vagamon'
  },
  {
    id: 'lake',
    name: 'Vagamon Lake Town Square',
    category: 'Leisure',
    distance: '2.8 km',
    timeDev: '7 mins',
    desc: 'The center hub for spice shopping, traditional organic cafes, boating, and access to all essential services.',
    lat: 9.6850,
    lng: 76.8970,
    x: 42,
    y: 45,
    icon: Store,
    highlight: 'Boating, Local spices, Organic markets',
    googleMapsUrl: 'https://maps.google.com/?q=Vagamon+Lake+Kerala'
  },
  {
    id: 'marmala',
    name: 'Marmala Waterfall',
    category: 'Nature',
    distance: '12.0 km',
    timeDev: '30 mins',
    desc: 'A magnificent, powerful white waterfall hidden amidst thick rubber estate canopies.',
    lat: 9.6450,
    lng: 76.8520,
    x: 15,
    y: 85,
    icon: Waves,
    highlight: 'Natural therapeutic spray plunge pools',
    googleMapsUrl: 'https://maps.google.com/?q=Marmala+Waterfall+Kerala'
  }
];

export default function InteractiveMap() {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Adventure' | 'Nature' | 'Leisure'>('All');
  const [selectedLocation, setSelectedLocation] = useState<MappingItem>(mapLocations[0]);
  const [mapMode, setMapMode] = useState<'illustration' | 'satellite'>('illustration');

  // Filter out internal epicenter for normal listings
  const filteredPlaces = mapLocations.filter(loc => {
    if (loc.id === 'epicenter') return false;
    if (activeCategory === 'All') return true;
    return loc.category === activeCategory;
  });

  const getMarkerColor = (category: string, isSelected: boolean) => {
    if (category === 'Transit') return isSelected ? 'bg-gold ring-gold/40' : 'bg-gold ring-gold/20';
    if (category === 'Adventure') return isSelected ? 'bg-rose-500 ring-rose-500/40' : 'bg-rose-400 ring-rose-400/20';
    if (category === 'Nature') return isSelected ? 'bg-emerald-500 ring-emerald-500/40' : 'bg-emerald-400 ring-emerald-400/20';
    return isSelected ? 'bg-sky-500 ring-sky-500/40' : 'bg-sky-400 ring-sky-400/20';
  };

  return (
    <section className="py-24 bg-primary text-on-primary overflow-hidden relative" id="location">
      {/* Decorative Blur Layers */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Layers className="text-gold animate-bounce" size={18} />
            <span className="text-gold font-bold uppercase tracking-[0.2em] text-xs">Aesthetic Regional Proximity</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl mb-6 font-display font-medium tracking-tight"
          >
            Vagamon Real-Time Connectivity
          </motion.h2>
          <p className="text-white/80 max-w-2xl mx-auto text-base sm:text-lg">
            Hover or tap landmarks on the interactive radar to trace distances, driving times, and adventure activity centers surrounding your future estate.
          </p>
          <div className="h-1 w-24 bg-secondary-container mx-auto mt-6"></div>
        </div>

        {/* Map Control Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 border-b border-white/10 pb-6">
          <div className="flex flex-wrap gap-2">
            {(['All', 'Adventure', 'Nature', 'Leisure'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-sm font-bold uppercase text-xs tracking-widest transition-all ${
                  activeCategory === cat
                    ? 'bg-gold text-primary'
                    : 'bg-white/5 hover:bg-white/10 text-white/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 bg-white/5 p-1 rounded-sm border border-white/10">
            <button
              onClick={() => setMapMode('illustration')}
              className={`px-4 py-2 rounded-sm text-[10px] font-bold uppercase tracking-widest transition-all ${
                mapMode === 'illustration' ? 'bg-gold text-primary' : 'text-white/70 hover:text-white'
              }`}
            >
              Architectural View
            </button>
            <button
              onClick={() => setMapMode('satellite')}
              className={`px-4 py-2 rounded-sm text-[10px] font-bold uppercase tracking-widest transition-all ${
                mapMode === 'satellite' ? 'bg-gold text-primary' : 'text-white/70 hover:text-white'
              }`}
            >
              Satellite Map Preview
            </button>
          </div>
        </div>

        {/* Interactive Layout (Grid split) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: Master Map Canvas (8 Columns) */}
          <div className="lg:col-span-8 bg-black/45 rounded-sm overflow-hidden border border-white/10 relative h-[500px] md:h-[600px] shadow-2xl flex flex-col justify-between">
            
            {/* Satellite Mode Fallback/Iframe */}
            {mapMode === 'satellite' ? (
              <div className="absolute inset-0 w-full h-full bg-slate-900 flex flex-col items-center justify-center p-8">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15730.07660920468!2d76.89255776602334!3d9.682333678567119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07b38dcdb9cf33%3A0xe67e436f561937ff!2sVagamon%2C%20Kerala%20685503!5e0!3m2!1sen!2sin!4v1716140000000!5m2!1sen!2sin" 
                  className="w-full h-full border-0 opacity-70 filter contrast-125 saturate-75 absolute inset-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Location overview of Vagamon, Kerala"
                ></iframe>
                
                {/* Floating active helper overlay on satellite mode */}
                <div className="absolute bottom-6 left-6 right-6 bg-primary/95 backdrop-blur-md p-5 border border-white/10 rounded-sm shadow-xl flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gold/10 text-gold rounded-full">
                      <Compass size={20} className="animate-spin" />
                    </div>
                    <div>
                      <p className="text-xs text-gold font-bold tracking-widest uppercase">Project Coordinates</p>
                      <p className="text-sm font-medium">9.6823° N, 76.9015° E • Vagamon Hills</p>
                    </div>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Vagamon+Pine+Forest"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-gold text-primary py-2.5 px-4 text-xs font-bold uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2"
                  >
                    Launch Navigation <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            ) : (
              /* Illustration Mode (Bespoke Luxury Layout) */
              <>
                <div className="absolute inset-0 w-full h-full overflow-hidden bg-slate-950/60 flex items-center justify-center">
                  
                  {/* Decorative Grid Mesh */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                  
                  {/* Radar Range Rings from Epicenter (50, 50) */}
                  {[12, 28, 44, 62, 80].map((radius, i) => (
                    <div
                      key={i}
                      className="absolute border border-white/5 rounded-full pointer-events-none flex items-center justify-center"
                      style={{
                        width: `${radius}%`,
                        height: `${radius}%`,
                        left: `${50 - radius / 2}%`,
                        top: `${50 - radius / 2}%`,
                      }}
                    >
                      <span className="text-[9px] text-white/15 absolute top-1 font-mono uppercase tracking-wider">
                        {i === 0 ? 'Radar Core' : `${(i * 1.8).toFixed(1)} km`}
                      </span>
                    </div>
                  ))}

                  {/* SVG Routing paths from Epicenter to SELECTED marker */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                    {/* Pulsing route line to current selected item */}
                    {selectedLocation && selectedLocation.id !== 'epicenter' && (
                      <>
                        <motion.line
                          x1="50%"
                          y1="50%"
                          x2={`${selectedLocation.x}%`}
                          y2={`${selectedLocation.y}%`}
                          className="stroke-gold stroke-2"
                          strokeDasharray="4,6"
                          initial={{ strokeDashoffset: 0 }}
                          animate={{ strokeDashoffset: -40 }}
                          transition={{ repeat: Infinity, ease: 'linear', duration: 3 }}
                        />
                        <circle
                          cx={`${selectedLocation.x}%`}
                          cy={`${selectedLocation.y}%`}
                          r="4"
                          className="fill-gold animate-ping"
                        />
                      </>
                    )}
                  </svg>

                  {/* Map Pin Elements */}
                  {mapLocations.map((loc) => {
                    const isSelected = selectedLocation.id === loc.id;
                    const isEpicenter = loc.id === 'epicenter';
                    const isFiltered = loc.id === 'epicenter' || activeCategory === 'All' || loc.category === activeCategory;

                    if (!isFiltered) return null;

                    return (
                      <motion.div
                        key={loc.id}
                        className="absolute cursor-pointer z-10 -translate-x-1/2 -translate-y-1/2 group"
                        style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                        onClick={() => setSelectedLocation(loc)}
                        whileHover={{ scale: 1.15 }}
                      >
                        {/* Anchor point elements */}
                        <div className="relative flex items-center justify-center">
                          {isEpicenter ? (
                            /* Epicenter special golden radar glow */
                            <>
                              <div className="absolute w-12 h-12 bg-gold/10 rounded-full animate-ping"></div>
                              <div className="absolute w-20 h-20 bg-gold/5 rounded-full animate-pulse"></div>
                              <div className="w-10 h-10 bg-gold text-primary rounded-sm flex items-center justify-center shadow-lg border-2 border-primary z-20">
                                <Compass size={20} className="animate-spin" style={{ animationDuration: '40s' }} />
                              </div>
                            </>
                          ) : (
                            /* Normal category markers */
                            <>
                              <div className={`absolute w-8 h-8 rounded-full ${isSelected ? 'animate-ping' : 'opacity-0'} ${getMarkerColor(loc.category, true)}`}></div>
                              <div className={`w-6 h-6 rounded-full border-2 border-slate-900 shadow-xl flex items-center justify-center z-10 transition-all ${getMarkerColor(loc.category, isSelected)}`}>
                                <loc.icon size={11} className="text-white" />
                              </div>
                            </>
                          )}

                          {/* Float hovering Label names */}
                          <div className={`absolute bottom-full mb-2 bg-slate-900/90 text-white border border-white/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest rounded-sm whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 shadow-md ${isSelected ? 'opacity-100 z-20 bg-gold border-gold text-primary' : ''}`}>
                            {loc.name} {loc.id !== 'epicenter' && `(${loc.distance})`}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Legend guides at bottom right */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/95 border border-white/10 backdrop-blur-xs p-3.5 rounded-sm flex flex-wrap items-center justify-between gap-4 text-[10px] tracking-widest font-bold">
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="text-white/60 uppercase">LEGEND:</span>
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-gold"></span> VAGAMON 4X</span>
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span> ADVENTURE</span>
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> NATURE</span>
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-sky-500"></span> LEISURE</span>
                  </div>
                  <div className="text-white/50 text-[9px] font-mono uppercase hidden md:block">
                    PROXIMITY RADAR RADIAL SCAN_🟢 ONLINE
                  </div>
                </div>
              </>
            )}
          </div>

          {/* RIGHT: Master Detail Panel (4 Columns) */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            
            {/* Real-time proximity status overview */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-sm">
              <div className="flex justify-between items-center mb-4">
                <span className="bg-gold/10 text-gold text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm">
                  Proximity Spotlight
                </span>
                <span className="text-white/40 text-[10px] uppercase font-mono tracking-widest">
                  {filteredPlaces.length} Locations near you
                </span>
              </div>
              <h3 className="text-xl font-display font-medium text-white mb-2">
                Unified Location Focus
              </h3>
              <p className="text-white/70 text-xs leading-relaxed">
                Vagamon 4X benefits heavily from high tourist volume heading to the glass bridge and activities, ensuring continuous rental returns for property owners.
              </p>
            </div>

            {/* Selected Location Card Inspector */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedLocation.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white text-primary p-6 sm:p-8 rounded-sm shadow-2xl flex-1 flex flex-col justify-between border-l-4 border-gold"
              >
                <div>
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <div>
                      <span className="text-secondary text-[10px] font-bold uppercase tracking-widest block mb-1">
                        {selectedLocation.category === 'Transit' ? 'Core Epicenter' : `${selectedLocation.category} Landmark`}
                      </span>
                      <h4 className="text-2xl font-display font-semibold tracking-tight leading-7">
                        {selectedLocation.name}
                      </h4>
                    </div>
                    <div className="bg-secondary/10 text-secondary p-3 rounded-sm flex-shrink-0">
                      <selectedLocation.icon size={22} />
                    </div>
                  </div>

                  <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed mb-6">
                    {selectedLocation.desc}
                  </p>

                  <div className="space-y-4 border-t border-outline-variant/30 pt-5 mb-6">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-on-surface-variant uppercase tracking-wider font-semibold">Activity Highlight</span>
                      <span className="font-bold text-right text-secondary uppercase tracking-wide text-[10.5px]">{selectedLocation.highlight}</span>
                    </div>

                    {selectedLocation.id !== 'epicenter' && (
                      <>
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-on-surface-variant uppercase tracking-wider font-semibold">Map Distance</span>
                          <span className="font-bold font-display text-sm text-primary">{selectedLocation.distance}</span>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-on-surface-variant uppercase tracking-wider font-semibold">Vehicle Travel Time</span>
                          <span className="font-bold flex items-center gap-1.5 text-xs text-primary bg-primary/5 py-1 px-2.5 rounded-sm">
                            <Car size={13} className="text-secondary" /> {selectedLocation.timeDev}
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <a
                    href={selectedLocation.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-primary text-on-primary py-3 px-4 rounded-sm text-center text-xs font-bold uppercase tracking-widest hover:bg-primary-container transition-all flex items-center justify-center gap-2"
                  >
                    Open Live GPS Routes <ExternalLink size={13} />
                  </a>
                  
                  {selectedLocation.id !== 'epicenter' && (
                    <button
                      onClick={() => setSelectedLocation(mapLocations[0])}
                      className="text-primary/70 hover:text-primary text-[10px] uppercase tracking-widest font-bold self-center pt-2 transition-colors inline-flex items-center gap-1 hover:underline"
                    >
                      ← Back to Project Centroid Map
                    </button>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Rapid selectors grid below */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mt-12">
          {mapLocations.map((loc) => {
            const isSelected = selectedLocation.id === loc.id;
            const isEpicenter = loc.id === 'epicenter';
            return (
              <button
                key={loc.id}
                onClick={() => setSelectedLocation(loc)}
                className={`p-3.5 border transition-all text-left flex flex-col justify-between h-24 rounded-sm group hover:scale-102 ${
                  isSelected 
                    ? 'bg-gold border-gold text-primary shadow-xl' 
                    : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                }`}
              >
                <div className="flex justify-between items-start w-full gap-2">
                  <loc.icon size={13} className={isSelected ? 'text-primary' : 'text-gold'} />
                  {loc.id !== 'epicenter' && (
                    <span className={`text-[8.5px] font-mono leading-none ${isSelected ? 'text-primary/80' : 'text-white/40'}`}>
                      {loc.distance}
                    </span>
                  )}
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider font-bold group-hover:underline truncate w-full">
                    {isEpicenter ? 'Vagamon 4X Center' : loc.name.replace('Vagamon ', '')}
                  </p>
                  <p className={`text-[8px] uppercase tracking-widest ${isSelected ? 'text-primary/70' : 'text-white/40'} leading-none mt-1`}>
                    {isEpicenter ? 'Epicenter' : loc.timeDev}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
