"use client"
import { FaDog } from "react-icons/fa";
import { FaCat } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MascotaEliminada } from "../actions";
import { ToastAction } from "@/Components/ui/toast"
import { useToast } from "@/Components/ui/use-toast"

export default function CardMascota({mascota}) {
    const {toast} = useToast
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
    <div className="bg-white w-full flex flex-col justify-between p-2 h-32 rounded-lg shadow-lg" >
        <div className="flex gap-5 items-center">
            {mascota.tipo =="Felino"? (
                <FaCat size={40}/>
            ):(
                <FaDog size={40}/>
            )}
            <span className="text-lg">{mascota.nombre}</span>  
        </div>
        <div className="flex justify-between items-center">
            <span className="text-verde">{mascota.tipo}</span>
            <span className="text-verde">{mascota.sexo}</span>
            <button className="bg-red-500 shadow-lg text-white  hover:text-white hover:shadow-red-500/50 transform duration-300  rounded px-4 py-2" onClick={()=>handleDelete()}>
                <MdDelete/>
            </button>
        </div>
    </div>
  )
}
