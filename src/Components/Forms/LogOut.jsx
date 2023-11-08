"use client"
import {signOut} from "next-auth/react"
export default function LogOut() {
    return (
        <>
            <button className="bg-verde-rgb text-white saturate-200 p-2 rounded-bl-lg rounded-tr-lg hover:saturate-[3] hover:shadow-black shadow-md filter w-2/3 text-base hover:text-black trasnform duration-300" onClick={signOut}>Cerrar Sesión</button>
        </>
    )
}
