import ToggleStatus from "./Components/ToogleStatus";

import { Suspense } from "react";
import CardsContainer from "./Components/CardsContainer";
import { getCitasPages } from "./actions";
import Pagination from "@/Components/ui/Pagination";
import SearchCliente from "./Components/SearchCliente";
import SearchMascota from "./Components/SearchMascota";
import { DatePicker } from "@/Components/ui/DatePicker";
import Link from "next/link";



function Page({searchParams}) {

    const status = searchParams?.status || '';
    const nombreCliente = searchParams?.cliente || '';
    const nombreMascota = searchParams?.mascota || '';
    const currentPage = Number(searchParams?.page) || 1;
    const pages=getCitasPages(status,nombreCliente,nombreMascota);


    return (
        <section className="relative w-full h-screen flex  flex-col gap-5 items-center overflow-y-auto scrollbar-thin scrollbar-thumb-verde p-8">
            <div>Total de Solicitudes Recibidas: 9</div>
            <Link href={'/Dashboard/Solicitudes/Calendario'} className="bg-verde px-4 py-2 hover:shadow-xl shadow-black transform duration-300 rounded-tr-lg rounded-bl-lg">
              Ver Calendario
            </Link>
            <Suspense fallback={<>Cargando-..</>}>
                <div className="flex flex-wrap max-md:flex-col w-full max-md:items-start md:items-center sm:justify-evenly gap-10 mx-auto">
                    <ToggleStatus/>
                    <SearchCliente/>
                    <SearchMascota/>
                    <DatePicker/>
                </div>
                <Pagination totalPages={pages}/>
                <div className=" flex-col items-center flex gap-5 max-w-[1000px] w-full relative mx-auto">
                  <CardsContainer status={status} page={currentPage} nombreCliente={nombreCliente} nombreMascota={nombreMascota}  />
                </div>
            </Suspense>
        </section>
    );
}


export default Page;


