import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_TOKEN);

export async function POST(request) {

    try {
        const { nombres, apellidos, numero, correo, nombreMasc, sexoMasc, tipo, raza, dia, hora, servicio, motivo } = await request.json();

        const { data, error } = await resend.emails.send({
            from: 'VeterinariaYanaPata <onboarding@resend.dev>',
            to: [correo],
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