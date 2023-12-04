"use server"
import db from "@/lib/db"
import { revalidatePath } from "next/cache";

export const CitaEnviada = async (data) =>{
    try {
        
        const newSolicitud = await db.cita.create({
        data: {
            ClienteInfo:{
                nombre:data.ClienteInfo.nombres,
                apellidos:data.ClienteInfo.apellidos,
                correo:data.ClienteInfo.email,
                telefono:data.ClienteInfo.cliente.telefono
            },
            MascotaInfo:{
                nombre:data.MascotaInfo.nombre,
                tipo:data.MascotaInfo.tipo,
                raza:data.MascotaInfo.raza,
                sexo:data.MascotaInfo.sexo,
            },
            nombreCliente: data.ClienteInfo.nombres +" "+ data.ClienteInfo.apellidos,
            nombreMascota:data.MascotaInfo.nombre,
            fechaSolicitud:data.fechaSolicitud.toISOString().slice(0, 10),
            horaSolicitud: data.horaSolicitud,
            cliente_id:data.ClienteInfo.id,
            mascota_id:data.mascota_id,
            servicio_id:data.servicio_id,
            asunto:data.asunto,
            },
        });

        if(newSolicitud) {
            revalidatePath("/Account/Solicitudes")
            return {
                ok:true,
                message:'Se envio la Solicitud de Cita'
            }
        }

        return {
                ok:false,
                message:'Hubo un error en el envio '
        }
    
        
    } catch (error) {
        console.error("Error:", error);
        return {
            ok:false,
            message:'Hubo un error en el envio'
        }
    }
}

export const MascotasClienteLista = async (data)=>{
    try {
        const MascotasList= await db.Mascota.findMany({
            where:{
                cliente_id:data.id
            }
        })

        const mascotasFormateadas = MascotasList.map((mascota) => ({
            ...mascota,
            peso: parseFloat(mascota.peso),  
        }));
        if (mascotasFormateadas) {
            return mascotasFormateadas
        }
    } catch (error) {
        console.log(error)
        return []
    }
}

export async function getSolicitudesList(page, cliente) {
    try {
        const pages = page || 1;
        const itemsPerPage = 10;
        const skip = (pages - 1) * itemsPerPage;

        const SolicitudesList = await db.Cita.findMany({
            where: {
                cliente_id: cliente.id
            },
            select: {
                creacion: true,
                fechaSolicitud: true,
                horaSolicitud: true,
                nombreMascota: true,
                servicio_id: true,
                estado: true
            },
            take: itemsPerPage,
            skip: skip
        });

        const formattedData = SolicitudesList.map(solicitud => {
            const formattedSolicitud = {
                fechaSolicitud: solicitud.fechaSolicitud,
                horaSolicitud: solicitud.horaSolicitud,
                nombreMascota: solicitud.nombreMascota,
                servicio_id: solicitud.servicio_id,
                estado: solicitud.estado
            };

            if (solicitud.creacion) {
                formattedSolicitud.creacion = solicitud.creacion.toISOString().split('T')[0];
            }

            if (solicitud.modificacion) {
                formattedSolicitud.modificacion = solicitud.modificacion.toISOString().split('T')[0];
            }

            return formattedSolicitud;
        });

        return formattedData;

    } catch (error) {
        console.log(error);
        return {
            ok: false,
            message: "Error al obtener el registro de Solicitudes"
        };
    }
}

export async function getSolicitudesClientePages(id) {
    try {
        const count =await  db.Cita.count({
            where: {
                cliente_id:id
            },
        });
        const totalPages = Math.ceil(count / 10);
        return totalPages;
    } catch (error) {
        console.error('Prisma Error:', error);
        throw new Error('Error al contar las paginas de Admins');
    }
}