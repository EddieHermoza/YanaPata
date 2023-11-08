import { NextResponse } from "next/server";
import db from "@/libs/db";

export async function POST(request) {

    const data = await request.json();

    if (data.message == 'Listar' ) {
        const citas = await db.cita.findMany();

        if (citas) {
            return NextResponse.json(citas);
        }
    } else if (data.message == 'Crear') {

        try {
  
            const newSolicitud = await db.cita.create({
            data: {
                fechaSolicitud: data.fechaSolicitud,
                horaSolicitud: data.horaSolicitud,
                ClienteInfo: data.ClienteInfo,
                MascotaInfo: data.MascotaInfo,
                servicio_id:parseInt(data.servicio),
                asunto:data.asunto,
                estado:"POR APROBAR"
                },
            });
            return NextResponse.json(newSolicitud);
            
        } catch (error) {
            console.error("Error en el controlador POST:", error);
            return NextResponse.error("Ocurrió un error en el servidor", 500);
        }

    } else if(data.message == 'Eliminar'){
        try {
  
            const deletedSolicitud = await db.cita.delete({
                where: {
                    id: data.id
                }
            });
            return NextResponse.json(deletedSolicitud);
            
        } catch (error) {
            console.error("Error en el controlador POST:", error);
            return NextResponse.error("Ocurrió un error en el servidor", 500);
        }

    } else if (data.message == 'Aprobar') {
        try {
            const updatedSolicitud = await db.cita.update({
                where: {
                    id: data.id
                },
                data: {
                    estado: 'APROBADO' 
                }
            });
            return NextResponse.json(updatedSolicitud);
        } catch (error) {
            console.error("Error en el controlador POST:", error);
            return NextResponse.error("Ocurrió un error en el servidor", 500);
        }
    } 

}