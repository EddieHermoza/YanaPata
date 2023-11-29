"use client"
import { useForm} from "react-hook-form"
import { useState } from "react"
import { ServicioCreado } from "../../actions";

function CrearServicio() {
    const {register,handleSubmit,reset, formState:{errors}} = useForm();
    const [enviando, setEnviando] = useState(false);
    const [error,setError] = useState(null);


    const onSubmit =handleSubmit( async (data) => {
        setEnviando(true)
        const res = await ServicioCreado(data)
        if (res.ok) {
          setError('')
          setEnviando(false)
          reset()
        } else {
          setEnviando(false)
          setError(res.message)
        }
    });


  return (
    <form onSubmit={onSubmit}  className="flex flex-col items-center max-sm:text-xs text-sm max-sm:gap-3 max-lg:gap-4 lg:gap-5 min-h-[500px] justify-between">
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
            className="peer border-b-2 w-full outline-none border-black focus:border-b-verde p-2 " />
            {errors.nombre && (
                <span className="text-red-500 text-xs">{errors.nombre.message} </span>
            )} 
          <span className=" peer-focus:text-verde transform duration-200">Nombre:</span>
        </label>

        <label htmlFor="" className="flex flex-col-reverse gap-1 w-full text-black">
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
                 className="peer w-full h-[140px] text-base border text-black outline-none border-black focus:border-verde transform duration-200 px-2" >
            </textarea>
            {errors.descrip && (
                <span className="text-red-500 text-xs">{errors.descrip.message} </span>
            )} 
            <span className="peer-focus:text-verde transform duration-200">Descripción :</span>
        </label>       
        <button className="bg-verde text-white p-2 rounded-bl-lg rounded-tr-lg hover:shadow-lg filter w-full text-base hover:text-black transform duration-300"  disabled={enviando}>{enviando ? 'Registrando...' : 'Registrar Servicio'}</button>
        {error && (
          <span className="text-red-500 text-xs">{error}</span>
        )}
    </form>
  )
}
export default CrearServicio