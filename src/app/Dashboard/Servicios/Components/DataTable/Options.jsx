"use client"
import {AiOutlineInfoCircle} from "react-icons/ai"
import {RiDeleteBin6Line} from "react-icons/ri"
import { FiEdit } from "react-icons/fi";
import { Checkbox } from "@/components/ui/checkbox"
import { useRouter } from "next/navigation"
import {HiEllipsisHorizontal} from "react-icons/hi2"
import Link from "next/link"
import { useEffect,useState } from "react"
import ModificarServicios from "../Forms/FormModificarServicio"
import { EstadoCambiado, ServicioEliminado } from "../../actions";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
 
function OptionsServicio({id,estado,servicio}) {
    const router=useRouter();

    async function Eliminar(id){
        const data={
            message:"Eliminar",
            id:id
        }
        const rspt = await fetch('/api/ctrlClientes',{
            method:'POST',
            body:JSON.stringify(data),
            headers: {
                'Content-Type':'application/json'
            }
        });
    
        if (rspt.ok) { 
            router.refresh()
        } else {
            console.error('Error al Eliminar');
        }
    }


    return (
        <Dialog>
            <DropdownMenu>
                <DropdownMenuTrigger className="w-full border-none outline-none flex items-center justify-center">
                    <HiEllipsisHorizontal size={30} className="hover:text-verde-rgb font-extralight filter saturate-200 trasnform duration-200"/>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>
                        <Link href={`/Dashboard/Servicios/${servicio.id}`} className="flex w-full items-center justify-start gap-2">
                            <AiOutlineInfoCircle size={16}/> 
                            Información
                        </Link>
                    </DropdownMenuItem>
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
                    <ModificarServicios id={id} servicio={servicio}/>
                </DialogHeader>
            </DialogContent>
        </Dialog>
            
    )
}

function ToogleEstado({label, servicio}){

    return(
        <div className="flex items-center justify-center gap-2">
            <Checkbox id="estado" checked={servicio.estado==='Habilitado'} onCheckedChange={() => EstadoCambiado(servicio) ? 'Deshabilitado' : 'Habilitado'}/>
                <label
                    htmlFor="estado"
                     className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                {label}
            </label>
      </div>
    )

}

export {OptionsServicio,ToogleEstado}

