import { MdPets } from "react-icons/md";
import { FaDog } from "react-icons/fa";
import { FaCat } from "react-icons/fa";
import { getCantidadGatos,getCantidadPerros,getCantidadMascotas } from "../actions"
async function HeaderCards({id}) {

    const cantidadPerros = await getCantidadPerros(id)
    const cantidadMascotas = await getCantidadMascotas(id)
    const cantidadGatos = await getCantidadGatos(id)
    return (
        <>
                    <div className="flex max-w-[400px] flex-col justify-evenly p-2 transform duration-300 w-full h-28 bg-white border-2 hover:scale-105 border-verde-rgb rounded-lg shadow-lg">
                        <span className=""># Mascotas Registradas</span>
                        <span className="text-4xl flex gap-3"><MdPets />{cantidadMascotas}</span>
                    </div>           
                    <div className="flex flex-col max-w-[400px] justify-evenly p-2 transform duration-300 w-full h-28 bg-white border-2 hover:scale-105 border-verde-rgb rounded-lg shadow-lg">
                        <span className=""># Perros Registrados</span>
                        <span className="text-4xl flex gap-3"><FaDog />{cantidadPerros}</span>
                    </div>   
                    <div className="flex flex-col max-w-[400px] justify-evenly p-2 transform duration-300 w-full h-28 bg-white border-2 hover:scale-105 border-verde-rgb rounded-lg shadow-lg">
                        <span className=""># Gatos Registrados</span>
                        <span className="text-4xl flex gap-3"><FaCat />{cantidadGatos}</span>
                    </div>         
        </>
    )
}

export default HeaderCards