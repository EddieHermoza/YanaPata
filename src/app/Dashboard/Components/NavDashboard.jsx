"use client"
import LogOut from "../../../Components/Forms/LogOut";
import { useState } from "react";
import { usePathname } from "next/navigation";
import LinkIcon from "./LinkIcon";


export default function NavDashboard() {
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
        <section className="max-xl:hidden xl:flex w-[300px] h-screen flex-col justify-start gap-10 items-center bg-black px-3 py-10">
            <h1 className="text-verde-rgb filter saturate-[3] text-4xl border-b text-center pb-5 w-full">YanaPata</h1>
            <div className="relative w-full flex flex-col items-center  gap-10">
                <ul className="w-full text-xl text-white flex flex-col gap-3 items-center">
                    {dashboardLinks.map((link, index,) => (
                        <li key={index} className="w-full h-[60px] relative">
                            <LinkIcon href={link.href} onClick={() => handleSetActiveLink(link.href)} text={link.label} icon={link.label}  className={`rounded-md w-full h-full flex items-center justify-center text-center filter saturate-150 transform duration-300 tracking-wide p-2 gap-2 ${activeLink === link.href ? 'bg-slate-100 text-black shadow-lg shadow-neutral-50/50' : 'active:bg-pressed hover:bg-hover'}`}/>
                        </li>
                    ))}
                </ul>
                    <LogOut />
                </div>
        </section>
    );
}