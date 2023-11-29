'use server'
import db from "@/lib/db"
import { da } from "date-fns/locale";
import nodemailer from 'nodemailer'

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

export const CitaEnviada = async (data) =>{
    try {
        const noti = await Notificacion(data)

        if (!noti) {
            return {
                ok:false,
                message:'Hubo un error en el envio de la Solicitud'
            }  
        }
        
        const newSolicitud = await db.cita.create({
        data: {
            nombreCliente: data.ClienteInfo.nombre +" "+ data.ClienteInfo.apellidos,
            nombreMascota:data.MascotaInfo.nombre,
            fechaSolicitud:data.fechaSolicitud.toISOString(),
            horaSolicitud: data.horaSolicitud,
            ClienteInfo: data.ClienteInfo,
            MascotaInfo: data.MascotaInfo,
            servicio_id:data.servicio,
            asunto:data.asunto,
            },
        });

        if(newSolicitud) {
            return {
                ok:true,
                message:'Se envio la Solicitud de Cita correctamente'
            }
        }

        return {
                ok:false,
                message:'Hubo un error en el envio de la Solicitud'
        }
    
        
    } catch (error) {
        console.error("Error:", error);
        return {
            ok:false,
            message:'Hubo un error en el envio de la Solicitud'
        }
    }
}

const Notificacion = async (data) =>{
    try {
        const transporter =nodemailer.createTransport({
            service: 'Gmail',
            auth:{
                user: 'eddie.ehc04@gmail.com',
                pass:'atruslumwofdcrxl'
            }
    })
    
        const mailOptions = {
            from:'"VeterinariaYanaPata" <eddie.ehc04@gmail.com>',
            to: 'eddie.ehc04@gmail.com',
            subject: 'Solicitud de Cita',
            html: 
            `
            <div style="font-family: 'Comfortaa', sans-serif; color: #000; margin: 0; padding: 20px;">
                <h2 style="background-color: #00CED1; color: #fff; padding: 10px; text-align: center;">Solicitud de Cita</h2>
                <ul>
                    <h3 style="background-color: #00CED1; color: #fff; padding: 5px; width: 200px;">Información del dueño</h3>
                    <li style="color: #000; margin: 10px 0;">Nombres del dueño: ${data.ClienteInfo.nombre}</li>
                    <li style="color: #000; margin: 10px 0;">Apellidos del dueño: ${data.ClienteInfo.apellidos}</li>
                    <li style="color: #000; margin: 10px 0;">Número del dueño: ${data.ClienteInfo.telefono}</li>
                    <li style="color: #000; margin: 10px 0;">Correo del dueño: ${data.ClienteInfo.correo}</li>
                    <h3 style="background-color: #00CED1; color: #fff; padding: 5px; width: 200px;">Información de la Mascota</h3>
                    <li style="color: #000; margin: 10px 0;">Nombre de la mascota: ${data.MascotaInfo.nombre}</li>
                    <li style="color: #000; margin: 10px 0;">Sexo de la mascota: ${data.MascotaInfo.sexo}</li>
                    <li style="color: #000; margin: 10px 0;">Tipo de mascota: ${data.MascotaInfo.tipo}</li>
                    <li style="color: #000; margin: 10px 0;">Raza de mascota: ${data.MascotaInfo.raza}</li>
                    <h3 style="background-color: #00CED1; color: #fff; padding: 5px; width: 200px;">Información de la cita</h3>
                    <li style="color: #000; margin: 10px 0;">Día: ${data.fechaSolicitud}</li>
                    <li style="color: #000; margin: 10px 0;">Hora: ${data.horaSolicitud}</li>
                    <li style="color: #000; margin: 10px 0;">Servicio escogido: ${data.servicio}</li>
                    <li style="color: #000; margin: 10px 0;">Detalles: ${data.asunto}</li>
                </ul>
            </div>
    `
        };

        const res = await transporter.sendMail(mailOptions)
        if (res) {
            return true
        }
    } catch (error) {
        return false
    }
}
