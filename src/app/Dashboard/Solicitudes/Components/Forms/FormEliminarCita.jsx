"use client"

import { FaTrashAlt } from "react-icons/fa";
import { ToastAction } from "@/Components/ui/toast"
import { useToast } from "@/Components/ui/use-toast"
import {  EliminarCita } from "../../actions";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/Components/ui/dialog"

import { useState } from "react";



function FormEliminarCita({id}) {
    const { toast } = useToast()
    const[open,setOpen]=useState(false)
    
    const handleReject= async (id) => {
        const res = await EliminarCita(id)
        if (res.ok) {
            setOpen(false)
            toast({
                title: "",
                description: res.message,
                action: (
                  <ToastAction altText="Entendido">Entendido</ToastAction>
            )})
        }
        
    }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className="transition-all px-3 py-2 bg-red-500 text-white rounded-md hover:shadow-red-500/50 shadow-lg"  aria-label="Eliminar" title="Eliminar">
            <FaTrashAlt size={18}/>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>¿ Seguro que desea Eliminar la Cita {id} ?</DialogTitle>
            </DialogHeader>
            <DialogDescription>
                Esta acción es permanente
            </DialogDescription>
            <div className="">
                <button className=" flex items-center gap-2 px-4 py-1 text-white rounded-full bg-red-500 shadow-lg hover:shadow-red-500/50 transform duration-300" aria-label="Eliminar" title="Eliminar" onClick={()=>handleReject(id)}>
                    <FaTrashAlt size={18}/>
                    Eliminar
                </button>
            </div>
        </DialogContent>
    </Dialog>
  )
}

export default FormEliminarCita