import { MdPets } from "react-icons/md";
import NavAcount from "./Components/NavAcount";
import LogOutbtn from "./Components/LogOutbtn";


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
                <div className="relative flex gap-5 w-full max-w-[1400px]  h-full p-5">
                    <div className="max-lg:hidden lg:flex flex-col gap-10 items-center py-10 h-full w-[300px] bg-white rounded-lg shadow-lg">
                        <MdPets size={60}/>
                        <ul className="flex flex-col gap-16 items-center justify-center w-full relative text-xl">
                            <NavAcount links={links}/>
                        </ul>
                        <LogOutbtn/>
                    </div>
                    {children}
                </div>
            </section>
        </main>
    )
}