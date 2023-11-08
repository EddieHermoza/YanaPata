"use client"
import Link from 'next/link'
import {BiUser} from 'react-icons/bi'
import {CgMenuRight} from "react-icons/cg" 
import {useState } from 'react';

import MobileNavBar from './MobileNavBar';

export default function Navbar() {
    const [mobileNav, setMobileNavState] = useState(false);
    const [Dropdown,setDropdown] = useState(false);

    const ToogleDropdown = () =>{
        setDropdown(!Dropdown);
    }
    const ToogleMobileNav = () => {
        setMobileNavState(!mobileNav);
    }

  return (
    <header className=''>
        <nav id='Navbar' className={`bg-black/70 text-white backdrop-blur-sm fixed z-50 w-full flex items-center justify-between p-5 h-[60px] transform duration-300 `}>
            <div className="flex items-center space-x-5">
                <h1 className='text-4xl filter saturate-[3] text-verde-rgb'>YanaPata</h1>
                <ul className="hidden space-x-7 items-center md:flex text-xl ">
                    <li className="border-x px-2">
                        <Link className="relative filter saturate-200 hover:text-verde-rgb transform duration-200 group" href="/" >
                            Inicio
                            <span className="animation-underline bg-verde-rgb"></span>
                        </Link>
                    </li>
                    <li className="border-x px-2">
                        <Link className="relative filter saturate-200 hover:text-verde-rgb transform duration-200 group" href="/Nosotros">
                            Nosotros
                            <span className="animation-underline bg-verde-rgb"></span>
                        </Link>
                    </li>
                    <li className='border-x px-2'>
                        <Link className="relative filter saturate-200 hover:text-verde-rgb transform duration-200 group" href="/Servicios" >
                            Servicios
                            <span className="animation-underline bg-verde-rgb"></span>
                        </Link>
                    </li>
                    <li className='border-x px-2'>
                        <Link className="relative filter saturate-200 hover:text-verde-rgb transform duration-200 group" href="/Solicitud">
                            Solicitar cita
                            <span className="animation-underline bg-verde-rgb"></span>
                        </Link>
                    </li>
                </ul>
            </div>
            <button  className="relative hidden group md:flex filter saturate-[3] hover:text-verde-rgb transform duration-200"  onClick={ToogleDropdown}>
               <BiUser size={34} />
            </button>
            {Dropdown && 
                <div className='fixed top-[60px] shadow-lg right-0 text-base flex flex-col z-[1000] bg-black/70 text-white'>
                    <Link href="/auth/Login"  className='w-full p-3 border-black border-b hover:bg-verde-rgb filter saturate-200 transform duration-200 hover:text-white' >Iniciar Sesión</Link>
                    <Link href="/auth/Registro"  className='w-full p-3 hover:bg-verde-rgb filter saturate-200 transform duration-200 hover:text-white'  >Registrarse</Link>
                </div>
            } 
            <button className="md:hidden flex filter saturate-[3] hover:text-verde-rgb transform duration-200" onClick={ToogleMobileNav}>
                <CgMenuRight size={32} />
            </button>
        </nav>
        {mobileNav && <MobileNavBar onclick={ToogleMobileNav}/>} 
        
    </header> 
  )
}
