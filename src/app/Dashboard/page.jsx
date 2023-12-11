import PieChart from "./Components/Graficas/PieChart"
import BarChart from "./Components/Graficas/BarChart"
import {VentasCard,UserCard,NotisCard,MascotaCard} from "./Components/DashCards"
import LastVentas from "./Components/LastVentas";
import LineChart from "./Components/Graficas/LineChart";
import { Suspense } from "react";
import { Skeleton } from "@/Components/ui/skeleton";
function DashboardPage() {
  
  return (
    <>
      <section className="w-full min-h-screen flex flex-col items-center gap-10 p-5 relative">
          <div className=" text-black flex justify-between w-full">
            <h2 className="text-4xl tracking-wide">Dashboard</h2>
          </div>
          <div className="w-full grid grid-flow-row max-md:grid-cols-1 md:grid-cols-2 gap-6 ">
            <Suspense fallback={<Skeleton className={"h-28 w-full rounded-md"}></Skeleton>}>
              <VentasCard/>
            </Suspense>
              <Suspense fallback={<Skeleton className={"h-28 w-full rounded-md"}></Skeleton>}>
            <UserCard/>
              </Suspense>
            <Suspense fallback={<Skeleton className={"h-28 w-full rounded-md"}></Skeleton>}>
              <MascotaCard/>
            </Suspense>
            <Suspense fallback={<Skeleton className={"h-28 w-full rounded-md"}></Skeleton>}>
              <NotisCard/>
            </Suspense>
          </div>
        <div className="w-full flex max-lg:flex-col  h-full relative gap-4">
          <div className=" max-lg:w-full lg:w-[55%] h-auto border-4 rounded border-slate-100 flex flex-col justify-between items-start gap-2 p-2">
            <span className="text-xl tracking-widest">Grafica de Pagos Realizados</span>
            <BarChart/>
            <span className="text-gray-400">Ultimos 6 meses</span>
          </div>
          <div className=" max-lg:w-full lg:w-[45%] h-auto flex flex-col gap-2 ">
            <span className="text-xl tracking-widest">Ultimos Pagos Realizados: </span>
            <LastVentas/>
          </div>
        </div>
        <div className="w-full flex max-lg:flex-col-reverse  h-full relative gap-4">
          <div className=" max-lg:w-full lg:w-1/2 h-auto border-4 rounded border-slate-100 flex flex-col justify-between items-start gap-2 p-2">
            <span className="text-xl tracking-widest">Crecimiento de Clientes Registrados: </span>
            <LineChart/>
            <span className="text-gray-400">Ultimos 6 meses</span>
          </div>
          <div className=" max-lg:w-full lg:w-1/2 h-auto border-4 rounded border-slate-100 flex flex-col justify-between items-start gap-2 p-2">
            <span className="text-xl tracking-widest">Servicios Mas Solicitados: </span>
            <PieChart/>
          </div>
        </div>
      </section>
    </>
  

  )
}

export default DashboardPage