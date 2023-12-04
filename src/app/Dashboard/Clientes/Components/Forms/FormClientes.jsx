"use client"
import { useForm} from "react-hook-form"
import { useState } from "react"
import { ClienteCreado } from "../../actions"
import { ToastAction } from "@/Components/ui/toast"
import { useToast } from "@/Components/ui/use-toast"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/Components/ui/dialog"

function FormCliente() {
    const[open,setOpen]=useState(false)

    const {register,handleSubmit,reset,formState:{errors}} = useForm()
    
    const [enviando, setEnviando] = useState(false);

    const [error,setError] = useState(null);

    const { toast } = useToast()

    const onSubmit =handleSubmit( async (data) => {
        setEnviando(true)
        const res = await ClienteCreado(data)
        
        if(res.ok){
            setEnviando(false)
            setError('')
            reset()
            setOpen(false)
            toast({
                title: res.message,
                action: (
                  <ToastAction altText="Entendido">Entendido</ToastAction>
              )})
        }else {
            setEnviando(false)
            setError(res.message)
        }
        
      });
  return (
    <>
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className="rounded-tl-md rounded-br-md text-black bg-verde text-xl px-6 py-2 transform duration-300 shadow-lg hover:shadow-verde/50 hover:text-white">Registrar Cliente</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Registrar Cliente</DialogTitle>
                    <DialogDescription>
                        Todos los campos son necesarios
                    </DialogDescription>
                </DialogHeader>
                <div>
                <form onSubmit={onSubmit}  className="flex flex-col items-center justify-between text-sm max-sm:gap-3 max-lg:gap-4 lg:gap-5 min-h-[500px]">
                    <label htmlFor="" className="flex flex-col-reverse gap-1 w-full text-black">
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
                            id="correoYanaPata"
                            {... register("apellidos",{
                                required: {
                                    value:true,
                                    message: 'Este campo es requerido'
                                }
                            })}
                            className="peer border-b w-full outline-none border-black focus:border-b-verde p-2 transform duration-200" />
                        {errors.apellidos && (
                            <span className="text-red-500 text-xs">{errors.apellidos.message} </span>
                        )}
                        <span className=" peer-focus:text-verde transform duration-200">Apellidos:</span>
                    </label>
                    <label htmlFor="" className="flex flex-col-reverse gap-1 w-full text-black">
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
                            className="peer border-b w-full outline-none border-black focus:border-b-verde p-2 transform duration-200" />
                        {errors.email && (
                            <span className="text-red-500 text-xs">{errors.email.message} </span>
                        )}
                        <span className=" peer-focus:text-verde transform duration-200">Correo Electrónico:</span>
                    </label>
                    <label htmlFor="" className="flex flex-col-reverse gap-1 w-full text-black">
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
                            className="peer border-b w-full outline-none border-black focus:border-b-verde p-2 transform duration-200" />
                        {errors.telefono && (
                            <span className="text-red-500 text-xs">{errors.telefono.message} </span>
                        )}
                        <span className=" peer-focus:text-verde transform duration-200">Número Telefónico:</span>
                    </label>
                    <label htmlFor="" className="flex flex-col-reverse gap-1 w-full text-black">
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
                            className="peer border-b w-full outline-none border-black focus:border-b-verde p-2 transform duration-200" /> 
                        {errors.password && (
                            <span className="text-red-500 text-xs">{errors.password.message} </span>
                        )}
                        <span className=" peer-focus:text-verde transform duration-200">Contraseña:</span>
                    </label>
                    <button className="bg-verde text-black p-2 rounded-bl-lg rounded-tr-lg w-full text-base hover:text-white shadow-lg hover:shadow-verde/50 transform duration-300"  disabled={enviando}>{enviando ? 'Registrando...' : 'Registrar Cliente'}</button>
                    {error && (
                    <span className="text-red-500 text-xs">{error}</span>
                    )}
                </form>                     
                </div>
            </DialogContent>
        </Dialog>
    
    </>

  )
}

export default FormCliente