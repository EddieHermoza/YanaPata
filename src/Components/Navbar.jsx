"use client"
import Link from 'next/link'
import {BiMenuAltRight,BiUser} from 'react-icons/bi'
import { useEffect,useState } from 'react';

import MobileNavBar from './MobileNavBar';

export default function Navbar() {
    const [mobileNav, setMobileNavState] = useState(false);

    const ToogleMobileNav = () => {
        setMobileNavState(!mobileNav);
    }


    const [isInSection, setIsInSection] = useState(false);

    useEffect(() => {
        handleScroll(); 

        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const section = document.getElementById('SectPortada');
        const navbar = document.getElementById('Navbar');

        if (section && navbar) {
        const sectionRect = section.getBoundingClientRect();
        const navbarRect = navbar.getBoundingClientRect();

        const isInside = navbarRect.top >= sectionRect.top && navbarRect.bottom + 60 <= sectionRect.bottom;
        
        setIsInSection(isInside);
        }
    };

    const NavbarBG ='bg-transparent text-white'
    const defaultNavbarBG = 'bg-white text-black shadow shadow-md';
    const navbarBG = isInSection ? NavbarBG : defaultNavbarBG;


  return (
    <header>
        <nav id='Navbar' className={`${navbarBG} backdrop-blur-sm fixed overflow-hidden z-50 w-full flex items-center justify-between p-5 h-[60px] transform duration-300 `}>
            <div className="flex items-center space-x-5">
                <h1 className='text-4xl filter saturate-200 text-verde-rgb'>YanaPata</h1>
                <ul className="hidden space-x-7 items-center md:flex text-xl ">
                    <li className="border-x px-2">
                        <Link className="relative filter saturate-200 hover:text-verde-rgb transform duration-200 group" href="/">
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
                        <Link className="relative filter saturate-200 hover:text-verde-rgb transform duration-200 group" href="/Solicitud" >
                            Solicitar cita
                            <span className="animation-underline bg-verde-rgb"></span>
                        </Link>
                    </li>
                </ul>
            </div>
            <button className="hidden md:flex filter saturate-200 hover:text-verde-rgb hover:scale-110 transform duration-200" 
                data-te-toggle="modal"
                data-te-target="#exampleModalCenter"
                data-te-ripple-init>
                <BiUser size={32} />
            </button>

            <button className="md:hidden flex" onClick={ToogleMobileNav}>
                <BiMenuAltRight size={32} />
            </button>
        </nav>
        {mobileNav && <MobileNavBar onclick={ToogleMobileNav}/>} 
    </header> 
  )
}