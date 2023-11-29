"use server"
import { format } from 'date-fns';
import db from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function getServiciosPage(query) {
    try {
        const count = await db.servicio.count({
            where: {
                nombre: {
                contains: query,
                },
            },
        });
  
        const totalPages = Math.ceil(count / 10);
        return totalPages;
    } catch (error) {
        console.error('Prisma Error:', error);
        throw new Error('Failed to fetch total number of clients.');
    }
  }

  export async function getData(query,page) {
    try {
        const pages = page || 1; 
        const itemsPerPage = 10;
        const skip = (pages - 1) * itemsPerPage;
      
        let whereCondition = {};
      
        if (query) {
          whereCondition = {
            ...whereCondition,
            OR: [
              { nombre: { contains: query } },
            ],
          };
        }
      
        const servicios = await db.servicio.findMany({
          where: whereCondition,
          skip: skip,
          take: itemsPerPage,
        });
      
        const serviciosFormateados = servicios.map((servicio) => ({
            ...servicio,
            creacion: format(new Date(servicio.creacion), 'dd-MM-yyyy HH:mm'),
            modificacion: format(new Date(servicio.modificacion), 'dd-MM-yyyy HH:mm'),
            precio_min: parseFloat(servicio.precio_min),  
        }));
        
          return serviciosFormateados;

      } catch (error) {
        console.error('Error en la consulta:', error);
        return [];
      }
  }

  export const EstadoCambiado = async (data) => {
    try {
        if (data.estado === 'Habilitado') {
            const updatedServicio = await db.servicio.update({
                where: {
                    id: data.id
                },
                data:{
                    estado:'Deshabilitado'
                }
            });
            if (updatedServicio) {
                revalidatePath('/Dashboard/Servicios')
                return true
            }
        } else {
            const updatedServicio = await db.Servicio.update({
                where: {
                    id: data.id
                },
                data:{
                    estado:'Habilitado'
                }
            });
            if (updatedServicio) {
                revalidatePath('/Dashboard/Servicios')
                return false
            }
        }
        
    } catch (error) {
        console.error("Error:", error);
    }
}

export const ServicioEliminado = async (data) => {
    try {
  
        const deletedServicio = await db.servicio.delete({
            where: {
                id: data.id
            }
        });
        if (deletedServicio) {
            revalidatePath('/Dashboard/Servicios')
            return true
        }
        
    } catch (error) {
        return false
    }

} 

export const ServicioModificado = async (data) =>{
    try {
        const updatedService = await db.servicio.update({
            where: {
                id: data.id
            },
            data:{
                nombre: data.nombre,
                descrip: data.descrip,
                precio_min: data.precio_min,
                foto:"pendiente",
            }
        });

        if (updatedService) {
            revalidatePath('/Dashboard/Servicios')
            return{
                ok:true,
                message:"Servicio Modificado con Exito"
            }
        }
        
    } catch (error) {
        return {
            ok:false,
            message:"Hubo un error al modificar el servicio"
        };
    }
}

export const ServicioCreado = async (data) =>{
    try {
  
        const newService = await db.servicio.create({
        data: {
            nombre: data.nombre,
            descrip: data.descrip,
            precio_min: data.precio,
            foto:"pendiente"
            },
        });

        if (newService){
            revalidatePath('/Dashboard/Servicios')
            return {
                ok:true,
                message:"Servicio Registrado con Exito"
            }
        }

        return {
            ok:false,
            message:"Error en la creacion del Servicio"
        };
        
    } catch (error) {
        console.error("Error:", error);
        return {
            ok:false,
            message:"Error en la creacion del Servicio"
        };
    }

}
