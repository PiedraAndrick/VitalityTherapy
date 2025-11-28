import Image from "next/image";
import styles from "../styles/Hero.module.css";
import { nunito } from "@/lib";
export default function Hero() {

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.img}>
          <img src="/logo3.png" alt=""/>
        </div>
        <div className={nunito.className + ` ${styles.title}`}>
          <p>Bienestar, estética y energía</p>
        </div>
        <button className={nunito.className + ` ${styles.cta}`}>
         <p>Agenda tu sueroterapia</p> 
        </button>
      </div>
    </section>
  );
}
