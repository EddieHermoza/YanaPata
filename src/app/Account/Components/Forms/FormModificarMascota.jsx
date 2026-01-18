"use client"
import { FiEdit } from "react-icons/fi"
import { useForm, Controller } from "react-hook-form"
import { useEffect, useState } from "react"
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
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import { MascotaModificada } from "../../Mascotas/actions"

function FormModificarMascota({ mascota }) {
    const id_mascota = mascota.id
    const id = mascota.cliente_id
    const [open, setOpen] = useState(false)

    const { register, handleSubmit, setValue, control, reset, formState: { errors } } = useForm()

    const [enviando, setEnviando] = useState(false);

    const [error, setError] = useState(null);

    const { toast } = useToast()

    const onSubmit = handleSubmit(async (data) => {
        setEnviando(true)

        const mascota = {
            id: id_mascota,
            nombre: data.nombre,
            tipo: data.tipo,
            raza: data.raza,
            altura: data.altura,
            peso: data.peso,
            sexo: data.sexo,
            cliente_id: id
        }

        const res = await MascotaModificada(mascota)

        if (res.ok) {
            setEnviando(false)
            setError('')
            setOpen(false)
            toast({
                title: res.message,
                action: (
                    <ToastAction altText="Entendido">Entendido</ToastAction>
                )
            })
        } else {
            setEnviando(false)
            setError(res.message)
        }

    });

    useEffect(() => {
        setValue('nombre', mascota.nombre)
        setValue('sexo', mascota.sexo)
        setValue('tipo', mascota.tipo)
        setValue('raza', mascota.raza)
        setValue('altura', mascota.altura)
        setValue('peso', mascota.peso)
    }, [mascota, setValue]);
    return (
        <>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger className="transition-all px-3 py-2 bg-yellow-300 rounded-md hover:shadow-yellow-300/50 shadow-lg" aria-label="Editar" title="Editar">
                    <FiEdit size={18} />
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Modificando Mascota {mascota.id}</DialogTitle>
                        <DialogDescription>
                            Todos los campos son necesarios
                        </DialogDescription>
                    </DialogHeader>
                    <div>
                        <form onSubmit={onSubmit} className="flex flex-col items-center justify-between text-sm max-sm:gap-3 max-lg:gap-4 lg:gap-5 min-h-[500px]">
                            <label htmlFor="" className="flex flex-col-reverse gap-1 w-full text-black">
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    {...register("nombre", {
                                        required: {
                                            value: true,
                                            message: 'Este campo es requerido'
                                        }
                                    })}
                                    className="peer border-b  w-full outline-none border-black focus:border-b-verde p-2" />
                                {errors.nombre && (
                                    <span className="text-red-500 text-xs">{errors.nombre.message} </span>
                                )}
                                <span className=" peer-focus:text-verde transform duration-200">Nombre:</span>
                            </label>

                            <label htmlFor="" className="flex w-full flex-col-reverse">
                                <Controller
                                    name="sexo"
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'Este campo es requerido'
                                        }
                                    }}
                                    defaultValue="Predeterminado"
                                    render={({ field: { onChange, value } }) => (
                                        <Select onValueChange={onChange} defaultValue={value} >
                                            <SelectTrigger className="w-auto gap-2 outline-none border-b border-black transform duration-300 hover:border-verde" >
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
                                {errors.sexo && (
                                    <span className="text-red-500 text-xs">{errors.sexo.message}</span>
                                )}
                                <span className="peer-focus:text-verde transform duration-200">Sexo : </span>
                            </label>
                            <label htmlFor="" className="flex w-full flex-col-reverse">
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
                                        <Select onValueChange={onChange} defaultValue={value}>
                                            <SelectTrigger className="w-auto gap-2 outline-none border-b border-black transform duration-300 hover:border-verde" >
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
                            <label htmlFor="" className="flex flex-col-reverse gap-1 w-full text-black">
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    {...register("raza", {
                                        required: {
                                            value: true,
                                            message: 'Este campo es requerido'
                                        }
                                    })}
                                    className="peer border-b  w-full outline-none border-black focus:border-b-verde p-2" />
                                {errors.raza && (
                                    <span className="text-red-500 text-xs">{errors.raza.message} </span>
                                )}
                                <span className=" peer-focus:text-verde transform duration-200">Raza<span className="text-xs text-slate-400"> (Sin raza si no tiene)</span></span>
                            </label>
                            <label htmlFor="" className="flex w-full flex-col-reverse">
                                <Controller
                                    name="altura"
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'Este campo es requerido'
                                        }
                                    }}
                                    defaultValue={'Predeterminado'}
                                    render={({ field: { onChange, value } }) => (
                                        <Select onValueChange={onChange} defaultValue={value}>
                                            <SelectTrigger className="w-auto gap-2 outline-none border-b border-black transform duration-300 hover:border-verde" >
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem disabled value="Predeterminado"><span className="text-slate-400 text-sm">Seleccione un Tipo</span></SelectItem>
                                                    <SelectItem value="Grande">Grande</SelectItem>
                                                    <SelectItem value="Mediano">Mediano</SelectItem>
                                                    <SelectItem value="Pequeño">Pequeño</SelectItem>
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
                            <label htmlFor="" className="flex flex-col-reverse gap-1 w-full text-black">
                                <input
                                    type="number"
                                    min={0}
                                    step={0.1}
                                    name=""
                                    id=""
                                    {...register("peso", {
                                        required: {
                                            value: true,
                                            message: 'Este campo es requerido'
                                        }
                                    })}
                                    className="peer border-b  w-full outline-none border-black focus:border-b-verde p-2" />
                                {errors.raza && (
                                    <span className="text-red-500 text-xs">{errors.raza.message} </span>
                                )}
                                <span className=" peer-focus:text-verde transform duration-200 flex items-center">Peso <span className="text-xs text-slate-400"> (En kilogramos)</span></span>
                            </label>
                            <button className="bg-verde text-black p-2 rounded-bl-lg rounded-tr-lg w-full text-base hover:text-white shadow-lg hover:shadow-verde/50 transform duration-300" disabled={enviando}>{enviando ? 'Modificando...' : 'Modificar Mascota'}</button>
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

export default FormModificarMascota