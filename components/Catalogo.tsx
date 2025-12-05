import { SerumProduct } from "@/data/products";
import Image from "next/image";
import Link from "next/link";

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
    <section className="w-full max-w-full py-5 bg-[#ffff] text-[#153a18]">
      <div className="max-w-6xl mx-auto px-4">
        <header className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
          <p className="mt-2 text-sm md:text-base text-gray-400">
            {subtitle}
          </p>
        </header>

        <div className={`grid gap-13 ${getGridColsClass(products.length)}`}>
          {products.map((product) => (
            // Envolvemos cada tarjeta en un Link para que sea clicable.
            <Link
              href={`/catalogo/${product.id}`}
              key={product.id}
              className="no-underline group "
            >
              <article
                className="
                  flex flex-col rounded-2xl
                  bg-white/70 p-4 shadow-md backdrop-blur-md
                  transition-all duration-300 ease-out
                  group-hover:-translate-y-2 group-hover:shadow-xl group-hover:border-[#2a5c2f]
                "
              >
                <div className="w-full max-w-md m-auto rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    width={600}          // relación 3:4 → 600x800, por ejemplo
                    height={800}
                    className="
                        w-full h-auto       /* responsive */
                        object-contain
                        rounded-2xl         /* bordes redondos en la imagen */
                        transition-transform duration-300 ease-out
                        group-hover:scale-100
                      "
                  />
                </div>

                <div className="mt-4 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold text-[#153a18]">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm text-[#020402]">
                    {product.description}
                  </p>

                  <div className="mt-4 border-t border-[#2a5c2f] pt-4">
                    <h4 className="text-sm font-medium mb-2 text-[#153a18]">
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
