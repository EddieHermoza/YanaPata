import Navbar from '@/Components/Navbar';
import FormCita from "@/Components/Forms/FormCita";
import Image from "next/image";
import {PiVolleyballBold} from "react-icons/pi"
import PortadaDinamica from "@/Components/PortadaDinamica";
import Footer from "@/Components/Footer";

export default function SolicitudPage() {
  return (
    <>
      <Navbar/>
      <main className=" animate-fade animate-duration-[2000ms]">
      <PortadaDinamica titulo="Solicita una Cita" desc="La salud de tu mascota es nuestra prioridad. Programa una cita y juntos cuidaremos de su bienestar" img="/images/Solicitud-Mascotas.png"/>
        <section className="pt-[60px] pb-[100px]">
          <h2 className="text-4xl filter saturate-200 text-center flex items-center justify-center text-black py-5">Completa todos los campos</h2>
            
          <div className="grid max-lg:grid-cols-none lg:grid-cols-3 py-5">
              <div className="relative hidden items-center lg:flex" >
                <Image src="/images/kitty.png" width={340} height={640} alt="Gatito" className="" />
                <PiVolleyballBold size={120} className="text-verde-rgb filter saturate-200 absolute top-20 right-[20%]  animate-spin"/>
              </div>
              <div className=" flex max-md:px-5 md:mx-auto"> 
                <FormCita/>
              </div>
          </div>
        </section>
      </main>
      <Footer/>
      <iframe
          src="https://www.stack-ai.com/embed/c64af075-8eee-4b70-a932-06a632c8f084/718b97ab-4282-42fa-92a3-6aeb705516b7/6535facc5607359530e08113"
          width="400px"
          height="620px"
          style={{
              display: 'block',
              position: 'fixed',
              border: 'none',
              overflow: 'hidden',
              zIndex: 9999999999,
              backgroundColor: 'transparent',
              borderRadius: '10px',
              bottom: 0,
              right: 0
          }}
        ></iframe>
    </>
    
  )
}

