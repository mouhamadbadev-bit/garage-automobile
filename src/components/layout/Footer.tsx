import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface FooterProps {
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation }) => {
  return (
    <footer id="contact" className="bg-neutral-950 text-white border-t border-neutral-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-4">
            <span className="text-xl font-black tracking-wider">AUTO <span className="text-red-600">GARAGE</span></span>
            <p className="text-xs text-neutral-400 uppercase tracking-widest">Entretien & Réparation</p>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Votre garage de confiance pour l'entretien et la réparation de votre voiture à Dakar.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-red-500">Liens Rapides</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><a href="#accueil" className="hover:text-white transition">Accueil</a></li>
              <li><a href="#services" className="hover:text-white transition">Services</a></li>
              <li><a href="#apropos" className="hover:text-white transition">À propos</a></li>
              <li><a href="#realisations" className="hover:text-white transition">Nos réalisations</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-red-500">Contact</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-red-500 shrink-0 mt-0.5" />
                <span>Parcelles Assainies, Dakar, Sénégal</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-red-500 shrink-0" />
                <span>+221 77 123 45 67</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-red-500 shrink-0" />
                <span>contact@autogarage.sn</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-red-500 shrink-0" />
                <span>Lun - Sam : 08h00 - 18h00</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-red-500">Rendez-vous</h4>
            <p className="text-neutral-400 text-sm mb-4">Planifiez votre rendez-vous facilement en ligne.</p>
            <button 
              onClick={onOpenReservation}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg shadow-lg shadow-red-600/20 transition cursor-pointer"
            >
              RÉSERVER MAINTENANT
            </button>
          </div>

        </div>

        <div className="border-t border-neutral-900 pt-8 text-center text-xs text-neutral-500">
          <p>© 2025 Auto Garage. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
