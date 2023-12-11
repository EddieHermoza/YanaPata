"use client"
import { useForm} from "react-hook-form"
import { useState,useEffect } from "react"
import { ToastAction } from "@/Components/ui/toast"
import { useToast } from "@/Components/ui/use-toast"
import { ServicioModificado } from "../../actions";

function ModificarServicios({servicio,dialog}) {
    const {register,setValue,handleSubmit, formState:{errors}} = useForm();
    const [enviando, setEnviando] = useState(false);
    const [error,setError] = useState(null);
    const {toast} = useToast()

    const onSubmit =handleSubmit( async (data) => {
        data.id = parseInt(servicio.id);
        setEnviando(true)
        const res =await ServicioModificado(data)
        if (res.ok) {
          setError('')
          setEnviando(false)
          dialog(false)
          toast({
            title: res.message,
            action: (
              <ToastAction altText="Entendido">Entendido</ToastAction>
          )})
        }else{
          setEnviando(false)
          setError(res.message)
        }
    });


    useEffect(() => {
      setValue('nombre',servicio.nombre)
      setValue('precio_min',servicio.precio_min)
      setValue('descrip',servicio.descrip)
    },[] );
  return (
    <form onSubmit={onSubmit}  className="flex flex-col items-center text-sm max-sm:gap-3 max-lg:gap-4 lg:gap-5 min-h-[500px] justify-between">
        <label htmlFor="" className="flex flex-col-reverse gap-1 w-full text-black">
          <input 
            type="text"
            name="" 
            id=""
            {... register("nombre",{
              required: {
                value:true,
                message:'Este campo es requerido'
              }
            })}
            className="peer border-b focus:border-b-2 w-full outline-none border-black focus:border-b-verde p-2" />
            {errors.nombre && (
                <span className="text-red-500 text-xs">{errors.nombre.message} </span>
            )} 
          <span className=" peer-focus:text-verde transform duration-200">Nombre:</span>
        </label>

        <label htmlFor="" className="flex flex-col-reverse gap-1 w-full text-black">
            <input 
              type="number"
              min="0" 
              step={0.1}
              name="" 
              id=""
              {... register("precio_min",{
                required: {
                  value:true,
                  message:'Este campo es requerido'
                }
              })}
              className="peer  border-b focus:border-b-2 w-full outline-none border-black focus:border-b-verde p-2" />
            {errors.precio_min && (
                <span className="text-red-500 text-xs">{errors.precio_min.message} </span>
            )} 
            <span className=" peer-focus:text-verde transform duration-200">Precio:</span>
        </label>
        <label htmlFor="" className="flex flex-col-reverse gap-1 w-full text-black">
            <textarea 
                id=""  
                {... register("descrip",{
                    required: {
                      value:true,
                      message:'Este campo es requerido'
                    }
                })}
                 className="rounded-md peer w-full h-[140px] text-base border text-black outline-none border-black focus:border-verde transform duration-300 p-2" >
            </textarea>
            {errors.descrip && (
                <span className="text-red-500 text-xs">{errors.descrip.message} </span>
            )} 
            <span className="peer-focus:text-verde transform duration-300">Descripción :</span>
        </label>
       
        <button className="bg-verde text-black p-2 rounded-bl-lg rounded-tr-lg w-full text-base hover:text-white shadow-lg hover:shadow-verde/50 trasnform duration-300"  disabled={enviando}>{enviando ? 'Modificando...' : 'Modificar Servicio'}</button>
        {error && (
          <span className="text-red-500 text-xs">{error}</span>
        )}
    </form>
  )
}
export default ModificarServicios