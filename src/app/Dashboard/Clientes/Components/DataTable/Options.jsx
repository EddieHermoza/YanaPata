"use client"
import {AiOutlineInfoCircle} from "react-icons/ai"
import {RiDeleteBin6Line} from "react-icons/ri"
import { Checkbox } from "@/Components/ui/checkbox"

import {HiEllipsisHorizontal} from "react-icons/hi2"
import Link from "next/link"
import { EstadoCambiado,ClienteEliminado } from "../../actions"


import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/Components/ui/dropdown-menu"
 
function OptionsCliente({cliente}) {



    return (
            <DropdownMenu>
                <DropdownMenuTrigger className="w-full border-none outline-none flex items-center justify-center">
                    <HiEllipsisHorizontal size={30} className="hover:text-verde-rgb font-extralight filter saturate-200 trasnform duration-200"/>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem className="w-full">
                        <Link href={`/Dashboard/Clientes/${cliente.id}`} className="flex w-full items-center justify-start gap-2">
                            <AiOutlineInfoCircle size={16}/> 
                            Información
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="w-full">
                        <button onClick={()=>ClienteEliminado(cliente)} className="flex w-full items-center justify-start gap-2">
                            <RiDeleteBin6Line size={16}/>
                            Eliminar
                        </button>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="max-[425px]:block hidden">
                        <ToogleEstado cliente={cliente} label={'Habilitado'}/>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
    )
}

function ToogleEstado({cliente,label}){
    return(
        <div className="flex items-center justify-center gap-2">
            <Checkbox id="estado" checked={cliente.estado === 'Habilitado'} onCheckedChange={() => EstadoCambiado(cliente) ? 'Deshabilitado' : 'Habilitado'}/>
                <label
                    htmlFor="estado"
                     className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                {label}
            </label>
      </div>
    )

}

export {OptionsCliente,ToogleEstado}

