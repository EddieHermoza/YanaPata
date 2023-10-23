

import ServicioCard from "./ServicioCard";
import dataServicios from "@/app/utils/data.json";



export default function SectServicios() {
  return (
    <section className="" id="">
      <div className=" w-full pb-10 ">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">

          {dataServicios.map((servicio, index) => (
              <ServicioCard key={index} 
              title={servicio.nombre}
              img={servicio.img}
              desc={servicio.presentacion}
              />
            ))}
            
          </div>
      </div>
    </section>
  )
}