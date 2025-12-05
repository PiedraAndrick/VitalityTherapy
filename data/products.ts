// Definición de las interfaces de opciones de terapia y productos de suero
export interface TherapyOption {
  id: number;
  name: string;
  price: number;
  currency?: string;
  durationMinutes?: number;
}

export interface SerumProduct {
  /**
   * Identificador alfanumérico único para el suero. Se usa en las rutas de la aplicación.
   */
  id: string;
  /** Nombre comercial del suero */
  name: string;
  /** Ruta relativa de la imagen asociada al producto */
  imageSrc: string;
  /** Texto alternativo descriptivo para la imagen */
  imageAlt: string;
  /** Descripción general del producto */
  description: string;
  /** Lista de ingredientes o componentes activos */
  content: string[];
  /** Lista de beneficios o efectos esperados del suero */
  benefits: string[];
  /** Opciones de terapia disponibles para el suero */
  options: TherapyOption[];
}

/**
 * Catálogo completo de sueros disponibles. Cada objeto incluye información
 * relevante como ingredientes y beneficios específicos. Los precios y duraciones
 * de las terapias se ajustan en función del tipo de tratamiento.
 */
export const products: SerumProduct[] = [
  {
    id: 'antiestres',
    name: 'Suero Antiestrés',
    imageSrc: '/images/antiestrés2.png',
    imageAlt: 'Suero antiestrés',
    description:
      'Suero formulado para reducir la tensión física y mental y promover la relajación. Contiene extractos de ginkgo, 5‑HTP y L‑teanina para apoyar la claridad mental.',
    content: ['Ginkgo biloba', '5‑HTP', 'L‑Teanina'],
    benefits: [
      'Mejora la circulación cerebral y periférica',
      'Reducción de la tensión física y mental',
      'Disminución de la ansiedad',
      'Mejora de la memoria y concentración',
      'Apoyo en la sensación de claridad y calma',
    ],
    options: [
      { id: 1, name: 'Terapia Relax Básica', price: 55, currency: 'USD' }
    ],
  },
  {
    id: 'antienvejecimiento',
    name: 'Suero Antienvejecimiento',
    imageSrc: '/images/anti-envejecimiento2.png',
    imageAlt: 'Suero antienvejecimiento',
    description:
      'Suero antioxidante elaborado con glutatión, vitamina C y niacinamida para combatir los signos del envejecimiento, uniformizar el tono y promover la salud cutánea.',
    content: ['Glutatión', 'Vitamina C', 'Niacinamida'],
    benefits: [
      'Mejora el tono cutáneo y uniformiza el color',
      'Disminuye manchas e hiperpigmentaciones',
      'Favorece la desintoxicación',
      'Mejora la salud de la piel',
      'Fortalece el sistema inmunológico y mejora la función hepática',
    ],
    options: [
      { id: 1, name: 'Terapia Básica', price: 80, currency: 'USD' },
    ],
  },
  {
    id: 'reductor',
    name: 'Suero Reductor',
    imageSrc: '/images/adelgazar2.png',
    imageAlt: 'Suero reductor',
    description:
      'Coadyuvante en programas de control de peso y reducción de grasa corporal. Combina L‑carnitina, vitamina C y 5‑HTP para favorecer el metabolismo y controlar el apetito.',
    content: ['L‑carnitina', 'Vitamina C', '5‑HTP'],
    benefits: [
      'Reducción de la ansiedad por la comida o antojos',
      'Mejora del estado de ánimo',
      'Reducción de la fatiga muscular',
      'Potenciación del rendimiento físico',
      'Apoyo al sistema inmune durante dietas restrictivas',
    ],
    options: [
      { id: 1, name: 'Terapia Reductora Básica', price: 80, currency: 'USD' }
    ],
  },
  {
    id: 'nad',
    name: 'Suero NAD+',
    imageSrc: '/images/nad.png',
    imageAlt: 'Suero NAD+',
    description:
      'Suero de soporte energético y cognitivo basado en la coenzima NAD+, derivada de la niacinamida, para mejorar la función celular y proteger contra el daño oxidativo.',
    content: ['NAD+ (coenzima)', 'Niacinamida (vitamina B3)'],
    benefits: [
      'Repara el ADN dañado por envejecimiento, radiación o toxinas',
      'Protege frente a neurodegeneración (Parkinson, Alzheimer, deterioro leve)',
      'Mejora el metabolismo energético y la sensibilidad a la insulina',
      'Contribuye a un mejor sueño, estado de ánimo y claridad mental',
      'Disminuye el daño neuronal por radicales libres',
    ],
    options: [
      { id: 1, name: 'Terapia NAD+ Básica', price: 90, currency: 'USD' },
      { id: 2, name: 'Terapia NAD+ Avanzada', price: 110, currency: 'USD', durationMinutes: 70 },
    ],
  },
  {
    id: 'diabet',
    name: 'Suero Diabet',
    imageSrc: '/images/diabet.png',
    imageAlt: 'Suero Diabet',
    description:
      'Diseñado para proteger las células del daño oxidativo y favorecer el metabolismo de la glucosa, mejorando la sensibilidad a la insulina con glutatión, ácido alfa lipoico y L‑teanina.',
    content: ['Glutatión', 'Ácido alfa lipoico', 'L‑Teanina'],
    benefits: [
      'Previene el envejecimiento acelerado y las alteraciones hepáticas',
      'Mejora la sensibilidad a la insulina',
      'Disminuye el cortisol, hormona que eleva el azúcar',
      'Reduce el riesgo de neuropatía diabética y problemas de memoria',
      'Refuerza de manera segura los tratamientos para la diabetes',
    ],
    options: [
      { id: 1, name: 'Terapia Diabet Básica', price: 75, currency: 'USD' },
    ],
  },
  {
    id: 'inmunizador',
    name: 'Suero Inmunizador',
    imageSrc: '/images/inmune.png',
    imageAlt: 'Suero inmunizador',
    description:
      'Estimula las defensas naturales y regula la respuesta inmunitaria. Indicado para recuperar el sistema inmune ante infecciones recurrentes, inflamación o debilidad inmunológica.',
    content: ['Kreuz Inmune'],
    benefits: [
      'Refuerzo general del sistema inmunológico',
      'Coadyuvante en infecciones respiratorias',
      'Apoyo en estados postvacunales o de convalecencia',
      'Prevención de recaídas infecciosas en adultos mayores o personas con fatiga crónica',
    ],
    options: [
      { id: 1, name: 'Terapia Inmunizadora Básica', price: 60, currency: 'USD' },
    ],
  },
  {
    id: 'detox',
    name: 'Suero Detox',
    imageSrc: '/images/detox.png',
    imageAlt: 'Suero detox',
    description:
      'Suero detoxificante diseñado para favorecer la eliminación de toxinas hepáticas y celulares mediante glutatión, ácido alfa lipoico y vitamina C.',
    content: ['Glutatión', 'Ácido alfa lipoico', 'Vitamina C'],
    benefits: [
      'Elimina radicales libres',
      'Aumenta energía y vitalidad',
      'Mejora la claridad mental y la luminosidad de la piel',
      'Potencia la inmunidad, refuerza la detoxificación y reduce el estrés oxidativo',
    ],
    options: [
      { id: 1, name: 'Terapia Detox Básica', price: 85, currency: 'USD' },
    ],
  },
];