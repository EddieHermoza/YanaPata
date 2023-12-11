'use server'
import db from "@/lib/db"
import { revalidatePath } from "next/cache";

export async function ListarServicios () {
    try { 
        const servicios = await db.servicio.findMany({
            where: {
                estado:'Habilitado'
              },
              select: {
                id: true,
                nombre: true,
                precio_min: true,
              }
        });

        const serviciosFormateados = servicios.map((servicio) => ({
            ...servicio,
            precio_min: parseFloat(servicio.precio_min),  
        }));

        return serviciosFormateados;

      } catch (error) {
        console.error('Error en la consulta:', error);
        return []
      }
}

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
      revalidatePath('/Dashboard/Solicitudes') 
      return totalPages;
    } catch (error) {
      console.error('Prisma Error:', error);
      throw new Error('Error al contar las paginas de Citas');
    }
  }

export async function getDataCalendar() {
    try {
        const citas = await db.cita.findMany({
            where: {
                OR: [
                  { estado: 'APROBADA' },
                  { estado: 'EN CURSO' },
                  { estado: 'CANCELADA' },
                ],
            },
            select: {
              id: true,
              fechaSolicitud: true,
              horaSolicitud: true,
              nombreCliente: true,
              nombreMascota: true,
              estado:true,
            },
          });
      
          const events = citas.map((cita) => ({
            id: cita.id.toString(),
            title: `Cita para ${cita.nombreMascota}`,
            start: `${cita.fechaSolicitud}T${cita.horaSolicitud}`,
            extendedProps: {
                  nombreCliente:cita.nombreCliente,
                  nombreMascota:cita.nombreMascota,
                  estado:cita.estado,
            }
            
          }));
          revalidatePath('/Dashboard/Solicitudes') 
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
        revalidatePath('/Dashboard/Solicitudes') 
        return citas;

    } catch (error) {
        console.error('Error en la consulta:', error);
    }
}

export async function AprobarCita(id){
    try {
        const updatedSolicitud = await db.cita.update({
            where: {
                id:parseInt(id)
            },
            data: {
                estado: 'APROBADA' 
            }
        });
        
        if (updatedSolicitud) {
            revalidatePath('/Dashboard/Solicitudes') 
            return{
                ok:true,
                message:`Cita de ${updatedSolicitud.nombreMascota} aprobada `
            }
        }  
        
    } catch (error) {
        console.error("Error:", error);
        return{
            ok:false,
            message:`Hubo un error al aprobar la cita de ${updatedSolicitud.nombreMascota} `
        }
    }
}

export async function EliminarCita(id){
    try {
        const deletedSolicitud = await db.cita.delete({
            where: {
                id:parseInt(id)
            },
        });
        
        if (deletedSolicitud) {
            revalidatePath('/Dashboard/Solicitudes') 
            return{
                ok:true,
                message:`Cita de ${deletedSolicitud.nombreMascota} eliminada `
            }
        }  
        
    } catch (error) {
        console.error("Error:", error);
        return{
            ok:false,
            message:`Hubo un error al eliminar la cita de ${deletedSolicitud.nombreMascota} `
        }
    }
}

export async function ComenzarCita(id){
    try {
        const updatedSolicitud = await db.cita.update({
            where: {
                id: parseInt(id)
            },
            data: {
                estado: 'EN CURSO' 
            }
        });
        
        if (updatedSolicitud) {
            revalidatePath('/Dashboard/Solicitudes/Calendario') 
            return{
                ok:true,
                message:`Cita de ${updatedSolicitud.nombreMascota} Comenzada `
            }
        }  
        
    } catch (error) {
        console.error("Error:", error);
        return{
            ok:false,
            message:`Hubo un error al comenzar la cita de ${updatedSolicitud.nombreMascota} `
        }
    }
}

export async function CancelarCita(id){
    try {
        const updatedSolicitud = await db.cita.update({
            where: {
                id: parseInt(id)
            },
            data: {
                estado: 'CANCELADA' 
            }
        });
        
        if (updatedSolicitud) {
            revalidatePath('/Dashboard/Solicitudes/Calendario') 
            return{
                ok:true,
                message:`Cita de ${updatedSolicitud.nombreMascota} cancelada `
            }
        }  
        
    } catch (error) {
        console.error("Error:", error);
        return{
            ok:false,
            message:`Hubo un error al cancelar la cita de ${updatedSolicitud.nombreMascota} `
        }
    }
}

export async function RechazarCita(id){
    try {
        const updatedSolicitud = await db.cita.update({
            where: {
                id: parseInt(id)
            },
            data: {
                estado: 'RECHAZADA' 
            }
        });
        
        if (updatedSolicitud) {
            revalidatePath('/Dashboard/Solicitudes')   
            return{
                ok:true,
                message:`Cita de ${updatedSolicitud.nombreMascota} rechazada `
            }
        }

    } catch (error) {
        console.error("Error:", error);
        return{
            ok:false,
            message:`Hubo un error al rechazar la cita de ${updatedSolicitud.nombreMascota} `
        }
    }
}

export async function TerminarCita(id){
    try {
        const updatedSolicitud = await db.cita.update({
            where: {
                id: parseInt(id)
            },
            data: {
                estado: 'TERMINADA' 
            }
        });
        
        if (updatedSolicitud) {
            revalidatePath('/Dashboard/Solicitudes')   
            return{
                ok:true,
                message:`Cita de ${updatedSolicitud.nombreMascota} rechazada `
            }
        }

    } catch (error) {
        console.error("Error:", error);
        return{
            ok:false,
            message:`Hubo un error al rechazar la cita de ${updatedSolicitud.nombreMascota} `
        }
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
                nombreCliente:data.ClieNombre+" "+data.ClieApellidos,
                nombreMascota:data.mascota,
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
            revalidatePath('/Dashboard/Solicitudes') 
            return updatedSolicitud;
        } else {          
            return null; 
        }

    } catch (error) {
        console.error("Error:", error);
    }
}