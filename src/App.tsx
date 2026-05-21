/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Attractions from './components/Attractions';
import InteractiveMap from './components/InteractiveMap';
import InvestmentDetails from './components/InvestmentDetails';
import VisitFromKochi from './components/VisitFromKochi';
import Footer from './components/Footer';
import { MessageSquare, Phone, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="relative min-h-screen font-body text-primary bg-surface selection:bg-gold/30">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Attractions />
        <InteractiveMap />
        <InvestmentDetails />
        <VisitFromKochi />
      </main>
      <Footer />

      {/* Floating Chatbot Bubble */}
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-24 md:bottom-8 right-6 z-40 bg-secondary-container text-on-secondary-container p-4 rounded-full shadow-2xl group transition-all"
      >
        <MessageSquare size={24} className="group-hover:rotate-12 transition-transform" />
      </motion.button>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface/90 backdrop-blur-md p-4 flex gap-3 border-t border-on-surface-variant/10">
        <a 
          href="tel:9840000985"
          className="flex-1 flex items-center justify-center border-2 border-primary text-primary font-bold py-3 text-xs tracking-widest rounded-sm"
        >
          <Phone size={16} className="mr-2" />
          CALL
        </a>
        <a 
          href="#visit"
          className="flex-[2] flex items-center justify-center bg-primary text-on-primary font-bold py-3 text-xs tracking-widest rounded-sm shadow-lg group"
        >
          BOOK VISIT
          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
}
