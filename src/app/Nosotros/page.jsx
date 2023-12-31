
import Image from "next/image"
import {Acordition,Colapsable} from "@/Components/TWelements/Acordition"
import { MdPets } from 'react-icons/md'
import PortadaDinamica from "@/Components/PortadaDinamica"
import Footer from "@/Components/Footer"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/Components/ui/accordion"

function page() {
  return (
    <>
    <main className=" animate-fade animate-duration-[2000ms]">
        <PortadaDinamica titulo={"Nosotros"} desc={"Nos dedicamos a la atención y cuidado de tus mascotas con pasión y profesionalismo"} img={"/images/VeterinariaYanaPata.png"}/>
            <section className="">
                <div className="flex max-lg:flex-col gap-10">
                    <div className="max-lg:m-auto lg:ml-auto flex flex-col gap-5 items-center justify-center"  data-aos="fade-left"  data-aos-duration="1000">
                        <p className="max-md:text-base md:text-xl text-black text-justify lg:w-[600px] max-sm:px-6 sm:px-10">En YanaPata, nos enorgullece ser tu opción confiable en Villa el Salvador para el cuidado de tus queridas mascotas. Desde el 2017, hemos estado comprometidos en brindar un servicio veterinario personalizado y de alta calidad. </p>
                        <p className="max-md:text-base md:text-xl text-black text-justify lg:w-[600px] max-sm:px-6 sm:px-10">Te invitamos cordialmente a visitarnos en la Av. 1ro de Mayo, donde estaremos encantados de atender a tus mascotas. También puedes comunicarte con nosotros por teléfono o correo electrónico para programar una cita. En YanaPata, nuestra pasión es cuidar y consentir a tus fieles compañeros.</p>
                    </div>
                    <div className=" px-6 max-lg:m-auto lg:mr-auto " data-aos="fade-right" data-aos-delay="200 " data-aos-duration="1200">
                        <Image src="/images/A.png" width={400} height={400} className="rounded shadow-2xl drop-shadow-2xl"/>
                    </div>
                </div>
            </section>
            <section className="py-[100px]">
                <h2 className="text-4xl text-center text-verde mb-5">Nuestra Filosofia</h2>
                <div className="flex justify-center">
                    <div className='w-full max-w-[1400px] py-5'>
                    <Accordion type="single" collapsible className="flex flex-col gap-10">
                        <AccordionItem value="item-1" className="text-black shadow-lg border-black" data-aos="fade-left"  data-aos-duration="1000">
                            <AccordionTrigger className="flex bg-slate-100 p-5 text-center text-2xl  hover:bg-slate-50 transform duration-300 hover:text-verde"> 
                                Visión
                            </AccordionTrigger>
                            <AccordionContent className="p-0">
                                    <div className='flex max-md:flex-col items-center justify-center p-8 filter saturate-200'>
                                        <div className='animate-fade-right animate-duration-[3000ms] md:w-1/2 flex flex-col item-center justify-center gap-5  md:pl-14'>
                                            <h2 className='text-5xl underline underline-offset-8 text-verde'>Visión</h2>
                                            <p className='text-base'>En <span className='text-verde'>Yanapata</span>, nuestra visión es convertirnos en un referente de excelencia en atención veterinaria en nuestra comunidad y más allá. Buscamos ser reconocidos por nuestro compromiso inquebrantable con el bienestar animal.</p>
                                            <p className="text-base"> Nos esforzamos por establecer relaciones de confianza a largo plazo con nuestros clientes y sus mascotas, y ser líderes en la promoción de la adopción responsable y la educación sobre el cuidado de los animales.</p>
                                        </div>
                                        <div className='animate-fade-left animate-duration-[3000ms] md:w-1/2 flex items-center justify-center max-md:p-5 md:pr-14'>
                                            <Image src="/images/about-img.webp" height={390} width={290}/>
                                        </div>
                                    </div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="text-black shadow-lg border-black" data-aos="fade-right"  data-aos-duration="1000">
                            <AccordionTrigger className="flex bg-slate-100 p-5 text-center text-2xl  hover:bg-slate-50 transform duration-300 hover:text-verde"> 
                                Misión
                            </AccordionTrigger>
                            <AccordionContent className="p-0">
                                <div className='flex max-md:flex-col-reverse items-center justify-center p-8 filter saturate-200'>
                                    <div className='animate-fade-right animate-duration-[3000ms] md:w-1/2 flex items-center justify-center max-md:p-5 md:pl-14'>
                                        <Image src="/images/gato-vision1.webp" height={390} width={290} className='filter saturate-50 h-[390px] w-auto'/>
                                    </div>

                                    <div className='animate-fade-left animate-duration-[3000ms] md:w-1/2 flex flex-col item-center justify-center gap-5  md:pr-14'>
                                        <h2 className='text-5xl underline underline-offset-8 text-verde'>Misión</h2>
                                        <p className='text-base'>En <span className='text-verde'>Yanapata</span>, nuestra misión es promover y proteger la salud y el bienestar de los animales en compañía de sus dueños. Nos esforzamos por ofrecer atención médica de calidad, enfocándonos en un ambiente acogedor que les brinde seguridad.</p>
                                        <p className="text-base">Trabajamos incansablemente para mejorar la calidad de vida de los animales a través de un enfoque en la prevención, diagnóstico preciso y un tratamiento compasivo. De manera que, la mejora se haga notable en el cuidado de ellos.</p>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="text-black shadow-lg border-black" data-aos="fade-left"  data-aos-duration="1000">
                            <AccordionTrigger className="flex bg-slate-100 p-5 text-center text-2xl  hover:bg-slate-50 transform duration-300 hover:text-verde"> 
                                Valores
                            </AccordionTrigger>
                            <AccordionContent className="p-0 filter saturate-200">
                                <ul className="animate-fade-up animate-duration-[3000ms] max-sm:text-lg sm:text-xxl mt-5 text-black flex flex-col gap-5 p-8">
                                        <li className="flex flex-col items-center gap-x-2">
                                            <MdPets size={30}  className="text-[rgb(255,100,0)]"/> Compasión
                                            <span className='text-base text-center'>Mostramos empatía y cuidado hacia los animales en todo momento.</span>
                                        </li> 
                                        <li className="flex flex-col items-center gap-x-2">
                                            <MdPets size={30} className="text-[rgb(255,100,0)]"/> Ética
                                            <span className='text-base text-center'>Actuamos con integridad, honestidad y profesionalismo en todas las interacciones.</span>
                                        </li>
                                        <li className="flex flex-col items-center gap-x-2">
                                            <MdPets size={30} className="text-[rgb(255,100,0)]"/> Compromiso
                                            <span className='text-base text-center'> Comprometidos con el bienestar de los animales, trabajando incansablemente para lograrlo.</span>
                                        </li>
                                        <li className="flex flex-col items-center gap-x-2">
                                            <MdPets size={30} className="text-[rgb(255,100,0)]"/> Responsabilidad
                                            <span className='text-base text-center'>Promovemos la adopción y la tenencia de mascotas responsable.</span>
                                        </li>
                                        <li className="flex flex-col items-center gap-x-2">
                                            <MdPets size={30} className="text-[rgb(255,100,0)]"/> Excelencia
                                            <span className='text-base text-center'>Buscamos constantemente la mejora en la atención y el servicio al cliente.</span>
                                        </li>
                                    </ul>
                            </AccordionContent>
                        </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </section>
        </main>
        <Footer/>
    </>
  )
}

export default page