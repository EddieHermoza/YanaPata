
function Login() {

  return (
    <form action="" method="post" className="w-full flex flex-col items-center gap-y-4">
        <h2 className="text-4xl text-verde-rgb filter saturate-200">Inicia Sesión</h2>
        <div className="relative w-full flex flex-col items-center gap-1">
            <label htmlFor="" className="text-base w-2/3 text-left text-black">Correo Electrónico:</label>
            <input type="email" name="" id="" className="border-2 h-[40px] w-2/3 rounded-sm outline-none transform duration-200 border-verde-rgb p-2 text-xl filter focus:saturate-200" />
        </div>
        <div className="relative w-full flex flex-col items-center gap-1">
            <label htmlFor="" className="text-base w-2/3  text-left text-black">Contraseña:</label>
            <input type="password" name="" id="" className="border-2 h-[40px] w-2/3 rounded-sm outline-none transform duration-200 border-verde-rgb p-2 text-xl filter focus:saturate-200" />
        </div>
    </form>

  )
}

export default Login