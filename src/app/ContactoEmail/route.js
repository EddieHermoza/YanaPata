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
                <div>
                <h2>Tengo una consulta</h2>
                <ul>
                    <li>Usuario: ${subject}</li>
                    <li>Telefono: ${number}</li>
                    <li>Correo Electronico: ${email}</li>
                    <li>Mensaje: ${message}</li>
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