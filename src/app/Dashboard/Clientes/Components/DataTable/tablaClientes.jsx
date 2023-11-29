
import { OptionsCliente,ToogleEstado } from "./Options";
import { getData } from "../../actions";
export default async function TablaClientes({query,page}) {
    const usuarios = await getData(query,page);
    return (
    <>
      <table className="w-full text-center text-xs">
            <thead className="border-b bg-neutral-900 text-white">
            <tr>
                <th scope="col" className="p-3">ID</th>
                <th scope="col" className="max-xl:hidden p-3">Registrado</th>
                <th scope="col" className="max-2xl:hidden p-3">Ultima Modificación</th>
                <th scope="col" className="max-sm:hidden p-3">Nombres</th>
                <th scope="col" className="max-md:hidden p-3">Apellidos</th>
                <th scope="col" className="p-3">Correo Electrónico</th>
                <th scope="col" className="p-3 max-xl:hidden truncate max-w-[200px]">Telefono</th>
                <th scope="col" className=" max-[425px]:hidden p-3">Habilitado</th>
                <th scope="col" className="p-3"></th>
            </tr>
            </thead>
            <tbody className="text-black relative">
            {usuarios ? (
                usuarios.map((usuario) => (
                <tr key={usuario.id} className="border-b hover:bg-slate-100 transform duration-200 h-[30px]">
                    <td className="p-2 truncate">{usuario.id}</td>
                    <td className="p-2 max-xl:hidden truncate max-w-[200px]">{usuario.creacion}</td>
                    <td className="p-2 max-2xl:hidden truncate max-w-[200px]">{usuario.modificacion}</td>
                    <td className="p-2 max-sm:hidden truncate max-w-[200px]">{usuario.nombres}</td>
                    <td className="p-2 max-md:hidden truncate max-w-[200px]">{usuario.apellidos}</td>
                    <td className="p-2 truncate max-w-[200px]">{usuario.email}</td>
                    <td className="p-2 max-xl:hidden truncate max-w-[200px]">{usuario.cliente.telefono}</td>
                    <td className="p-2 max-[425px]:hidden truncate max-w-[200px]">
                       <ToogleEstado cliente={usuario} />
                    </td>
                    <td className="flex max-sm:flex-col h-full items-center justify-center gap-1 p-2">
                        <OptionsCliente cliente={usuario}/>
                    </td>
                </tr>
                ))
            ) : (
                <tr>
                    <td colSpan="6">No hay clientes registrados.</td>
                </tr>
            )}
            </tbody>
        </table>
    </>
    );
}



