import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Sparkles, MapPin, X, Clock, HelpCircle } from 'lucide-react';

const attractions = [
  {
    title: "Vagamon Glass Bridge",
    category: "Adventure",
    duration: "45 mins",
    distance: "3.2 km",
    activities: ["Cantilever Walk", "Sky Cycling", "Zip Lining", "Giant Swing"],
    desc: "Experience thrills on India's longest cantilever glass bridge, suspended at a staggering 150 feet. Walk on transparent floors with panoramic views of green depths below, and enjoy top-tier adventure activities around the park.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Vagamon_Glass_Bridge_-_%E0%B4%B5%E0%B4%BE%E0%B4%97%E0%B4%AE%E0%B4%A3%E0%B5%8D%E0%B4%83_%E0%B4%95%E0%B4%A3%E0%B5%8D%E0%B4%9F%E0%B4%BF%E0%B4%B2%E0%B5%80%E0%B4%B5%E0%B4%B0%E0%B5%8D%E0%B4%8D_%E0%B4%97%E0%B5%8D%E0%B4%B2%E0%B4%BE%E0%B4%B8%E0%B5%8D%E0%B4%8F_%E0%B4%AA%E0%B4%BE%E0%B4%B2%E5%85%82.jpg/800px-Vagamon_Glass_Bridge_-_%E0%B4%B5%E0%B4%BE%E0%B4%97%E0%B4%AE%E0%B4%A3%E0%B5%8D%E0%B4%83_%E0%B4%95%E0%B4%A3%E0%B5%8D%E0%B4%9F%E0%B4%BF%E0%B4%B2%E0%B5%80%E0%B4%B5%E0%B4%B0%E0%B5%8D%E0%B4%8D_%E0%B4%97%E0%B5%8D%E0%B4%B2%E0%B4%BE%E0%B4%B8%E0%B5%8D%E0%B4%8F_%E0%B4%AA%E0%B4%BE%E0%B4%B2%E5%85%82.jpg",
  },
  {
    title: "Vagamon Paragliding Point",
    category: "Adventure",
    duration: "1 hour",
    distance: "5.8 km",
    activities: ["Tandem Flight", "Aero Sports", "Sunset Viewing"],
    desc: "Leap off Kerala's premier paragliding hub. Enjoy high-thermal flights guided by international pilots, gliding safely above sprawling pine forests and tea estates with the ultimate bird's-eye view of Vagamon.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Paragliding_at_Vagamon.jpg/800px-Paragliding_at_Vagamon.jpg",
  },
  {
    title: "Vagamon Pine Forest",
    category: "Nature",
    duration: "1.5 hours",
    distance: "4.5 km",
    activities: ["Nature Walk", "Photography", "Tree Trekking"],
    desc: "Walk through towering, neatly-aligned pine trees planted during the colonial era. Shaded slopes and cool visual silence make this a peaceful retreat, ideal for quiet walks and cinematic photography.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Vagamon_Pine_Forest.jpg/800px-Vagamon_Pine_Forest.jpg",
  },
  {
    title: "Vagamon Meadows",
    category: "Nature",
    duration: "2 hours",
    distance: "5.0 km",
    activities: ["Hill Hiking", "Boating", "Cloud Spotting"],
    desc: "Undulating, velvet green grassy hills spanning across several acres. Always covered in soft mist and cool breeze. Features a peaceful central lake with leisure boating and pristine views in every direction.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Vagamon_Meadows_view_2.jpg/800px-Vagamon_Meadows_view_2.jpg",
  },
  {
    title: "Kurisumala Kurishu",
    category: "Leisure",
    duration: "2 hours",
    distance: "6.2 km",
    activities: ["Peak Hike", "Monastery Walk", "Dairy Farm Visit"],
    desc: "A spiritual hill path dotted with wooden crosses, leading up to a mist-washed peak. Features a historic Trappist monastery and one of Kerala’s largest pastureland dairy farms, bringing high European vibes.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Kurisumala_ashram.jpg/800px-Kurisumala_ashram.jpg",
  }
];

export default function Attractions() {
  const [selectedAttr, setSelectedAttr] = useState<typeof attractions[0] | null>(null);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedAttr(null);
      }
    };
    if (selectedAttr) {
      window.addEventListener('keydown', handleKeyDown);
      // Also lock body scroll when modal is open for a native drawer feeling
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedAttr]);

  return (
    <section className="py-24 bg-surface-container-low" id="attractions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Compass className="text-secondary animate-pulse" size={18} />
              <span className="text-secondary font-bold uppercase tracking-[0.2em] text-xs">Vagamon Sightseeing & Activities</span>
            </div>
            <h2 className="text-3xl md:text-5xl text-primary font-display font-medium tracking-tight">
              Explore the Magic of Vagamon
            </h2>
            <p className="text-on-surface-variant mt-3 text-lg max-w-2xl">
              Kerala's premium adventure and eco-tourism destination. Our property is strategically nested right at the center of these iconic hotspots.
            </p>
          </div>
          <a 
            href="#location"
            className="flex items-center gap-2 bg-primary/5 hover:bg-primary/10 text-primary font-semibold py-3 px-6 rounded-sm text-xs tracking-widest uppercase transition-all"
          >
            <MapPin size={14} /> View Map Proximity
          </a>
        </div>

        {/* Dynamic Masonry-like Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((attr, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedAttr(attr)}
              className="group relative overflow-hidden rounded-sm h-[400px] shadow-md hover:shadow-2xl cursor-pointer bg-black border border-outline-variant/20 transition-all duration-500"
            >
              <img 
                src={attr.img} 
                alt={`Scenery of ${attr.title} in Vagamon, Kerala`}
                className="w-full h-full object-cover opacity-85 group-hover:opacity-75 transition-all duration-700 scale-100 group-hover:scale-110"
              />
              {/* Floating metadata */}
              <div className="absolute top-4 left-4 flex gap-2 z-10">
                <span className="bg-primary text-on-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm shadow-sm">
                  {attr.category}
                </span>
                <span className="bg-white/90 text-primary text-[10px] font-semibold px-3 py-1 rounded-sm shadow-sm backdrop-blur-xs flex items-center gap-1">
                  <MapPin size={10} className="text-secondary" /> {attr.distance}
                </span>
              </div>

              {/* Gradient & Title overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent flex flex-col justify-end p-8">
                <span className="text-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-1">
                  {attr.activities[0]} & More
                </span>
                <h3 className="text-white text-2xl font-display font-medium group-hover:translate-x-1 transition-transform duration-300 mb-2">
                  {attr.title}
                </h3>
                <p className="text-white/75 text-xs line-clamp-2 max-h-0 opacity-0 group-hover:max-h-12 group-hover:opacity-100 transition-all duration-500 font-sans">
                  {attr.desc}
                </p>
                <span className="text-[10px] uppercase tracking-widest text-gold font-bold mt-3 inline-flex items-center gap-1 group-hover:underline">
                  Explore Activity Details <Sparkles size={11} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Attraction Detail Modal */}
      <AnimatePresence>
        {selectedAttr && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="bg-white rounded-sm overflow-hidden max-w-2xl w-full shadow-2xl relative border-t-4 border-secondary text-primary"
            >
              <button 
                onClick={() => setSelectedAttr(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full transition-colors block"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="relative h-64 sm:h-80">
                <img 
                  src={selectedAttr.img} 
                  alt={selectedAttr.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="flex gap-2 mb-2">
                    <span className="bg-secondary text-on-secondary text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                      {selectedAttr.category}
                    </span>
                    <span className="bg-white/20 text-white text-[10px] uppercase font-semibold tracking-widest px-3 py-1 backdrop-blur-sm">
                      Distance: {selectedAttr.distance}
                    </span>
                  </div>
                  <h3 className="text-3xl font-display font-bold leading-none">{selectedAttr.title}</h3>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed mb-6 font-sans">
                  {selectedAttr.desc}
                </p>

                <div className="border-t border-outline-variant/30 pt-6 mb-6">
                  <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-secondary mb-3">Activities Available</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedAttr.activities.map((act, i) => (
                      <span key={i} className="bg-primary/5 text-primary text-xs px-3 py-1.5 rounded-sm font-medium border border-primary/10">
                        ✨ {act}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 bg-surface-container-low p-4 rounded-sm border border-outline-variant/30">
                  <div className="flex items-center gap-2">
                    <MapPin className="text-secondary" size={16} />
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">Vagamon 4X Proximity</p>
                      <p className="text-sm font-bold text-primary font-display">{selectedAttr.distance}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="text-secondary" size={16} />
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">Recommended Time</p>
                      <p className="text-sm font-bold text-primary font-display">{selectedAttr.duration}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex gap-3">
                  <a
                    href="#location"
                    onClick={() => setSelectedAttr(null)}
                    className="flex-1 bg-primary text-on-primary text-center py-3.5 rounded-sm font-bold uppercase text-xs tracking-widest hover:bg-primary-container transition-all"
                  >
                    View on Route Map
                  </a>
                  <button 
                    onClick={() => setSelectedAttr(null)}
                    className="sm:hidden border border-outline-variant/60 text-primary py-3 px-6 rounded-sm font-bold uppercase text-xs tracking-widest hover:bg-primary/5 transition-all"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
