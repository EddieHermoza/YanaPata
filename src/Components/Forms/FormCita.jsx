'use client'
import { CitaEnviada, ListarServicios } from "@/lib/actions";
import { format } from "date-fns"
import { useEffect } from "react";
import { useState } from "react";
import { useForm,Controller} from "react-hook-form"
import { Calendar as CalendarIcon } from "lucide-react"
 
import { Calendar } from "@/Components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/Components/ui/popover"

function FormCita() {
    const {register,control,reset,handleSubmit,formState:{errors}} = useForm()
    const [servicios,setServicios]= useState([])
    const [sending,setSending] =useState('');
    const [error,setError] = useState('')
    const [date, setDate] = useState()


      useEffect(() => {
        async function fetchServicios() {
          const data = await ListarServicios();
          setServicios(data);
        }
      
        fetchServicios();
      }, []);

      const onSubmit = handleSubmit(async (data) => {
        setSending(true)
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
            servicio:parseInt(data.servicio),
            asunto:data.motivo,
        }
        const res = await CitaEnviada(cita)

        if (res.ok) {
            reset()
            setSending(false)
            setError('')
        } else {
            setSending(false)
            setError(res.message)
        }

      })

  return (
    <form className="w-full flex flex-col gap-10 " onSubmit={onSubmit}>
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

            <div className="relative md:w-[600px] gap-2 flex ">
                <label htmlFor="" className="flex w-1/2 flex-col-reverse">
                    <select 
                        {...register('sexoMasc', { 
                            required:{
                                value:true,
                                message:'Este campo es requerido'
                            }
                         })}
                        className="peer border-b-2 text-black outline-none border-black focus:border-verde trasnform duration-300 p-2"
                    >
                        <option value="" disabled className="">Seleccionar</option>
                        <option value="Macho">Macho</option>
                        <option value="Hembra">Hembra</option>
                    </select>
                    {errors.sexoMasc && (
                        <span className="text-red-500 text-xs">{errors.sexoMasc.message}</span>
                    )}
                    <span className="peer-focus:text-verde transform duration-200">Sexo : </span>
                </label>

                <label htmlFor="" className="flex w-1/2 flex-col-reverse">
                    <select 
                        {...register('tipo', { 
                            required:{
                                value:true,
                                message:'Este campo es requerido'
                            }
                         })}
                        className="peer border-b-2 text-black outline-none border-black focus:border-verde trasnform duration-300 p-2"
                    >
                        <option value="" disabled className="">Seleccionar</option>
                        <option value="Felino">Felino</option>
                        <option value="Canino">Canino</option>
                    </select>
                    {errors.tipo && (
                        <span className="text-red-500 text-xs">{errors.tipo.message}</span>
                    )}
                    <span className="peer-focus:text-verde transform duration-200">Tipo de Mascota :</span>
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
                    className="peer text-base border-b-2 text-black outline-none border-black focus:border-verde trasnform duration-300 p-2"
                />
                {errors.raza && (
                    <span className="text-red-500 text-xs">{errors.raza.message}</span>
                )}
                <span className="peer-focus:text-verde transform duration-200">Raza de la Mascota :</span>
            </label>
        </div>
        <div className="flex flex-col gap-5">
            <span className="text-2xl text-verde">Información de la cita :</span>

            <div className="relative md:w-[600px] gap-2 flex max-md:flex-col ">
            <Controller
                name="fechaSolicitud"
                control={control}
                defaultValue={null}
                render={({ field: { onChange, value } }) => (
                    <label className="flex w-1/2 flex-col-reverse">
                        <Popover>
                            <PopoverTrigger className="max-sm:w-[250px]">
                            <span className="flex gap-2 items-center w-auto p-2 border-b-2 border-black hover:border-verde transform duration-300">
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {value ? format(value, "PPP") : <span className="text-slate-400 text-sm ">Seleccione una fecha </span>}
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
                        <span className="peer-focus:text-verde transform duration-200">Fecha Preferencial:</span>
                    </label>
                )}
                />
                {errors.fechaSolicitud && (
                <span className="text-red-500 text-xs">{errors.fechaSolicitud.message}</span>
                )}
                <label htmlFor="" className="flex w-1/2 flex-col-reverse">
                    <input 
                        type="time"
                        {...register('hora', { required: 'Este campo es requerido' })}
                        className="peer border-b-2 text-black outline-none border-black focus:border-verde trasnform duration-300 p-2"
                    />
                    {errors.hora && (
                        <span className="text-red-500 text-xs">{errors.hora.message}</span>
                    )}
                    <span className="peer-focus:text-verde transform duration-200">Hora Preferencial :</span>
                </label>
            </div>

            <label className="flex flex-col-reverse md:w-[600px]">
                <select 
                    {...register('servicio', { required: 'Este campo es requerido' })}
                    className="peer border-b-2 text-black outline-none border-black focus:border-verde trasnform duration-300 p-2"
                >
                    <option value="" disabled className="">Seleccionar</option>
                    {servicios.map((servicio, index) => (
                        <option key={index} value={servicio.id}> {servicio.nombre}</option>
                    ))}
                </select>
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
        <button className={`bg-verde p-2 text-xl w-full rounded-tl-xl rounded-br-xl ${sending ? ' shadow-lg text-black':''} hover:shadow-lg hover:text-black text-white transform duration-300`}
            disabled={sending}> 
            {sending ? "Enviando..." : "Solicitar una Cita"}
        </button>
        {error && (
          <span className="text-red-500 text-xs">{error}</span>
        )}
    </form>
  )
}

export default FormCita