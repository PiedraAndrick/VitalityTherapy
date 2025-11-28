import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContainerLayout from "@/components/ContainerLayout";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={` bg-white`}>
        <ContainerLayout>
          <Navbar />
          <main className=" ">
            <div className="">{children}</div>
          </main>
        </ContainerLayout>
        <Footer />
      </body>
    </html>
  );
}