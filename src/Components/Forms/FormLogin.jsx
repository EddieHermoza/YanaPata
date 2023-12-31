"use client"
import { useForm } from "react-hook-form"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { LoginAction } from "@/lib/auth_actions"

function Login() {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const { register,reset, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState(null);
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {

      setIsLoggingIn(true); 
      const res = await LoginAction(data)
      if (res.ok) {
        if (res.rol === "administrador") {
            router.push("/Dashboard")
            router.refresh()
            reset()
            setIsLoggingIn(false)
            setError('')
        } else {
          router.push("/")
          router.refresh()
          reset()
          setIsLoggingIn(false)
          setError('')
        }
      } else{
        setError(res.message)
        setIsLoggingIn(false)
      }
  });
  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col items-center gap-10">
      <h2 className="text-4xl text-black font-bold">Iniciar Sesión</h2>
      <label htmlFor="" className="flex flex-col-reverse gap-2 text-xl w-full text-black">
        <input
          type="email"
          name="correoYanaPata"
          id="correoYanaPata"
          {...register("email", {
            required: {
              value: true,
              message: 'Este campo es requerio'
            }
          })}
          className="peer border-b-2 w-full outline-none border-black focus:border-b-verde p-2  transform duration-200" />
        {errors.email && (
          <span className="text-red-500 text-xs">{errors.email.message} </span>
        )}
        <span className=" peer-focus:text-verde transform duration-300">Correo Electrónico:</span>
      </label>

      <label htmlFor="" className="flex flex-col-reverse gap-1 text-xl w-full text-black">
        <input
          type="password"
          name="contraYanaPata"
          id="contraYanaPata"
          {...register("password", {
            required: {
              value: true,
              message: 'Este campo es requerio'
            }
          })}
          className="peer border-b-2 w-full outline-none border-black focus:border-b-verde p-2 transform duration-200" />
        {errors.password && (
          <span className="text-red-500 text-xs">{errors.password.message} </span>
        )}
        <span className=" peer-focus:text-verde transform duration-300">Contraseña:</span>
      </label>
      <div className="flex gap-2 text-base">
        <span>No tienes una cuenta?</span>
        <Link href="/auth/Registro" className="text-verde hover:scale-110 transform duration-300">Registrate</Link>
      </div>
      <button
        className="bg-verde p-2 rounded-bl-lg rounded-tr-lg  shadow-lg hover:shadow-verde/50 w-2/3 text-xl hover:text-white text-black transform duration-300"
        disabled={isLoggingIn} 
      >
        {isLoggingIn ? 'Iniciando sesión...' : 'Iniciar Sesión'}
      </button>
      {error && (
        <span className="text-red-500 text-xs">{error}</span>
      )}
    </form>
  )
}

export default Login