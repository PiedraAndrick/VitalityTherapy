"use client"
import { products } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";



/**
 * Página de detalle para un suero específico. Utiliza el parámetro de la ruta
 * dinámica (id/slug) para buscar el producto en la lista exportada desde
 * data/products.ts. Si no existe el producto, muestra un mensaje simple.
 */
export default function SerumDetailPage() {

  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  const serum = products.find((item) => item.id === id);
  // Buscamos el producto por slug (identificador de la URL). También aceptamos
  // el valor numérico como fallback para compatibilidad con rutas antiguas.


  if (!serum) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-950 text-white p-8">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">Producto no encontrado</h1>
          <p className="mb-6">El suero que buscas no existe en nuestro catálogo.</p>
          <Link
            href="/catalogo"
            className="inline-block bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md"
          >
            Volver al catálogo
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white py-8 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Imagen del suero */}
        <div className="relative w-full max-w-md aspect-3/4 overflow-hidden rounded-2xl shadow-lg">
          <Image
            src={serum.imageSrc}
            alt={serum.imageAlt}
            fill
            className="object-cover object-center"
          />
        </div>
        {/* Información del suero */}
        <div className="md:w-1/2 w-full flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{serum.name}</h1>

          <p className="text-base md:text-lg mb-6 leading-relaxed text-gray-300">
            {serum.description}
          </p>

          {/* Contenido del suero */}
          <h2 className="text-xl font-semibold mb-2">Contenido</h2>
          <ul className="list-disc pl-6 text-gray-300 mb-4">
            {serum.content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          {/* Beneficios del suero */}
          <h2 className="text-xl font-semibold mb-2">Beneficios</h2>
          <ul className="list-disc pl-6 text-gray-300 mb-6">
            {serum.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>

          {/* Opciones de terapia ya existentes */}
          <h2 className="text-xl font-semibold mb-3">Opciones de terapia</h2>
          <ul className="space-y-3">
            {serum.options.map((option) => (
              <li
                key={option.id}
                className="flex items-center justify-between rounded-lg bg-white/10 px-4 py-3"
              >
                <div>
                  <span className="block font-medium text-white">{option.name}</span>
                  {option.durationMinutes && (
                    <span className="text-sm text-gray-400">{option.durationMinutes} min</span>
                  )}
                </div>
                <span className="font-semibold text-white">
                  {(option.currency ?? '$')} {option.price.toFixed(2)}
                </span>
              </li>
            ))}
          </ul>

          <Link
            href="/catalogo"
            className="mt-8 inline-block bg-green-700 hover:bg-green-800 text-white font-medium px-6 py-3 rounded-md text-center w-max"
          >
            Volver al catálogo
          </Link>
        </div>
      </div>
    </main>
  );
}
