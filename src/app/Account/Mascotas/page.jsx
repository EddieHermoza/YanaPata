import { redirect } from "next/navigation";
import Pagination from "@/Components/ui/Pagination";
import { Suspense } from "react";
import CardsContainer from "./Components/CardsContainer";
import Search from "./Components/Search";
import FormCrearMascota from "../Components/Forms/FormCrearMascota";
import HeaderCards from "./Components/HeaderCards";
import { getUserSession } from "@/lib/auth_actions";
import { getRol } from "@/lib/actions";
import { getMascotasPages } from "./actions";
import { getInfoCliente } from "@/lib/actions";

export default async  function page({searchParams}) {
    const UserSession = await getUserSession();

    if (UserSession.user !==null && UserSession.user !== undefined) {
        const rol = await getRol(UserSession.user.email)
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
    
    const cliente = await getInfoCliente(UserSession.user.email)
    const currentPage =  Number(searchParams?.page) || 1;
    const query =  searchParams?.query || '';
    const pages =await getMascotasPages(parseInt(cliente.id))
    return  (
        <div  className="w-full h-full flex flex-col gap-5 bg-white p-5 overflow-y-auto scrollbar-thin relative">
            <h2 className="text-3xl">Mis Mascotas</h2>
            <span className="text-slate-400"> Revisa a detalle la Informacion de tus mascotas registradas</span>
            <div className="w-full h-full relative flex flex-col items-center py-5 border-t border-black">
                <div className="flex gap-5 max-md:flex-wrap justify-around w-full">
                    <HeaderCards  id={parseInt(cliente.cliente.id)}/> 
                </div>
                <div className="w-full h-full py-10 flex flex-col gap-3 items-center">
                    <div className="flex max-sm:flex-col gap-10 w-full justify-between border-b px-5 py-10">
                        <FormCrearMascota id={parseInt(cliente.cliente.id)}/>
                        <Search/>
                    </div>
                    <Suspense fallback={<>Cargando...</>}>
                        <CardsContainer id={parseInt(cliente.cliente.id)} query={query} page={currentPage}/>
                        <Pagination totalPages={pages}/>
                    </Suspense>
                </div>
            </div>
        </div>
    )
}
