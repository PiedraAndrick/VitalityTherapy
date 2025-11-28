import Link from "next/link";
import styles from '../styles/NavBar.module.css';
import { socialNetworks } from "@/dataIndex";
export default function NavBar() {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}> 
        <Link href="/"> <img src="/logoblanco.png" width={100}  alt="" /></Link>
      </div>
      <div className={styles.links}>
        <Link href="/">Inicio</Link>
        <Link href="/catalogo">Sueros</Link>
        <Link href="/terapias">Terapias</Link>
        <Link href="/acerca">Acerca</Link>
        <Link href="/contacto">Contacto</Link>
      </div>
        <ul className={`${styles.social} flex items-center gap-4`}>
          {socialNetworks.map(({ id, logo, src }) => (
            <li key={id}>
              <Link
                href={src}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-zinc-800/30 transition"
              >
                {logo}
              </Link>
            </li>
          ))}
        </ul>
    </div>
  );
}