import { Suspense } from "react"
import SkeletonTable from "@/Components/Skeletons/SkeletonTable"
import Search from "./Components/DataTable/Search"
import Pagination from "@/Components/ui/Pagination"
import { getMascotasPage } from "./actions"
import TablaMascotas from "./Components/DataTable/TablaMascotas";

async function page({searchParams}) {

    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    const pages = await getMascotasPage(query)
    return (
        <section className="relative w-full flex flex-col items-center justify-center gap-5 p-10 ">
            <div className="w-full flex flex-col gap-3 justify-between">
              <h2 className="text-3xl tracking-widest">Macotas</h2>
              <p className="text-gray-500 max-sm:text-sm text-lg">Visualice las mascotas registradas de todos sus clientes </p>
            </div>
            <div className="w-full flex max-md:flex-col gap-3 justify-end">
                <Search/>
            </div>
            <Suspense fallback={<SkeletonTable/>}>
                <div className="flex flex-col gap-5 w-full h-[600px] justify-between items-center border bg-white shadow-lg">
                    <TablaMascotas query={query} page={currentPage} />
                    <Pagination totalPages={pages} />
                </div>
            </Suspense>        
        </section>

    )
}

export default page