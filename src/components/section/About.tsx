import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import mechanicImg from '../../assets/img2.jpg'; // Tu pourras remplacer par ton image de mécanicien plus tard

export const About: React.FC = () => {
  return (
    <section id="apropos" className="py-24 bg-neutral-950 text-white border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <span className="text-red-500 font-bold uppercase tracking-widest text-xs">À PROPOS</span>
            <h2 className="text-3xl sm:text-4xl font-black">Pourquoi choisir notre garage ?</h2>
            <p className="text-neutral-400 leading-relaxed">
              Nous mettons tout en œuvre pour vous offrir un service de qualité, avec des pièces d'origine et un suivi personnalisé pour assurer la longévité de votre véhicule.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-red-500 shrink-0" size={20} />
                <span className="text-sm font-medium">Expérience et savoir-faire</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-red-500 shrink-0" size={20} />
                <span className="text-sm font-medium">Service honnête et transparent</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-red-500 shrink-0" size={20} />
                <span className="text-sm font-medium">Prix compétitifs</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-red-500 shrink-0" size={20} />
                <span className="text-sm font-medium">Pièces de qualité</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl group">
            <img 
              src={mechanicImg} 
              alt="Mécanicien au travail" 
              className="w-full h-96 object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>

            <div className="absolute bottom-0 inset-x-0 p-6 grid grid-cols-2 gap-4 bg-neutral-950/85 backdrop-blur-md border-t border-neutral-800">
              <div className="text-center">
                <span className="text-2xl sm:text-3xl font-black text-red-600 block">10+</span>
                <span className="text-[10px] text-neutral-300 uppercase tracking-wider">Années d'expérience</span>
              </div>
              <div className="text-center">
                <span className="text-2xl sm:text-3xl font-black text-red-600 block">2000+</span>
                <span className="text-[10px] text-neutral-300 uppercase tracking-wider">Clients satisfaits</span>
              </div>
              <div className="text-center pt-2 border-t border-neutral-800/60">
                <span className="text-2xl sm:text-3xl font-black text-red-600 block">15+</span>
                <span className="text-[10px] text-neutral-300 uppercase tracking-wider">Experts qualifiés</span>
              </div>
              <div className="text-center pt-2 border-t border-neutral-800/60">
                <span className="text-2xl sm:text-3xl font-black text-red-600 block">98%</span>
                <span className="text-[10px] text-neutral-300 uppercase tracking-wider">Satisfaction client</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};