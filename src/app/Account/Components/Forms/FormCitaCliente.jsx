"use client"
import { ToastAction } from "@/Components/ui/toast"
import { useToast } from "@/Components/ui/use-toast"
import esLocale from 'date-fns/locale/es';
import { ListarServicios } from "@/lib/actions";
import { format } from "date-fns"
import { useEffect } from "react";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form"
import { Calendar as CalendarIcon } from "lucide-react"
import { Calendar } from "@/Components/ui/calendar"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog"
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
import { CitaEnviada, MascotasClienteLista } from "../../Solicitudes/actions";

export default function FormCitaCliente({ cliente }) {
    const [servicios, setServicios] = useState([])
    const [sending, isSending] = useState(false)
    const [mascotas, setMascotas] = useState([])
    const [open, setOpen] = useState(false)
    const { register, handleSubmit, watch, control, reset, formState: { errors } } = useForm();

    const [error, setError] = useState(null);

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

    const onSubmit = handleSubmit(async (data) => {
        isSending(true)
        const id_servicio = data.servicio.indexOf(' ');
        const idServicio = parseInt(data.servicio.slice(0, id_servicio));

        const id_mascota = data.mascota.indexOf(' ');
        const idMascota = parseInt(data.mascota.slice(0, id_mascota));
        const nombreMascota = data.mascota.slice(id_mascota + 1);

        const MascotaInfo = mascotas.find(mascota => mascota.id === idMascota);
        const cita = {
            fechaSolicitud: data.fechaSolicitud,
            horaSolicitud: data.hora,
            ClienteInfo: cliente,
            MascotaInfo: MascotaInfo,
            mascota_id: idMascota,
            servicio_id: idServicio,
            asunto: data.motivo
        }


        const res = await CitaEnviada(cita)
        if (res.ok) {
            reset()
            isSending(false)
            setError('')
            setOpen(false)
            toast({
                title: res.message,
                description: "Te contactaremos lo más rapido que podamos",
                action: (
                    <ToastAction altText="Entendido">Entendido</ToastAction>
                )
            })
        } else {
            isSending(false)
            setError(res.message)
            toast({
                variant: "destructive",
                title: "Ups! Algo Salio Mal",
                description: "Intentalo más tarde",
                action: <ToastAction altText="Entendido">Entendido</ToastAction>,
            })
        }
    });

    useEffect(() => {
        async function fetchServicios() {
            const data = await ListarServicios();
            setServicios(data);
        }

        async function fetchMascotas() {
            const mascotasList = await MascotasClienteLista(cliente)
            setMascotas(mascotasList)
        }

        fetchServicios();
        fetchMascotas()
    }, [cliente]);
    return (
        <>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger className=" px-5 py-2  bg-verde hover:shadow-verde/50 hover:text-white shadow-lg  transform duration-300" >
                    Solicitar una Cita
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            Solicitar una Cita
                        </DialogTitle>
                        <DialogDescription>
                            Solicite una cita para su mascota registrada
                        </DialogDescription>
                    </DialogHeader>
                    <div>
                        <form className="w-full flex flex-col gap-10 text-sm" onSubmit={onSubmit}>
                            <label className="flex flex-col-reverse w-full">
                                <Controller
                                    name="mascota"
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
                                                    <SelectItem disabled value="Predeterminado"><span className="text-slate-400 text-sm">Seleccione una Mascota</span></SelectItem>
                                                    {mascotas.map((mascota, index) => (
                                                        <SelectItem key={index} value={mascota.id + " " + mascota.nombre}> {mascota.nombre}</SelectItem>
                                                    ))}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                                {errors.mascota && (
                                    <span className="text-red-500 text-xs">{errors.mascota.message}</span>
                                )}
                                <span className="peer-focus:text-verde transform duration-200">Mascota :</span>
                            </label>
                            <label className="flex w-full  flex-col-reverse">
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
                            <label className="flex w-full  flex-col-reverse">
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
                                                        <SelectItem key={index} value={servicio.id + " " + servicio.nombre}> {servicio.nombre}</SelectItem>
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
                            <button className={`bg-verde p-2 text-xl w-full rounded-tl-xl rounded-br-xl ${sending ? 'shadow-verde/50 text-white' : ''}  shadow-lg hover:text-white hover:shadow-verde/50 text-black transform duration-300`}
                                disabled={sending}>
                                {sending ? "Enviando..." : "Solicitar una Cita"}
                            </button>
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
