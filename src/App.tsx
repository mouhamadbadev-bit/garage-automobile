import  { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/section/Hero';
import { Services } from './components/section/Services';
import { About } from './components/section/About';
import { Testimonials } from './components/section/Testimonials';
import { ReservationModal } from './components/ui/ReservationModal';
import { ServiceDetailModal } from './components/ui/ServicesDetailModal';
import {type ServiceItem } from './data/mockData';

export function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <div className="min-h-screen bg-neutral-950 font-sans selection:bg-red-600 selection:text-white">
      <Navbar onOpenReservation={() => setIsReservationOpen(true)} />

      <main>
        <Hero onOpenReservation={() => setIsReservationOpen(true)} />
        <Services onSelectService={(service) => setSelectedService(service)} />
        <About />
        <Testimonials />
      </main>

      <Footer onOpenReservation={() => setIsReservationOpen(true)} />

      <ReservationModal 
        isOpen={isReservationOpen} 
        onClose={() => setIsReservationOpen(false)} 
      />

      <ServiceDetailModal 
        service={selectedService} 
        onClose={() => setSelectedService(null)}
        onOpenReservation={() => setIsReservationOpen(true)}
      />
    </div>
  );
}

export default App;