import { Phone, Mail, MapPin, Globe, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-on-primary pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16">
          <div className="md:col-span-1">
            <h2 className="text-2xl text-secondary-container mb-6 font-display">VAGAMON 4X</h2>
            <p className="text-on-primary-container opacity-80 mb-8 max-w-xs leading-relaxed">
              Redefining investment through verdant luxury and strategic growth in the heart of Kerala.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Follow Vagamon 4X on Instagram" className="p-2 bg-primary-container rounded-sm hover:bg-secondary-container hover:text-on-secondary-container transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Follow Vagamon 4X on Facebook" className="p-2 bg-primary-container rounded-sm hover:bg-secondary-container hover:text-on-secondary-container transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Visit Vagamon 4X Website" className="p-2 bg-primary-container rounded-sm hover:bg-secondary-container hover:text-on-secondary-container transition-all">
                <Globe size={20} />
              </a>
            </div>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-secondary-container">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 text-on-primary-container">
                <Phone size={20} className="text-secondary-container" />
                <span>+91 98400 00985</span>
              </li>
              <li className="flex items-center gap-4 text-on-primary-container">
                <Mail size={20} className="text-secondary-container" />
                <span>ramsuri@gmail.com</span>
              </li>
              <li className="flex items-center gap-4 text-on-primary-container">
                <MapPin size={20} className="text-secondary-container" />
                <span>Vagamon, Idukki, Kerala</span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="rounded-sm overflow-hidden h-64 grayscale hover:grayscale-0 transition-all duration-700 shadow-xl relative border border-white/10 group">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuATCe32pl40GcAJIqKYCjDFIr_MMGGf0A15svG4UwAnP2wzfQdhKBVpvlfT0W5lu08ZbLS7kry9LcEoM1LFy_QsNK10Fs08avzM-15LjXHT9Qf4Ggcj5Jp0fmvXYlo41KHJoLGF9jj6Uo5ztL_9_KP6VJVIdZJxtNS7Y4RbRuH6GFlG-eve16RAPH_l481V5XPGn8RHES0LbG44HExsgZ_glaTXLA2XD0JPIRwV3C2oQmG4QrkjJ0FY53WHHiNnLW9Bsz7_YOA5l0w" 
                alt="Map of Vagamon project location"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/20 pointer-events-none"></div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-container py-10">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-xs opacity-60 flex flex-wrap items-center justify-center gap-2 mb-4">
              <span className="font-bold">DISCLAIMER:</span> 
              This advertisement is purely for information purposes only and does not constitute an offer or guarantee. 
              All images are for visual representation only. Please verify all details before making any investment decisions.
            </p>
            <p className="text-[10px] uppercase tracking-widest opacity-40">
              © 2024 Vagamon 4X Real Estate. All rights reserved. Prices subject to market conditions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
