import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        <a href="#accueil" className="flex flex-col">
          <span className="text-xl font-black tracking-wider text-white">AUTO <span className="text-red-600">GARAGE</span></span>
          <span className="text-[10px] tracking-widest text-neutral-400 uppercase">Entretien & Réparation</span>
        </a>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-neutral-300">
          <a href="#accueil" className="hover:text-red-500 transition">Accueil</a>
          <a href="#services" className="hover:text-red-500 transition">Services</a>
          <a href="#apropos" className="hover:text-red-500 transition">À propos</a>
          <a href="#realisations" className="hover:text-red-500 transition">Nos Réalisations</a>
          <a href="#avis" className="hover:text-red-500 transition">Avis clients</a>
          <a href="#contact" className="hover:text-red-500 transition">Contact</a>
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <a href="tel:+221771234567" className="flex items-center gap-2 text-sm text-neutral-300 hover:text-white">
            <Phone size={16} className="text-red-600" />
            <span>+221 77 123 45 67</span>
          </a>
          <button 
            onClick={onOpenReservation}
            className="bg-red-600 hover:bg-red-700 text-white text-sm font-bold px-5 py-2.5 rounded-lg shadow-lg shadow-red-600/20 transition cursor-pointer"
          >
            Réserver
          </button>
        </div>

        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-neutral-300 hover:text-white p-2 cursor-pointer"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-900 border-b border-neutral-800 px-6 py-4 space-y-4">
          <a href="#accueil" onClick={() => setMobileMenuOpen(false)} className="block text-neutral-300 hover:text-red-500">Accueil</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-neutral-300 hover:text-red-500">Services</a>
          <a href="#apropos" onClick={() => setMobileMenuOpen(false)} className="block text-neutral-300 hover:text-red-500">À propos</a>
          <a href="#realisations" onClick={() => setMobileMenuOpen(false)} className="block text-neutral-300 hover:text-red-500">Nos Réalisations</a>
          <a href="#avis" onClick={() => setMobileMenuOpen(false)} className="block text-neutral-300 hover:text-red-500">Avis clients</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-neutral-300 hover:text-red-500">Contact</a>
          <button 
            onClick={() => { setMobileMenuOpen(false); onOpenReservation(); }}
            className="w-full bg-red-600 text-white font-bold py-2.5 rounded-lg text-center cursor-pointer"
          >
            Réserver en ligne
          </button>
        </div>
      )}
    </nav>
  );
};