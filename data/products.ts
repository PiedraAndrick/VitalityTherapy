// src: data/products.ts
//
// Este archivo centraliza los datos del catálogo de sueros (suero intravenoso).
// Al mantener las definiciones de productos en un único módulo se pueden
// importar desde la página del catálogo y desde las páginas de detalle.

export interface TherapyOption {
  id: number;
  name: string;
  price: number;
  currency?: string;
  durationMinutes?: number;
}

export interface SerumProduct {
  /**
   * Identificador numérico para el producto. Se usa para ordenar internamente.
   */
  id: string;
  /**
   * Slug legible para la URL. Las rutas en /catalogo/[slug] usan este slug
   * en lugar de depender del valor numérico.
  /** Nombre del suero */
  name: string;
  /** Ruta o URL de la imagen asociada */
  imageSrc: string;
  /** Texto alternativo para la imagen */
  imageAlt: string;
  /** Descripción del suero */
  description: string;
  /** Opciones de terapia disponibles para el suero */
  options: TherapyOption[];
}

export const  products: SerumProduct[] = [
  {
    id: "adelgazar",
    name: "Suero Adelgazante",
    imageSrc: "/images/adelgazar2.png",
    imageAlt: "Bolsa de suero adelgazante",
    description:
      "Suero adelgazante diseñado para apoyar la pérdida de peso mediante la mejora del metabolismo y la reducción del apetito.",
    options: [
      { id: 1, name: "Terapia Energía Básica", price: 45, currency: "USD" },
      {
        id: 2,
        name: "Terapia Energía Plus",
        price: 60,
        currency: "USD",
        durationMinutes: 60,
      },
    ],
  },
  {
    id: "reductor",
    name: "Suero Reductor",
    imageSrc: "/images/adelgazar2.png",
    imageAlt: "Bolsa de suero adelgazante",
    description:
      "Se utiliza como coadyuvante en programas de control de peso, reducción de grasa corporal"+ 
     "y mejora del metabolismo, complementando dieta equilibrada y ejercicio",
    options: [
      { id: 1, name: "Terapia Energía Básica", price: 80, currency: "USD" },
      {
        id: 2,
        name: "Terapia Energía Plus",
        price: 60,
        currency: "USD",
        durationMinutes: 60,
      },
    ],
  },
  {
    id: 'antiestres',
    name: "Suero Antiestrés",
    imageSrc: "/images/antiestrés2.png",
    imageAlt: "Suero Antiestrés",
    description:
      "Formulado para reducir el estrés y la ansiedad, promoviendo la relajación y el bienestar mental.",
    options: [
      { id: 1, name: "Terapia Relax Básica", price: 40, currency: "USD" },
      {
        id: 2,
        name: "Terapia Relax Avanzada",
        price: 55,
        currency: "USD",
        durationMinutes: 50,
      },
    ],
  },
  {
    id: 'antienvejecimiento',
    name: "Suero Antienvejecimiento",
    imageSrc: "/images/anti-envejecimiento2.png",
    imageAlt: "Suero antienvejecimiento",
    description:
      "Formulado para combatir los signos del envejecimiento, mejorar la elasticidad de la piel y promover una apariencia juvenil.",
    options: [
      { id: 1, name: "Terapia Juventud Básica", price: 55, currency: "USD" },
      {
        id: 2,
        name: "Terapia Juventud Avanzada",
        price: 75,
        currency: "USD",
        durationMinutes: 70,
      },
    ],
  },
  {
    id: 'inmunologico',
    name: "Suero Inmunológico",
    imageSrc: "/images/inmunologico2.png",
    imageAlt: "Suero inmunológico",
    description:
      "Diseñado para fortalecer el sistema inmunológico, aumentar la resistencia a enfermedades y mejorar la salud general.",
    options: [
      { id: 1, name: "Terapia Inmuno Básica", price: 50, currency: "USD" },
      {
        id: 2,
        name: "Terapia Inmuno Plus",
        price: 70,
        currency: "USD",
        durationMinutes: 65,
      },
    ],
  },
];
