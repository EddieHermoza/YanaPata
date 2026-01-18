import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_TOKEN);

export async function POST(request) {

    try {
        const { subject, email, message, number } = await request.json();

        const { data, error } = await resend.emails.send({
            from: 'VeterinariaYanaPata <onboarding@resend.dev>',
            to: ['eddie.ehc04@gmail.com'],
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
        });

        if (error) {
            console.error('Error sending email:', error);
            return NextResponse.json({ message: 'Hubo un error en el envio del mensaje' }, { status: 500 });
        }

        return NextResponse.json({ message: 'mensaje enviado correctamente' }, { status: 200 })
    } catch (error) {
        console.error('Error handler:', error);
        return NextResponse.json({ message: 'Hubo un error en el envio del mensaje' }, { status: 500 })
    }

}