import TransitionPage from "@/components/TransisionPage";
import { aboutUsData } from "../../data/aboutUs";
import MotionTransition from "@/components/MotionTransition";

export default function AboutUs() {
  return (
    <>
    <TransitionPage/>
    <MotionTransition position="right" >
          <div style={{ padding: '1rem' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '1rem',marginTop: '0.5rem',fontSize:'2rem', fontFamily:'monospace'}}>Sobre Nosotros</h1>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}> Bienestar, estetica y energía.</h2>

        {aboutUsData.map((item) => (
          <section key={item.id} style={{color:"#153a18",margin: 'auto', width: '60%',marginBottom:'1rem' , backgroundColor : '#2a5c2f20', padding: '2rem', borderRadius: '8px' }}>
            <h2 style={{ marginBottom: '0.5rem', fontSize:'1.2rem',fontFamily:'monospace', fontWeight:'bold' }}>{item.name}</h2>
            <p style={{textAlign:"justify" , fontFamily:'monospace' , fontSize:'1rem', }}>{item.description}</p>
          </section>
        ))}
      </div>
      </MotionTransition>
    </>
  );
}