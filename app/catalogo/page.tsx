import TherapyCatalog from "@/components/Catalogo";
import { products } from "@/data/products";

export default function CatalogoPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <TherapyCatalog products={products} />
    </main>
  );
}