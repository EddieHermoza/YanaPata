"use server"
import db from "@/lib/db"
import bcrypt from "bcrypt"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { auth, signIn, signOut } from "@/auth"
import { AuthError } from "next-auth"

export async function CerrarSesionAdmin() {
    await signOut({ redirectTo: "/" })
}

export async function CerrarSesion() {
    await signOut({ redirectTo: "/" })
}

export async function RegisterAction(data) {
    try {
        const userFound = await db.usuario.findUnique({
            where: { email: data.email }
        })

        if (userFound) {
            return { ok: false, message: "El correo ya esta registrado" }
        }

        const hashPassword = await bcrypt.hash(data.password, 10)

        const newUser = await db.usuario.create({
            data: {
                nombres: data.nombres,
                apellidos: data.apellidos,
                email: data.email,
                password: hashPassword,
                rol: "cliente",
                estado: "Habilitado"
            }
        })

        const newClient = await db.cliente.create({
            data: {
                usuario_id: newUser.id,
                telefono: data.telefono
            }
        })

        if (newClient) {
            return { ok: true, message: "Usuario registrado" }
        }
    } catch (error) {
        console.error("Error:", error)
        return { ok: false, message: "Error en el registro" }
    }
}

export async function LoginAction(data) {
    try {
        const userFound = await db.usuario.findUnique({
            where: { email: data.email }
        })

        if (!userFound) {
            return { ok: false, message: "Correo no registrado" }
        }

        if (userFound.estado === "Deshabilitado") {
            return { ok: false, message: "Usuario no habilitado" }
        }

        const match = await bcrypt.compare(data.password, userFound.password)

        if (!match) {
            return { ok: false, message: "Las contraseñas no coinciden" }
        }

        await signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: false,
        })

        return {
            ok: true,
            rol: userFound.rol,
            message: "Inicio de Sesión exitoso"
        }
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { ok: false, message: "Credenciales inválidas" }
                default:
                    return { ok: false, message: "Error desconocido" }
            }
        }
        console.error("Error en el controlador POST:", error)
        return { ok: false, message: "Error en el inicio de sesion" }
    }
}

export async function getUserSession() {
    return await auth()
}
