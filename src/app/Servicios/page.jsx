
import Image from "next/image"
import {MdPets} from "react-icons/md"
import SectServicios from "@/Components/SectServicios"
import PortadaDinamica from "@/Components/PortadaDinamica"
import Footer from "@/Components/Footer"


function page() {
  return (
    <>
        <main className=" animate-fade animate-duration-[2000ms]">
          <PortadaDinamica  titulo="Servicios" desc="Dedicados a la salud y bienestar de tus mascotas, ofreciendo servicios de excelencia y cariño para que vivan una vida plena y saludable a tu lado" img="/images/Servicio.jpg"/>
            <section className="w-full flex flex-col items-center gap-10">
                <div className="flex max-lg:flex-col gap-10 w-full max-w-[1400px] justify-center items-center">
                  <div className="max-lg:m-auto lg:ml-auto flex flex-col gap-5 ">
                    <p className="max-md:text-base md:text-xl text-black text-justify lg:w-[600px] max-sm:px-6 sm:px-10">En <span className="text-xl text-verde">YanaPata</span>, no solo proporcionamos servicios veterinarios para tus queridas mascotas, sino que también nos esforzamos por aplicar tratamientos con un enfoque ético, asegurando que cada procedimiento se realice con cuidado y compasión cuando tus animales lo necesitan.</p>
                    <ul className="max-md:text-base md:text-xl text-black text-justify lg:w-[600px] max-sm:px-6 sm:px-10 flex flex-col gap-6 mt-4">
                      <li className="flex items-center gap-x-2">
                        <MdPets size={30} className="text-[rgb(255,140,0)]"/> Ambiente Cálido y Amigable
                      </li> 
                      <li className="flex items-center gap-x-2">
                        <MdPets size={30} className="text-[rgb(255,140,0)]"/> Consultas Personalizadas
                      </li>
                      <li className="flex items-center gap-x-2">
                        <MdPets size={30} className="text-[rgb(255,140,0)]"/> Pecios Transparentes
                      </li>
                      <li className="flex items-center gap-x-2">
                        <MdPets size={30} className="text-[rgb(255,140,0)]"/> Personal Profesional
                      </li>
                      <li className="flex items-center gap-x-2">
                        <MdPets size={30} className="text-[rgb(255,140,0)]"/> Compromiso con los animales
                      </li>
                    </ul>
                  </div>
                  <div className="px-6 max-lg:m-auto lg:mr-auto">
                    <Image src="/images/CitaMascota.png" height={400} width={650} alt="Perro con laptop" className="filter saturate-150"/>
                  </div>
              </div>
            <div className="w-full max-w-[1400px] flex flex-col justify-center items-center">
                <h2 className="max-md:text-3xl md:text-5xl text-verde flex items-center justify-center text-center m-5">Servicios que Ofrecemos</h2>
                <Image src="/images/Gato-Mirando.jpg" width={600} height={300} alt="gatito mirando" className="mx-auto"/>
                <SectServicios/>
            </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}

export default page