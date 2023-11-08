"use client"
import { useForm} from "react-hook-form"
import { useRouter } from "next/navigation"
import { useState } from "react"

function FormServicios() {
    const {register,handleSubmit, formState:{errors}} = useForm();

    const [error,setError] = useState(null);

    const router=useRouter()

    const onSubmit =handleSubmit( async (data) => {
        data.message = 'Crear';

        const rspt = await fetch('/api/ctrlServicios',{
            method:'POST',
            body:JSON.stringify(data),
            headers: {
                'Content-Type':'application/json'
            }
        })
            
        if (rspt.ok) {
            location.reload()
        }
            
    });

  

  return (
    <form onSubmit={onSubmit}  className="w-full flex flex-col items-center gap-6">
        <h2 className="text-2xl text-black font-bold">Crear Servicio</h2>
        <label htmlFor="" className="flex flex-col-reverse gap-1 text-base w-full text-black">
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
            className="peer border-b-2 w-full outline-none border-black focus:border-b-verde-rgb p-2 filter saturate-[3] transform duration-200" />
            {errors.nombre && (
                <span className="text-red-500 text-xs">{errors.nombre.message} </span>
            )} 
          <span className=" peer-focus:text-verde-rgb filter saturate-200 transform duration-200">Nombre:</span>
        </label>

        <label htmlFor="" className="flex flex-col-reverse gap-1 text-base w-full text-black">
            <input 
              type="number"
              min="0" 
              name="" 
              id=""
              {... register("precio",{
                required: {
                  value:true,
                  message:'Este campo es requerido'
                }
              })}
              className="peer border-b-2 w-full outline-none border-black focus:border-b-verde-rgb p-2 filter saturate-[3] transform duration-200" />
            {errors.precio && (
                <span className="text-red-500 text-xs">{errors.precio.message} </span>
            )} 
            <span className=" peer-focus:text-verde-rgb filter saturate-200 transform duration-200">Precio:</span>
        </label>
        <label htmlFor="" className="flex flex-col-reverse gap-1 text-base w-full text-black">
            <textarea 
                id=""  
                {... register("descrip",{
                    required: {
                      value:true,
                      message:'Este campo es requerido'
                    }
                })}
                 className="peer w-full h-[140px] text-base border text-black outline-none border-black focus:border-verde-rgb filter saturate-[3] trasnform duration-200 px-2" >
            </textarea>
            {errors.descrip && (
                <span className="text-red-500 text-xs">{errors.descrip.message} </span>
            )} 
            <span className="peer-focus:text-verde-rgb filter saturate-200 transform duration-200">Descripción :</span>
        </label>       
        <button className="bg-verde-rgb text-white saturate-200 p-2 rounded-bl-lg rounded-tr-lg hover:saturate-[3] hover:shadow-lg filter w-full text-base hover:text-black trasnform duration-300" >Registrar Servicio</button>
        {error && (
          <span className="text-red-500 text-xs">{error}</span>
        )}
    </form>
  )
}
export default FormServicios