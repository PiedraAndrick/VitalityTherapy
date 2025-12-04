"use client"
import TransitionPage from "@/components/TransisionPage";
import MotionTransition from "@/components/MotionTransition";
import Hero from "@/components/Hero";
import ContentImageSection from "@/components/ContentImageSection";
export default function Home() {
  return (
    <>
      <TransitionPage />
      <MotionTransition position="bottom" >
        <Hero />

        <ContentImageSection
        reverse={true}
          title="Sueroterapia pensada para tu bienestar"
          imageSrc="/images/inmunologico.png"
          description={
            <>
              <span className="eyebrow">Bienestar · Estética · Energía</span>
              <p className="lead">
                En <strong>Vitality Therapy</strong> combinamos sueroterapia intravenosa con un
                enfoque amable y profesional para ayudarte a recuperar tu energía y sentirte mejor
                por dentro y por fuera.
              </p>
              <ul>
                <li>Protocolos personalizados según tus objetivos.</li>
                <li>Sesiones en un entorno cómodo y seguro.</li>
                <li>Acompañamiento antes, durante y después de tu terapia.</li>
              </ul>
            </>
          }
        />

        <ContentImageSection
          title="¿Por qué son buenos los sueros intravenosos?"
          description="Hidratación rápida y efectiva...\nRecuperación rápida..."
          imageSrc="/images/inmunologico.png"
          alt="Ilustración de sueros"
          reverse={false} // cambia a true para invertir la posición
        />
        {/*
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
      */}
      </MotionTransition>
    </>
  );
}
