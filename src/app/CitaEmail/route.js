import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {
    
    try {
        const {nombres,apellidos,numero,correo,nombreMasc,sexoMasc,tipo,raza,dia,hora,servicio,motivo} =await request.json();
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
            html: `
                <div>
                <h2>Solicitud de Cita </h2>
                <ul>
                    <h3>Información del dueño</h3>
                    <li>Nombres del dueño: ${nombres}</li>
                    <li>Apellidos del dueño: ${apellidos}</li>
                    <li>Número del dueño: ${numero}</li>
                    <li>Correo del dueño: ${correo}</li>
                    <br>
                    <h3>Información de la Mascota</h3>
                    <li>Nombre de la mascota: ${nombreMasc}</li>
                    <li>Sexo de la mascota: ${sexoMasc}</li>
                    <li>Tipo de mascota: ${tipo}</li>
                    <li>Raza de mascota: ${raza}</li>
                    <br>
                    <h3>Información de la cita</h3>
                    <li>Dia: ${dia}</li>
                    <li>Hora: ${hora}</li>
                    <li>Servicio escogido: ${servicio}</li>
                    <li>Detalles: ${motivo}</li>
                </ul>
                <div/>
                
            `
        };

        await transporter.sendMail(mailOptions)
        return NextResponse.json({message:'mensaje enviado correctamente'},{status: 200})
    } catch (error) {
        return NextResponse.json({message:'Hubo un error en el envio del mensaje'},{status: 500})
    }
    
}