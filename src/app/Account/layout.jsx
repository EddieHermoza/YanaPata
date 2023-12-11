import { MdPets } from "react-icons/md";
import NavAcount from "./Components/NavAcount";
import LogOutbtn from "./Components/LogOutbtn";
import {CgMenuRight} from "react-icons/cg" 
import Link from "next/link";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/Components/ui/sheet"

export default  function layout({children}) {
    const links = [
        { href: '/Account', label: 'Bienvenida' },
        { href: '/Account/Informacion', label: 'Cuenta' },
        { href: '/Account/Mascotas', label: 'Mascotas' },
        { href: '/Account/Solicitudes', label: 'Solicitudes' },
    ];
    return(
        <main className="w-full h-screen relative pt-[60px]">
            <section className="relative w-screen flex items-center justify-center h-full bg-slate-100">
                <div className="relative flex gap-5  w-full h-full px-5">
                    <div className="max-lg:hidden lg:flex flex-col gap-10 items-center py-10 h-full w-[300px] bg-white rounded-lg shadow-lg">
                        <MdPets size={60}/>
                        <ul className="flex flex-col gap-16 items-center justify-center w-full relative text-xl">
                            <NavAcount links={links}/>
                        </ul>
                        <LogOutbtn/>
                    </div>
                    <Sheet className="bg-white">
                        <SheetTrigger className='hover:text-verde transform duration-300 p-2 bg-white rounded-full fixed bottom-5 z-[500] right-10 border border-black'>
                            <CgMenuRight size={32} />
                        </SheetTrigger>
                        <SheetContent className="bg-white border-none">
                            <SheetHeader>
                                <SheetTitle className="text-verde text-left text-3xl">YanaPata</SheetTitle>
                            </SheetHeader>
                            <ul className=" items-center  flex flex-col text-lg gap-5 my-5 py-5 w-full relative border-y ">
                            {links.map((link, index) => (
                                    <li
                                        key={index}
                                        className="w-[90%] flex border-x-2 group hover:border-black transform duration-300 justify-center"
                                      >
                                        <SheetClose asChild className='w-full relative flex '>
                                        <Link
                                          href={link.href}
                                          className={` text-center relative tracking-widest group-hover:text-verde transform duration-200 group`}
                                        >
                                          {link.label}
                                          <span className={`animation-underline bg-verde h-[2px] `}></span>
                                        </Link>
                                        </SheetClose>

                                    </li>

                            ))}
                            </ul>

                        </SheetContent>
                    </Sheet>
                    {children}
                </div>
            </section>
        </main>
    )
}