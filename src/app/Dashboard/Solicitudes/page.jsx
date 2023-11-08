import TablaSolicitudes from "../Components/Tablas/tablaSolicitudes"


function page() {
    return (
        <section className="relative w-full flex max-lg:flex-col gap-5 p-10">
            <div className="w-full flex justify-center">
                <div className="max-h-[600px] w-full overflow-y-auto p-1 sm:scrollbar-thin sm:scrollbar-track-black sm:scrollbar-thumb-cyan-400">
                    <TablaSolicitudes/>
                </div>
            </div>            
        </section>

    )
}

export default page