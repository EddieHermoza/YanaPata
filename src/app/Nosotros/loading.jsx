import {AiOutlineLoading} from "react-icons/ai"

function loading() {
  return (
    <section id="SectPortada" className="z-50 bg-stone-950 flex items-center justify-center w-full min-h-screen">
        <div className="text-5xl text-verde-rgb filter saturate-[3] flex flex-col gap-3 items-center justify-center">
            <AiOutlineLoading size={80} className="animate-spin animate-ease-in-out  text-verde-rgb filter saturate-[3]"/>
        </div>
    </section>
  )
}

export default loading