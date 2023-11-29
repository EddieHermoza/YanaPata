"use client"
import {signOut} from "next-auth/react"
export default function LogOut() {
    return (
        <>
            <button className="bg-verde text-white px-4 py-2 rounded-md hover:shadow-verde/40 shadow-lg w-2/3 text-base hover:text-black trasnform duration-300" onClick={signOut}>Cerrar Sesión</button>
        </>
    )
}
