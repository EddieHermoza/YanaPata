
function Register() {
  return (
    <form action="" method="post" className="flex flex-col items-center gap-y-4 px-5">
        <h2 className="text-4xl text-verde-rgb filter saturate-200">Regístrate</h2>
        <div className="flex gap-2 max-sm:flex-col">
            <div className="relative flex flex-col">
                <label htmlFor="" className="text-base text-black">Nombres:</label>
                <input type="text" name="" id="" className="text-base border-b-2 h-[40px]  outline-none border-verde-rgb px-2 filter saturate-[3]" />
            </div>
            <div className="relative flex flex-col">
                <label htmlFor="" className="text-base text-black">Apellidos:</label>
                <input type="text" name="" id="" className="text-base border-b-2 h-[40px] outline-none border-verde-rgb px-2 filter saturate-[3]" />
            </div>
        </div>
        <div className="flex gap-2 max-sm:flex-col">
            <div className="relative flex flex-col">
                <label htmlFor="" className="text-base text-black">Celular:</label>
                <input type="text" name="" id="" className="text-base border-b-2 h-[40px]  outline-none border-verde-rgb px-2 filter saturate-[3]" />
            </div>
            <div className="relative flex flex-col ">
                <label htmlFor="" className="text-base text-black">Correo Electrónico:</label>
                <input type="email" name="" id="" className="text-base border-b-2 h-[40px]  outline-none border-verde-rgb px-2 filter saturate-[3]" />
            </div>
        </div>
        <div className="flex gap-2 max-sm:flex-col">
            <div className="relative flex flex-col ">
                <label htmlFor="" className="text-base text-black">Contraseña:</label>
                <input type="password" name="" id="" className="text-base border-b-2 h-[40px] outline-none border-verde-rgb px-2 filter saturate-[3]" />
            </div>
            <div className="relative flex flex-col ">
                <label htmlFor="" className="text-base text-black">Repetir Contraseña:</label>
                <input type="password" name="" id="" className="text-base border-b-2 h-[40px]  outline-none border-verde-rgb px-2 filter saturate-[3]" />
            </div>
        </div>
    </form>
  )
}

export default Register