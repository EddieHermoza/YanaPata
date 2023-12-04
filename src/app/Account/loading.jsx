import {AiOutlineLoading} from "react-icons/ai"

function loading() {
  return (
    <div className="h-full w-full flex items-center justify-center bg-white">
        <div className=" text-verde flex flex-col gap-3 items-center justify-center">
            <span className="text-black text-xl">Cargando Información...</span>
            <AiOutlineLoading size={80} className="animate-spin animate-ease-in-out "/>
        </div>
    </div>
  )
}

export default loading