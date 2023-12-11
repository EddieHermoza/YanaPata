"use client"
import { MdDelete } from "react-icons/md";
import { MascotaEliminada } from "../../Mascotas/actions";
import { ToastAction } from "@/Components/ui/toast"
import { useToast } from "@/Components/ui/use-toast"
export default function FormEliminarMascota({mascota}) {
    const {toast} = useToast()
    const handleDelete = async()=>{
        const res =  await MascotaEliminada(mascota.id)
        if (res.ok) {
            toast({
                title: res.message,
                description: "",
                action: (
                  <ToastAction altText="Entendido">Entendido</ToastAction>
            )})
        }
    }
  return (
    <>
        <button className="bg-red-500 shadow-lg text-white  hover:text-white hover:shadow-red-500/50 transform duration-300  rounded px-4 py-2" onClick={()=>handleDelete()}>
            <MdDelete/>
        </button>
    </>
  )
}
