"use client"
import { useForm} from "react-hook-form"
import Link from "next/link"
import {signIn} from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"

function Login() {
  const {register,handleSubmit, formState:{errors}} = useForm();

  const [error,setError] = useState(null);

  const router=useRouter()
  const onSubmit =handleSubmit( async (data) => {
    const rspt= await signIn('credentials',{
      email:data.email,
      password:data.password,
      redirect: false
    })
    
    if(rspt.error){
      setError(rspt.error)
    } else {
      router.push('/Dashboard')
    }

  })

  return (
    <form onSubmit={onSubmit}  className="w-full flex flex-col items-center gap-10">
        <h2 className="text-4xl text-black font-bold">Iniciar Sesión</h2>
        <label htmlFor="" className="flex flex-col-reverse gap-2 text-xl w-full text-black">
          <input 
            type="email"
            name="correoYanaPata" 
            id="correoYanaPata"
            {... register("email",{
              required: {
                value:true,
                message:'Este campo es requerio'
              }
            })}
            className="peer border-b-2 w-full outline-none border-black focus:border-b-verde-rgb p-2 filter saturate-[3] transform duration-200" />
            {errors.email && (
                <span className="text-red-500 text-xs">{errors.email.message} </span>
            )} 
          <span className=" peer-focus:text-verde-rgb filter saturate-200 transform duration-200">Correo Electrónico:</span>
        </label>

        <label htmlFor="" className="flex flex-col-reverse gap-1 text-xl w-full text-black">
            <input 
              type="password" 
              name="contraYanaPata" 
              id="contraYanaPata"
              {... register("password",{
                required: {
                  value:true,
                  message:'Este campo es requerio'
                }
              })}
              className="peer border-b-2 w-full outline-none border-black focus:border-b-verde-rgb p-2 filter saturate-[3] transform duration-200" />
            {errors.password && (
                <span className="text-red-500 text-xs">{errors.password.message} </span>
            )} 
            <span className=" peer-focus:text-verde-rgb filter saturate-200 transform duration-200">Contraseña:</span>
        </label>
        <div className="flex gap-2 text-base">
          <span>No tienes una cuenta?</span>
          <Link href="/auth/Registro" className="text-verde-rgb filter saturate-200 hover:scale-110 transform duration-200">Registrate</Link>
        </div>
        <button className="bg-verde-rgb text-white saturate-200 p-2 rounded-bl-lg rounded-tr-lg hover:saturate-[3] hover:shadow-lg filter w-2/3 text-xl hover:text-black trasnform duration-300" >Iniciar Sesión</button>
        {error && (
          <span className="text-red-500 text-xs">{error}</span>
        )}
    </form>
  )
}

export default Login