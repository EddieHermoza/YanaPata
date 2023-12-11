import Pagination from "@/Components/ui/Pagination";
import { Suspense } from "react";
import TablaSolicitudes from "./Components/tablaSolicitudes";
import FormCitaCliente from "../Components/Forms/FormCitaCliente";
import { getInfoCliente } from "@/lib/actions";
import { getUserSession } from "@/lib/auth_actions";
import { getSolicitudesClientePages } from "./actions";
import { redirect } from "next/navigation";
import { getRol } from "@/lib/actions";

export default async function page({searchParams}) {
    const UserSession = await getUserSession();

    if (UserSession.data.session !==null && UserSession.data.session !== undefined) {
        const rol = await getRol(UserSession.data.session.user.email)
        if(rol.ok){
            if (rol.rol !== "cliente") {
                redirect("/")
            }
        } else {
            redirect("/")
        }
    } else {
        redirect("/")
    }
    
    const cliente = await getInfoCliente(UserSession.data.session.user.email)
    const currentPage = Number(searchParams?.page) || 1;
    const pages = await getSolicitudesClientePages(cliente.id)

    return (
        <div className=" w-full h-full flex flex-col gap-5 bg-white p-5 overflow-y-auto scrollbar-thin relative">
            <h2 className="text-3xl">Solicitudes</h2>
            <span className="text-slate-400 ">Visualiza todas tus solicitudes y genera una para tu mascota</span>
            <div className="w-full max-sm:flex-col flex gap-10  justify-between py-5 border-t border-black">
                <FormCitaCliente cliente={cliente}/>
            </div>
            <Suspense fallback={<div>Cargando..</div>}>
                <div className="flex flex-col gap-5 w-full h-[600px] justify-between items-center border bg-white shadow-lg">
                    <TablaSolicitudes page={currentPage} cliente={cliente}/>
                    <Pagination totalPages={pages} />
                </div>               
            </Suspense>
        </div>
    )
}
