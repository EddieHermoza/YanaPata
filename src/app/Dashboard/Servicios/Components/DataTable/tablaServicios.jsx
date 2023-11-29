
import { OptionsServicio, ToogleEstado } from "./Options";
import { getData } from "../../actions";

export default async function TablaServicios({query,page}) {
    const servicios=await getData(query,page);

return (
    <>
      <table className="w-full h-auto text-center text-xs">
            <thead className="border-b bg-neutral-800 text-white">
            <tr>
                <th scope="col" className="p-3">ID</th>
                <th scope="col" className="max-lg:hidden p-3">Registrado</th>
                <th scope="col" className="max-xl:hidden p-3">Ultima Modificación</th>
                <th scope="col" className="p-3">Nombre</th>
                <th scope="col" className="max-sm:hidden p-3">Descripción</th>
                <th scope="col" className="max-[425px]:hidden p-3">Precio</th>
                <th scope="col" className="max-[425px]:hidden p-3">Habilitado</th>
                <th scope="col" className="p-3"></th>
            </tr>
            </thead>
            <tbody className="text-black">
            {servicios ? (
                servicios.map((servicio) => (
                <tr key={servicio.id} className="border-b hover:bg-slate-100 transform duration-200 h-[30px]">
                    <td className="p-2 truncate">{servicio.id}</td>
                    <td className="p-2 max-lg:hidden truncate max-w-[200px]">{servicio.creacion}</td>
                    <td className="p-2 max-xl:hidden truncate max-w-[200px]">{servicio.modificacion}</td>
                    <td className="p-2 truncate max-w-[200px]">{servicio.nombre}</td>
                    <td className="p-2 max-sm:hidden truncate max-w-[200px]">{servicio.descrip}</td>
                    <td className="p-2 max-[425px]:hidden truncate max-w-[200px]">S/ {parseFloat(servicio.precio_min)}</td>
                    <td className="p-2 max-[425px]:hidden truncate max-w-[200px]"><ToogleEstado  servicio={servicio}/></td>
                    <td className="flex max-sm:flex-col h-full items-center justify-center gap-1 p-2">
                        <OptionsServicio servicio={servicio}/>
                    </td>
                </tr>
                ))
            ):(
                <tr>
                    <td colSpan="6">No hay servicios registrados.</td>
                </tr>
            )
            }
            </tbody>
        </table>
    </>
    );
}

