"use client"
import { IoShareSocial } from "react-icons/io5";
import Link from 'next/link';
import {BiUser} from 'react-icons/bi'
import {CgMenuRight} from "react-icons/cg" 
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
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

import { NavButonns, NavMobileButtons } from './NavBar/NavBarButtons';


export default function Navbar() {
    const pathname = usePathname()
    const [ActiveLink, setActiveLink] = useState(pathname);

    const handleSetActiveLink = (link) => {
        setActiveLink(link);
    };

    const links = [
        { href: '/', label: 'Inicio' },
        { href: '/Nosotros', label: '¿Quienes Somos?' },
        { href: '/Servicios', label: 'Nuestros Servicios' },
    ];

    if (pathname.startsWith('/Dashboard') ) {
        return null; 
    }

    return (
        <header className='relative'>
            <nav id='Navbar' className="bg-black text-white backdrop-blur-sm fixed z-50 w-full flex items-center justify-between p-5 h-[60px] transform duration-300 shadow-black/50 shadow-lg">
                <div className="flex items-center space-x-5">
                    <Link href={"/"}>
                        <h1 className='text-4xl  text-verde'>YanaPata</h1>
                    </Link>
                </div>
                <div className='relative h-full'>
                    <ul className="hidden gap-7 items-center lg:flex text-lg h-full relative">
                        {links.map((link, index) => (
                            <li key={index} className="border-x px-2 h-full flex items-center">
                                <Link onClick={() => handleSetActiveLink(link.href)} href={link.href} className={`relative hover:text-verde transform duration-200 group ${ActiveLink == link.href ?'text-verde':''}`}>
                                    {link.label}
                                    <span className={`animation-underline bg-verde h-[2px]  ${ActiveLink == link.href ? 'scale-x-100':''}`}></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='flex gap-2'>
                   {/* <Menubar className=" p-0 outline-none bg-transparent border-none ">
                        <MenubarMenu className="outline-none p-0 w-full">
                            <MenubarTrigger className="max-sm:hidden p-0 cursor-pointer hover:text-verde focus:text-white bg-transparent w-full text-white data-[state=open]:text-verde-rgb data-[state=open]:scale-125 filter saturate-200 transform duration-300">
                                <BiUser size={34}/>
                            </MenubarTrigger>
                            <MenubarContent className="max-sm:hidden p-0 border-none rounded-none bg-transparent">
                                <NavButonns sesion={sesion}/>
                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>*/}
                    <Sheet>
                        <SheetTrigger className='hover:text-verde transform duration-300'>
                            <CgMenuRight size={32} />
                        </SheetTrigger>
                        <SheetContent className="bg-black/80 border-none">
                            <SheetHeader>
                                <SheetTitle className="text-verde text-left text-3xl">YanaPata</SheetTitle>
                            </SheetHeader>
                            <ul className=" items-center  flex flex-col text-lg gap-5 my-5 py-5 w-full relative border-y ">
                            {links.map((link, index) => (
                                <li key={index} className="relative w-full h-[50px]">
                                    <SheetClose asChild className='w-full relative flex '>
                                        <Link onClick={() => handleSetActiveLink(link.href)} href={link.href} className={`rounded-md w-full h-full flex items-center justify-center text-center transform duration-300 p-2 gap-2 ${ActiveLink === link.href ? 'bg-verde shadow-lg shadow-verde/50 text-black' : 'text-white active:bg-pressed hover:bg-hover'}`}>
                                            {link.label}
                                        </Link>
                                    </SheetClose>
                                </li>
                            ))}
                            </ul>
                            <span className='text-xl text-center text-white w-full justify-center flex items-center gap-2'><IoShareSocial />Redes Sociales:</span>
                            <ul className="w-full flex flex-col gap-5 text-xl items-center text-white mt-10">
                                <li className="w-full">
                                    <Link href="https://www.facebook.com/yanapataveterinaria" target='_blank' className="text-white active:bg-pressed hover:bg-hover rounded-md w-full h-full flex items-center justify-center text-center transform duration-300 p-2 gap-2">
                                        <FaFacebookF/>
                                        Facebook
                                    </Link>
                                </li>
                                <li className="w-full">
                                    <Link href="https://www.instagram.com/veterinariayanapata/?hl=es-la " target='_blank' className="text-white active:bg-pressed hover:bg-hover rounded-md w-full h-full flex items-center justify-center text-center transform duration-300 p-2 gap-2">
                                        <FaInstagram/>
                                        Instragram
                                    </Link>
                                </li>
                                <li className="w-full">
                                    <Link href="https://www.instagram.com/veterinariayanapata/?hl=es-la " target='_blank' className="text-white active:bg-pressed hover:bg-hover rounded-md w-full h-full flex items-center justify-center text-center transform duration-300 p-2 gap-2">
                                        <FaWhatsapp/>
                                        Whatsapp
                                    </Link>
                                </li>
                            </ul>

                            {/*<Accordion type="single" collapsible className="w-full text-white">
                                <AccordionItem value="item-1" className="px-2 border rounded border-verde-rgb filter saturate-200">
                                    <AccordionTrigger> 
                                        <BiUser size={34} className=''/> 
                                        Mi cuenta
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <NavMobileButtons sesion={sesion}/>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>*/}
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>    
        </header> 
    )
}
