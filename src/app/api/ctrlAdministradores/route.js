import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import db from "@/libs/db";

export async function POST(request) {

    const data = await request.json();

    if (data.message == 'Listar' ) {
        const usuarios = await db.usuario.findMany({
            where: {
                rol: 'administrador',
              },
        });

        if (usuarios) {
            return NextResponse.json(usuarios);
        }
    } else if(data.message == 'Crear') {

        try {

            const userFound = await db.usuario.findUnique({
            where: {
                email: data.email,
            },
            });
    
            if (userFound) {
                return NextResponse.json(
                    {
                    message: "El correo ya está registrado",
                    },
                    {
                    status: 400,
                    }
                );
            }
    
            const hashPassword = await bcrypt.hash(data.password, 10);
    
            const newUser = await db.usuario.create({
            data: {
                nombres: data.nombres,
                apellidos: data.apellidos,
                email: data.email,
                password: hashPassword,
                rol: "administrador",
                },
            });
            const {password: _, ...usuario} = newUser;
            return NextResponse.json(usuario);
            
        } catch (error) {
            console.error("Error en el controlador POST:", error);
            return NextResponse.error("Ocurrió un error en el servidor", 500);
        }

    } 

}