"use client"

import { CerrarSesion } from "@/lib/auth_actions"

export default function LogOutbtn() {
    const handleLogOut=async ()=>{
       const res= await CerrarSesion()
    }
  return (
    <button className="hover:bg-verde hover:border-verde hover:text-white border-2 shadow-lg hover:shadow-verde/40 border-black p-2 w-4/5 transform duration-300" onClick={()=>handleLogOut()}>
        Cerrar Sesion
    </button>
  )
}
