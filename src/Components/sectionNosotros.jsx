import Image from "next/image"

export default function Nosotros() {
  return (
    <section id="Nosotros" className=" w-full flex flex-col items-center">
        <div className="flex flex-col gap-5 items-center justify-center w-full max-w-[1400px]">
            <Image src="/images/YanaPata.png" width={200} height={200} alt="Logo" className="mx-auto filter saturate-200"/>
            <div className="flex justify-center">
                <p className="sm:text-[calc(1rem+0.8vw)] text-center w-full px-[calc(10px+1vw)]">&quot;Nos dedicamos a brindar el mejor cuidado y atención para tus amigos peludos. Nuestra veterinaria es el hogar de un equipo apasionado que se preocupa por la salud y el bienestar de tus mascotas&quot;</p>
            </div>
            <div className="cursor-default grid max-md:grid-cols-1 md:grid-cols-2 items-center justify-center gap-y-10 gap-x-20 py-10">
                <div className=" h-80 w-80 border rounded-md flex flex-col shadow-xl gap-2 items-center justify-center hover:scale-110 transform duration-300 bg-white">
                    <h3 className="max-md:text-5xl transform duration-200 md:text-7xl text-black">+5 años</h3>
                    <p className="text-xl text-center">Brindando atención a sus mascotas</p>
                </div>
                <div className="h-80 w-80 rounded-md flex flex-col border shadow-xl gap-2 items-center justify-center hover:scale-110 transform duration-300 bg-white">
                    <h3 className="max-md:text-5xl transform duration-200 md:text-7xl text-black">+100</h3>
                    <p className="text-xl text-center">Con experiencia en tratamiento animal</p>
                </div>
                <div className="h-80 w-80  rounded-md flex flex-col border shadow-xl gap-2 items-center justify-center hover:scale-110 transform duration-300 bg-white">
                    <h3 className="max-md:text-5xl transform duration-200 md:text-7xl text-black">5</h3>
                    <p className="text-xl text-center">Miembros dedicados al cuidado personalizado</p>
                </div>
                <div className="h-80 w-80 rounded-md flex flex-col border shadow-xl gap-2 items-center justify-center hover:scale-110 transform duration-300 bg-white">
                    <h3 className="max-md:text-5xl transform duration-200 md:text-7xl text-black">:)</h3>
                    <p className="text-xl text-center">Rescate y adopción de animales</p>
                </div>
            </div>
        </div>
    </section>
  )
}
