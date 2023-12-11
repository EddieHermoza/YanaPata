import { BiMoneyWithdraw } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { MdOutlinePets } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { getIngresos,getCountClientes,getCountCitas,getCountMascotas } from "../action";
    async function VentasCard() {
        const ventas = await getIngresos()
        return (
            <div className="h-28 w-full bg-white rounded-md shadow-lg border p-2 flex justify-end relative">
                <div className="absolute -top-5 left-5 bg-gradient-to-r from-yellow-300  to-yellow-400 h-20 w-20 flex items-center justify-center rounded shadow-xl text-white">
                    <BiMoneyWithdraw  size={50} className=""/>
                </div>
                <div className="flex flex-col justify-between items-end relative">
                    <span className="text-xl">Ingresos:</span>
                    <span className="text-2xl text-neutral-600 tracking-widest">S/{ventas}</span>
                </div>
                <span className="absolute bottom-2 left-2 text-gray-400 text-sm">Actualizado Hoy</span>
            </div>
        )
    }

    async function MascotaCard() {
        const mascotas = await getCountMascotas()
        return (
            <div className="h-28 w-full bg-white rounded-md shadow-lg border p-2 flex justify-end relative">
                <div className="absolute -top-5 left-5 bg-gradient-to-r from-blue-500  to-blue-600 h-20 w-20 flex items-center justify-center rounded shadow-xl text-white">
                    <MdOutlinePets  size={50} className=""/>
                </div>
                <div className="flex flex-col justify-between items-end relative">
                    <span className="text-xl">Mascotas Registradas</span>
                    <span className="text-2xl text-neutral-600 tracking-widest">{mascotas}</span>
                </div>
                <span className="absolute bottom-2 left-2 text-gray-400 text-sm">Actualizado Hoy</span>
            </div>
        )
    }

    async function UserCard() {
        const clientes = await getCountClientes()
        return (
            <div className="h-28 w-full bg-white rounded-md shadow-lg border p-2 flex justify-end relative">
                <div className="absolute -top-5 left-5 bg-gradient-to-r from-green-500  to-green-600 h-20 w-20 flex items-center justify-center rounded shadow-xl text-white">
                    <FiUsers  size={50} className=""/>
                </div>
                <div className="flex flex-col justify-between items-end relative">
                    <span className="text-xl">Clientes Registrados</span>
                    <span className="text-2xl text-neutral-600 tracking-widest">{clientes}</span>
                </div>
                <span className="absolute bottom-2 left-2 text-gray-400 text-sm">Actualizado Hoy</span>
            </div>
        )
    }

    async function NotisCard() {
        const citas = await getCountCitas()
        return (
            <div className="h-28 w-full bg-white rounded-md shadow-lg border p-2 flex justify-end relative">
                <div className="absolute -top-5 left-5 bg-gradient-to-r from-orange-500  to-orange-600 h-20 w-20 flex items-center justify-center rounded shadow-xl text-white">
                    <IoMdNotificationsOutline  size={50} className=""/>
                </div>
                <div className="flex flex-col justify-between items-end relative">
                    <span className="text-xl">Notificaciones</span>
                    <span className="text-2xl text-neutral-600 tracking-widest">{citas}</span>
                </div>
                <span className="absolute bottom-2 left-2 text-gray-400 text-sm">Actualizado Hoy</span>
            </div>
        )
    }

export {VentasCard,UserCard,MascotaCard,NotisCard}
