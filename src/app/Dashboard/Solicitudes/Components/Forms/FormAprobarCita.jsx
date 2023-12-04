"use client"
import { IoMdCheckmark  } from "react-icons/io";

import { AprobarCita } from "../../actions";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/Components/ui/dialog"

import { useState } from "react";


function FormAprobarCita({id}) {
    const[open,setOpen]=useState(false)

    const handleConfirm= async (id) => {
        const res = await AprobarCita(id)
        if (res.ok) {
            setOpen(false)
        }
    }
    return (
    <Dialog open={open} onOpenChange={setOpen} >
        <DialogTrigger className="transition-all bg-green-400 px-3 py-2 rounded-md hover:shadow-green-400/50 hover:shadow-lg" aria-label="Confirmar" title="Confirmar">
            <IoMdCheckmark size={18}/>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>¿ Seguro que desea confirmar la Cita {id} ?</DialogTitle>
            </DialogHeader>
            <div className="">
                <button className=" flex items-center gap-2 border-2 px-4 py-1 rounded-full border-black hover:border-verde transform duration-300 " aria-label="Confirmar" title="Confirmar" onClick={()=>handleConfirm(id)}>
                    <IoMdCheckmark />
                    Confirmar 
                </button>
            </div>
        </DialogContent>
    </Dialog>
    )
}

export default FormAprobarCita