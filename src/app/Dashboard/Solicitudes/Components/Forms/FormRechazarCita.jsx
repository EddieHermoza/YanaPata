"use client"

import { MdOutlineClose  } from "react-icons/md"
import {  RechazarCita } from "../../actions";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/Components/ui/dialog"

import { useState } from "react";



function FormRechazarCita({id}) {
    const[open,setOpen]=useState(false)
    
    const handleReject= async (id) => {
        const res = await RechazarCita(id)
        if (res.ok) {
            setOpen(false)
        }
        
    }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className="transition-all px-3 py-2 bg-red-500 text-white rounded-md hover:shadow-red-500/50 shadow-lg"  aria-label="Rechazar" title="Rechazar">
            <MdOutlineClose size={18}/>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>¿ Seguro que desea rechazar la Cita {id} ?</DialogTitle>
            </DialogHeader>
            <div className="">
                <button className=" flex items-center gap-2 border-2 px-4 py-1 rounded-full border-black hover:border-red-500 transform duration-300" aria-label="Rechazar" title="Rechazar" onClick={()=>handleReject(id)}>
                    <MdOutlineClose size={18}/>
                    Rechazar
                </button>
            </div>
        </DialogContent>
    </Dialog>
  )
}

export default FormRechazarCita