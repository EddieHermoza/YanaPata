"use client"
import { CerrarSesionAdmin } from "@/lib/auth_actions"
export default function LogOut() {
    const handleLogOut=async()=>{
        CerrarSesionAdmin()
    }
    return (
        <>
            <button className="bg-verde text-black px-4 py-2 rounded-md hover:shadow-verde/40 shadow-lg w-2/3 text-base hover:text-white trasnform duration-300" onClick={()=>{handleLogOut()}}>Cerrar Sesión</button>
        </>
    )
}
