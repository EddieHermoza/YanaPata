
function Login() {

  function ValidarUser() {
    const correo = document.getElementById('correoYanaPata').value;
    const contra = document.getElementById('contraYanaPata').value;
  
    if (correo === 'yanapata@gmail.com' && contra === '123') {
      console.log("Correo Válido");
      setTimeout(() => {
        window.location.href = '/Dashboard'; // Redirige después de un breve retraso
      }, 100);
    } else {
      console.log('Correo no válido');
    }
  }

  return (
    <form onSubmit={ValidarUser} className="w-full flex flex-col items-center gap-y-4">
        <h2 className="text-4xl text-black font-bold">Iniciar Sesión</h2>
        <div className="relative w-full flex flex-col items-center gap-1">
            <label htmlFor="" className="text-base w-2/3 text-left text-black">Correo Electrónico:</label>
            <input
              type="email"
              name="correoYanaPata"
              id="correoYanaPata"
              className="text-base border-b-2 h-[40px] w-2/3  outline-none border-verde-rgb px-2 filter saturate-[3]"
            />
        </div>
        <div className="relative w-full flex flex-col items-center gap-1">
            <label htmlFor="" className="text-base w-2/3  text-left text-black">Contraseña:</label>
            <input
              type="password"
              name="contraYanaPata"
              id="contraYanaPata"
              className="text-base border-b-2 h-[40px] w-2/3 outline-none  border-verde-rgb px-2 filter saturate-[3]"
            /> 
        </div>
        <button className="bg-verde-rgb text-white saturate-200 p-2 rounded-bl-lg rounded-tr-lg hover:saturate-[3] hover:shadow-lg filter w-2/3 text-xl hover:text-black trasnform duration-300">Iniciar Sesión</button>
    </form>

  )
}

export default Login