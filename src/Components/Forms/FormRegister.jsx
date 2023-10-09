
function Register() {
  return (
    <form action="" method="post" className="flex flex-col items-center gap-y-4 px-5">
        <h2 className="text-4xl text-verde-rgb filter saturate-200">Regístrate</h2>
        <div className="flex gap-2 max-sm:flex-col">
            <div className="relative flex flex-col gap-1">
                <label htmlFor="" className="text-base text-black">Nombres:</label>
                <input type="text" name="" id="" className="border-2 h-[40px] w-full rounded-sm outline-none transform duration-200 border-verde-rgb p-2 text-base filter focus:saturate-200" />
            </div>
            <div className="relative flex flex-col gap-1">
                <label htmlFor="" className="text-base text-black">Apellidos:</label>
                <input type="text" name="" id="" className="border-2 h-[40px] w-full rounded-sm outline-none transform duration-200 border-verde-rgb p-2 text-base filter focus:saturate-200" />
            </div>
        </div>
        <div className="flex gap-2 max-sm:flex-col">
            <div className="relative flex flex-col gap-1">
                <label htmlFor="" className="text-base text-black">Celular:</label>
                <input type="text" name="" id="" className="border-2 h-[40px] w-full rounded-sm outline-none transform duration-200 border-verde-rgb p-2 text-base filter focus:saturate-200" />
            </div>
            <div className="relative flex flex-col gap-1">
                <label htmlFor="" className="text-base text-black">Correo Electrónico:</label>
                <input type="email" name="" id="" className="border-2 h-[40px] w-full rounded-sm outline-none transform duration-200 border-verde-rgb p-2 text-base filter focus:saturate-200" />
            </div>
        </div>
        <div className="flex gap-2 max-sm:flex-col">
            <div className="relative flex flex-col gap-1">
                <label htmlFor="" className="text-base text-black">Contraseña:</label>
                <input type="password" name="" id="" className="border-2 h-[40px] w-full rounded-sm outline-none transform duration-200 border-verde-rgb p-2 text-base filter focus:saturate-200" />
            </div>
            <div className="relative flex flex-col gap-1">
                <label htmlFor="" className="text-base text-black">Repetir Contrseña:</label>
                <input type="password" name="" id="" className="border-2 h-[40px] w-full rounded-sm outline-none transform duration-200 border-verde-rgb p-2 text-base filter focus:saturate-200" />
            </div>
        </div>
    </form>
  )
}

export default Register