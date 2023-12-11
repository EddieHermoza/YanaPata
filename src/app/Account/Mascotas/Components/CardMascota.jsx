"use client"
import { FaDog } from "react-icons/fa";
import { FaCat } from "react-icons/fa";
import FormModificarMascota from "../../Components/Forms/FormModificarMascota";
import FormEliminarMascota from "../../Components/Forms/FormEliminarMascota";

export default function CardMascota({mascota}) {
  return (
    <div className="bg-white w-full flex flex-col justify-between p-2 h-32 rounded-lg shadow-lg" >
        <div className="flex gap-5 items-center">
            {mascota.tipo =="Felino"? (
                <FaCat size={60}/>
            ):(
                <FaDog size={60}/>
            )}
            <span className="text-lg">{mascota.nombre}</span>  
        </div>
        <div className="flex justify-between items-center">
            <span className="text-verde">{mascota.tipo}</span>
            <span className="text-verde">{mascota.sexo}</span>
            <FormModificarMascota mascota={mascota}/>
            <FormEliminarMascota mascota={mascota}/>
        </div>
    </div>
  )
}
