import { FaSave } from "react-icons/fa";
export default function page() {
    return (
        <div className="w-full h-full flex flex-col gap-5 bg-white p-5 overflow-y-auto scrollbar-thin relative">
            <h2 className="text-3xl">Información de Cuenta</h2>
            <div className="max-sm:flex-col max-sm:text-sm flex justify-between w-full gap-2">
                <span className="text-gray-400">Fecha de Creacion: <span className="text-black">Fecha</span></span>
                <span className="text-gray-400">Ultima Modificación: <span className="text-black">Fecha</span></span>
            </div>
            <div className="flex flex-col h-full gap-10 relative">
                <h3 className="text-2xl">Datos Personales:</h3>
                <div className="flex flex-col gap-2  w-full border rounded-lg p-3 relative">
                    <span className="text-verde">Nombre:</span>
                    <span className="text-xs text-gray-400">Saber tus nombres nos ayuda a identificarte de mejor manera</span>
                    <form className="max-[400px]:flex-col gap-3 flex justify-between">
                        <input type="text" className="text-sm outline-none border-b  border-black p-2" />
                        <button className="border rounded-lg p-2 text-xs flex items-center gap-2 hover:border-verde hover:shadow transform duration-300"> <FaSave/> Guardar</button>
                    </form>
                </div>
                <div className="flex flex-col gap-3 w-full rounded-lg border p-3 relative">
                    <span className="text-verde">Apellidos:</span>
                    <span className="text-gray-400 text-xs">Tan importante como tus nombres</span>
                    <form className="max-[400px]:flex-col gap-3 flex justify-between">
                        <input type="text" className="text-sm outline-none border-b border-black p-2" />
                        <button className="border rounded-lg p-2 text-xs flex items-center gap-2 hover:border-verde hover:shadow transform duration-300"> <FaSave/> Guardar</button>
                    </form>
                </div>
                <div className="flex flex-col gap-3 w-full border p-3 rounded-lg relative">
                    <span className="text-verde">Número Telefónico</span>
                    <span className="text-gray-400 text-xs">Nuestra forma principal de contactarte</span>
                    <form className="max-[400px]:flex-col gap-3 flex justify-between">
                        <input type="text" className="text-sm outline-none border-b  border-black p-2" />
                        <button className="border rounded-lg p-2 text-xs flex items-center gap-2 hover:border-verde hover:shadow transform duration-300"> <FaSave/> Guardar</button>
                    </form>
                </div>
                <div className="flex flex-col gap-3 w-full border p-3 rounded-lg relative">
                    <span className="text-verde">Correo Electrónico:</span>
                    <span className="text-xs text-gray-400">Nuestro método de verificarte y una forma de contactarte</span>
                    <p>Nombre Cliente</p>
                </div>
            </div>
            <div className="max-sm:items-center flex flex-col gap-5 text-sm">
                <button className="transform duration-300 text-white border border-green-300 bg-green-300 hover:bg-green-400 shadow-lg hover:shadow-green-400/50 w-[300px] p-3">Cambiar Correo</button>
                <button className="transform duration-300 text-white border border-yellow-300 bg-yellow-300 hover:bg-yellow-400 shadow-lg hover:shadow-yellow-400/50 w-[300px] p-3">Cambiar Contraseña</button>
                <button className="transform duration-300 text-white border border-red-400 bg-red-400 hover:bg-red-500 shadow-lg hover:shadow-red-500/50 w-[300px] p-3">Eliminar Cuenta</button>
            </div>

        </div>
    )
}
