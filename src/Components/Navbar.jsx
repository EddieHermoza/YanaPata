"use client"
import Link from 'next/link'
import {BiUser} from 'react-icons/bi'
import {CgMenuRight} from "react-icons/cg" 
import {useState } from 'react';
import { usePathname } from 'next/navigation';

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/Components/ui/sheet"
  
  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/Components/ui/accordion"

  import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
  } from "@/Components/ui/menubar"
 

export default function Navbar() {
    const pathname=usePathname()
    const [ActiveLink, setActiveLink]=useState(pathname)



    const handleSetActiveLink = (link) => {
        setActiveLink(link);
    };


    const links = [
        { href: '/', label: 'Inicio' },
        { href: '/Nosotros', label: 'Nosotros' },
        { href: '/Servicios', label: 'Servicios' },
        { href: '/Solicitud', label: 'Solicitar cita' }
    ];

    if (pathname.startsWith('/Dashboard')) {
        return null; 
    }

    return (
        <header className=''>
            <nav id='Navbar' className={`bg-black/70 text-white backdrop-blur-sm fixed z-50 w-full flex items-center justify-between p-5 h-[60px] transform duration-300 `}>
                <div className="flex items-center space-x-5">
                    <h1 className='text-4xl filter saturate-[3] text-verde-rgb'>YanaPata</h1>
                    <ul className="hidden space-x-7 items-center md:flex text-xl ">
                    {links.map((link, index) => (
                        <li key={index} className="border-x px-2">
                            <Link onClick={() => handleSetActiveLink(link.href)} href={link.href} className={`relative filter saturate-200 hover:text-verde transform duration-200 group ${ActiveLink == link.href ?'text-verde':''}`}>
                                {link.label}
                                <span className={`animation-underline bg-verde ${ActiveLink == link.href ? 'scale-x-100':''}`}></span>
                            </Link>
                        </li>
                    ))}
                    </ul>
                </div>

                <Menubar className="max-md:hidden p-0 outline-none bg-transparent border-none ">
                    <MenubarMenu className="outline-none p-0 w-full">
                        <MenubarTrigger className="p-0 cursor-pointer focus:text-white bg-transparent w-full text-white data-[state=open]:text-verde-rgb data-[state=open]:scale-125 filter saturate-200 transform duration-300">
                            <BiUser size={34}/>
                        </MenubarTrigger>
                        <MenubarContent className="max-sm:hidden p-0 border-none rounded-none bg-transparent">
                            <MenubarItem className="p-0 bg-black/70 rounded-none">
                                <Link href="/auth/Login"  className='text-white w-full p-3 flex justify-center items-center border-black border-b hover:bg-verde transform duration-200 hover:text-white' >Iniciar Sesión</Link>
                            </MenubarItem>
                            <MenubarItem className="p-0 bg-black/70 rounded-none">
                                <Link href="/auth/Registro"  className='text-white w-full flex items-center justify-center p-3 hover:bg-verde transform duration-200 hover:text-white'  >Registrarse</Link>
                            </MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>

            <Sheet>
                <SheetTrigger className='md:hidden'>
                    <CgMenuRight size={32} />
                </SheetTrigger>
                <SheetContent className="bg-black/70 border-none">
                    <SheetHeader>
                        <SheetTitle className="text-verde text-left text-3xl">YanaPata</SheetTitle>
                    </SheetHeader>
                    <ul className=" items-center flex flex-col text-xl gap-5 py-10 w-full relative">
                    {links.map((link, index) => (
                        <li key={index} className="relative w-full h-[50px]">
                            <SheetClose asChild className='w-full relative flex '>
                                <Link onClick={() => handleSetActiveLink(link.href)} href={link.href} className={`rounded-md w-full h-full flex items-center justify-center text-center filter saturate-200 transform duration-300 tracking-wide p-2 gap-2 ${ActiveLink === link.href ? 'bg-verde shadow-lg shadow-verde/50 text-black' : 'text-white active:bg-pressed hover:bg-hover'}`}>
                                    {link.label}
                                </Link>
                            </SheetClose>
                        </li>
                    ))}
                    </ul>
                    <Accordion type="single" collapsible className="w-full text-white">
                        <AccordionItem value="item-1" className="px-2 border rounded border-verde-rgb filter saturate-200">
                            <AccordionTrigger> 
                                <BiUser size={34} className=''/> 
                                Mi cuenta
                            </AccordionTrigger>
                                <AccordionContent>
                                    <SheetClose asChild className='w-full relative flex'>
                                        <Link href="/auth/Login"  className='text-white text-lg w-full py-4 flex justify-center items-center border-b hover:bg-verde  transform duration-200 hover:text-black' >Iniciar Sesión</Link>
                                    </SheetClose>
                                    <SheetClose asChild className='w-full relative flex'>
                                        <Link href="/auth/Registro"  className='text-white text-lg w-full flex items-center justify-center py-4 border-b hover:bg-verde transform duration-200 hover:text-black'  >Registrarse</Link>
                                    </SheetClose>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </SheetContent>
                </Sheet>
            </nav>
            
        </header> 
    )
}
