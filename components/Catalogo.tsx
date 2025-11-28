import Image from "next/image";

export interface TherapyOption {
    id: number;
    name: string;      // Ej: "Terapia Detox", "Energizante"
    price: number;     // Solo el valor numérico
    currency?: string; // Ej: "USD", "USD$", "$"
    durationMinutes?: number; // Opcional: duración de la terapia
}

export interface SerumProduct {
    id: number;
    name: string;          // Nombre del suero
    imageSrc: string;      // Ruta o URL de la imagen
    imageAlt: string;
    description: string;
    options: TherapyOption[];
}

interface TherapyCatalogProps {
    title?: string;
    subtitle?: string;
    products: SerumProduct[];
}

export default function TherapyCatalog({
    title = "Catálogo de Sueroterapia",
    subtitle = "Elige el suero y la terapia que mejor se adapte a tus necesidades.",
    products,
}: TherapyCatalogProps) {
    const getGridColsClass = (count: number) => {
        if (count === 1) {
            return "grid-cols-1 max-w-sm mx-auto";
        }

        if (count === 2) {
            return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 max-w-3xl mx-auto";
        }

        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
    };

    return (
        <section className="w-full py-12 bg-[#ffff] text-[#153a18]">
            <div className="max-w-6xl mx-auto px-4">
                <header className="mb-8 text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
                    <p className="mt-2 text-sm md:text-base text-gray-400">
                        {subtitle}
                    </p>
                </header>

                <div className={`grid gap-8 ${getGridColsClass(products.length)}`}>
                    {products.map((product) => (
                        <article
                            key={product.id}
                            className="flex flex-col rounded-2xl border border-white/10 bg-white/5/5 bg-liniar-to-br from-white/5 to-white/0 p-4 shadow-lg backdrop-blur-md"
                        >
                            <div className="relative w-full aspect-3/4 overflow-hidden hover:scale-102  ">
                                <Image
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    fill
                                    className="object-cover  transition-transform border rounded-4xl "
                                />
                            </div>

                            <div className="mt-4 flex-1 flex flex-col">
                                <h3 className="text-lg font-semibold">{product.name}</h3>
                                <p className="mt-2 text-sm text-[#020402]">
                                    {product.description}
                                </p>

                                <div className="mt-4 border-t border-[#2a5c2f] pt-4">
                                    <h4 className="text-sm font-medium mb-2">
                                        Opciones de terapia
                                    </h4>
                                    <ul className="space-y-2 text-sm">
                                        {product.options.map((option) => (
                                            <li
                                                key={option.id}
                                                className="flex items-center justify-between rounded-lg bg-[#2a5c2f20] px-3 py-2"
                                            >
                                                <div className="flex flex-col">
                                                    <span className="font-medium">{option.name}</span>
                                                    {option.durationMinutes && (
                                                        <span className="text-xs text-gray-400">
                                                            {option.durationMinutes} min
                                                        </span>
                                                    )}
                                                </div>
                                                <span className="font-semibold">
                                                    {(option.currency ?? "$")}&nbsp;
                                                    {option.price.toFixed(2)}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}