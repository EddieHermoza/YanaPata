
import { getSolicitudesList } from "../actions"
import { IoMdEye } from "react-icons/io"

export default async function TablaSolicitudes({cliente,page}) {
    const Solicitudes = await getSolicitudesList(page,cliente)
    return (
        <>
                <table className="w-full h-auto text-center text-xs relative">
                    <thead className=" border-b border-black">
                        <tr>
                            <th className="py-4">F. Enviada</th>
                            <th className="py-4 max-[400px]:hidden">F. solicitada</th>
                            <th className="py-4 max-md:hidden">H. Solicitada</th>
                            <th className="py-4">Mascota</th>
                            <th className="py-4 max-md:hidden">Servicio</th>
                            <th className="py-4 max-sm:hidden">Estado</th>
                        </tr>
                    </thead>
                    <tbody className="relative">
                        {Solicitudes ? (
                            Solicitudes.map((solicitud,index) => (
                            <tr key={index} className="border-b hover:bg-slate-100 transform duration-200 h-[60px]">
                                <td>{solicitud.creacion}</td>
                                <td className="max-[400px]:hidden">{solicitud.fechaSolicitud}</td>
                                <td className="max-md:hidden">{solicitud.horaSolicitud}</td>
                                <td>{solicitud.nombreMascota}</td>
                                <td className="max-md:hidden">{solicitud.servicio_id}</td>
                                <td className="max-sm:hidden">{solicitud.estado}</td>
                            </tr>                         
                            ))
                        ):(
                            <tr className="w-full text-center">
                                <td colSpan="6" className="p-5">No hay hay Solicitudes.</td>
                            </tr>
                        )}

                    </tbody>
                </table>    
        </>
    )
}
