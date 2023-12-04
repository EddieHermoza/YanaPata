"use server"
import { format } from 'date-fns';
import db from "@/lib/db"
import { revalidatePath } from "next/cache";

export const PagoCreaado = async (data) =>{
    try {
  
        const newPago = await db.Pago.create({
        data: {
            nombreCliente: data.nombre,
            monto_servicio:data.montoServicio,
            monto_adicional: data.adicional,
            igv:data.igv,
            monto_total: data.total,
            servicio_id:data.servicio
            },
        });

        if (newPago){
            revalidatePath('/Dashboard/Pagos')
            return {
                ok:true,
                message:"Pago registrado con éxito"
            }
        }

        return {
            ok:false,
            message:"Error en el registro de Pago"
        };
        
    } catch (error) {
        console.error("Error:", error);
        return {
            ok:false,
            message:"Error en el registro de Pago"
        };
    }

}

export async function getPagosPage(query) {
    try {
        const count = await db.Pago.count({
            where: {
                nombreCliente: {
                    contains: query,
                },
            },
        });
  
        const totalPages = Math.ceil(count / 10);
        return totalPages;
    } catch (error) {
        console.error('Prisma Error:', error);
        throw new Error('Error al contar las paginas de Admins');
    }
}

export async function getData (query,page){
    try {
        const pages = page || 1;;
        const itemsPerPage = 10;
        const skip = (pages - 1) * itemsPerPage;
    
        let whereCondition = {
        };
    
        if (query) {
            whereCondition = {
                ...whereCondition,
                OR: [
                    { nombreCliente: { contains: query } },
                ],
            };
        }
    
        const pagos = await db.Pago.findMany({
            where: whereCondition,
            skip: skip,
            take: itemsPerPage,
        });

        const pagosFormateados = pagos.map((pago) => ({
            ...pago,
            creacion: format(new Date(pago.creacion), 'dd-MM-yyyy HH:mm'),
          }));
        
        return pagosFormateados;
    } catch (error) {
        console.error('Error en la consulta:', error);
        return []
    }
}