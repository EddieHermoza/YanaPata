import db from "@/lib/db"
import Pagination from "@/Components/ui/Pagination";
import { Suspense } from "react";
import CardsContainer from "./Components/CardsContainer";
import Search from "./Components/Search";
import FormCrearMascota from "../Components/Forms/FormCrearMascota";
import HeaderCards from "./Components/HeaderCards";
import {cookies} from "next/headers";
import { getMascotasPages } from "./actions";

export default async  function page({searchParams}) {
    
    const email = cookies().get('email').value
    const id = cookies().get('id').value
    const currentPage =  Number(searchParams?.page) || 1;
    const query =  searchParams?.query || '';
    const pages =await getMascotasPages(parseInt(id))
    return  (
        <div  className="w-full h-full flex flex-col gap-5 bg-white p-5 overflow-y-auto scrollbar-thin relative">
            <h2 className="text-3xl">Mis Mascotas</h2>
            <span className="text-slate-400"> Revisa a detalle la Informacion de tus mascotas registradas</span>
            <div className="w-full h-full relative flex flex-col items-center py-5 border-t border-black">
                <div className="flex gap-5 max-md:flex-wrap justify-around w-full">
                    <HeaderCards  id={parseInt(id)}/> 
                </div>
                <div className="w-full h-full py-10 flex flex-col gap-3 items-center">
                    <div className="flex max-sm:flex-col gap-10 w-full justify-between border-b px-5 py-10">
                        <FormCrearMascota id={parseInt(id)}/>
                        <Search/>
                    </div>
                    <Suspense fallback={<>Cargando...</>}>
                        <CardsContainer id={parseInt(id)} query={query} page={currentPage}/>
                        <Pagination totalPages={pages}/>
                    </Suspense>
                </div>
            </div>
        </div>
    )
}
