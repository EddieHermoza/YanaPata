"use server"
import bcrypt from "bcrypt";
import { format } from 'date-fns';
import db from "@/lib/db";
import { revalidatePath } from "next/cache";


export async function getAdminPages(query) {
    try {
        const count = await db.Usuario.count({
            where: {
                rol: 'administrador',
                nombres: {
                    contains: query,
                },
            },
        });
  
        const totalPages = Math.ceil(count / 10);
        return totalPages;
    } catch (error) {
        console.error('Prisma Error:', error);
        throw new Error('Error al contar las paginas de Admins');
    }
}

export async function getData (query,page){
    try {
        const pages = page || 1;;
        const itemsPerPage = 10;
        const skip = (pages - 1) * itemsPerPage;
    
        let whereCondition = {
            rol: 'administrador',
        };
    
        if (query) {
            whereCondition = {
                ...whereCondition,
                OR: [
                    { nombres: { contains: query } },
                ],
            };
        }
    
        const usuarios = await db.Usuario.findMany({
            where: whereCondition,
            skip: skip,
            take: itemsPerPage,
        });

        const usuariosFormateados = usuarios.map((usuario) => ({
            ...usuario,
            creacion: format(new Date(usuario.creacion), 'dd-MM-yyyy HH:mm'),
            modificacion: format(new Date(usuario.modificacion), 'dd-MM-yyyy HH:mm'),
          }));
        
        return usuariosFormateados;
    } catch (error) {
        console.error('Error en la consulta:', error);
        return []
    }
}


export const AdminCreado = async (data) => {
    try {
        const userFound = await db.usuario.findUnique({
            where: {
                email: data.email,
            },
        });

        if (userFound) {
            return {
                ok: false,
                message: "El correo ya está registrado",
            };
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

        if (newUser) {
            revalidatePath('/Dashboard/Administradores')
            return {
                ok: true,
                message: "Administrador ha sido creado con éxito",
            };
        }

    } catch (error) {
        console.error("Error:", error);
        return {
            ok: false,
            message: "Hubo un error al crear el usuario",
        };
    }
}

export const AdminModificado = async (data) => {
    try {

        if (data.password != '') {

            const hashPassword = await bcrypt.hash(data.password, 10);

            const updatedAdmin = await db.usuario.update({
                where: {
                    id: data.id
                },
                data:{
                    nombres:data.nombres,
                    apellidos:data.apellidos,
                    email:data.email,
                    password:hashPassword
                }
            });
            if (updatedAdmin) {
                revalidatePath('/Dashboard/Administradores')
                return {
                    ok:true,
                    message:"Administrador modificado con éxito"
                }
            }          
        }

        const updatedAdmin = await db.usuario.update({
            where: {
                id: data.id
            },
            data:{
                nombres:data.nombres,
                apellidos:data.apellidos,
                email:data.email,
            }
        });

        if (updatedAdmin) {
            revalidatePath('/Dashboard/Administradores')
            return {
                ok:true,
                message:"Administrador modificado con éxito"
            }
        } 

    } catch (error) {
        console.log(error)
        return {
                ok:false,
                message:"Hubo un error en la modificacion del Administrador"
            }
    }
}

export const EstadoCambiado = async (data) => {
    try {
        let updatedAdmin;

        if (data.estado === 'Habilitado') {
            updatedAdmin = await db.usuario.update({
                where: {
                    id: data.id
                },
                data:{
                    estado: 'Deshabilitado'
                }
            });

            if (updatedAdmin) {
                revalidatePath('/Dashboard/Administradores');
                return {
                    ok: true,
                    message: `Administrador ${updatedAdmin.nombres} deshabilitado`
                };
            }
        } else {
            updatedAdmin = await db.usuario.update({
                where: {
                    id: data.id
                },
                data:{
                    estado: 'Habilitado'
                }
            });

            if (updatedAdmin) {
                revalidatePath('/Dashboard/Administradores');
                return {
                    ok: true,
                    message: `Administrador ${updatedAdmin.nombres} habilitado`
                };
            }
        }
    } catch (error) {
        console.error("Error:", error);
        return {
            ok: false,
            message: "Hubo un error"
        };
    }
};

export const AdminEliminado = async (data) =>{
    try {
  
        const deletedAdmin = await db.usuario.delete({
            where: {
                id: data.id
            }
        });

        if (deletedAdmin) {
            revalidatePath('/Dashboard/Administradores')
            return true
        }
        
    } catch (error) {
        console.error("Error:", error);
        return false
    }
}