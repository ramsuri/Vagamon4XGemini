import { motion } from 'motion/react';
import { ArrowRight, Mountain, Banknote, TreePine, Plane } from 'lucide-react';
import React from 'react';

const benefits = [
  {
    id: 1,
    title: "Land Appreciation",
    desc: "Prime hill property from ₹2 Lakhs per cent*. Secure your future with appreciating assets.",
    icon: Mountain,
    label: "Benefit #1"
  },
  {
    id: 2,
    title: "Secondary Income",
    desc: "Resort-class holiday home rental income potential. Earn while you relax.",
    icon: Banknote,
    label: "Benefit #2"
  },
  {
    id: 3,
    title: "Free Holidays",
    desc: "Unlock vacation experiences across destinations with our membership.",
    icon: Plane,
    label: "Benefit #3"
  },
  {
    id: 4,
    title: "Exotic Tree Returns",
    desc: "Long-term harvesting potential over 15 years with premium exotic trees.",
    icon: TreePine,
    label: "Benefit #4"
  }
];

export default function Benefits() {
  return (
    <section className="py-24 bg-surface" id="benefits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl text-primary mb-6"
          >
            ONE INVESTMENT. FOUR POWERFUL BENEFITS.
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            className="h-1 bg-gold mx-auto"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 gold-border shadow-sm border border-on-surface-variant/5 hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="text-secondary mb-6 group-hover:scale-110 transition-transform origin-left">
                {React.createElement(benefit.icon, { size: 48, strokeWidth: 1.5 })}
              </div>
              <p className="text-xs font-bold text-secondary uppercase tracking-[0.2em] mb-3">
                {benefit.label}
              </p>
              <h3 className="text-xl text-primary mb-4 font-semibold uppercase font-display tracking-wide">
                {benefit.title}
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
                {benefit.desc}
              </p>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest group/link"
              >
                Learn More 
                <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
