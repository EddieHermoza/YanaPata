import { MdPets } from "react-icons/md";
import Link from "next/link";
import { getRol } from "@/lib/actions";
import { getUserSession } from "@/lib/auth_actions";
import { getInfoCliente } from "@/lib/actions";
import FormEnviarMensaje from "./Informacion/Components/FormEnviarMensaje";
async function page() {
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
        <div className="w-full h-full bg-white p-10 flex flex-col items-start justify-center gap-10">
            <h2 className="text-5xl animate-fade-right animate-duration-1000 animate-ease-in-out">Bienvenido</h2>
            <span className="text-3xl animate-fade-right animate-duration-1000 animate-ease-in-out">{cliente.nombres+" "+cliente.apellidos}</span>
            <p className="text-xl animate-fade-right animate-duration-1000 animate-ease-in-out">¡Nos alegra verte iniciar sesión en tu cuenta! Esperamos que tengas una experiencia fantástica. Aquí puedes editar tu información, registrar a tus adoradas mascotas, revisar tus solicitudes y explorar tu historial . Si en algún momento necesitas asistencia o tienes alguna pregunta, no dudes en ponerte en contacto con nosotros </p>
            <FormEnviarMensaje cliente={cliente}/>
        </div>

    )
}

export default page