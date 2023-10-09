"use client"
import Link from 'next/link';
import PropTypes from 'prop-types';
import {MdOutlinePets} from "react-icons/md"
import { BiUser } from 'react-icons/bi';
import {AiOutlineClose} from "react-icons/ai"

export default function MobileNavBar({onclick}) {
  return (
        <div className="min-h-screen md:hidden w-screen top-0 fixed flex flex-col items-center z-50 bg-black bg-opacity-90  " onClick={onclick}>
            <div className='w-full flex items-center justify-end  p-10 text-white'>
                <button onclick={onclick} className=''>
                    <AiOutlineClose size={40} className='hover:text-verde-rgb filter saturate-200 transform duration-200'/>
                </button>
            </div> 
            <ul className="absolute top-[50%] -translate-y-1/2  text-white filter  saturate-200 text-3xl w-full">

                <li className=''>
                    <Link href='/' className="flex items-center justify-center gap-2 p-6 relative w-full hover:bg-verde-rgb hover:text-black  filter saturate-200" onClick={onclick}>
                    Inicio <MdOutlinePets/>
                    </Link>
                </li>
                <li className=''>
                    <Link href="/Nosotros" className="flex items-center justify-center gap-2 p-6 relative w-full  hover:bg-verde-rgb hover:text-black  filter saturate-200" onClick={onclick}>
                    Nosotros <MdOutlinePets/>
                    </Link>
                </li>
                <li className=''>
                    <Link  href='/Servicios' className="flex items-center justify-center gap-2 p-6 relative w-full  hover:bg-verde-rgb hover:text-black  filter saturate-200" onClick={onclick}>
                    Servicios <MdOutlinePets/>
                    </Link>
                </li>
                <li className=''>
                    <Link  href='/Solicitud' className="flex items-center justify-center gap-2 p-6 relative w-full  hover:bg-verde-rgb hover:text-black  filter saturate-200" onClick={onclick}>
                    Solicitar una cita <MdOutlinePets/>
                    </Link> 
                </li>
                <li>
                    <button className="flex items-center justify-center gap-2 p-6 relative w-full  hover:bg-verde-rgb hover:text-black  filter saturate-200" 
                        data-te-toggle="modal"
                        data-te-target="#exampleModalCenter"
                        data-te-ripple-init>
                        Iniciar Sesión
                         <BiUser size={32} />
                    </button>
                </li>
            </ul>
        </div>  
  )
}

MobileNavBar.propTypes={
    onclick:PropTypes.func.isRequired
}

