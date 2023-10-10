
import Ubicacion from "@/Components/sectUbicacion";
import Image from "next/image";
import Link from "next/link";
import { Carousel,CarouselBody,ItemActiveCarousel,ItemCarousel,PrevButton,NextButton } from "@/Components/TWelements/Carousel";
import dataServicios from "@/app/utils/data.json";
import {AiOutlineLeft,AiOutlineRight} from "react-icons/ai"
import {BsWhatsapp} from "react-icons/bs"
import {MdPets} from "react-icons/md"
import PortadaDinamica from "@/Components/PortadaDinamica";

function ServicioPage({ params }) {
    
    const servicioDecodificado = decodeURIComponent(params.servicio);

    function buscarServicioPorNombre(nombre) {
        const nombreMinusculas = nombre.toLowerCase();

        const servicioEncontrado = dataServicios.find((servicio) =>
            servicio.nombre.toLowerCase() === nombreMinusculas
        );

        return servicioEncontrado || null;
    }

    const servicioActual = buscarServicioPorNombre(servicioDecodificado);

    return (
        <>
        <main>
            <PortadaDinamica
                    titulo={servicioActual.nombre}
                    desc={servicioActual.presentacion}
                    img={servicioActual.img}
            />
                <section>
                    <div className="flex  max-xl:flex-col gap-10 md:p-10">
                        <div className="xl:w-1/2 flex flex-col  gap-10 p-5" >
                            <div data-aos="fade-left" data-aos-delay="200" data-aos-duration="1200" className="relative flex flex-col w-auto filter saturate-200">
                                <h2 className="max-sm:text-3xl text-5xl">{servicioActual.nombre}</h2>
                                <span className="w-[25%] h-[6px] bg-verde-rgb filter saturate-200 mt-3"></span>
                            </div>
                            <p data-aos="fade-left" data-aos-delay="300" data-aos-duration="1400" className="max-sm:text-base text-xl">{servicioActual.descripcion}</p>
                            <div data-aos="fade-left" data-aos-delay="400" data-aos-duration="1600">
                                <Link  className="p-2 text-white flex items-center justify-center filter hover:saturate-150 hover:shadow-lg transform duration-300  bg-[rgb(36,210,101)] rounded-full text-xl gap-2 max-w-[340px] "  target="_blank" href="https://wa.me/+51952488753">
                                <BsWhatsapp size={40}/>
                                    Envíanos un mensaje
                                </Link>
                            </div>
                            <div data-aos="fade-left" data-aos-delay="500" data-aos-duration="1800">
                                <Link  className="p-2 text-white flex items-center justify-center filter saturate-200 hover:saturate-[3] hover:shadow-lg transform duration-300 bg-verde-rgb rounded-full text-xl gap-2 max-w-[340px] h-[60px]" href="../Solicitud">
                                    <MdPets size={40}/>
                                    Solicita una cita
                                </Link>
                            </div>
                        </div>
                        <div className="xl:w-1/2  max-xl:order-first flex items-center justify-center p-5" data-aos="fade-right" data-aos-delay="200 " data-aos-duration="1000" >
                            <Image src={servicioActual.img} alt={servicioActual.nombre} width={500} height={500} className=" rounded-lg xl:mr-[40%] shadow-2xl "/>
                        </div>
                    </div>
                </section>

                <section className="pt-[100px] pb-[50px]">
                    <div className="bg-white relative flex w-full items-center justify-center">
                        <Carousel id={"CarouselComentarios"} className={"w-full py-5 overflow-hidden flex flex-col bg-fixed bg-bottom items-center justify-center bg-[url(/images/Test.jpg)]"}>
                            <div className="bg-black bg-opacity-75 absolute top-0 left-0 w-full h-full"></div>
                            <CarouselBody>
                                <h2 className="max-sm:text-4xl text-5xl w-full text-center text-white text-shadow-sm shadow-verde-rgb filter saturate-200 py-5">Testimonios</h2>
                                <ItemActiveCarousel className={"overflow-hidden"}>
                                {servicioActual.comentarios.length > 0 && (
                                    <div className="w-full h-[20vh] flex flex-col max-sm:gap-3 gap-5 items-center justify-center text-xl text-white">
                                        <p>{servicioActual.comentarios[0].calificacion}</p>
                                        <p className="max-sm:text-xs text-base text-center max-w-[800px] px-3">« {servicioActual.comentarios[0].comentario} »</p>
                                        <p className="max-sm:text-xl text-3xl text-center">{servicioActual.comentarios[0].usuario}</p>
                                    </div>
                                )}
                                </ItemActiveCarousel>
                                {servicioActual.comentarios.slice(1).map((comentario, index) => (
                                <ItemCarousel key={index} className={"overflow-hidden"}>
                                    <div className="w-full h-[20vh] flex flex-col max-sm:gap-3 gap-5 items-center justify-center text-xl text-white">
                                        <p>{comentario.calificacion}</p>
                                        <p className="max-sm:text-xs text-base text-center max-w-[800px] px-3">« {comentario.comentario} »</p>
                                        <p className=" max-sm:text-xl text-3xl text-center">{comentario.usuario}</p>
                                    </div>
                                </ItemCarousel>
                                ))}  
                            </CarouselBody>
                            <div className="relative w-full flex filter saturate-200 gap-3 items-center justify-center p-2">
                                <PrevButton idCarousel={"#CarouselComentarios"} className={"text-2xl text-white p-2 border border-white rounded-full hover:text-verde-rgb hover:border-verde-rgb filter saturate-200 transform duration-200"}>
                                    <AiOutlineLeft/>
                                </PrevButton>
                                <NextButton idCarousel={"#CarouselComentarios"} className={"text-2xl text-white p-2 border border-white rounded-full hover:text-verde-rgb hover:border-verde-rgb  filter saturate-200 transform duration-200"}>
                                    <AiOutlineRight/>
                                </NextButton>
                            </div>
                        </Carousel>
                    </div>
                </section>
                <Ubicacion/>
            </main>
        </>
    );
}

export default ServicioPage;