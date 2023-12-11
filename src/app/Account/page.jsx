import { MdPets } from "react-icons/md";
import Link from "next/link";
function page() {

    return (
        <div className="w-full h-full bg-white p-10 flex flex-col items-start justify-center gap-10">
            <h2 className="text-5xl">Bienvenido</h2>
            <span className="text-3xl"></span>
            <p className="text-xl">¡Nos alegra verte iniciar sesión en tu cuenta! Esperamos que tengas una experiencia fantástica. Aquí puedes editar tu información, registrar a tus adoradas mascotas, revisar tus solicitudes y explorar tu historial . Si en algún momento necesitas asistencia o tienes alguna pregunta, no dudes en ponerte en contacto con nosotros </p>
            <button className="bg-verde border-verde p-2 hover:text-white shadow-lg hover:shadow-verde/50 transform duration-300">
            Envianos un Mensaje
            </button>
        </div>

    )
}

export default page