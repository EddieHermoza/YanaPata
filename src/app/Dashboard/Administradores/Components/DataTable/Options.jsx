"use client"
import {AiOutlineInfoCircle} from "react-icons/ai"
import {RiDeleteBin6Line} from "react-icons/ri"
import { FiEdit } from "react-icons/fi";
import { Checkbox } from "@/components/ui/checkbox"
import {HiEllipsisHorizontal} from "react-icons/hi2"
import Link from "next/link"
import ModificarAdmin from "../Forms/FormModificarAdmin";
import { AdminEliminado,EstadoCambiado } from "../../actions";

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
 
function OptionsAdmin({id,admin}) {

    return (
        <Dialog>
            <DropdownMenu>
                <DropdownMenuTrigger className="w-full border-none outline-none flex items-center justify-center">
                    <HiEllipsisHorizontal size={30} className="hover:text-verde-rgb font-extralight filter saturate-200 trasnform duration-200"/>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>
                        <Link href={`/Dashboard/Administradores/${admin.id}`} className="flex w-full items-center justify-start gap-2">
                            <AiOutlineInfoCircle size={16}/> 
                            Información
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <DialogTrigger className="w-full">
                            <button className="flex gap-2 items-center justify-start w-full">
                                <FiEdit size={16}/> 
                                    Editar
                            </button>
                        </DialogTrigger>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <button onClick={()=>AdminEliminado(admin)} className="flex w-full items-center justify-star gap-2">
                            <RiDeleteBin6Line size={16}/>
                            Eliminar
                        </button>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="max-[425px]:block hidden">
                        <ToogleEstado  admin={admin} label={'Habilitado'}/>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Modificando el Administrador {admin.id}</DialogTitle>
                    <DialogDescription>
                        Todos los campos son requeridos
                    </DialogDescription>
                    <ModificarAdmin id={id} admin={admin}/>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

function ToogleEstado({label, admin}){

    return(
        <div className="flex items-center justify-center gap-2">
            <Checkbox id="estado" checked={admin.estado === 'Habilitado'} onCheckedChange={() => EstadoCambiado(admin) ? 'Deshabilitado' : 'Habilitado'}/>
                <label
                    htmlFor="estado"
                     className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                {label}
            </label>
      </div>
    )

}

export {OptionsAdmin,ToogleEstado}

