import {AiOutlineLoading} from "react-icons/ai"

function loading() {
  return (
    <section className="z-50 bg-white flex items-center justify-center w-full min-h-screen">
        <div className="text-5xl text-black flex flex-col gap-3 items-center justify-center">
            <h2>Cargando...</h2>
            <AiOutlineLoading size={80} className="animate-spin animate-ease-in-out  text-verde-rgb filter saturate-[3]"/>
        </div>
    </section>
  )
}

export default loading