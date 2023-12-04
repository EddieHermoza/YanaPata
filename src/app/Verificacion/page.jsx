import Link from "next/link"
import { MdPets } from "react-icons/md"
function page() {
    return (
        <main>
            <section className="w-full min-h-screen flex items-center justify-center">
                <div className=" max-sm:p-5 sm:p-10  border-verde border-2 rounded flex flex-col items-center justify-center gap-3">
                    <h2 className="max-sm:text-xl sm:text-3xl">Tu correo ha sido verificado</h2>
                    <p className="max-sm:text-sm">Ahora puedes iniciar sesión con tu cuenta</p>
                    <Link href={"/auth/Login"} className="flex items-center justify-center px-4 py-2 rounded-full bg-verde gap-2 hover:text-white hover:shadow-verde/50 shadow-lg transform duration-300">Iniciar Sesión <MdPets/></Link>
                </div>
            </section>
        </main>
    )
}

export default page