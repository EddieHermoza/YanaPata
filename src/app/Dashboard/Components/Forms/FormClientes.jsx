"use client"
import { useForm} from "react-hook-form"
import Link from "next/link"
import { useRouter } from "next/navigation"


function FormCliente() {
    const {register,handleSubmit,formState:{errors}} = useForm()

    const router =useRouter();

    const onSubmit =handleSubmit( async (data) => {

        data.message='Crear'
        const rspt = await fetch('/api/ctrlClientes',{
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
    <form onSubmit={onSubmit}  className="flex flex-col items-center max-sm:gap-3 max-lg:gap-4 lg:gap-5">
        <h2 className="text-4xl text-verde-rgb filter saturate-200">Regístrate</h2>
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
                className="peer border-b-2 w-full outline-none border-black focus:border-b-verde-rgb p-2 filter saturate-[3] transform duration-200" />
            {errors.nombres && (
                <span className="text-red-500 text-xs">{errors.nombres.message} </span>
            )}
            <span className=" peer-focus:text-verde-rgb filter saturate-200 transform duration-200">Nombres:</span>
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
                className="peer border-b-2 w-full outline-none border-black focus:border-b-verde-rgb p-2 filter saturate-[3] transform duration-200" />
            {errors.apellidos && (
                <span className="text-red-500 text-xs">{errors.apellidos.message} </span>
            )}
            <span className=" peer-focus:text-verde-rgb filter saturate-200 transform duration-200">Apellidos:</span>
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
                className="peer border-b-2 w-full outline-none border-black focus:border-b-verde-rgb p-2 filter saturate-[3] transform duration-200" />
            {errors.email && (
                <span className="text-red-500 text-xs">{errors.email.message} </span>
            )}
            <span className=" peer-focus:text-verde-rgb filter saturate-200 transform duration-200">Correo Electrónico:</span>
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
                className="peer border-b-2 w-full outline-none border-black focus:border-b-verde-rgb p-2 filter saturate-[3] transform duration-200" />
            {errors.telefono && (
                <span className="text-red-500 text-xs">{errors.telefono.message} </span>
            )}
            <span className=" peer-focus:text-verde-rgb filter saturate-200 transform duration-200">Número Telefónico:</span>
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
                className="peer border-b-2 w-full outline-none border-black focus:border-b-verde-rgb p-2 filter saturate-[3] transform duration-200" /> 
            {errors.password && (
                <span className="text-red-500 text-xs">{errors.password.message} </span>
            )}
            <span className=" peer-focus:text-verde-rgb filter saturate-200 transform duration-200">Contraseña:</span>
        </label>
        <button className="bg-verde-rgb text-white saturate-200 p-2 rounded-bl-lg rounded-tr-lg hover:saturate-[3] hover:shadow-lg filter w-2/3 text-xl hover:text-black trasnform duration-300">Registrar Cliente</button>
    </form>
  )
}

export default FormCliente