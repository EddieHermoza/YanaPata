'use server'
import db from "@/lib/db"
import { revalidatePath } from "next/cache";


export async function getCitasPages(status,cliente,mascota) {
    try {
      const citas = await db.Cita.findMany({
        where: {
            estado: {
                contains: status
            },
            nombreCliente:{
              contains:cliente
            },
            nombreMascota:{
              contains:mascota
            }
        },
      });
  
      const totalPages = Math.ceil(citas.length / 8);
      return totalPages;
    } catch (error) {
      console.error('Prisma Error:', error);
      throw new Error('Error al contar las paginas de Citas');
    }
  }

export async function getDataCalendar() {
    try {
        const citas = await db.cita.findMany({
            where: { estado: 'APROBADO' }, 
            select: {
              id: true,
              fechaSolicitud: true,
              horaSolicitud: true,
              nombreCliente: true,
              nombreMascota: true,
            },
          });
      
          const events = citas.map((cita) => ({
            id: cita.id.toString(),
            title: `Cita para ${cita.nombreMascota} con ${cita.nombreCliente}`,
            start: `${cita.fechaSolicitud}T${cita.horaSolicitud}`,
          }));
      
          return events;
    } catch (error) {
        return null
    }
}

export async function getData(status, page,nombreCliente,nombreMascota) {
    try {
        const pages = page || 1;
        const itemsPerPage = 8;
        const skip = (pages - 1) * itemsPerPage;

        const citas = await db.Cita.findMany({
            include: {
                servicio: {
                    select: {
                        nombre: true,
                        id: true
                    }
                }
            },
            where: {
                estado: {
                    contains: status
                },
                nombreCliente:{
                    contains:nombreCliente
                },
                nombreMascota:{
                    contains:nombreMascota
                }
            },
            skip: skip,
            take: itemsPerPage,
        });
 
        return citas;

    } catch (error) {
        console.error('Error en la consulta:', error);
    }
}

export async function AprobarCita(id){
    try {
        const updatedSolicitud = await db.cita.update({
            where: {
                id: id
            },
            data: {
                estado: 'APROBADO' 
            }
        });
        
        if (updatedSolicitud) revalidatePath('Admin/Dashboard/Solicitudes')   
        
    } catch (error) {
        console.error("Error:", error);
    }
}

export async function RechazarCita(id){
    try {
        const updatedSolicitud = await db.cita.update({
            where: {
                id: id
            },
            data: {
                estado: 'RECHAZADO' 
            }
        });
        
        if (updatedSolicitud) {
            revalidatePath('Admin/Dashboard/Solicitudes')   
        }

    } catch (error) {
        console.error("Error:", error);
    }
}

export const CitaModificada = async (data) => {
    try {
        const updatedSolicitud = await db.cita.update({
            where: {
                id: data.id
            },
            data: {
                fechaSolicitud: data.fecha,
                horaSolicitud: data.hora,
                ClienteInfo:{
                    nombre:data.ClieNombre,
                    apellidos:data.ClieApellidos,
                    telefono:data.ClieTelefono,
                    correo:data.ClieCorreo
                },
                MascotaInfo:{
                    nombre:data.mascota,
                    tipo:data.tipo,
                    raza:data.raza,
                    sexo:data.sexo,
                } ,
                servicio_id:parseInt(data.servicio_id),
                asunto:data.detalles,
                estado:data.estado
                },
        });
        if (updatedSolicitud) {
            revalidatePath('Admin/Dashboard/Solicitudes') 
            return updatedSolicitud;
        } else {          
            return null; 
        }

    } catch (error) {
        console.error("Error:", error);
    }
}