import { getData } from "../actions";
import SkeletonCard from "@/Components/Skeletons/SkeletonCard";
import { ListarServicios } from "../actions";
import { Suspense } from "react";
import DateCard from "./DateCard";

export default async function CardsContainer({status,page,nombreCliente,nombreMascota}) {
    const citas= await getData(status,page,nombreCliente,nombreMascota);
    const serviciosDisponibles = await ListarServicios()
    return (
            <div className="gap-5 max-md:grid-cols-1 md:grid-cols-2 grid grid-flow-row w-full transition-all ">
                {citas.map((cita,index) => (
                    <Suspense key={index} fallback={ <SkeletonCard/>}>
                            <DateCard data={cita} servicios={serviciosDisponibles} />
                    </Suspense>
                ))}
            </div>         

    )
}

