import FormContacto from "./Forms/FormContacto";
import Image from "next/image";

export default function Contacto() {
  return (
    <section id="Contacto" className="py-[100px]">
        <div className="relative flex flex-col space-y-4 items-center justify-center p-5 mb-6">
            <h2 className="text-5xl text-verde">Contáctanos</h2>
            <p className="max-sm:text-base text-xl text-center">&quot;Si desea más información. Comuníquese con nosotros usando el formulario, redes sociales o visitando nuestro local&quot;</p>
        </div>
        <div className="mb-6">
        </div>
        <div className="conatiner grid md:grid-cols-2 max-md:px-4 lg:px-8">
            <div className="flex flex-col items-center justify-center p-2">
                <Image
                className="hidden md:block filter saturate-200 shadow-2xl "
                src="/images/YanaPata.png"
                alt='Yanapata Logo'
                width={400}
                height={400}
                priority={true}
                />
            </div>
            <div className="flex flex-col justify-center items-center">
                <FormContacto/>
            </div>
        </div>
    </section>
  )
}
