import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0ATZD5ByJXC-D5BM-gZU0_8zoFSH14WZvkx5z8MA6ThJFMUWzLKgOBI-smWvmr6_UNG6bZMTRBEF7e_ydknFs4H_9Xxwl-SBFlOoLGojEQ3B_4FS5JDNHkXGBsMwMQxVn5hI3zKSLCw3OlVVXSqaw4gabGue-EZ5T4hU23pjH_tdtb3nAc8JfIqrLmgyjHz0vC6qsyst1BxmCalGTOMbD68SR6539IDn_KqevN3SiCMzExotvMtsg4hARVxqDAM6D8uGamTl41fA"
          alt="Mist-covered Vagamon hills tea estates"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/40 backdrop-blur-[1px]"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gold uppercase tracking-[0.2em] font-bold text-sm mb-4"
        >
          Elevate Your Portfolio
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl text-white mb-8 leading-tight font-display"
        >
          Your money is working hard... <br/>
          <span className="text-secondary-container">BUT IS YOUR INVESTMENT WORKING SMART?</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12"
        >
          <button 
            aria-label="Explore investment opportunity in Vagamon 4X"
            className="bg-secondary-container text-on-secondary-container px-10 py-5 rounded-sm font-bold uppercase tracking-widest shadow-xl hover:bg-gold transition-colors"
          >
            Explore Opportunity
          </button>
          <div className="flex items-center text-white gap-2 group cursor-default">
            <MapPin className="text-gold group-hover:scale-110 transition-transform" size={24} />
            <span className="text-lg font-medium">Coimbatore | Vagamon</span>
          </div>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-[1px] h-12 bg-white/30 mx-auto"></div>
      </motion.div>
    </section>
  );
}
