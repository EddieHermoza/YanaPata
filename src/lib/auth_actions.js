"use server"
import db from "@/lib/db"
import createSupaBaseServerClient from "./supabase/server"
import {  cookies } from 'next/headers'
import bcrypt from "bcrypt"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function CerrarSesionAdmin() {
    cookies().delete('rol')
    cookies().delete('nombre')
    cookies().delete('email')
    cookies().delete('id')
    revalidatePath('layout')
    redirect('/')
}

export async function CerrarSesion() {

    const supabase = await createSupaBaseServerClient();
    async function signOut() {
        const { error } = await supabase.auth.signOut();
        if (error) {
            return false
        } else {
            return true
        }
    }

    const res = await signOut();
    if (res) {
        cookies().delete('rol')
        cookies().delete('nombre')
        cookies().delete('email')
        cookies().delete('id')
        revalidatePath('layout')
        redirect('/')
    }
}


export async function RegisterAction(data){
    try {
        const supabase = await createSupaBaseServerClient()
        const res = await supabase.auth.signUp({
            email:data.email,
            password:data.password
        })

        if (res.error) {
            return {
                ok:false,
                message:"Hubo un error en el registro"
            }
        }

        const userFound = await db.usuario.findUnique({
            where: {
                email: data.email,
            },
        });

        if (userFound) {
            return {
                ok:false,
                message:"El correo ya esta registrado"
            }

        }

        const hashPassword = await bcrypt.hash(data.password, 10);

        const newUser = await db.usuario.create({
            data: {
                nombres: data.nombres,
                apellidos: data.apellidos,
                email: data.email,
                password: hashPassword,
                rol: "cliente",
                estado:"Habilitado"
            },
        });

        const newClient = await db.cliente.create({
            data:{
                usuario_id: newUser.id,
                telefono:data.telefono
            }
        })

        if (newClient) {
            return{
                ok:true,
                message:"Usuario registrado"
            }
        }
        
    } catch (error) {
        console.error("Error:", error);
        return {
            ok:false,
            message:"Error en el registro"
        }
    }
}

export async function LoginAction (data) {

    try {
        const userFound = await db.usuario.findUnique({
            where: {
                email: data.email
            }
        });
        
        if (!userFound) {
            return {ok:false,message:"Correo no registrado"}
        }

        if (userFound.estado==="Deshabilitado") {
            return {ok:false,message:"Usuario no habilitado"}
        }


        const match = await bcrypt.compare(data.password, userFound.password);

        if (!match) {
            return {ok:false,message:"Las contraseñas no coinciden"}
        }

        const supabase = await createSupaBaseServerClient()
        const res = await supabase.auth.signInWithPassword({
            email:data.email,
            password:data.password
        })


        if (res) {

            cookies().set({
                name: 'nombre',
                value:  `${userFound.nombres+" "+userFound.apellidos}`,
                httpOnly: true,
                path: '/',
                secure:true
            })
            cookies().set({
                name: 'email',
                value:  `${userFound.email}`,
                httpOnly: true,
                path: '/',
                secure:true
            })
            cookies().set({
                name: 'rol',
                value:  `${userFound.rol}`,
                httpOnly: true,
                path: '/',
                secure:true,
            })
            cookies().set({
                name: 'id',
                value:  `${userFound.id}`,
                httpOnly: true,
                path: '/',
                secure:true
            })


            if (!userFound.supabaseId) {
                await db.usuario.update({
                    where: { email: data.email },
                    data: {
                        supabaseId: res.data.user.id
                    }
                });
            }
            return {
                ok: true,
                rol:userFound.rol,
                message: "Inicio de Sesión exitoso"
            };

        } else {
            return {ok:false,message:"Correo no validado"};
        }
    } catch (error) {
        console.error("Error en el controlador POST:", error);
        return {ok:false,message:"Error en el inicio de sesion"};
    }
}

export async function getUserSession(){
    const supabase = await createSupaBaseServerClient()
    return supabase.auth.getSession()
}

