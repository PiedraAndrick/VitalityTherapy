"use client";
import Layout from "@/app/layout";
import { serums } from "@/data/serums";
import { useParams , useRouter} from "next/navigation";
import styles from '@/styles/SerumDetail.module.css';
export default function SerumDetail() {

  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  const serum = serums.find((item) => item.id === id);

  if (!serum) {
    return (
        <div className={styles.container}>
          <h2>Suero no encontrado</h2>
          <p>El suero solicitado no existe en nuestro catálogo.</p>
        </div>
    );
  }

  return (
      <div className={styles.container}>
        <img src={serum.image} alt={serum.name} className={styles.image} />
        <div className={styles.info}>
          <h2>{serum.name}</h2>
          <p className={styles.category}>Categoría: {serum.category}</p>
          <p>{serum.description}</p>
          <button className={styles.button} onClick={() => router.back()}>
            Volver
          </button>
        </div>
      </div>

  );
}