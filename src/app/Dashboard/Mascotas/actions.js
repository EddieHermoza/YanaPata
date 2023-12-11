"use server"
import db from "@/lib/db";
import { format } from "date-fns";
import { revalidatePath } from "next/cache";


export async function getMascotasPage(query) {
    try {
      const count = await db.mascota.count({
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
      throw new Error('Fallo al listar las paginas de Mascotas.');
    }
  }

  export async function getData(query,page) {
        try {
            const pages = page || 1;;
            const itemsPerPage = 10;
            const skip = (pages - 1) * itemsPerPage;
            let whereCondition={}
            if (query) {
                whereCondition = {
                    ...whereCondition,
                    OR: [
                        { nombre: { contains: query } },
                    ],
                };
            }
        
            const mascotas = await db.mascota.findMany({
                where: whereCondition,
                skip: skip,
                take: itemsPerPage,
            });
            
            const mascotasFormateadas = mascotas.map((mascota) => ({
                ...mascota,
                creacion: format(new Date(mascota.creacion), 'dd-MM-yyyy HH:mm'),
                modificacion: format(new Date(mascota.modificacion), 'dd-MM-yyyy HH:mm'),
                peso: parseFloat(mascota.peso)
            }));
            
            return mascotasFormateadas;

        } catch (error) {
            console.error('Error en la consulta:', error);
            return []
        }
  }

  export async function ObtenerMascota({ id }) {
    try {
        const mascota = await db.mascota.findUnique({
            where: {
                id: parseInt(id)
            }
        });
  
        if (mascota) {
            const mascotaFormateada = {
                ...mascota,
                creacion: format(new Date(mascota.creacion), 'dd-MM-yyyy HH:mm'),
                modificacion: format(new Date(mascota.modificacion), 'dd-MM-yyyy HH:mm'),
                peso: parseFloat(mascota.peso)
            };
  
            return mascotaFormateada;
        }
      
        return null;
    } catch (error) {
      console.error('Error while fetching mascota:', error);
      throw error; 
    }
  }