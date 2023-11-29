import { getData } from "../actions";
import DateCard from "./DateCard";


export default async function CardsContainer({status,page,nombreCliente,nombreMascota}) {
    const citas= await getData(status,page,nombreCliente,nombreMascota);
    return (
            <div className="gap-5 max-md:grid-cols-1 md:grid-cols-2 grid grid-flow-row w-full transition-all ">
                {citas.map(cita => (
                    <DateCard key={cita.id} data={cita} />
                ))}
            </div>         

    )
}

