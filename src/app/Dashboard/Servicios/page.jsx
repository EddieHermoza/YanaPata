import { Suspense } from "react"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/Components/ui/dialog"

import CrearServicio from "./Components/Forms/FormCrearServicio"
import TablaServicios from "./Components/DataTable/tablaServicios"
import Pagination from "@/Components/ui/Pagination"
import SkeletonTable from "@/Components/Skeletons/SkeletonTable"
import Search from "./Components/DataTable/Search"
import { getServiciosPage } from "./actions"

async function  page({searchParams}) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const pages=await getServiciosPage(query);
    return (
        <section className="relative w-full flex flex-col items-center justify-center gap-5 p-5 ">
            <div className="w-full flex flex-col gap-3 justify-between">
              <h2 className="text-3xl tracking-widest">Servicios</h2>
              <p className="text-gray-500 max-sm:text-sm text-lg">Los servicios permiten a sus clientes generar sus solicitudes de cita para sus mascotas</p>
              <p className="text-gray-500 max-sm:text-sm text-lg">Asegurese que cada servicio tenga sus datos correctos</p>
            </div>
            <div className="w-full flex max-md:flex-col gap-3 justify-between">
                <CrearServicio/>
                <Search/>
            </div>

            <Suspense fallback={<SkeletonTable/>}>
              <div className="flex flex-col gap-5 w-full h-[600px] justify-between items-center border bg-white shadow-lg">
                <TablaServicios query={query} page={currentPage} />
                <Pagination totalPages={pages} />
              </div>
            </Suspense>        
    </section>

    )
}

export default page

