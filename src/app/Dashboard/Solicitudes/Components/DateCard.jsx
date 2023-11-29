"use client"
import { IoMdCheckmark,IoMdInformationCircleOutline  } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { MdOutlineClose,MdEmail  } from "react-icons/md"
import { FaPhone } from "react-icons/fa6";
import { differenceInDays, differenceInHours } from 'date-fns';
import { AprobarCita, RechazarCita } from "../actions";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/Components/ui/dialog"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/Components/ui/accordion"
import ModificarCita from "./Forms/FormModificarCita";



async function DateCard({data}) {
    const fechaActual = new Date();

    const fechaCreacion = new Date(data.creacion); 

    const diasTranscurridos = differenceInDays(fechaActual, fechaCreacion);
    const horasRestantes = differenceInHours(fechaActual, fechaCreacion) % 24;

    let tiempoTranscurrido = '';
    if (diasTranscurridos > 0) {
        tiempoTranscurrido += `hace ${diasTranscurridos} día${diasTranscurridos > 1 ? 's' : ''}`;
        if (horasRestantes > 0) {
            tiempoTranscurrido += ` ${horasRestantes} hora${horasRestantes > 1 ? 's' : ''}`;
        }
    } else {
        tiempoTranscurrido += `hace ${horasRestantes} hora${horasRestantes > 1 ? 's' : ''}`;
    }
    return (
    <div className="border h-72 relative p-4 flex flex-col justify-between gap-2 shadow-lg hover:shadow-2xl rounded-lg bg-white transition-all duration-300">
        <div className="flex justify-between items-center">
            <h3 className="text-xl">{data.servicio.nombre}</h3>
            <span className="text-xs text-gray-400">{tiempoTranscurrido}</span>
        </div>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1" className="text-black  border-b border-black">
                    <AccordionTrigger className="flex py-2"> 
                        Dueño: 
                        <span className="max-sm:text-xs text-sm max-[420px]:max-w-[120px] truncate">{data.ClienteInfo.nombre +" "+ data.ClienteInfo.apellidos }</span>
                    </AccordionTrigger>
                    <AccordionContent className="p-0">
                        <div className="max-sm:text-xs flex max-sm:flex-col max-sm:gap-1 justify-between px-2 pb-2">
                            <span className="flex gap-2 items-center"><MdEmail className="text-verde"/> {data.ClienteInfo.correo}</span>
                            <span className="flex gap-2 items-center"><FaPhone className="text-verde"/> {data.ClienteInfo.telefono}</span>
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="text-black  border-b border-black">
                    <AccordionTrigger className="flex py-2"> 
                        Mascota:
                        <span className="max-sm:text-xs text-sm max-w-[200px] truncate">{data.MascotaInfo.nombre}</span>
                    </AccordionTrigger>
                    <AccordionContent className="p-0">
                        <div className="max-sm:text-xs relative flex justify-between p-2 text-black">
                            <span>{data.MascotaInfo.tipo}</span>
                            <span>{data.MascotaInfo.sexo}</span>
                            <span>{data.MascotaInfo.raza}</span>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <div className="flex justify-between items-center">
                <span className="max-[400px]:text-xs text-sm">Para el <strong className="text-verde-rgb filter saturate-200">{data.fechaSolicitud}</strong> a las <strong className="text-verde-rgb filter saturate-200">{data.horaSolicitud}</strong></span>
                <span className="text-yellow-400">{data.estado}</span>
            </div>
            <div className="flex gap-3 w-full ">
                <Dialog>
                    <DialogTrigger  title="Información"  className="bg-slate-200 px-3 py-2 rounded-md hover:shadow-xl transition-all">
                        <IoMdInformationCircleOutline size={18} />
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Información de la cita {data.id}</DialogTitle>
                            <DialogDescription>
                                <span className="max-[400px]:text-xs text-sm">Solicitada para el <strong className="text-verde-rgb filter saturate-200">{data.fechaSolicitud}</strong> a las <strong className="text-verde-rgb filter saturate-200">{data.horaSolicitud}</strong></span>
                            </DialogDescription>
                        </DialogHeader>
                        <div className="flex flex-col gap-3">
                            <span className="text-xl text-black">Servicio Solicitado: <span className="text-verde-rgb filter saturate-200">{data.servicio.nombre}</span></span>
                            <div className="flex flex-col gap-2 text-sm text-slate-600">
                                <span className="text-xl text-black">Información del Cliente:</span>
                                <span>Nombres: <span className="text-verde-rgb filter saturate-200">{data.ClienteInfo.nombre}</span></span>
                                <span>Apellidos: <span className="text-verde-rgb filter saturate-200">{data.ClienteInfo.apellidos}</span></span>
                                <span>Correo: <span className="text-verde-rgb filter saturate-200">{data.ClienteInfo.correo}</span></span>
                                <span>Número Telefonico: <span className="text-verde-rgb filter saturate-200">{data.ClienteInfo.telefono}</span></span>
                            </div>
                            <div className="flex flex-col gap-2 text-sm text-slate-600">
                                <span className="text-xl text-black">Información de la Mascota:</span>
                                <span>Nombre: <span className="text-verde-rgb filter saturate-200" >{data.MascotaInfo.nombre}</span></span>
                                <span>Tipo: <span className="text-verde-rgb filter saturate-200">{data.MascotaInfo.tipo}</span></span>
                                <span>Raza: <span className="text-verde-rgb filter saturate-200">{data.MascotaInfo.raza}</span></span>
                                <span>Sexo: <span className="text-verde-rgb filter saturate-200">{data.MascotaInfo.sexo}</span></span>
                            </div>
                            <div>
                                <textarea name="" id="" cols="30" rows="6" readOnly className="text-black outline-none border rounded-md w-full p-2">
                                    {data.asunto}
                                </textarea>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
                <button className="transition-all bg-green-400 px-3 py-2 rounded-md hover:shadow-green-400/50 hover:shadow-lg" aria-label="Confirmar" title="Confirmar" onClick={()=>AprobarCita(data.id)}> 
                    <IoMdCheckmark size={18}/>
                </button>
                <button className="transition-all px-3 py-2 bg-red-500 text-white rounded-md hover:shadow-red-500/50 shadow-lg" aria-label="Rechazar" title="Rechazar" onClick={()=>RechazarCita(data.id)}>
                    <MdOutlineClose size={18}/>
                </button>
                <Dialog>
                    <DialogTrigger className="transition-all px-3 py-2 bg-yellow-300 rounded-md hover:shadow-yellow-300/50 shadow-lg" aria-label="Editar" title="Editar">
                        <FiEdit size={18}/>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Modificando la Cita {data.id}</DialogTitle>
                            <DialogDescription>
                                Todos Los campos son necesarios
                            </DialogDescription>
                        </DialogHeader>
                        <div className="px-2 h-[600px] relative overflow-y-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-cyan-400">
                        <ModificarCita cita={data}/>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}

export default DateCard