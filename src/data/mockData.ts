export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  price: string;
  duration: string;
  icon: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "vidange",
    title: "Vidange & Entretien",
    description: "Vidange d'huile, filtres, contrôles et entretien complet.",
    longDescription: "Notre service de vidange complète comprend le remplacement de l'huile moteur par de l'huile de haute qualité, le changement du filtre à huile, ainsi qu'un contrôle rigoureux de 15 points de sécurité essentiels (niveaux, pression des pneus, éclairage, etc.).",
    price: "À partir de 35 000 FCFA",
    duration: "45 minutes",
    icon: "Wrench"
  },
  {
    id: "freinage",
    title: "Freinage",
    description: "Plaquettes, disques, liquide de frein et sécurité de freinage.",
    longDescription: "Le système de freinage est vital pour votre sécurité. Nous inspectons et remplaçons vos plaquettes et disques de frein usés, purgeons le circuit et contrôlons l'état du liquide de frein avec des équipements de pointe.",
    price: "Sur devis (selon modèle)",
    duration: "1 à 2 heures",
    icon: "ShieldCheck"
  },
  {
    id: "diagnostic",
    title: "Diagnostic Électronique",
    description: "Diagnostic précis avec des valises de dernière génération.",
    longDescription: "Face aux voyants allumés sur votre tableau de bord, notre valise de diagnostic multimarque de dernière génération lit les codes défauts de votre calculateur pour identifier l'origine exacte des pannes électroniques ou moteur.",
    price: "15 000 FCFA",
    duration: "30 minutes",
    icon: "Cpu"
  },
  {
    id: "pneumatiques",
    title: "Pneumatiques",
    description: "Vente, montage, équilibrage et réparation de pneus.",
    longDescription: "Nous vous proposons un large choix de pneus adaptés à toutes les saisons et tous les budgets. La prestation inclut le montage professionnel, l'équilibrage dynamique des roues et le réglage de la valve.",
    price: "À partir de 5 000 FCFA / pneu",
    duration: "30 minutes",
    icon: "Disc"
  },
  {
    id: "reparation",
    title: "Réparation Générale",
    description: "Moteur, suspension, embrayage, échappement et plus encore.",
    longDescription: "De la réparation mécanique lourde (distribution, embrayage, injecteurs) aux suspensions et au système d'échappement, nos experts qualifiés prennent en charge tous types de réparations mécaniques complexes.",
    price: "Sur devis",
    duration: "Variable",
    icon: "Settings"
  }
];

export const testimonialsData = [
  {
    name: "Mamadou L.",
    comment: "Service rapide et professionnel. Je recommande vivement !",
    rating: 5
  },
  {
    name: "Aissatou D.",
    comment: "Équipe à l'écoute, travail soigné et prix justes.",
    rating: 5
  },
  {
    name: "Cheikh T.",
    comment: "Mon garage de confiance depuis plus de 3 ans.",
    rating: 5
  }
];