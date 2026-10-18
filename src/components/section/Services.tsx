import React from 'react';
import { servicesData, type ServiceItem } from '../../data/mockData';
import { Wrench, ShieldCheck, Cpu, Disc, Settings, ChevronRight } from 'lucide-react';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'Wrench': return <Wrench className="text-red-500" size={28} />;
      case 'ShieldCheck': return <ShieldCheck className="text-red-500" size={28} />;
      case 'Cpu': return <Cpu className="text-red-500" size={28} />;
      case 'Disc': return <Disc className="text-red-500" size={28} />;
      default: return <Settings className="text-red-500" size={28} />;
    }
  };

  return (
    <section id="services" className="py-24 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-red-500 font-bold uppercase tracking-widest text-xs">Nos Services</span>
          <h2 className="text-3xl sm:text-4xl font-black">Des services complets pour votre véhicule</h2>
          <p className="text-neutral-400 text-sm">Cliquez sur un service pour afficher les détails complets de la prestation.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div 
              key={service.id}
              onClick={() => onSelectService(service)}
              className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 hover:border-red-600/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer group flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="bg-neutral-900 w-14 h-14 rounded-xl flex items-center justify-center mb-6 border border-neutral-800 group-hover:bg-red-950/30 transition">
                  {getIcon(service.icon)}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-red-500 transition">{service.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">{service.description}</p>
              </div>
              <div className="flex items-center text-sm font-semibold text-red-500 gap-1 pt-4 border-t border-neutral-800/80">
                <span>Voir les détails</span>
                <ChevronRight size={16} className="group-hover:translate-x-1 transition" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};