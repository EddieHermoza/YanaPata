"use client"
import Link from 'next/link'
import { SheetClose } from "../ui/sheet"
import { CerrarSesion } from "@/lib/auth_actions";
import { MenubarItem } from '../ui/menubar';

const handleLogOut = async () => {
    try {
     const res=  await CerrarSesion(); 
     if (res) {
        console.log("cerro session")
        setSesion(false)
     }else {
        setSesion(true)
     }
    
    } catch (error) {
        console.error('Error al cerrar sesión:', error);
    }
};

  function NavButonns({sesion}) {
    if (sesion ) {
        return(
            <>
                <MenubarItem className="p-0 bg-black/90 rounded-none">
                    <Link href="/Account" className='text-white w-full p-3 flex justify-center items-center border-black border-b hover:bg-verde transform duration-200 hover:text-white'>
                        Mi cuenta
                    </Link>
                </MenubarItem>
                <MenubarItem className="p-0 bg-black/90 rounded-none">
                    <button className='text-white w-full p-3 flex justify-center items-center border-black border-b hover:bg-verde transform duration-200 hover:text-white' onClick={()=>{handleLogOut()}}>
                        Cerrar Sesión
                    </button>
                </MenubarItem>
            </>
        )
    } else {
        return(
            <>
            <MenubarItem className="p-0 bg-black/90 rounded-none">
                <Link href="/auth/Login" className='text-white w-full p-3 flex justify-center items-center border-black border-b hover:bg-verde transform duration-200 hover:text-white'>
                    Iniciar Sesión
                </Link>
            </MenubarItem>
            <MenubarItem className="p-0 bg-black/90 rounded-none">
                <Link href="/auth/Registro" className='text-white w-full flex items-center justify-center p-3 hover:bg-verde transform duration-200 hover:text-white'>
                    Registrarse
                </Link>
            </MenubarItem>
            </>
        )
    }

}

 function NavMobileButtons({sesion}){
    if (sesion ) {
        return(
            <>
            <SheetClose asChild  className='w-full relative flex'>
                <Link href="/Account"  className='text-white text-lg w-full py-3 flex justify-center items-center border-b hover:bg-verde  transform duration-200 hover:text-black' > Mi Cuenta</Link>
            </SheetClose>
            <SheetClose asChild className='w-full relative flex'>
                <button  className='text-white text-lg w-full py-3 flex justify-center items-center border-b hover:bg-verde  transform duration-200 hover:text-black'  onClick={()=>{handleLogOut()}}>
                    Cerrar Sesión
                </button>
            </SheetClose>
            </>
        )

    } else{
        return(
            <>
            <SheetClose asChild  className='w-full relative flex'>
                <Link href="/auth/Login"  className='text-white text-lg w-full py-3 flex justify-center items-center border-b hover:bg-verde  transform duration-200 hover:text-black' >Iniciar Sesión</Link>
            </SheetClose>
            <SheetClose asChild className='w-full relative flex'>
                <Link href="/auth/Registro"  className='text-white text-lg w-full flex items-center justify-center py-3 border-b hover:bg-verde transform duration-200 hover:text-black'  >Registrarse</Link>
            </SheetClose>
            </>
        )
    }

}

export {NavButonns,NavMobileButtons}