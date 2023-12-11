import { Suspense } from "react"
import CrearAdmin from "./Components/Forms/FormCrearAdmin"
import TablaAdmins from "./Components/DataTable/tablaAdmins"
import Search from "./Components/DataTable/Search"
import Pagination from "@/Components/ui/Pagination"
import { getAdminPages } from "./actions"

import SkeletonTable from "@/Components/Skeletons/SkeletonTable"

async function page({searchParams}) {
    
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const pages=await getAdminPages(query);
    return (
        <section className="relative w-full flex flex-col items-center justify-center gap-5 p-10 ">
            <div className="w-full flex flex-col gap-3 justify-between">
              <h2 className="text-3xl tracking-widest">Administradores</h2>
              <p className="text-gray-500 max-sm:text-sm text-lg">Visualice todos los usuarios con acceso al sistema </p>
              <p className="text-gray-500 max-sm:text-sm text-lg">En caso sea necesario puede deshabilitarlo o eliminarlo </p>
            </div>
            <div className="w-full flex max-md:flex-col gap-3 justify-between">
                <CrearAdmin/>
                <Search/>
            </div>

            <Suspense fallback={<SkeletonTable/>}>
                <div className="flex flex-col gap-5 w-full h-[600px] justify-between items-center border bg-white shadow-lg">
                    <TablaAdmins query={query} page={currentPage} />
                    <Pagination totalPages={pages} />
                </div>
            </Suspense>        
        </section>
        

    )
}

export default page
