"use server"
import db from "@/lib/db"
export async function CambiarNombres(data){
    try {
        const upd = await db.usuario.update({
            where:{
                id:data.id
            },
            data:{
                nombres:data.nombres
            }
        })
        if (upd) {
            return {
                ok:true,
                message:"Nombres Modificados correctamente"
            }
        }
        return {
            ok:false,
            message:"Error al modificar los nombres"
        }
    } catch (error) {
        console.log(error)
        return {
            ok:false,
            message:"Error al modificar los nombres"
        }
    }
}

export async function CambiarApellidos(data){
    try {
        const upd = await db.usuario.update({
            where:{
                id:data.id
            },
            data:{
                nombres:data.apellidos
            }
        })
        if (upd) {
            return {
                ok:true,
                message:"Apellidos Modificados correctamente"
            }
        }
        return {
            ok:false,
            message:"Error al modificar los apellidos"
        }
    } catch (error) {
        console.log(error)
        return {
            ok:false,
            message:"Error al modificar los apellidos"
        }
    }
}

export async function CambiarNumero(data){
    try {
        const upd = await db.cliente.update({
            where:{
                usuario_id:data.id
            },
            data:{
                telefono:data.numero
            }
        })
        if (upd) {
            return {
                ok:true,
                message:"Telefono Modificado correctamente"
            }
        }
        return {
            ok:false,
            message:"Error al modificar el telefono"
        }
    } catch (error) {
        console.log(error)
        return {
            ok:false,
            message:"Error al modificar el telefono"
        }
    }
}