
import FormCita from "@/Components/Forms/FormCita";
import Image from "next/image";
import {PiVolleyballBold} from "react-icons/pi"
import PortadaDinamica from "@/Components/PortadaDinamica";

export default function SolicitudPage() {
  return (
    <>
      <PortadaDinamica titulo="Solicita una Cita" desc="La salud de tu mascota es nuestra prioridad. Programa una cita y juntos cuidaremos de su bienestar" img="/images/Solicitud-Mascotas.png"/>
      <section className="pt-[60px] pb-[100px]">
          <h2 className="text-4xl filter saturate-200 text-center flex items-center justify-center text-black py-5">Completa todos los campos</h2>
            
          <div className="grid max-lg:grid-cols-none lg:grid-cols-3 py-5">
              <div className="relative hidden items-center lg:flex" data-aos="fade-right"  data-aos-duration="1000">
                <Image src="/images/kitty.png" width={340} height={640} alt="Gatito" className="" />
                <PiVolleyballBold size={120} className="text-verde-rgb filter saturate-200 absolute top-5 right-[15%]  animate-spin"/>
              </div>
              <div className=" flex max-md:px-5 md:mx-auto"> 
                <FormCita/>
              </div>
          </div>
      </section>
    </>
    
  )
}

