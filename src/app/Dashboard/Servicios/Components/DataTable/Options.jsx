"use client"
import {AiOutlineInfoCircle} from "react-icons/ai"
import {RiDeleteBin6Line} from "react-icons/ri"
import { FiEdit } from "react-icons/fi";
import { Checkbox } from "@/Components/ui/checkbox"
import {HiEllipsisHorizontal} from "react-icons/hi2"
import Link from "next/link"
import ModificarServicios from "../Forms/FormModificarServicio"
import { EstadoCambiado, ServicioEliminado } from "../../actions";
import { useState } from "react";
import { ToastAction } from "@/Components/ui/toast"
import { useToast } from "@/Components/ui/use-toast"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/Components/ui/dialog"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/Components/ui/dropdown-menu"

 
function OptionsServicio({servicio}) {
    const [open,setOpen] = useState(false)

    const handleOpenChange = (newState) => {
        setOpen(newState);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DropdownMenu>
                <DropdownMenuTrigger className="w-full border-none outline-none flex items-center justify-center">
                    <HiEllipsisHorizontal size={30} className="hover:text-verde-rgb font-extralight filter saturate-200 trasnform duration-200"/>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>
                        <DialogTrigger className="flex gap-2 items-center justify-start w-full">
                                <FiEdit size={16}/> 
                                    Editar
                        </DialogTrigger>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <button onClick={()=>ServicioEliminado(servicio)} className="flex w-full items-center justify-star gap-2">
                            <RiDeleteBin6Line size={16}/>
                            Eliminar
                        </button>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="max-[425px]:block hidden">
                        <ToogleEstado servicio={servicio} label={'Habilitado'}/>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <DialogContent>
                <DialogHeader className={''}>
                    <DialogTitle>Modificando el Servicio {servicio.id}</DialogTitle>
                    <DialogDescription>
                        Todos los campos son requeridos
                    </DialogDescription>
                    <ModificarServicios dialog={handleOpenChange} servicio={servicio}/>
                </DialogHeader>
            </DialogContent>
        </Dialog>
            
    )
}

function ToogleEstado({ label, servicio }) {
    const { toast } = useToast();

    const handleChange = async (servicio) => {
        try {
            const status = await EstadoCambiado(servicio);
            if (status.ok) {
                toast({
                    title: status.message,
                    action: <ToastAction altText="Entendido">Entendido</ToastAction>,
                });
            } else {
                toast({
                    title: status.message,
                    action: <ToastAction altText="Entendido">Entendido</ToastAction>,
                });
            }

            return status;
        } catch (error) {
            console.error('Error:', error);
            toast({
                title: 'Hubo un error al cambiar el estado',
                action: <ToastAction altText="Entendido">Entendido</ToastAction>,
            });
        }
    };

    return (
        <div className="flex items-center justify-center gap-2">
            <Checkbox
                id="estado"
                checked={servicio.estado === 'Habilitado'}
                onCheckedChange={() => handleChange(servicio)}
            />
            <label
                htmlFor="estado"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                {label}
            </label>
        </div>
    );
}


export {OptionsServicio,ToogleEstado}

