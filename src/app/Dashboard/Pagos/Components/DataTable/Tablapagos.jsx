import { getData } from "../../actions";
export default async function TablaPagos({query,page}) {
    const pagos = await getData(query,page)
    return (
    <>
      <table className="w-full h-auto text-center text-xs">
            <thead className="border-b bg-neutral-900 text-white">
            <tr>
                <th scope="col" className="p-3">ID</th>
                <th scope="col" className="max-xl:hidden p-3">Realizado</th>
                <th scope="col" className="p-3">Cliente</th>
                <th scope="col" className="max-2xl:hidden p-3">Monto Servicio</th>
                <th scope="col" className="max-sm:hidden p-3">Monto Adicional</th>
                <th scope="col" className="max-md:hidden p-3">Monto Total</th>
                <th scope="col" className="p-3">IGV</th>
                <th scope="col" className=" max-[425px]:hidden p-3">Servicio</th>
            </tr>
            </thead>
            <tbody className="text-black relative">
            {pagos ? (
                pagos.map((pago) => (
                <tr key={pago.id} className="border-b hover:bg-slate-100 transform duration-200 h-[48px]">
                    <td className="p-2 truncate">{pago.id}</td>
                    <td className="p-2 max-xl:hidden truncate max-w-[200px]">{pago.creacion}</td>
                    <td className="p-2 max-2xl:hidden truncate max-w-[200px]">{pago.nombreCliente}</td>
                    <td className="p-2 max-2xl:hidden truncate max-w-[200px]">S/{parseFloat(pago.monto_servicio)}</td>
                    <td className="p-2 max-sm:hidden truncate max-w-[200px]">S/{parseFloat(pago.monto_adicional)}</td>
                    <td className="p-2 max-md:hidden truncate max-w-[200px]">S/{parseFloat(pago.monto_total)}</td>
                    <td className="p-2 truncate max-w-[200px]">S/{parseFloat(pago.igv)}</td>
                    <td className="p-2 truncate max-w-[200px]">{pago.servicio_id}</td>
                </tr>
                ))
            ) : (
                <tr>
                    <td colSpan="6">No hay Pagos registrados.</td>
                </tr>
            )}
            </tbody>
        </table>
    </>
    );
}

