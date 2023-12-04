'use client'
import { CitaEnviada, ListarServicios } from "@/lib/actions";
import { format } from "date-fns"
import { useEffect } from "react";
import { useState } from "react";
import { useForm,Controller} from "react-hook-form"
import { Calendar as CalendarIcon } from "lucide-react"
import esLocale from 'date-fns/locale/es';
import { Calendar } from "@/Components/ui/calendar"
import { ToastAction } from "@/Components/ui/toast"
import { useToast } from "@/Components/ui/use-toast"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/Components/ui/popover"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/Components/ui/select";

function FormCita() {
    const { register,reset, control, handleSubmit,watch , formState: { errors } } = useForm();
    const [servicios,setServicios]= useState([])
    const [sending,setSending] =useState('');
    const [error,setError] = useState('')
    const { toast } = useToast()

    const validarHora = (value, fechaSolicitud) => {
        const selectedDate = new Date(fechaSolicitud);
        const selectedDay = selectedDate.getDay();
        const selectedTime = value;
      
        if (
            (selectedDay >= 1 && selectedDay <= 6 && (selectedTime < '09:00' || selectedTime > '18:00')) ||
            (selectedDay === 0 && (selectedTime < '09:00' || selectedTime > '12:00'))
        ) {
          return 'Hora invalida para la fecha';
        }
      
        return true; 
      };

      useEffect(() => {
        async function fetchServicios() {
          const data = await ListarServicios();
          setServicios(data);
        }
      
        fetchServicios();
      }, []);

      const onSubmit = handleSubmit(async (data) => {
        setSending(true)
        const id = data.servicio.indexOf(' ');
        const idServicio = parseInt(data.servicio.slice(0, id)); 
    
        const ClienteInfo={
            nombre:data.nombres,
            apellidos:data.apellidos,
            telefono:data.numero,
            correo:data.correo
        }

        const MascotaInfo = {
            nombre:data.nombreMasc,
            sexo:data.sexoMasc,
            tipo:data.tipo,
            raza:data.raza
        }

        const cita={
            fechaSolicitud:data.fechaSolicitud,
            horaSolicitud:data.hora,
            ClienteInfo:ClienteInfo,
            MascotaInfo:MascotaInfo,
            servicio:idServicio,
            asunto:data.motivo,
        }
        const res = await CitaEnviada(cita)

        if (res.ok) {
            reset()
            setSending(false)
            setError('')
            toast({
                title: res.message,
                description: "Te contactaremos lo más rapido que podamos",
                action: (
                  <ToastAction altText="Entendido">Entendido</ToastAction>
            )})
        } else {
            setSending(false)
            setError(res.message)
            toast({
                variant: "destructive",
                title: "Ups! Algo Salio Mal",
                description: "Intentalo más tarde",
                action: <ToastAction altText="Entendido">Entendido</ToastAction>,
              })
        }

      })

  return (
    <>
    <form className="w-full flex flex-col gap-10 text-sm" onSubmit={onSubmit}>
        <div className="flex flex-col gap-5">
            <span className="text-2xl text-verde">Información del Dueño :</span>

            <label className="flex md:w-[600px] flex-col-reverse">
                <input 
                    type="text"
                    {...register('nombres', {
                         required:{
                            value:true,
                            message:'Este campo es requerido'
                        } 
                    })}
                    className="peer border-b-2 text-black outline-none border-black focus:border-verde trasnform duration-300 p-2"
                />
                {errors.nombres && (
                    <span className="text-red-500 text-xs">{errors.nombres.message}</span>
                )}
                <span className="peer-focus:text-verde transform duration-200">Nombres :</span>
            </label>

            <label className="flex md:w-[600px] flex-col-reverse">
                <input 
                    type="text"
                    {...register('apellidos', { 
                        required:{
                            value:true,
                            message:'Este campo es requerido'
                        }
                    })}
                    className="peer border-b-2 text-black outline-none border-black focus:border-verde trasnform duration-300 p-2"
                />
                {errors.apellidos && (
                    <span className="text-red-500 text-xs">{errors.apellidos.message}</span>
                )}
                <span className="peer-focus:text-verde transform duration-200">Apellidos :</span>
            </label>

            <label className="flex md:w-[600px] flex-col-reverse">
                <input 
                    type="email"
                    {...register('correo', { 
                        required:{
                            value:true,
                            message:'Este campo es requerido'
                        } 
                    })}
                    className="peer border-b-2 text-black outline-none border-black focus:border-verde trasnform duration-300 p-2"
                />
                {errors.correo && (
                    <span className="text-red-500 text-xs">{errors.correo.message}</span>
                )}
                <span className="peer-focus:text-verde transform duration-200">Correo Electrónico :</span>
            </label>

            <label className="flex md:w-[600px] flex-col-reverse">
                <input 
                    type="text"
                    {...register('numero', { 
                        required:{
                            value:true,
                            message:'Este campo es requerido'
                        } 
                    })}
                    className="peer border-b-2 text-black outline-none border-black focus:border-verde trasnform duration-300 p-2"
                />
                {errors.numero && (
                    <span className="text-red-500 text-xs">{errors.numero.message}</span>
                )}
                <span className="peer-focus:text-verde transform duration-200">Teléfono de contacto :</span>
            </label>
        </div>
        
        <div className="flex flex-col gap-5">
            <span className="text-2xl text-verde">Información de la mascota :</span>

            <label className="flex md:w-[600px] flex-col-reverse">
                <input 
                    type="text"
                    {...register('nombreMasc', { 
                        required:{
                            value:true,
                            message:'Este campo es requerido'
                        }
                     })}
                    className="peer border-b-2 text-black outline-none border-black focus:border-verde trasnform duration-300 p-2"
                />
                {errors.nombreMasc && (
                    <span className="text-red-500 text-xs">{errors.nombreMasc.message}</span>
                )}
                <span className="peer-focus:text-verde transform duration-200">Nombre de la Mascota : </span>
            </label>

            <div className="relative max-sm:gap-5 sm:gap-2 md:w-[600px] flex max-md:flex-col ">
                <label htmlFor="" className="flex max-sm:w-full sm:w-1/2 flex-col-reverse">
                    <Controller
                        name="sexoMasc"
                        control={control}
                        rules={{
                            required: {
                                value: true,
                                message: 'Este campo es requerido'
                            }
                        }}
                        defaultValue="Predeterminado"
                        render={({ field: { onChange, value } }) => (
                            <Select onValueChange={onChange} defaultValue="Predeterminado" >
                                <SelectTrigger className="w-auto gap-2 outline-none border-b-2 border-black transform duration-300 hover:border-verde" >
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem disabled value="Predeterminado"><span className="text-slate-400 text-sm">Seleccione un Sexo</span></SelectItem>
                                        <SelectItem value="Macho">Macho</SelectItem>
                                        <SelectItem value="Hembra">Hembra</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        )}
                    />
                    {errors.sexoMasc && (
                        <span className="text-red-500 text-xs">{errors.sexoMasc.message}</span>
                                )}
                    <span className="peer-focus:text-verde transform duration-200">Sexo : </span>
                </label>
                <label htmlFor="" className="flex max-sm:w-full sm:w-1/2 flex-col-reverse">
                    <Controller
                        name="tipo"
                        control={control}
                        rules={{
                            required: {
                                value: true,
                                message: 'Este campo es requerido'
                            }
                        }}
                        defaultValue={'Predeterminado'}
                        render={({ field: { onChange, value } }) => (
                            <Select onValueChange={onChange} defaultValue={'Predeterminado'}>
                                <SelectTrigger className="w-auto gap-2 outline-none border-b-2 border-black transform duration-300 hover:border-verde" >
                                     <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem disabled value="Predeterminado"><span className="text-slate-400 text-sm">Seleccione un Tipo</span></SelectItem>
                                        <SelectItem value="Felino">Felino</SelectItem>
                                        <SelectItem value="Canino">Canino</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        )}
                    />
                    {errors.tipo && (
                        <span className="text-red-500 text-xs">{errors.tipo.message}</span>
                                )}
                    <span className="peer-focus:text-verde transform duration-200">Tipo : </span>
                </label> 
            </div>

            <label className="flex md:w-[600px] flex-col-reverse">
                <input 
                    type="text"
                    {...register('raza', { 
                        required:{
                            value:true,
                            message:'Este campo es requerido'
                        }
                     })}
                    className="peer border-b-2 text-black outline-none border-black focus:border-verde trasnform duration-300 p-2"
                />
                {errors.raza && (
                    <span className="text-red-500 text-xs">{errors.raza.message}</span>
                )}
                <span className="peer-focus:text-verde transform duration-200">Raza de la Mascota :</span>
            </label>
        </div>
        <div className="flex flex-col gap-5">
            <span className="text-2xl text-verde">Información de la cita :</span>

            <div className="relative md:w-[600px] max-sm:gap-5 sm:gap-2 flex max-md:flex-col ">
                <label className="flex w-full md:w-1/2  flex-col-reverse">
                    <Controller
                        name="fechaSolicitud"
                        control={control}
                        rules={{ required: 'Este campo es requerido' }}
                        render={({ field: { onChange, value } }) => (
                                <Popover>
                                    <PopoverTrigger className="w-full text-sm">
                                    <span className="flex gap-2 items-center w-auto p-2 border-b-2 border-black hover:border-verde transform duration-300">
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {value ? format(value, "PPP", { locale: esLocale }) : <span className="text-slate-400 text-sm ">Seleccione una Fecha </span>}
                                    </span>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                    <Calendar

                                        mode="single"
                                        selected={value}
                                        onSelect={(selectedDate) => onChange(selectedDate)}
                                        disabled={(date) => {
                                            const tomorrow = new Date();
                                            tomorrow.setDate(tomorrow.getDate() + 1); 
                                            tomorrow.setHours(0, 0, 0, 0); 
                                            return date < tomorrow;
                                        }}
                                    />
                                    </PopoverContent>
                                </Popover>
                        )}
                        />
                    {errors.fechaSolicitud && (
                        <span className="text-red-500 text-xs">{errors.fechaSolicitud.message}</span>
                    )}
                    <span className="peer-focus:text-verde transform duration-200">Fecha Preferencial:</span>
                </label>
                <label className="flex max-md:w-full md:w-1/2 flex-col-reverse">
                    <input
                        placeholder="Seleccione un hora" 
                        type="time"
                        {...register('hora', { 
                            required: 'Este campo es requerido',
                            validate: {
                                validatePreferredTime: value => validarHora(value, watch('fechaSolicitud'))
                            }
                        })}
                        className="peer bg-white border-b-2 text-black outline-none cursor-pointer hover:border-verde border-black focus:border-verde trasnform duration-300 w-full p-2"
                    />
                    {errors.hora && (
                        <span className="text-red-500 text-xs">{errors.hora.message}</span>
                    )}
                    <span className="peer-focus:text-verde transform duration-200">Hora Preferencial :</span>
                </label>
            </div>
            <label className="flex flex-col-reverse md:w-[600px]">
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
                <span className="peer-focus:text-verde transform duration-200">Servicio :</span>
            </label>

            <label className="flex flex-col-reverse">
                <textarea 
                    cols="30" 
                    rows="6" 
                    {...register('motivo', { required: 'Este campo es requerido' })}
                    className="peer border-2 text-black outline-none border-black focus:border-verde trasnform duration-300 p-2 rounded"
                ></textarea>
                {errors.motivo && (
                    <span className="text-red-500 text-xs">{errors.motivo.message}</span>
                )}
                <span className="peer-focus:text-verde transform duration-200">Agregue Detalles :</span>
            </label>
        </div>
        <button className={`bg-verde p-2 text-xl w-full rounded-tl-xl rounded-br-xl ${sending ? 'shadow-verde/50 text-white':''}  shadow-lg hover:text-white hover:shadow-verde/50 text-black transform duration-300`}
            disabled={sending}> 
            {sending ? "Enviando..." : "Solicitar una Cita"}
        </button>
        {error && (
          <span className="text-red-500 text-xs">{error}</span>
        )}
    </form>
    </>
  )
}

export default FormCita