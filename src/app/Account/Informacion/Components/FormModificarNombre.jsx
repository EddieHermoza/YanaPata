"use client"
import { FaSave } from "react-icons/fa";
import { useEffect } from "react";
import { useForm } from "react-hook-form"
import { ToastAction } from "@/Components/ui/toast"
import { useToast } from "@/Components/ui/use-toast"
import { CambiarNombres } from "../actions";


export default function FormModificarNombre({nombre,cliente}) {
    const id_cliente=parseInt(cliente)
    const {toast} = useToast()
    const {register,handleSubmit,setValue, formState:{errors}} = useForm();

    const onSubmit =handleSubmit(async(data)=>{
        const Datos={
            id:id_cliente,
            nombres:data.nombre
        }
        const res = await CambiarNombres(Datos)
        if (res.ok) {
            toast({
                title: res.message,
                action: (
                  <ToastAction altText="Entendido">Entendido</ToastAction>
              )})
        }

    })
    useEffect(()=>{
        setValue('nombre',nombre)
    },[])
    return (
        <>
            <form onSubmit={onSubmit} className="max-[400px]:flex-col gap-3 flex justify-between">
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
                </label>
                <button className="border rounded-lg p-2 text-xs flex items-center gap-2 hover:border-verde hover:shadow transform duration-300"> <FaSave/> Guardar</button>
            </form>
        </>
  )
}
