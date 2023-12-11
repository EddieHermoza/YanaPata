"use client"
import { useForm,Controller} from "react-hook-form"
import { useState,useEffect } from "react"
import { PagoCreaado } from "../actions"
import { ToastAction } from "@/Components/ui/toast"
import { useToast } from "@/Components/ui/use-toast"
import { ListarServicios } from "@/lib/actions"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/Components/ui/dialog"

    import {
        Select,
        SelectContent,
        SelectGroup,
        SelectItem,
        SelectLabel,
        SelectTrigger,
        SelectValue,
      } from "@/Components/ui/select";

function FormCrearPago() {
    const [servicios,setServicios]=useState([])
    const {register,handleSubmit,control,reset, formState:{errors}} = useForm();
    const [enviando, setEnviando] = useState(false);
    const [open,setOpen] = useState(false)
    const [error,setError] = useState(null);
    const { toast } = useToast()


    const onSubmit =handleSubmit( async (data) => {
        setEnviando(true)

        const id_servicio = data.servicio.indexOf(' ');
        const idServicio = parseInt(data.servicio.slice(0, id_servicio)); 

        const servicioEscogido = servicios.find(servicio => servicio.id === idServicio);

        const pago = {
            nombre: data.nombre,
            montoServicio:parseFloat(servicioEscogido.precio_min),
            adicional: parseFloat(data.adicional),
            servicio: idServicio,
            total: parseFloat(servicioEscogido.precio_min) + parseFloat(data.adicional),
            igv: (parseFloat(servicioEscogido.precio_min) + parseFloat(data.adicional)) * 0.18
        };
        const res = await PagoCreaado(pago)
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

    useEffect(() => {
        async function fetchServicios() {
          const data = await ListarServicios();
          setServicios(data);
        }
        fetchServicios()
    },[])


  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className="rounded-tl-md rounded-br-md text-black bg-verde text-xl px-6 py-2 transform duration-300 shadow-lg hover:shadow-verde/50 hover:text-white">Registrar Pago</DialogTrigger>
         <DialogContent>
          <DialogHeader>
            <DialogTitle>Registrar Pago</DialogTitle>
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
                <span className=" peer-focus:text-verde transform duration-200">Nombre del Cliente:</span>
              </label>

              <label htmlFor="" className="flex flex-col-reverse gap-1 w-full text-black">
                  <input 
                    type="number"
                    min="0"
                    step={0.1} 
                    name="" 
                    id=""
                    {... register("adicional",{
                      required: {
                        value:true,
                        message:'Este campo es requerido'
                      }
                    })}
                    className="peer border-b w-full outline-none border-black focus:border-b-verde-rgb p-2 filter saturate-[3] transform duration-200" />
                  {errors.precio && (
                      <span className="text-red-500 text-xs">{errors.precio.message} </span>
                  )} 
                  <span className=" peer-focus:text-verde transform duration-200">Monto Adicional:</span>
              </label>
              <label className="flex flex-col-reverse w-full">
                            <Controller
                                name="servicio"
                                control={control}
                                rules={{
                                    required: {
                                        value: true,
                                        message: 'Este campo es requerido'
                                    }
                                }}
                                render={({ field: { onChange, value } }) => (
                                    <Select onValueChange={onChange} defaultValue={'Predeterminado'}>
                                        <SelectTrigger className="w-auto gap-2 outline-none border-b-2 border-black transform duration-300 hover:border-verde" >
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem disabled value="Predeterminado"><span className="text-slate-400 text-sm">Seleccione un Servicio</span></SelectItem>
                                            {servicios.map((servicio, index) => (
                                                <SelectItem key={index} value={servicio.id+" "+servicio.nombre}> {servicio.nombre}</SelectItem>
                                            ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                            {errors.servicio && (
                                <span className="text-red-500 text-xs">{errors.servicio.message}</span>
                            )}
                            <span className="peer-focus:text-verde transform duration-200">Servicio Escogido:</span>
                        </label>
                <button className="bg-verde text-black p-2 rounded-bl-lg rounded-tr-lg w-full text-base hover:text-white shadow-lg hover:shadow-verde/50 transform duration-300"  disabled={enviando}>{enviando ? 'Registrando...' : 'Registrar Pago'}</button>     
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
export default FormCrearPago