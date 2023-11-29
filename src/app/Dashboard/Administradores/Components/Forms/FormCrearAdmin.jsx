"use client"
import { useForm} from "react-hook-form"
import { useState } from "react"
import { AdminCreado } from "../../actions";

function CrearAdmin() {
    const {register,handleSubmit,reset, formState:{errors}} = useForm();

    const [enviando, setEnviando] = useState(false);

    const [error,setError] = useState(null);


    const onSubmit =handleSubmit( async (data) => {
        setEnviando(true);
        const res = await AdminCreado(data)
        if (res.ok) {
          setEnviando(false);
          setError('')
          reset()
        } else {
          setEnviando(false)
          setError(res.message)
        }
    });

  

  return (
    <form onSubmit={onSubmit}  className="flex flex-col items-center justify-between text-sm max-sm:gap-3 max-lg:gap-4 lg:gap-5 min-h-[500px]">
        <label htmlFor="" className="flex flex-col-reverse gap-1 w-full text-black">
          <input 
            type="text"
            name="" 
            id=""
            {... register("nombres",{
              required: {
                value:true,
                message:'Este campo es requerido'
              }
            })}
            className="peer  border-b focus:border-b-2 w-full outline-none border-black focus:border-b-verde-rgb p-2 filter saturate-[3] " />
            {errors.nombres && (
                <span className="text-red-500 text-xs">{errors.nombres.message} </span>
            )} 
          <span className="peer-focus:text-verde-rgb filter saturate-200 transform duration-200">Nombres:</span>
        </label>

        <label htmlFor="" className="flex flex-col-reverse gap-1 w-full text-black">
            <input 
              type="text" 
              name="" 
              id=""
              {... register("apellidos",{
                required: {
                  value:true,
                  message:'Este campo es requerido'
                }
              })}
              className="peer  border-b focus:border-b-2 w-full outline-none border-black focus:border-b-verde-rgb p-2 filter saturate-[3] " />
            {errors.apellidos && (
                <span className="text-red-500 text-xs">{errors.apellidos.message} </span>
            )} 
            <span className=" peer-focus:text-verde-rgb filter saturate-200 transform duration-200">Apellidos:</span>
        </label>
        <label htmlFor="" className="flex flex-col-reverse gap-1 w-full text-black">
            <input 
              type="email" 
              name="" 
              id=""
              {... register("email",{
                required: {
                  value:true,
                  message:'Este campo es requerido'
                }
              })}
              className="peer  border-b focus:border-b-2 w-full outline-none border-black focus:border-b-verde-rgb p-2 filter saturate-[3] " />
            {errors.email && (
                <span className="text-red-500 text-xs">{errors.email.message} </span>
            )} 
            <span className=" peer-focus:text-verde-rgb filter saturate-200 transform duration-200">Correo Electrónico:</span>
        </label>
        <label htmlFor="" className="flex flex-col-reverse  gap-1 w-full text-black">
            <input 
              type="password" 
              name="" 
              id=""
              {... register("password",{
                required: {
                  value:true,
                  message:'Este campo es requerido'
                }
              })}
              className="peer  border-b focus:border-b-2 w-full outline-none border-black focus:border-b-verde-rgb p-2 filter saturate-[3] " />
            {errors.password && (
                <span className="text-red-500 text-xs">{errors.password.message} </span>
            )} 
            <span className=" peer-focus:text-verde-rgb filter saturate-200 transform duration-200">Contraseña:</span>
        </label>
        <button className="bg-verde-rgb text-white saturate-200 p-2 rounded-bl-lg rounded-tr-lg hover:saturate-[3] hover:shadow-lg filter w-full text-base hover:text-black transform duration-300"  disabled={enviando}>{enviando ? 'Registrando...' : 'Registrar Administrador'}</button>
        {error && (
          <span className="text-red-500 text-xs">{error}</span>
        )}
    </form>
  )
}
export default CrearAdmin