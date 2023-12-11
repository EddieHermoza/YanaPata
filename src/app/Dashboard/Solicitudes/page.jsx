import ToggleStatus from "./Components/ToogleStatus";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Suspense } from "react";
import CardsContainer from "./Components/CardsContainer";
import { getCitasPages } from "./actions";
import Pagination from "@/Components/ui/Pagination";
import SearchCliente from "./Components/SearchCliente";
import SearchMascota from "./Components/SearchMascota";
import { DatePicker } from "@/Components/ui/DatePicker";
import Link from "next/link";
import SkeletonContainer from "@/Components/Skeletons/SkeletonContainer";



async function Page({searchParams}) {

    const status = searchParams?.status || '';
    const nombreCliente = searchParams?.cliente || '';
    const nombreMascota = searchParams?.mascota || '';
    const currentPage = Number(searchParams?.page) || 1;
    const pages=await getCitasPages(status,nombreCliente,nombreMascota);


    return (
        <section className="relative w-full h-screen flex  flex-col gap-5 items-center overflow-y-auto scrollbar-thin scrollbar-thumb-verde p-5">
                <h2 className="text-3xl tracking-widest">Solicitudes</h2>
                <p className="text-lg text-gray-400">Podrá ver todas las solicitudes registradas hasta la fecha</p>
                <Link href={'/Dashboard/Solicitudes/Calendario'} className="flex gap-2 items-center bg-verde px-5 py-2 shadow-lg hover:shadow-verde/50 transform duration-300 rounded-tr-lg rounded-bl-lg hover:text-white mt-5">
                    <FaRegCalendarAlt/>
                    Ver Calendario
                </Link>
            <Suspense fallback={<SkeletonContainer/>}>
                <div className="flex flex-wrap max-md:flex-col w-full max-md:items-start md:items-center sm:justify-evenly gap-10 mx-auto">
                    <ToggleStatus/>
                    <SearchCliente/>
                    <SearchMascota/>
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


