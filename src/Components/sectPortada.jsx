"use client"
import Image from "next/image"
import { useEffect } from "react"
import {BiChevronLeft,BiChevronRight} from "react-icons/bi"
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';


function Portada() {

  useEffect(() => {
    init();
  }, []);

  async function init() {
    const { Carousel, initTE } = await import("tw-elements");
    initTE({ Carousel });
  }
  return (
      <section id="SectPortada" className="relative">
          <div id="CarouselPortada" className="relative" data-te-carousel-init data-te-ride="carousel" data-te-interval="4000">      
            <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
              
                <div className="relative float-left -mr-[100%] w-full transition-transform duration-[1000ms] min-h-screen overflow-hidden ease-in-out motion-reduce:transition-none" style={{ backfaceVisibility: 'hidden' }}  data-te-carousel-item data-te-carousel-active>
                  <Image src="/images/Perro.jpg" height={1920} width={1445} className=" animar-zoom object-cover object-center h-screen w-full filter brightness-50" alt="Perro"/>
                  <div className=" absolute top-[50%] -translate-y-1/2 inset-x-[10%] flex flex-col">
                    <div className="relative flex flex-col items-center justify-center">
                      <span className="max-md:text-5xl max-lg:text-6xl max-2xl:text-7xl 2xl:text-8xl max-md:w-[90%]  md:w-[calc(70%-2rem)] lg:w-[calc(70%-5rem)] text-white animate-fade-left animate-duration-[3000ms] bg-verde-rgb bg-opacity-30 filter saturate-200  flex items-center justify-center text-center p-5">Veterinaria</span>
                      <span className="max-md:text-5xl max-lg:text-6xl max-2xl:text-7xl 2xl:text-8xl max-md:w-[90%]  md:w-[calc(70%-2rem)] lg:w-[calc(70%-5rem)] text-white  animate-fade-right animate-duration-[3000ms] bg-verde-rgb bg-opacity-30 flex items-center justify-center text-center p-5">YanaPata</span>  
                      <span className="max-sm:text-base max-md:text-xl md:text-2xl text-center text-white my-5 animate-fade-up animate-duration-[3000ms] text-shadow-lg shadow-black">&quot;Donde la salud y el bienestar de tus mascotas son nuestra prioridad&quot;</span>
                    </div>
                  </div>
                </div>

                <div className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[1000ms] min-h-screen overflow-hidden ease-in-out motion-reduce:transition-none" style={{ backfaceVisibility: 'hidden' }}   data-te-carousel-item>
                  <Image src="/images/Gato.jpg" height={1920} width={1445} className="animar-zoom  object-cover object-center h-screen w-full filter brightness-50" alt="Gato"/>
                  <div className="absolute top-[50%] -translate-y-1/2 inset-x-[10%] flex flex-col">
                    <div className="relative flex flex-col items-center justify-center">
                      <span className="max-md:text-4xl max-lg:text-5xl lg:text-7xl  max-md:w-[90%] text-shadow-lg shadow-black  md:w-[calc(100%-2rem)] lg:w-[calc(100%-5rem)] text-white animate-fade-down animate-duration-[3000ms] flex items-center justify-center text-center p-5">¿Tienes Preguntas?</span>
                      <ScrollLink href="/" smooth={true} duration={300} to='Contacto' className="z-50 bg-verde-rgb rounded-full bg-opacity-75 text-white p-4 filter hover:saturate-200 hover:bg-opacity-100 transform duration-200 text-2xl animate-fade-up animate-duration-[3000ms]">Contáctanos</ScrollLink>   
                      
                    </div>
                  </div>
                </div>

                <div className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[1000ms] min-h-screen overflow-hidden ease-in-out motion-reduce:transition-none" style={{ backfaceVisibility: 'hidden' }}   data-te-carousel-item>
                  <Image src="/images/PerroGato.jpg" height={1920} width={1445} className="animar-zoom  object-cover object-top h-screen w-full filter brightness-50" alt="Gato y Perro"/>
                  <div className="absolute top-[50%] -translate-y-1/2 inset-x-[10%] flex flex-col">
                    <div className="relative flex flex-col items-center justify-center">
                      <span className="max-sm:text-2xl max-md:text-3xl max-lg:text-5xl lg:text-7xl text-white text-center px-5 text-shadow-lg shadow-black animate-fade-up animate-duration-[3000ms]">La mejor atención veterinaria para tus mascotas</span>
                      
                    </div>
                  </div>
                </div>

            </div>

            <button className="absolute bottom-0 left-0 top-0  flex w-[15%] items-center justify-center group" type="button" data-te-target="#CarouselPortada" data-te-slide="prev"> 
              <BiChevronLeft size={40} className="text-verde-rgb filter saturate-200 border border-black bg-gray-950 rounded-full group-hover:scale-125 transform duration-200"/>
            </button>

            <button className="absolute bottom-0 right-0 top-0 flex w-[15%] items-center justify-center group" type="button" data-te-target="#CarouselPortada" data-te-slide="next">
              <BiChevronRight size={40} className="text-verde-rgb filter saturate-200 border border-black bg-gray-950 rounded-full group-hover:scale-125 transform duration-200"/>
            </button>
        </div>
    </section>
  )
}

export default Portada