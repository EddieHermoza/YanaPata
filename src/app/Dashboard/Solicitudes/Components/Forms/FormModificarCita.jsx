"use client"
import { FiEdit } from "react-icons/fi";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/Components/ui/dialog"


import { useState,useEffect } from "react";
import { useForm} from "react-hook-form"
import { CitaModificada } from "@/app/Dashboard/Solicitudes/actions";


export default function ModificarCita({cita,servicios}) {
    const {setValue,register,handleSubmit, formState:{errors}} = useForm();
    const [enviando, setEnviando] = useState(false);
    const [open,setOpen]=useState(false)


    const onSubmit =handleSubmit( async (data) => {
        data.id = cita.id;
        setEnviando(true)
        const res = CitaModificada(data)
        if(res){
            setEnviando(false)
            setOpen(false)
        }

    });

    useEffect(() => {

        if (cita) {
            setValue('CitaID',cita.id || '');
            setValue('ClieNombre', cita.ClienteInfo.nombre || '');
            setValue('ClieApellidos', cita.ClienteInfo.apellidos || '');
            setValue('ClieCorreo', cita.ClienteInfo.correo || '');
            setValue('ClieTelefono', cita.ClienteInfo.telefono || '');

            setValue('mascota', cita.MascotaInfo.nombre || '');
            setValue('sexo', cita.MascotaInfo.sexo || '');
            setValue('tipo', cita.MascotaInfo.tipo || '');
            setValue('raza', cita.MascotaInfo.raza || '');
    
            setValue('fecha', cita.fechaSolicitud || '');
            setValue('hora', cita.horaSolicitud || '');
    
            
            setValue('servicio_id', cita.servicio_id || ''); 
            setValue('estado', cita.estado || ''); 
            setValue('detalles',cita.asunto || '');
        }
    }, []);
  return (
    <>
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className="transition-all px-3 py-2 bg-yellow-300 rounded-md hover:shadow-yellow-300/50 shadow-lg" aria-label="Editar" title="Editar">
            <FiEdit size={18}/>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Modificando la Cita {cita.id}</DialogTitle>
                <DialogDescription>
                    Todos Los campos son necesarios
                </DialogDescription>
            </DialogHeader>
            <div className="px-2 h-[600px] relative overflow-y-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-verde">
            <form className="w-full flex flex-col gap-7 text-sm" onSubmit={onSubmit}>
                <div className="flex flex-col gap-5 relative w-full">
                    <span className="text-xl text-verde-rgb filter saturate-200">Información del Dueño :</span>
                    <label htmlFor="" className="flex flex-col-reverse gap-1 w-full text-black">
                        <input 
                        type="text"
                        name="" 
                        id=""
                        {... register("ClieNombre",{
                        required: {
                            value:true,
                            message:'Este campo es requerido'
                        }
                        })}
                        className="peer border-b-2 w-full outline-none border-black focus:border-b-rgb p-2 " />
                        {errors.ClieNombre && (
                            <span className="text-red-500 text-xs">{errors.ClieNombre.message} </span>
                        )} 
                        <span className=" peer-focus:text-verde transform duration-200">Nombre:</span>
                    </label>
                    <label htmlFor="" className="flex flex-col-reverse gap-1 w-full text-black">
                        <input 
                        type="text"
                        name="" 
                        id=""
                        {... register("ClieApellidos",{
                        required: {
                            value:true,
                            message:'Este campo es requerido'
                        }
                        })}
                        className="peer border-b-2 w-full outline-none border-black focus:border-b-verde p-2 " />
                        {errors.ClieApellidos && (
                            <span className="text-red-500 text-xs">{errors.ClieApellidos.message} </span>
                        )} 
                        <span className=" peer-focus:text-verde transform duration-200">Apellidos:</span>
                    </label>   
                    <label htmlFor="" className="flex flex-col-reverse gap-1 w-full text-black">
                        <input 
                        type="email"
                        name="" 
                        id=""
                        {... register("ClieCorreo",{
                            required: {
                            value:true,
                            message:'Este campo es requerido'
                        }
                        })}
                        className="peer border-b-2 w-full outline-none border-black focus:border-b-verde p-2  " />
                        {errors.ClieCorreo && (
                            <span className="text-red-500 text-xs">{errors.ClieCorreo.message} </span>
                        )} 
                        <span className=" peer-focus:text-verde transform duration-200">Email:</span>
                    </label>  
                    <label htmlFor="" className="flex flex-col-reverse gap-1 w-full text-black">
                        <input 
                        type="text"
                        name="" 
                        id=""
                        {... register("ClieTelefono",{
                        required: {
                            value:true,
                            message:'Este campo es requerido'
                        }
                        })}
                        className="peer border-b-2 w-full outline-none border-black focus:border-b-verde p-2 " />
                        {errors.ClieTelefono && (
                            <span className="text-red-500 text-xs">{errors.ClieTelefono.message} </span>
                        )} 
                        <span className=" peer-focus:text-verde transform duration-200">Teléfono de Contacto:</span>
                    </label>
                </div>
                
                <div className="flex flex-col gap-5 relative w-full">
                    <span className="text-xl text-verde-rgb filter saturate-200 ">Información de la mascota :</span>
                    <label htmlFor="" className="flex flex-col-reverse gap-1 w-full text-black">
                        <input 
                        type="text"
                        name="" 
                        id=""
                        {... register("mascota",{
                        required: {
                            value:true,
                            message:'Este campo es requerido'
                        }
                        })}
                        className="peer border-b-2 w-full outline-none border-black focus:border-b-verde p-2  " />
                        {errors.mascota && (
                            <span className="text-red-500 text-xs">{errors.mascota.message} </span>
                        )} 
                        <span className=" peer-focus:text-verde transform duration-200">Nombre de la Mascota:</span>
                    </label>
                    <div className="relative w-full gap-2 flex max-sm:flex-col">
                        <label htmlFor="" className="flex flex-col-reverse gap-1 w-full text-black">
                            <select 
                                name=""  
                                {... register("sexo",{
                                    required: {
                                        value:true,
                                        message:'Este campo es requerido'
                                    }
                                })}
                                className="peer text-base border-b-2 text-black outline-none border-black focus:border-verde transform duration-200 p-2 bg-white"  
                                >
                                <option value="" disabled >Seleccionar</option>
                                <option value="Macho" selected={cita.MascotaInfo.sexo === "Macho"}>Macho</option>
                                <option value="Hembra" selected={cita.MascotaInfo.sexo === "Hembra"}>Hembra</option>
                            </select>
                            {errors.sexo && (
                                <span className="text-red-500 text-xs">{errors.sexo.message} </span>
                            )} 
                            <span className="peer-focus:text-verde transform duration-200">Sexo : </span>
                        </label>
                        <label htmlFor="" className="flex flex-col-reverse gap-1 w-full text-black">
                            <select 
                                name=""  
                                {... register("tipo",{
                                    required: {
                                        value:true,
                                        message:'Este campo es requerido'
                                    }
                                })}
                                className="peer text-base border-b-2 text-black outline-none border-black focus:border-verde transform duration-200 p-2 bg-white" 
                                >
                                <option value="" disabled >Seleccionar</option>
                                <option value="Felino" selected={cita.MascotaInfo.tipo === "Felino"}>Felino</option>
                                <option value="Canino" selected={cita.MascotaInfo.tipo === "Canino"}>Canino</option>
                            </select>
                            {errors.tipo && (
                                <span className="text-red-500 text-xs">{errors.tipo.message} </span>
                            )} 
                            <span className="peer-focus:text-verde transform duration-200">Tipo de Mascota :</span>
                        </label> 
                    </div>
                    <label htmlFor="" className="flex flex-col-reverse gap-1 w-full text-black">
                        <input 
                        type="text"
                        name="" 
                        id=""
                        {... register("raza",{
                        required: {
                            value:true,
                            message:'Este campo es requerido'
                        }
                        })}
                        className="peer border-b-2 w-full outline-none border-black focus:border-b-verde p-2 " />
                        {errors.razaMascota && (
                            <span className="text-red-500 text-xs">{errors.razaMascota.message} </span>
                        )} 
                        <span className=" peer-focus:text-verde-rgb filter saturate-200 transform duration-200">Raza de la Mascota:</span>
                    </label>
                </div>
                <div className="flex flex-col gap-3 w-full relative">
                    <span className="text-xl text-verde-rgb filter saturate-200">Información de la cita :</span>
                    <div className="relative w-full gap-3 flex max-sm:flex-col ">
                        <label htmlFor="" className="flex flex-col-reverse gap-1  max-sm:w-full sm:w-1/2 text-black">
                            <input 
                                type="date"  
                                name="" 
                                {... register("fecha",{
                                    required: {
                                        value:true,
                                        message:'Este campo es requerido'
                                    }
                                    })}
                            className="peer border-b-2 w-full outline-none border-black focus:border-b-verde p-2" />
                            {errors.fecha && (
                                <span className="text-red-500 text-xs">{errors.fecha.message} </span>
                            )} 
                            <span className=" peer-focus:text-verde transform duration-200">Fecha:</span>
                        </label>
                        <label htmlFor="" className="flex flex-col-reverse gap-1 max-sm:w-full sm:w-1/2 text-black">
                            <input 
                                type="time" 
                                required 
                                name="" 
                                id="" 
                                {... register("hora",{
                                    required: {
                                        value:true,
                                        message:'Este campo es requerido'
                                    }
                                    })}
                            className="peer border-b-2 w-full outline-none border-black focus:border-b-verde p-2  " />
                            {errors.hora && (
                                <span className="text-red-500 text-xs">{errors.hora.message} </span>
                            )} 
                            <span className=" peer-focus:text-verde transform duration-200">Hora:</span>
                        </label>
                    </div>
                    <label htmlFor="" className="flex flex-col-reverse gap-1  w-full text-black">
                        <select 
                            name="servicio" 
                            {...register("servicio_id", {
                                required: {
                                    value: true,
                                    message: 'Este campo es requerido'
                                }
                            })}
                            className="peer text-base border-b-2 text-black outline-none border-black focus:border-verde transform duration-200 p-2 bg-white"
                        >
                            <option value="" disabled>Seleccionar</option>
                            {servicios.map((servicio, index) => (
                                <option key={index} value={servicio.id} selected={servicio.id == cita.servicio_id}>
                                    {servicio.nombre}
                                </option>
                            ))}
                        </select>
                        {errors.servicio_id && (
                            <span className="text-red-500 text-xs">{errors.servicio_id.message}</span>
                        )} 
                        <span className="peer-focus:text-verde transform duration-200">Servicio :</span>
                    </label>
                    <label htmlFor="" className="flex flex-col-reverse gap-1 w-full text-black">
                            <select 
                                name=""  
                                {... register("estado",{
                                    required: {
                                        value:true,
                                        message:'Este campo es requerido'
                                    }
                                })}
                                className="peer text-base border-b-2 text-black outline-none border-black focus:border-verde transform duration-200 p-2 bg-white" 
                                >
                                <option value="" disabled >Seleccionar</option>
                                <option value="PENDIENTE" selected={cita.estado == "PENDIENTE"}>PENDIENTE</option>
                                <option value="APROBADO" selected={cita.estado == "APROBADO"}>APROBADO</option>
                                <option value="RECHAZADO" selected={cita.estado == "RECHAZADO"}>RECHAZADO</option>
                                <option value="EN CURSO" selected={cita.estado == "EN CURSO"}>EN CURSO</option>
                                <option value="TERMINADO" selected={cita.estado == "TERMINADO"}>TERMINADO</option>
                            </select>
                            {errors.estado && (
                                <span className="text-red-500 text-xs">{errors.estado.message} </span>
                            )} 
                            <span className="peer-focus:text-verde transform duration-200">Estado de la Cita :</span>
                        </label>               
                    <label htmlFor="" className="flex flex-col-reverse gap-1 w-full text-black">
                        <textarea 
                            id=""  
                            {... register("detalles",{
                                required: {
                                value:true,
                                message:'Este campo es requerido'
                                }
                            })}
                            className="rounded-lg peer w-full h-[140px] text-base border text-black outline-none border-black focus:border-verde trasnform duration-200 px-2" >
                        </textarea>
                        {errors.detalles && (
                            <span className="text-red-500 text-xs">{errors.detalles.message} </span>
                        )} 
                        <span className="peer-focus:text-verde-rgb filter saturate-200 transform duration-200">Detalles :</span>
                    </label>
                </div>
                <button className={`bg-verde p-2 text-xl w-full rounded-tl-xl rounded-br-xl ${enviando ? 'shadow-verde/50 text-white':''}  shadow-lg hover:text-white hover:shadow-verde/50 text-black transform duration-300`}
                    disabled={enviando}> 
                    {enviando ? "Modificando..." : "Modificar Cita"}
                </button>
            </form> 
            </div>
        </DialogContent>
    </Dialog>
   
    </>

  )
}
