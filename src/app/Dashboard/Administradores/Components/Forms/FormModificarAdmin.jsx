"use client"
import { useForm} from "react-hook-form"
import { useState,useEffect } from "react"
import { AdminModificado } from "../../actions"
import { ToastAction } from "@/Components/ui/toast"
import { useToast } from "@/Components/ui/use-toast"

function ModificarAdmin({admin,dialog}) {
    const { register,setValue, handleSubmit, reset, formState: { errors } } = useForm();
    const [enviando, setEnviando] = useState(false);
    const [error, setError] = useState(null);
    const { toast } = useToast()




    const onSubmit =handleSubmit( async (data) => {
      data.id=parseInt(admin.id)
  
        setEnviando(true);
        const res =await AdminModificado(data);
        if (res.ok) {
          setEnviando(false);
          setError('')
          dialog(false)
          toast({
            title: res.message,
            action: (
              <ToastAction altText="Entendido">Entendido</ToastAction>
          )})
        } else {
          setEnviando(false);
          setError(res.message)
        }
    });

    useEffect(() => {
      setValue('nombres', admin.nombres || '')
      setValue('apellidos', admin.apellidos || '')
      setValue('email', admin.email || '')
    },[] );

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
            className="peer border-b  w-full outline-none border-black focus:border-b-verde p-2" />
            {errors.nombres && (
                <span className="text-red-500 text-xs">{errors.nombres.message} </span>
            )} 
          <span className=" peer-focus:text-verde transform duration-200">Nombres:</span>
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
              className="peer border-b  w-full outline-none border-black focus:border-b-verde p-2" />
            {errors.apellidos && (
                <span className="text-red-500 text-xs">{errors.apellidos.message} </span>
            )} 
            <span className=" peer-focus:text-verde transform duration-200">Apellidos:</span>
        </label>
        <label htmlFor="" className="flex flex-col-reverse  gap-1 w-full text-black">
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
              className="peer border-b  w-full outline-none border-black focus:border-b-verde p-2 " />
            {errors.email && (
                <span className="text-red-500 text-xs">{errors.email.message} </span>
            )} 
            <span className=" peer-focus:text-verde transform duration-200">Correo Electrónico:</span>
        </label>
        <label htmlFor="" className="flex flex-col-reverse  gap-1 w-full text-black">
            <input 
              type="password" 
              name="" 
              id=""
              {... register("password")}
              className="peer border-b  w-full outline-none border-black focus:border-b-verde p-2" />
            <span className=" peer-focus:text-verde transform duration-200">Nueva Contraseña:</span>
        </label>
        <button className="bg-verde text-black p-2 rounded-bl-lg rounded-tr-lg w-full text-base hover:text-white shadow-lg hover:shadow-verde/50 trasnform duration-300"  disabled={enviando}>{enviando ? 'Modificando...' : 'Modificar Administrador'}</button>
        {error && (
          <span className="text-red-500 text-xs">{error}</span>
        )}
    </form>
  )
}
export default ModificarAdmin