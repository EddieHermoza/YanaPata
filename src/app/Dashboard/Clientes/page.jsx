import FormCliente from "../Components/Forms/FormClientes"
import TablaClientes from "../Components/Tablas/tablaClientes"


function page() {
    return (
        <section className="relative w-full flex max-lg:flex-col gap-5 p-10">
            <div className=" max-lg:w-full lg:w-[30%] lg:border-r pr-3 border-black py-5">
                <FormCliente/>
            </div>
            <div className="max-lg:w-full lg:w-[70%] flex justify-center">
                <div className="max-h-[600px] w-full overflow-y-auto p-1 sm:scrollbar-thin sm:scrollbar-track-black sm:scrollbar-thumb-cyan-400">
                    <TablaClientes/>
                </div>
            </div>            
        </section>

    )
}

export default page