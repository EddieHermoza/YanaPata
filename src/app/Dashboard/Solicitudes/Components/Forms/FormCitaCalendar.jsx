"use client"
import { IoMdCheckmark  } from "react-icons/io";
import { MdOutlineClose  } from "react-icons/md"
import { ComenzarCita,CancelarCita, TerminarCita } from "../../actions";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/Components/ui/dialog"

import { useState } from "react";


function FormCitaCalendar({event}) {
    const info = event.event._def.extendedProps
    const[open,setOpen]=useState(false)

    const handleInit= async (id) => {
        const res = await ComenzarCita(id)
        if (res.ok) {
            setOpen(false)
        }
    }
    const handleCancel= async (id) => {
        const res = await CancelarCita(id)
        if (res.ok) {
            setOpen(false)
        }
    }

    const handleEnd = async (id) =>{
        const res = await TerminarCita(id)
        if (res.ok) {
            setOpen(false)
        }
    }
    return (
    <Dialog open={open} onOpenChange={setOpen} >
        <DialogTrigger className={`flex text-black gap-1 items-center cursor-pointer relative h-auto overflow-hidden text-xs ${
            info.estado === "CANCELADA"
                ? 'bg-red-500 text-white hover:shadow-red-500/50'
            : info.estado === "EN CURSO"
                ? 'bg-verde hover:shadow-verde/50'
            : 'bg-yellow-400'
        } group hover:text-white shadow-lg transform duration-300 p-1 w-full`}>
        <span className=''>{event.timeText}:</span>
        <p className='text-wrap'>{event.event._def.title}</p>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                {info.estado !== "CANCELADA" && (
                    <>
                        <DialogTitle>¿ Que desea hacer con la cita {event.event._def.publicId} ?</DialogTitle>
                        <DialogDescription className="flex text-sm">
                            <p className='text-wrap'>{event.event._def.title} y {info.nombreCliente}</p>
                        </DialogDescription>
                    </>         
                )}
                {info.estado === "CANCELADA" && (
                    <>
                        <DialogTitle>La cita {event.event._def.publicId} ha sido cancelada</DialogTitle>
                        <DialogDescription className="flex text-sm">
                            <p className='text-wrap'>{event.event._def.title} y {info.nombreCliente}</p>
                        </DialogDescription>
                    </>         
                )}
            </DialogHeader>
            <div className="w-full flex justify-around gap-5 items-center">

                {info.estado === "APROBADA" && (
                    <>
                        <button className=" flex justify-center items-center bg-verde text-black hover:text-white gap-2 px-4 py-2 rounded-full shadow-lg hover:shadow-verde/50 transform duration-300 "  onClick={()=>handleInit(event.event._def.publicId)}>
                            <IoMdCheckmark />
                            Iniciar Cita 
                        </button>
                        <button  className=" flex justify-center items-center bg-red-500 text-black hover:text-white gap-2 px-4 py-2 rounded-full shadow-lg hover:shadow-red-500/50 transform duration-300 "  onClick={()=>handleCancel(event.event._def.publicId)}>
                            <MdOutlineClose />
                            Cancelar Cita 
                        </button>
                    </>         
                )}

                {info.estado ==="EN CURSO" && (
                    <>
                        <button className=" flex justify-center items-center bg-green-400 text-black hover:text-white gap-2 px-4 py-2 rounded-full shadow-lg hover:shadow-green-400/50 transform duration-300 "  onClick={()=>handleEnd(event.event._def.publicId)}>
                            <IoMdCheckmark />
                            Terminar Cita 
                        </button>
                        <button  className=" flex justify-center items-center bg-red-500 text-black hover:text-white gap-2 px-4 py-2 rounded-full shadow-lg hover:shadow-red-500/50 transform duration-300 "  onClick={()=>handleCancel(event.event._def.publicId)}>
                            <MdOutlineClose />
                            Cancelar Cita 
                        </button>                    
                    </>
                )}

            </div>
        </DialogContent>
    </Dialog>
    )
}

export default FormCitaCalendar