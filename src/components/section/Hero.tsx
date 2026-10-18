import React from 'react';
import { ShieldCheck, Wrench, Clock, Award, Phone } from 'lucide-react';
import heroImg from '../../assets/img1.jpg'; // <-- Import de ton image hero.png

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  return (
    <section id="accueil" className="relative bg-neutral-700 text-white py-24 lg:py-36 overflow-hidden border-b border-neutral-800">
      {/* Image de fond */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="Voiture de sport" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-r from-neutral-950 via-neutral-950/80 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl space-y-6">
          <span className="text-red-500 font-bold uppercase tracking-widest text-xs bg-red-950/60 border border-red-900/50 px-3 py-1.5 rounded-full inline-block">
            GARAGE AUTOMOBILE
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
            Votre voiture, <br /><span className="text-red-600">entre de bonnes mains</span>
          </h1>
          <p className="text-lg text-neutral-300 max-w-2xl">
            Entretien, réparation et diagnostic toutes marques. Qualité, sécurité et satisfaction garanties.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <button 
              onClick={onOpenReservation}
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-red-600/30 transition flex items-center gap-2 cursor-pointer"
            >
              PRENDRE RENDEZ-VOUS
            </button>
            <a 
              href="tel:+221771234567"
              className="border border-neutral-700 hover:border-neutral-500 bg-neutral-900/60 backdrop-blur-sm text-white font-medium px-8 py-4 rounded-xl transition flex items-center gap-2"
            >
              <Phone size={18} className="text-red-500" /> NOUS APPELER
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 pt-12 border-t border-neutral-800/80 relative z-10">
          <div className="flex items-center gap-4 bg-neutral-900/80 backdrop-blur-md p-4 rounded-xl border border-neutral-800">
            <Award className="text-red-500 shrink-0" size={32} />
            <div>
              <h4 className="font-bold text-sm">Professionnels qualifiés</h4>
              <p className="text-xs text-neutral-400">Équipe expérimentée</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-neutral-900/80 backdrop-blur-md p-4 rounded-xl border border-neutral-800">
            <Wrench className="text-red-500 shrink-0" size={32} />
            <div>
              <h4 className="font-bold text-sm">Matériel de pointe</h4>
              <p className="text-xs text-neutral-400">Équipements modernes</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-neutral-900/80 backdrop-blur-md p-4 rounded-xl border border-neutral-800">
            <Clock className="text-red-500 shrink-0" size={32} />
            <div>
              <h4 className="font-bold text-sm">Intervention rapide</h4>
              <p className="text-xs text-neutral-400">Respect des délais</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-neutral-900/80 backdrop-blur-md p-4 rounded-xl border border-neutral-800">
            <ShieldCheck className="text-red-500 shrink-0" size={32} />
            <div>
              <h4 className="font-bold text-sm">Garantie satisfaction</h4>
              <p className="text-xs text-neutral-400">Votre priorité</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};