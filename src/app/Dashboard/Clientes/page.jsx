import { Suspense } from "react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog"

import FormCliente from "./Components/Forms/FormClientes"
import TablaClientes from "./Components/DataTable/tablaClientes"
import Search from "./Components/DataTable/Search"
import Pagination from "@/Components/ui/Pagination"
import SkeletonTable from "@/Components/Skeletons/SkeletonTable"
import { getClientePages } from "./actions"

function page({ searchParams}) {

    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const pages=getClientePages(query);
    return (
      <section className="relative w-full flex flex-col items-center justify-center gap-5 p-10 ">
          <div className="w-full flex max-md:flex-col gap-3 justify-between">
            <Dialog>
                  <DialogTrigger className="rounded-tl-md rounded-br-md text-white bg-verde-rgb filter saturate-200 text-xl px-6 py-2 hover:saturate-[3] trasnform duration-300 hover:shadow-lg hover:text-black">Registrar Cliente</DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Registrar Cliente</DialogTitle>
                        <DialogDescription>
                          Todos los campos son necesarios
                        </DialogDescription>
                      </DialogHeader>
                      <div>
                        <FormCliente/>
                      </div>
                </DialogContent>
              </Dialog>
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
