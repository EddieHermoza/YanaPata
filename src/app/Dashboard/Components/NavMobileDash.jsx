"use client"
import { useState } from 'react';
import { CgMenuRight } from "react-icons/cg";
import LinkIcon from './LinkIcon';
import { usePathname } from 'next/navigation';
import LogOut from '@/Components/Forms/LogOut';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/Components/ui/sheet"

  
function NavMobileDash() {
    const pathname=usePathname()
    const [activeLink, setActiveLink] = useState(pathname);

    const handleSetActiveLink = (link) => {
        setActiveLink(link);
    };

    const dashboardLinks = [
        { label: 'Dashboard', href: '/Dashboard' },
        { label: 'Servicios', href: '/Dashboard/Servicios' },
        { label: 'Solicitudes', href: '/Dashboard/Solicitudes' },
        { label: 'Administradores', href: '/Dashboard/Administradores' },
        { label: 'Clientes', href: '/Dashboard/Clientes' },
        { label: 'Mascotas', href: '/Dashboard/Mascotas' },
        { label: 'Comentarios', href: '/Dashboard/Comentarios' },
    ];
  
  return (
        <Sheet >
            <SheetTrigger className='hover:scale-110 transform duration-300 border text-white bg-black  fixed items-center justify-center bottom-10 right-10 z-50 max-xl:flex xl:hidden p-3 rounded-full'>
                <CgMenuRight size={32} />
            </SheetTrigger>
            <SheetContent side={"left"}  className="text-white bg-black border-none flex flex-col gap-10 items-center">
                <SheetHeader>
                    <SheetTitle className="text-3xl text-verde-rgb filter saturate-[3] w-full text-left border-b">YanaPata</SheetTitle>
                </SheetHeader>
                <div className="relative w-full flex flex-col items-center  max-sm:gap-5 sm:gap-10">
                    <ul className="w-full max-sm:text-base sm:text-xl text-white flex flex-col gap-3 items-center">
                    {dashboardLinks.map((link, index,) => (
                            <li key={index} className="w-full max-sm:h-[50px] sm:h-[60px] relative">
                                <SheetClose asChild className='w-full relative flex'>
                                    <LinkIcon href={link.href} onClick={() => handleSetActiveLink(link.href)} text={link.label} icon={link.label}  className={`rounded-md w-full h-full flex items-center justify-center text-center filter saturate-150 transform duration-300 tracking-wide p-2 gap-2 ${activeLink === link.href ? 'bg-slate-100 text-black shadow-lg shadow-neutral-50/50' : 'active:bg-pressed hover:bg-hover'}`}/> 
                                </SheetClose>
                            </li>
                        ))}
                    </ul>
                    <LogOut/>
                </div>
            </SheetContent>
        </Sheet>
  )
}

export default NavMobileDash