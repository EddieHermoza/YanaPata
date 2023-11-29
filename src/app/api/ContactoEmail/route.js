import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {
    
    try {
        const {subject,email,message,number} =await request.json();
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
            subject: 'Contacto',
            html: `
            <div style="font-family: 'Comfortaa', sans-serif; color: #000; margin: 0; padding: 20px;">
            <h2 style="background-color: #00CED1; color: #fff; padding: 10px; text-align: center;">Tengo una Consulta</h2>
                <ul>
                <h3 style="background-color: #00CED1; color: #fff; padding: 5px; width: 200px;">Información del Solicitante</h3>
                    <li style="color: #000; margin: 10px 0;">Usuario: ${subject}</li>
                    <li style="color: #000; margin: 10px 0;">Telefono: ${number}</li>
                    <li style="color: #000; margin: 10px 0;">Correo Electrónico: ${email}</li>
                    <li style="color: #000; margin: 10px 0;">Mensaje: ${message}</li>
                </ul>
            </div>
                
            `
        };

        await transporter.sendMail(mailOptions)
        return NextResponse.json({message:'mensaje enviado correctamente'},{status: 200})
    } catch (error) {
        return NextResponse.json({message:'Hubo un error en el envio del mensaje'},{status: 500})
    }
    
}