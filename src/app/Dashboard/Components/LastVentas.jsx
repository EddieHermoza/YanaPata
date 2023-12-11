import { getLastPagos } from "../action";

async function LastVentas() {
    const datos= await getLastPagos()

    return (
        <ul className="w-full h-full flex flex-col gap-2  bg-white">
        {datos.map((pago,index) => (
            <li key={index} className="w-full h-24 flex flex-col justify-between p-4 bg-white rounded-sm shadow-md border-2 hover:scale-[1.02] hover:shadow-xl transform duration-300" >
                <div className="flex justify-between w-full">
                    <span className="max-sm:text-base sm:text-lg">{pago.nombreCliente}</span>
                    <span className="text-slate-400 text-xs">{pago.creacion}</span>
                </div>
                <div className="flex justify-between w-full">
                    <span className="max-sm:text-sm sm:text-base">S/{pago.monto_total.toString()}</span>
                    <span className="max-sm:text-sm sm:text-base">{pago.servicio_nombre}</span>
                </div>
            </li>
        ))}
      </ul>
    )
}

export default LastVentas