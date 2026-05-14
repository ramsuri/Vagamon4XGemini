import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';

export default function VisitFromKochi() {
  return (
    <section className="py-24 bg-primary text-on-primary" id="investment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl mb-8 leading-tight font-display"
          >
            Visit From Kochi
          </motion.h2>
          <p className="text-lg opacity-80 mb-10 leading-relaxed max-w-xl">
            Experience the project firsthand. We arrange curated site visits from Kochi and Coimbatore, ensuring you see the potential of Vagamon 4X in absolute comfort.
          </p>
          
          <ul className="space-y-6">
            {['Luxury Transit Included', 'Guided Project Walkthrough', 'Tea Plantation Experience'].map((feature, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 group"
              >
                <CheckCircle className="text-secondary-container group-hover:scale-110 transition-transform" size={24} />
                <span className="text-lg font-medium">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white text-on-surface p-10 rounded-sm shadow-2xl"
        >
          <h3 className="text-2xl text-primary mb-8 font-display">Schedule Your Visit</h3>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest mb-3">Select Date</label>
              <input 
                type="date" 
                className="w-full border-0 border-b border-on-surface-variant/20 p-3 focus:outline-none focus:border-secondary transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest mb-3">Your Name</label>
              <input 
                type="text" 
                placeholder="Enter full name"
                className="w-full border-0 border-b border-on-surface-variant/20 p-3 focus:outline-none focus:border-secondary transition-colors"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-3">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+91"
                  className="w-full border-0 border-b border-on-surface-variant/20 p-3 focus:outline-none focus:border-secondary transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-3">City</label>
                <select className="w-full border-0 border-b border-on-surface-variant/20 p-3 focus:outline-none focus:border-secondary transition-colors appearance-none bg-transparent">
                  <option>Kochi</option>
                  <option>Coimbatore</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <button className="w-full bg-secondary text-on-secondary py-5 font-bold uppercase tracking-[0.2em] text-xs mt-8 hover:bg-primary transition-all shadow-lg active:scale-[0.98]">
              Confirm Booking
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
