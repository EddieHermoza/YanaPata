import Link from "next/link"
import LogOut from "../../../Components/Forms/LogOut"
export default function NavDashboard() {
    return (
        <section  className="relative w-[260px] bg-neutral-800/50 hidden lg:flex" >
            <div className="w-[260px] h-[800px] flex flex-col gap-5 justify-center items-center px-2">
                <ul className="w-full text-xl text-white flex flex-col items-center border border-white transform duration-200">
                    <li className="w-full h-[80px]">
                        <Link className="w-full h-full flex items-center justify-center text-center hover:bg-verde-rgb filter saturate-200 transform duration-150 tracking-wide p-2 gap-2"  href="/Dashboard">DashBoard</Link>
                    </li>
                    <li className=" w-full h-[80px]">
                        <Link className="w-full h-full flex items-center justify-center text-center hover:bg-verde-rgb filter saturate-200 transform duration-150 tracking-wide p-2 gap-2"  href="/Dashboard/Servicios">Servicios</Link>
                    </li>
                    <li className=" w-full h-[80px]">
                        <Link className="w-full h-full flex items-center justify-center text-center hover:bg-verde-rgb filter saturate-200 transform duration-150 tracking-wide p-2 gap-2"  href="/Dashboard/Solicitudes">Solicitudes</Link>
                    </li>
                    <li className=" w-full h-[80px]">
                        <Link className="w-full h-full flex items-center justify-center text-center hover:bg-verde-rgb filter saturate-200 transform duration-150 tracking-wide p-2 gap-2"  href="/Dashboard/Administradores">Administradores</Link>
                    </li>
                    <li className=" w-full h-[80px]">
                        <Link className="w-full h-full flex items-center justify-center text-center hover:bg-verde-rgb filter saturate-200 transform duration-150 tracking-wide p-2 gap-2"  href="/Dashboard/Clientes">Clientes</Link>
                    </li>
                    <li className="w-full h-[80px]">
                        <Link  className="w-full h-full flex items-center justify-center text-center hover:bg-verde-rgb filter saturate-200 transform duration-150 tracking-wide p-2 gap-2"  href="/Dashboard/Mascotas">Mascotas</Link>
                    </li>
                    <li className=" w-full h-[80px]">
                        <Link className="w-full h-full flex items-center justify-center text-center hover:bg-verde-rgb filter saturate-200 transform duration-150 tracking-wide p-2 gap-2"  href="/Dashboard/Comentarios">Comentarios</Link>
                    </li>
                </ul>
            <LogOut/>
            </div>
            
        </section>
    )
}
