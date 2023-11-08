import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import db from "@/libs/db";

export async function POST(request) {

    const data = await request.json();

    if (data.message == 'Listar' ) {
        const servicios = await db.servicio.findMany();

        if (servicios) {
            return NextResponse.json(servicios);
        }
    } else if (data.message == 'Crear') {

        try {
  
            const newService = await db.servicio.create({
            data: {
                nombre: data.nombre,
                descrip: data.descrip,
                precio_min: data.precio,
                foto:"pendiente"
                },
            });
            return NextResponse.json(newService);
            
        } catch (error) {
            console.error("Error en el controlador POST:", error);
            return NextResponse.error("Ocurrió un error en el servidor", 500);
        }

    } else if (data.message == 'Eliminar'){
        try {
  
            const deletedServicio = await db.servicio.delete({
                where: {
                    id: data.id
                }
            });
            return NextResponse.json(deletedServicio);
            
        } catch (error) {
            console.error("Error en el controlador POST:", error);
            return NextResponse.error("Ocurrió un error en el servidor", 500);
        }
    } 

}