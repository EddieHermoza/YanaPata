import { MascotasClienteLista } from "../actions";
import CardMascota from "./CardMascota";
import Pagination from "@/Components/ui/Pagination";
import { getMascotasPages } from "../actions";


export default async function CardsContainer({id, query, page }) {

    const mascotas = await MascotasClienteLista(id, query, page);
    return (
            <div className="w-full h-full grid max-md:grid-cols-1 max-xl:grid-cols-2 xl:grid-cols-3 gap-4 grid-flow-row pt-10">
                {mascotas.map((mascota, index) => (
                    <div key={index}>
                        <CardMascota key={index} mascota={mascota} />
                    </div>
                ))}
            </div>
    );
}