import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, BarChart3, PieChart, Calculator, ArrowRight } from 'lucide-react';

export default function InvestmentDetails() {
  const [investment, setInvestment] = useState(2500000); // Default 25 Lakhs

  const calculateReturns = (years: number) => {
    const appreciationRate = 0.15; // 15% check text
    const rentalYieldRate = 0.05; // 5% estimate
    
    const landValue = investment * Math.pow(1 + appreciationRate, years);
    const totalRental = investment * rentalYieldRate * years;
    const timberBonus = years >= 15 ? investment * 0.4 : 0;
    
    return {
      land: Math.round(landValue),
      rental: Math.round(totalRental),
      timber: Math.round(timberBonus),
      total: Math.round(landValue + totalRental + timberBonus)
    };
  };

  const results5 = calculateReturns(5);
  const results15 = calculateReturns(15);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section className="py-24 bg-surface" id="investment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-secondary font-bold uppercase tracking-[0.2em] text-xs mb-4"
          >
            Wealth Creation
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl text-primary mb-6 font-display"
          >
            Investment Growth & Potential
          </motion.h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg mb-8">
            Vagamon 4X isn't just a property; it's a strategically curated investment designed for maximum capital appreciation and steady yields.
          </p>
          <div className="h-1 w-24 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {/* Card 1: Land Appreciation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-10 bg-white shadow-sm border border-outline-variant/30 flex flex-col group hover:shadow-xl transition-all duration-500"
          >
            <div className="w-16 h-16 bg-primary-container rounded-sm flex items-center justify-center mb-8 group-hover:bg-secondary transition-colors">
              <TrendingUp size={32} className="text-gold" />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-widest text-primary mb-4 font-display">Land Appreciation</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Historical trends in Vagamon show a consistent 15-20% year-on-year growth. As infrastructure improves, prime hill-top properties are projected to double in value within 3-5 years.
            </p>
            <div className="mt-8 pt-8 border-t border-outline-variant/30">
              <span className="text-primary font-bold text-2xl font-display">15% <span className="text-xs uppercase tracking-widest text-on-surface-variant font-body">Avg YoY Growth</span></span>
            </div>
          </motion.div>

          {/* Card 2: Rental Yield */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-10 bg-white shadow-sm border border-outline-variant/30 flex flex-col group hover:shadow-xl transition-all duration-500"
          >
            <div className="w-16 h-16 bg-primary-container rounded-sm flex items-center justify-center mb-8 group-hover:bg-secondary transition-colors">
              <BarChart3 size={32} className="text-gold" />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-widest text-primary mb-4 font-display">Managed Yield</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Our professional management program targets high-yield holiday rentals. Earn a projected ₹2.5 Lakhs annually through seasonal tourism demand, managed entirely by our hospitality team.
            </p>
            <div className="mt-8 pt-8 border-t border-outline-variant/30">
              <span className="text-primary font-bold text-2xl font-display">5% <span className="text-xs uppercase tracking-widest text-on-surface-variant font-body">Est. Annual Yield</span></span>
            </div>
          </motion.div>

          {/* Card 3: Total ROI Analysis */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-10 bg-white shadow-sm border border-outline-variant/30 flex flex-col group hover:shadow-xl transition-all duration-500"
          >
            <div className="w-16 h-16 bg-primary-container rounded-sm flex items-center justify-center mb-8 group-hover:bg-secondary transition-colors">
              <PieChart size={32} className="text-gold" />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-widest text-primary mb-4 font-display">4X ROI Model</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Experience the "4X" benefit: capital growth, rental income, lifestyle perks, and long-term timber harvesting. Your investment is diversified across multiple growth drivers for stability.
            </p>
            <div className="mt-8 pt-8 border-t border-outline-variant/30">
              <span className="text-primary font-bold text-2xl font-display">4.0x <span className="text-xs uppercase tracking-widest text-on-surface-variant font-body">15-Year Projected Multiplier</span></span>
            </div>
          </motion.div>
        </div>

        {/* Investment Calculator */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-primary text-on-primary p-8 md:p-16 rounded-sm shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Calculator className="text-gold" size={24} />
                <h3 className="text-2xl font-display uppercase tracking-widest">Returns Calculator</h3>
              </div>
              <p className="text-white/70 mb-12">
                Estimate your potential wealth growth. Use the slider to select your initial investment amount and see how it compounds over time.
              </p>

              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-4">
                    <label className="text-xs uppercase tracking-[0.2em] font-bold text-gold">Initial Investment</label>
                    <span className="text-xl font-display text-white">{formatCurrency(investment)}</span>
                  </div>
                  <input 
                    type="range" 
                    min="200000" 
                    max="10000000" 
                    step="100000"
                    value={investment}
                    onChange={(e) => setInvestment(parseInt(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-gold"
                  />
                  <div className="flex justify-between mt-2 text-[10px] uppercase tracking-widest text-white/40">
                    <span>₹2 Lakhs</span>
                    <span>₹1 Crore</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-6 rounded-sm border border-white/10">
                    <p className="text-[10px] uppercase tracking-widest text-gold mb-2">Growth Rate</p>
                    <p className="text-xl font-display">15% <span className="text-xs text-white/40">YoY</span></p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-sm border border-white/10">
                    <p className="text-[10px] uppercase tracking-widest text-gold mb-2">Rental Yield</p>
                    <p className="text-xl font-display">5% <span className="text-xs text-white/40">Annual</span></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {/* 5 Year Projection */}
              <div className="bg-white text-primary p-8 rounded-sm shadow-xl">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-secondary">5 Year Projection</h3>
                  <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-[10px] font-bold">MEDIUM TERM</span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-on-surface-variant">Estimated Valuation</span>
                    <span className="font-bold">{formatCurrency(results5.land)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-on-surface-variant">Rental Income</span>
                    <span className="font-bold">{formatCurrency(results5.rental)}</span>
                  </div>
                  <div className="pt-4 border-t border-outline-variant/30 flex justify-between items-center">
                    <span className="text-xs font-bold uppercase tracking-widest">Total Wealth</span>
                    <span className="text-2xl font-display text-secondary">{formatCurrency(results5.total)}</span>
                  </div>
                </div>
              </div>

              {/* 15 Year Projection */}
              <div className="bg-gold text-primary p-8 rounded-sm shadow-xl relative group">
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-sm font-bold uppercase tracking-widest">15 Year Projection</h3>
                  <span className="bg-primary text-on-primary px-3 py-1 rounded-full text-[10px] font-bold">LONG TERM WEALTH</span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-primary/70">Estimated Valuation</span>
                    <span className="font-bold">{formatCurrency(results15.land)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-primary/70">Rental + Timber Income</span>
                    <span className="font-bold">{formatCurrency(results15.rental + results15.timber)}</span>
                  </div>
                  <div className="pt-4 border-t border-primary/20 flex justify-between items-center">
                    <span className="text-xs font-bold uppercase tracking-widest">Total Wealth</span>
                    <span className="text-2xl font-display">{formatCurrency(results15.total)}</span>
                  </div>
                </div>
              </div>
              
              <button 
                aria-label="Download detailed ROI PDF for Vagamon 4X"
                className="mt-4 flex items-center justify-center gap-2 bg-secondary text-on-secondary py-4 rounded-sm font-bold uppercase text-xs tracking-widest hover:bg-secondary/90 transition-all"
              >
                Get Detailed ROI PDF <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
