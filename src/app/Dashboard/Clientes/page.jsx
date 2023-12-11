import { Suspense } from "react"

import TablaClientes from "./Components/DataTable/tablaClientes"
import Search from "./Components/DataTable/Search"
import Pagination from "@/Components/ui/Pagination"
import SkeletonTable from "@/Components/Skeletons/SkeletonTable"
import { getClientePages } from "./actions"

async function page({ searchParams}) {

    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const pages=await getClientePages(query);
    return (
      <section className="relative w-full flex flex-col items-center justify-center gap-5 p-10 ">
          <div className="w-full flex flex-col gap-3 justify-between">
              <h2 className="text-3xl tracking-widest">Clientes</h2>
              <p className="text-gray-500 max-sm:text-sm text-lg">Visualice todos sus clientes registrados hasta la fecha </p>
              <p className="text-gray-500 max-sm:text-sm text-lg">En caso sea necesario puede deshabilitar un cliente o eliminarlo </p>
            </div>
          <div className="w-full flex max-md:flex-col gap-3 justify-end">
              <Search/>
          </div>
            <Suspense fallback={<SkeletonTable/>}>
                <div className="flex flex-col gap-5 w-full h-[600px] items-center justify-between border bg-white shadow-lg">
                  <TablaClientes query={query} page={currentPage} />
                  <Pagination totalPages={pages} />
                </div>
              </Suspense>        
      </section>

    )
}

export default page
