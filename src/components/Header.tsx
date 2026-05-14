import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-on-surface-variant/10 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary tracking-tight">
          VAGAMON 4X
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {['Benefits', 'Attractions', 'Investment', 'Features'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors py-2 border-b-2 border-transparent hover:border-secondary"
            >
              {item}
            </a>
          ))}
          <a href="#visit" className="ml-4 bg-primary text-on-primary px-8 py-3 rounded-sm font-bold uppercase text-xs tracking-widest hover:bg-primary-container transition-all scale-100 active:scale-95 shadow-sm text-center">
            Book Site Visit
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden text-primary p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-surface border-b border-on-surface-variant/10 px-4 pt-2 pb-6 flex flex-col gap-4 shadow-lg"
        >
          {['Benefits', 'Attractions', 'Investment', 'Features'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a 
            href="#visit" 
            className="bg-primary text-on-primary px-8 py-4 rounded-sm font-bold uppercase text-xs tracking-widest text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Book Site Visit
          </a>
        </motion.div>
      )}
    </header>
  );
}
