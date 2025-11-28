import TransitionPage from "@/components/TransisionPage";
import { aboutUsData } from "../../data/aboutUs";
import MotionTransition from "@/components/MotionTransition";

export default function AboutUs() {
  return (
    <>
    <TransitionPage/>
    <MotionTransition position="right" >
          <div style={{ padding: '1rem' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '1rem',marginTop: '0.5rem'}}>Sobre Nosotros</h1>
        <h2 style={{ textAlign: 'center', marginBottom: '4rem' }}> Bienestar, estetica y energía.</h2>

        {aboutUsData.map((item) => (
          <section key={item.id} style={{color:"white",margin: 'auto', width: '60%',marginBottom:'1rem' , backgroundColor : '#12693eff', padding: '2rem', borderRadius: '8px' }}>
            <h2 style={{ marginBottom: '0.5rem' }}>{item.name}</h2>
            <p style={{textAlign:"justify"}}>{item.description}</p>
          </section>
        ))}
      </div>
      </MotionTransition>
    </>
  );
}