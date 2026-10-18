import React from 'react';
import { X, Clock, Tag } from 'lucide-react';
import {type ServiceItem } from '../../data/mockData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenReservation: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose, onOpenReservation }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl w-full max-w-lg p-6 relative shadow-2xl text-white">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-white bg-neutral-800 p-2 rounded-full transition"
        >
          <X size={20} />
        </button>

        <h3 className="text-2xl font-bold text-red-600 mb-2">{service.title}</h3>
        <p className="text-neutral-300 mb-6 text-sm leading-relaxed">{service.longDescription}</p>

        <div className="space-y-3 bg-neutral-800/50 p-4 rounded-xl border border-neutral-800 mb-6">
          <div className="flex items-center gap-3 text-sm">
            <Tag className="text-red-500" size={18} />
            <span className="text-neutral-400">Tarif indicatif :</span>
            <span className="font-semibold text-white">{service.price}</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Clock className="text-red-500" size={18} />
            <span className="text-neutral-400">Durée estimée :</span>
            <span className="font-semibold text-white">{service.duration}</span>
          </div>
        </div>

        <div className="flex gap-3">
          <button 
            onClick={onClose}
            className="flex-1 bg-neutral-800 hover:bg-neutral-700 text-white py-3 rounded-lg font-medium transition cursor-pointer"
          >
            Fermer
          </button>
          <button 
            onClick={() => { onClose(); onOpenReservation(); }}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-medium shadow-lg shadow-red-600/20 transition cursor-pointer"
          >
            Réserver ce service
          </button>
        </div>
      </div>
    </div>
  );
};