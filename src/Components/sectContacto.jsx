import FormContacto from "./Forms/FormContacto";
import Image from "next/image";

export default function Contacto() {
  return (
    <section id="Contacto" className="py-[100px] w-full flex flex-col items-center">
        <div className="w-full max-w-[1400px] relative flex flex-col gap-10">
            <div className="relative flex flex-col space-y-4 items-center justify-center py-5 px-10 w-full">
                <h2 className="text-5xl text-verde">Contáctanos</h2>
                <p className="max-sm:text-base max-md:text-lg text-xl text-center">&quot;Si desea más información. Comuníquese con nosotros usando el formulario, redes sociales o visitando nuestro local&quot;</p>
            </div>
            <div className="flex max-md:flex-col-reverse justify-center gap-5 w-full p-5">
                <div className="flex flex-col items-center justify-center p-2  max-md:w-full md:w-1/2">
                    <Image
                    className="filter saturate-200 shadow-2xl max-md:h-60 max-md:w-60"
                    src="/images/YanaPata.png"
                    alt='Yanapata Logo'
                    width={400}
                    height={400}
                    priority={true}
                    />
                </div>
                <div className="flex flex-col justify-center items-center max-md:w-full md:w-1/2">
                    <FormContacto/>
                </div>
            </div>
        </div>
    </section>
  )
}
