import Image from "next/image";
import Link from "next/link";
import styles from '../styles/Home.module.css';
import Layout from "./layout";
import { serums } from '../data/serums';
import TransitionPage from "@/components/TransisionPage";
import MotionTransition from "@/components/MotionTransition";
import Hero from "@/components/Hero";
import Container from "@/components/Container";
export default function Home() {
  return (
    <>
    <TransitionPage/>
    <MotionTransition position="bottom" >
      <Hero/>
      <Container> 
      <section className={styles.catalogo}>
        <h2>Catálogo de Sueros</h2>
        <div className={styles.grid}>
          {serums.map((serum) => (
            <Link key={serum.id} href={`/serums/${serum.id}`} className={styles.card}>
              <div>
                <img  src={serum.image} alt={serum.name} className={styles.image} />
                <h2>{serum.name}</h2>
                <p>{serum.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      </Container>
      </MotionTransition>
    </>
  );
}
