
import { getUserSession } from "@/lib/auth_actions";
import { getRol } from "@/lib/actions";
import { getInfoCliente } from "@/lib/actions";
import FormModificarNombre from "./Components/FormModificarNombre";
import FormModificarApellidos from "./Components/FormModificarApellidos";
import FormModificarTelefono from "./Components/FormModificarTelefono";
export default async function page() {
    const UserSession = await getUserSession();

    if (UserSession.data.session !==null && UserSession.data.session !== undefined) {
        const rol = await getRol(UserSession.data.session.user.email)
        if(rol.ok){
            if (rol.rol !== "cliente") {
                redirect("/")
            }
        } else {
            redirect("/")
        }
    } else {
        redirect("/")
    }
    
    const cliente = await getInfoCliente(UserSession.data.session.user.email)
    return (
        <div className="w-full h-full flex flex-col gap-5 bg-white p-5 overflow-y-auto scrollbar-thin relative">
            <h2 className="text-3xl">Información de Cuenta</h2>
            <div className="max-sm:flex-col max-sm:text-sm flex justify-between w-full gap-2">
                <span className="text-gray-400">Fecha de Creacion: <span className="text-black">{cliente.creacion.toISOString().split("T")[0]}</span></span>
                <span className="text-gray-400">Ultima Modificación: <span className="text-black">{cliente.modificacion.toISOString().split("T")[0]}</span></span>
            </div>
            <div className="flex flex-col h-full gap-10 relative">
                <h3 className="text-2xl">Datos Personales:</h3>
                <div className="flex flex-col gap-2 w-full border rounded-lg p-3 relative">
                    <span className="text-verde">Nombres:</span>
                    <span className="text-xs text-gray-400">Saber tus nombres nos ayuda a identificarte de mejor manera</span>
                    <FormModificarNombre nombre={cliente.nombres} cliente={cliente.id}/>
                </div>
                <div className="flex flex-col gap-3 w-full rounded-lg border p-3 relative">
                    <span className="text-verde">Apellidos:</span>
                    <span className="text-gray-400 text-xs">Tan importante como tus nombres</span>
                    <FormModificarApellidos apellidos={cliente.apellidos} cliente={cliente.id}/>
                </div>
                <div className="flex flex-col gap-3 w-full border p-3 rounded-lg relative">
                    <span className="text-verde">Número Telefónico</span>
                    <span className="text-gray-400 text-xs">Nuestra forma principal de contactarte</span>
                    <FormModificarTelefono telefono={cliente.cliente.telefono} cliente={cliente.id}/>
                </div>
                <div className="flex flex-col gap-3 w-full border p-3 rounded-lg relative">
                    <span className="text-verde">Correo Electrónico:</span>
                    <span className="text-xs text-gray-400">Nuestro método de verificarte y una forma de contactarte</span>
                    <p>{cliente.email}</p>
                </div>
            </div>
            <div className="max-sm:items-center flex flex-col gap-5 text-sm">
                <button className="transform duration-300 text-white border border-green-300 bg-green-300 hover:bg-green-400 shadow-lg hover:shadow-green-400/50 w-[300px] p-3">Cambiar Correo</button>
                <button className="transform duration-300 text-white border border-yellow-300 bg-yellow-300 hover:bg-yellow-400 shadow-lg hover:shadow-yellow-400/50 w-[300px] p-3">Cambiar Contraseña</button>
                <button className="transform duration-300 text-white border border-red-400 bg-red-400 hover:bg-red-500 shadow-lg hover:shadow-red-500/50 w-[300px] p-3">Eliminar Cuenta</button>
            </div>

        </div>
    )
}
