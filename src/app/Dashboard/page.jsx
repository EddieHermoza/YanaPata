import GraficaPrueba from "@/app/Dashboard/Components/Graficas/graficaPrueba"
import GraficaCircular from "./Components/Graficas/graficaCircular"

function DashboardPage() {
  return (
    <>
      <section className="w-full min-h-screen flex flex-col items-center gap-10 p-10">
          <div className="text-5xl text-black flex justify-center">
            <h1>Dashboard</h1>
          </div>
        <div className="flex gap-2 justify-center items-center w-full h-full">
          <GraficaPrueba/>
          <GraficaCircular/>
        </div>
      </section>
    </>
  

  )
}

export default DashboardPage