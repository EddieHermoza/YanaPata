"use server"
import db from "@/lib/db"

import { revalidatePath } from "next/cache";



export const getInfoCliente = async(email) =>{
    try {
        
        const client = await db.usuario.findUnique({
            where: {
                email: email
            },
            include: {
                cliente: {
                    select: {
                        telefono: true 
                    }
                }
            }
        });

        if (client) {
            return client
        }
    } catch (error) {
        console.log(error);

    }

}

export const MascotasClienteLista = async (id,query,page)=>{
    try {
        const pages = page || 1;;
        const itemsPerPage = 10;
        const skip = (pages - 1) * itemsPerPage;

        let whereCondition={
            cliente_id:id
        }
    
        if (query) {
            whereCondition = {
                ...whereCondition,
                OR: [
                    { nombre: { contains: query } },
                ],
            };
        }
    
        const mascotas = await db.Mascota.findMany({
            where: whereCondition,
            skip: skip,
            take: itemsPerPage,
        });
        
        const mascotasFormateadas = mascotas.map((mascota) => ({
            ...mascota,
            peso: parseFloat(mascota.peso),  
        }));

        return mascotasFormateadas;
    } catch (error) {
        console.error('Error en la consulta:', error);
        return []
    }
}

export const MascotaCreada = async (data)=>{
    try {
        const mascotanueva = await db.Mascota.create({
            data:{
                nombre:data.nombre,
                tipo:data.tipo,
                raza:data.raza,
                sexo:data.sexo,
                altura:data.altura,
                peso:parseFloat(data.peso),
                cliente_id:data.cliente_id

            }
        })
        if (mascotanueva) {
            revalidatePath("/Account/Mascotas")
            return{
                ok:true,
                message:"Mascota registrada con exito"
            }
        }
        return{
            ok:false,
            message:"Hubo un error en el registro"
        }
    } catch (error) {
        console.log(error)
        return{
            ok:false,
            message:"Hubo un error en el registro"
        }
    }
}

export const MascotaEliminada = async(id) =>{
    try {
        const deletedMascota = await db.Mascota.delete({
            where:{
                id:id
            }
        })
        if (deletedMascota) {
            revalidatePath("/Account/Mascotas")
            return({
                ok:true,
                message:"Mascota Eliminada"
            })
        }
    } catch (error) {
        console.log(error)
        return({
            ok:false,
            message:"Error al eliminar"
        })
    }
}

export async  function getMascotasPages(id) {
    try {
        const count = await db.Mascota.count({
            where: {
                cliente_id:id
            },
        });
        const totalPages = Math.ceil(count / 10);
        return totalPages;
    } catch (error) {
        console.error('Prisma Error:', error);
        throw new Error('Error al contar las paginas');
    }
}

export async function getCantidadPerros(id) {
    try {
        const count= await db.Mascota.count({
            where:{
                tipo:"Canino",
                cliente_id:id
            }
        })
        if (count>0) {
            return count
        }
        return 0
    } catch (error) {
        console.log(error)
        return 0
    }
}

export async function getCantidadGatos(id) {
    try {
        const count= await db.Mascota.count({
            where:{
                tipo:"Felino",
                cliente_id:id
            }
        })
        if (count>0) {
            return count
        }
        return 0
    } catch (error) {
        console.log(error)
        return 0
    }
}

export async function getCantidadMascotas(id) {
    try {
        const count= await db.Mascota.count({
            where:{
                cliente_id:id
            }
        })
        if (count>0) {
            return count
        }
        return 0
    } catch (error) {
        console.log(error)
        return 0
    }
}