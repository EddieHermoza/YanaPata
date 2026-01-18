"use client"
import { useForm} from "react-hook-form"
import Link from "next/link"
import { useState } from "react"
import { ToastAction } from "@/Components/ui/toast"
import { useToast } from "@/Components/ui/use-toast"
import { RegisterAction } from "@/lib/auth_actions"

function Register() {
    const {register,reset,handleSubmit,formState:{errors}} = useForm()
    const [error,setError]=useState(null)
    const {toast} = useToast()

    const onSubmit =handleSubmit( async (data) => {

        if (data.password !== data.passwordConfirm) {
           setError("Las contraseñas no coinciden")
           return
        }

        const res = await RegisterAction(data)
        if (res.ok) {
            toast({
                title: "Te registraste exitosamente",
                action: (
                  <ToastAction altText="Entendido">Entendido</ToastAction>
            )})
            reset()
            setError('')
        } else {
            setError(res.message)
        }
        
      });
  return (
    <form onSubmit={onSubmit}  className="flex flex-col items-center max-sm:gap-3 max-lg:gap-4 lg:gap-5">
        <h2 className="text-4xl">Regístrate</h2>
        <label htmlFor="" className="flex flex-col-reverse gap-1 text-xl w-full text-black">
            <input 
                type="text" 
                name="" 
                id=""
                {... register("nombres",{
                    required: {
                        value:true,
                        message: 'Este campo es requerido'
                    }
                })}
                className="peer border-b-2 w-full outline-none border-black focus:border-b-verde p-2 transform duration-300" />
            {errors.nombres && (
                <span className="text-red-500 text-xs">{errors.nombres.message} </span>
            )}
            <span className=" peer-focus:text-verde transform duration-300">Nombres:</span>
        </label>
        <label htmlFor="" className="flex flex-col-reverse gap-1 text-xl w-full text-black">
            <input 
                type="text" 
                name="" 
                id="correoYanaPata"
                {... register("apellidos",{
                    required: {
                        value:true,
                        message: 'Este campo es requerido'
                    }
                })}
                className="peer border-b-2 w-full outline-none border-black focus:border-b-verde p-2 transform duration-300" />
            {errors.apellidos && (
                <span className="text-red-500 text-xs">{errors.apellidos.message} </span>
            )}
            <span className=" peer-focus:text-verde transform duration-300">Apellidos:</span>
        </label>
        <label htmlFor="" className="flex flex-col-reverse gap-1 text-xl w-full text-black">
            <input 
                type="email" 
                name="" 
                id=""
                {... register("email",{
                    required: {
                        value:true,
                        message: 'Este campo es requerido'
                    }
                })}
                className="peer border-b-2 w-full outline-none border-black focus:border-b-verde p-2 transform duration-300" />
            {errors.email && (
                <span className="text-red-500 text-xs">{errors.email.message} </span>
            )}
            <span className=" peer-focus:text-verde transform duration-300">Correo Electrónico:</span>
        </label>
        <label htmlFor="" className="flex flex-col-reverse gap-1 text-xl w-full text-black">
            <input 
                type="tel" 
                name="" 
                id=""
                {... register("telefono",{
                    required: {
                        value:true,
                        message: 'Este campo es requerido'
                    }
                })}
                className="peer border-b-2 w-full outline-none border-black focus:border-b-verde p-2 transform duration-300" />
            {errors.telefono && (
                <span className="text-red-500 text-xs">{errors.telefono.message} </span>
            )}
            <span className=" peer-focus:text-verde transform duration-300">Número Telefónico:</span>
        </label>
        <label htmlFor="" className="flex flex-col-reverse gap-1 text-xl w-full text-black">
            <input 
                type="password" 
                name="" 
                id="" 
                {... register("password",{
                    required: {
                        value:true,
                        message: 'Este campo es requerido'
                    }
                })}
                className="peer border-b-2 w-full outline-none border-black focus:border-b-verde p-2 transform duration-300" /> 
            {errors.password && (
                <span className="text-red-500 text-xs">{errors.password.message} </span>
            )}
            <span className=" peer-focus:text-verde transform duration-300">Contraseña:</span>
        </label>
        <label htmlFor="" className="flex flex-col-reverse gap-1 text-xl w-full text-black">
            <input 
                type="password" 
                name="" 
                id=""
                {... register("passwordConfirm",{
                    required: {
                        value:true,
                        message: 'Este campo es requerido'
                    }
                })}
                className="peer border-b-2 w-full outline-none border-black focus:border-b-verde-rgb p-2 filter saturate-[3] transform duration-200" />
            {errors.passwordConfirm && (
                <span className="text-red-500 text-xs">{errors.passwordConfirm.message} </span>
            )} 
            <span className=" peer-focus:text-verde transform duration-300">Confirmar Contraseña:</span>
        </label>
        <div className="flex gap-2 text-base">
          <span>Tienes una cuenta?</span>
          <Link href="/auth/Login"  className=" text-verde hover:scale-110 transform duration-300">Inicia Sesión</Link>
        </div>
        <button className="bg-verde p-2 rounded-bl-lg rounded-tr-lg  shadow-lg hover:shadow-verde/50 w-2/3 text-xl hover:text-white text-black transform duration-300">Registrate</button>
        {error && (
          <span className="text-red-500 text-xs">{error}</span>
        )}
    </form>
  )
}

export default Register