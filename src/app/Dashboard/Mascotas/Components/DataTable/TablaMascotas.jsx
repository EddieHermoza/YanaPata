import { getData } from "../../actions"
import OptionsMascota from "./Options";
async function TablaMascotas({query,page}) {
    const mascotas = await getData(query,page);
    return (
        <>
        <table className="w-full h-auto text-center text-xs">
                <thead className="border-b bg-neutral-900 text-white">
                <tr>
                    <th scope="col" className="p-3">ID</th>
                    <th scope="col" className="max-xl:hidden p-3">Registrado</th>
                    <th scope="col" className="max-2xl:hidden p-3">Ultima Modificación</th>
                    <th scope="col" className=" p-3">Nombre</th>
                    <th scope="col" className="max-md:hidden p-3">Raza</th>
                    <th scope="col" className="p-3">Tipo</th>
                    <th scope="col" className="p-3 max-md:hidden truncate max-w-[200px]">Tamaño</th>
                    <th scope="col" className=" max-[425px]:hidden p-3">Peso</th>
                    <th scope="col" className="p-3"></th>
                </tr>
                </thead>
                <tbody className="text-black relative">
                {mascotas ? (
                    mascotas.map((mascota) => (
                    <tr key={mascota.id} className="border-b hover:bg-slate-100 transform duration-200 h-[30px]">
                        <td className="p-2 truncate">{mascota.id}</td>
                        <td className="p-2 max-xl:hidden truncate max-w-[200px]">{mascota.creacion}</td>
                        <td className="p-2 max-2xl:hidden truncate max-w-[200px]">{mascota.modificacion}</td>
                        <td className="p-2  truncate max-w-[200px]">{mascota.nombre}</td>
                        <td className="p-2 max-md:hidden truncate max-w-[200px]">{mascota.raza}</td>
                        <td className="p-2 truncate max-w-[200px]">{mascota.tipo}</td>
                        <td className="p-2 max-md:hidden truncate max-w-[200px]">{mascota.altura}</td>
                        <td className="p-2 max-sm:hidden truncate max-w-[200px]">{parseFloat(mascota.peso)} kg</td>
                        <td className="flex max-sm:flex-col h-full items-center justify-center gap-1 p-2">
                            <OptionsMascota mascota={mascota}/>
                        </td>
                    </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="6">No hay Mascotas registradas.</td>
                    </tr>
                )}
                </tbody>
            </table>
        </>
    )
}

export default TablaMascotas