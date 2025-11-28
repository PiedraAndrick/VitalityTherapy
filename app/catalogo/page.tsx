import TherapyCatalog, { SerumProduct } from "@/components/Catalogo";

const products: SerumProduct[] = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
    name: "Suero Inmunológico",
    imageSrc: "/images/inmunologico2.png",
    imageAlt: "Suero inmunológico",
    description:
        "Diseñado para fortalecer el sistema inmunológico, aumentar la resistencia a enfermedades y mejorar la salud general.",
    options: [
        { id: 1, name: "Terapia Inmuno Básica", price: 50, currency: "USD" },
        {
        id: 2, name: "Terapia Inmuno Plus",
        price: 70,
        currency: "USD", 
        durationMinutes: 65,
        },
    ],
  }
];

export default function CatalogoPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <TherapyCatalog products={products} />
    </main>
  );
}