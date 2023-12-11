"use client"
import {AiOutlineInfoCircle} from "react-icons/ai"

import {HiEllipsisHorizontal} from "react-icons/hi2"
import Link from "next/link"


import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/Components/ui/dropdown-menu"
 
function OptionsMascota({mascota}) {

    return (
            <DropdownMenu>
                <DropdownMenuTrigger className="w-full border-none outline-none flex items-center justify-center">
                    <HiEllipsisHorizontal size={30} className="hover:text-verde-rgb font-extralight filter saturate-200 trasnform duration-200"/>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem className="w-full">
                        <Link href={`/Dashboard/Mascotas/${mascota.id}`} className="flex w-full items-center justify-start gap-2">
                            <AiOutlineInfoCircle size={16}/> 
                            Información
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
    )
}



export default OptionsMascota

