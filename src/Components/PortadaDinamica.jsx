import Image from "next/image"
import NavRouter from "./NavRouter"


function PortadaDinamica({imgURL,Titulo,Descripcion}) {
  return (
    <>
        <div className="inset-0 h-full w-full fixed  -z-10 ">
            <Image src={imgURL} width={1920} height={1080} alt={imgURL} className="animar-zoom h-full brightness-50 -z-50 absolute object-cover object-center"/>
            <div className="absolute  h-full max-w-full top-[30%] z-50 space-y-3 p-5 ">
                <h2 className="text-white max-sm:text-3xl text-5xl lg:text-6xl xl:text-7xl text-center text-shadow-lg shadow-black animate-fade-down animate-duration-[3000ms]">{Titulo}</h2>
                <p className="text-white max-sm:text-base text-shadow-lg shadow-black max-md:text-xl md:text-2xl xl:text-4xl text-center animate-fade-up animate-duration-[3000ms]">« {Descripcion} »</p>
            </div>
        </div>
        <section className="relative h-[calc(100vh-200px)] " id="SectPortada">
        <div className="absolute bottom-0 left-0 w-full flex items-center justify-center h-[60px]">
          <NavRouter/>
        </div>
        </section>
        <div className="bg-white" id="DivPortada">
            <Image src="/images/YanaPata.png" width={200} height={200} alt="Logo" className="mx-auto filter saturate-200"/>
        </div>
    </>
  )
}

export default PortadaDinamica
