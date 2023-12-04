import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {
    
    try {
        const {nombres,apellidos,numero,correo,nombreMasc,sexoMasc,tipo,raza,dia,hora,servicio,motivo} =await request.json();
        const transporter =nodemailer.createTransport({
            service: 'Gmail',
            auth:{
                user: 'eddie.ehc04@gmail.com',
                pass:'uesb owlq zyqf prur'
            }
    })
    
        const mailOptions = {
            from:'VeterinariaYanaPata <eddie.ehc04@gmail.com>',
            to: correo,
            subject: 'Solicitud de Cita',
            html: 
            `
            <div style="font-family: 'Comfortaa', sans-serif; color: #000; margin: 0; padding: 20px;">
                <h2 style="background-color: #00CED1; color: #fff; padding: 10px; text-align: center;">Solicitud de Cita</h2>
                <ul>
                    <h3 style="background-color: #00CED1; color: #fff; padding: 5px; width: 200px;">Información del dueño</h3>
                    <li style="color: #000; margin: 10px 0;">Nombres del dueño: ${nombres}</li>
                    <li style="color: #000; margin: 10px 0;">Apellidos del dueño: ${apellidos}</li>
                    <li style="color: #000; margin: 10px 0;">Número del dueño: ${numero}</li>
                    <li style="color: #000; margin: 10px 0;">Correo del dueño: ${correo}</li>
                    <h3 style="background-color: #00CED1; color: #fff; padding: 5px; width: 200px;">Información de la Mascota</h3>
                    <li style="color: #000; margin: 10px 0;">Nombre de la mascota: ${nombreMasc}</li>
                    <li style="color: #000; margin: 10px 0;">Sexo de la mascota: ${sexoMasc}</li>
                    <li style="color: #000; margin: 10px 0;">Tipo de mascota: ${tipo}</li>
                    <li style="color: #000; margin: 10px 0;">Raza de mascota: ${raza}</li>
                    <h3 style="background-color: #00CED1; color: #fff; padding: 5px; width: 200px;">Información de la cita</h3>
                    <li style="color: #000; margin: 10px 0;">Día: ${dia}</li>
                    <li style="color: #000; margin: 10px 0;">Hora: ${hora}</li>
                    <li style="color: #000; margin: 10px 0;">Servicio escogido: ${servicio}</li>
                    <li style="color: #000; margin: 10px 0;">Detalles: ${motivo}</li>
                </ul>
            </div>
    `
        };
        console.log(mailOptions)

        await transporter.sendMail(mailOptions)
        return NextResponse.json({message:'mensaje enviado correctamente'},{status: 200})
    } catch (error) {
        return NextResponse.json({message:'Hubo un error en el envio del mensaje'},{status: 500})
    }
    
}