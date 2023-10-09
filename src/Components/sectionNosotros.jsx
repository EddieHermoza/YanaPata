import Image from "next/image"

export default function Nosotros() {
  return (
    <section id="Nosotros" className="">
        <div className="flex flex-col space-y-5 items-center justify-center">
            <Image src="/images/YanaPata.png" width={200} height={200} alt="Logo" className="mx-auto filter saturate-200"/>
            <div className="flex justify-center">
                <p className="text-[calc(1rem+1vw)] text-center w-full px-[calc(10px+1vw)]">&quot;Nos dedicamos a brindar el mejor cuidado y atención para tus amigos peludos. Nuestra veterinaria es el hogar de un equipo apasionado que se preocupa por la salud y el bienestar de tus mascotas&quot;</p>
            </div>
            <div className="cursor-default flex flex-wrap items-center justify-center gap-x-24 py-10">

                <div className=" h-60 w-72 flex flex-col shadow-xl gap-2 items-center justify-center hover:scale-110 transform duration-200">
                    <h3 className="text-6xl text-black">+5 años</h3>
                    <p className="text-xl text-center">Brindando atención a sus mascotas</p>
                </div>
                <div className="h-60 w-72 flex flex-col border-b-2 shadow-xl gap-2 items-center justify-center hover:scale-110 transform duration-200">
                    <h3 className="text-6xl text-black">+100</h3>
                    <p className="text-xl text-center">Con experiencia en tratamiento animal</p>
                </div>
                <div className=" h-60 w-72 flex flex-col border-b-2 shadow-xl gap-2 items-center justify-center hover:scale-110 transform duration-200">
                    <h3 className="text-6xl text-black">5</h3>
                    <p className="text-xl text-center">Miembros dedicados al cuidado personalizado</p>
                </div>
                <div className=" h-60 w-72 flex flex-col border-b-2 shadow-xl gap-2 items-center justify-center hover:scale-110 transform duration-200">
                    <h3 className="text-6xl text-black">:)</h3>
                    <p className="text-xl text-center">Rescate y adopción de animales</p>
                </div>
            </div>
        </div>
    </section>
  )
}
