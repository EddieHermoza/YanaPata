"use client"
import { useForm} from "react-hook-form"
import { useState } from "react"
import { ServicioCreado } from "../../actions";
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

function CrearServicio() {
    const {register,handleSubmit,reset, formState:{errors}} = useForm();
    const [enviando, setEnviando] = useState(false);
    const [open,setOpen] = useState(false)
    const [error,setError] = useState(null);
    const { toast } = useToast()


    const onSubmit =handleSubmit( async (data) => {
        setEnviando(true)
        const res = await ServicioCreado(data)
        if (res.ok) {
          setError('')
          setEnviando(false)
          reset()
          setOpen(false)
          toast({
            title: res.message,
            action: (
              <ToastAction altText="Entendido">Entendido</ToastAction>
          )})
        } else {
          setEnviando(false)
          setError(res.message)
        }
    });


  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className="rounded-tl-md rounded-br-md text-black bg-verde text-xl px-6 py-2 transform duration-300 shadow-lg hover:shadow-verde/50 hover:text-white">Registrar Servicio</DialogTrigger>
         <DialogContent>
          <DialogHeader>
            <DialogTitle>Registrar Servicio</DialogTitle>
            <DialogDescription>
              Todos los campos son necesarios
            </DialogDescription>
          </DialogHeader>
          <div>
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
                  className="peer border-b w-full outline-none border-black focus:border-b-verde p-2 " />
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
                    className="peer border-b w-full outline-none border-black focus:border-b-verde-rgb p-2 filter saturate-[3] transform duration-200" />
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
                <button className="bg-verde text-black p-2 rounded-bl-lg rounded-tr-lg w-full text-base hover:text-white shadow-lg hover:shadow-verde/50 transform duration-300"  disabled={enviando}>{enviando ? 'Registrando...' : 'Registrar Servicio'}</button>     
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
export default CrearServicio