"use server"
import bcrypt from "bcrypt";
import { format } from 'date-fns';
import db from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function getClientePages(query) {
    try {
      const count = await db.usuario.count({
        where: {
            rol: 'cliente',
            nombres: {
              contains: query,
            },
        },
      });
  
      const totalPages = Math.ceil(count / 10);
      return totalPages;
    } catch (error) {
      console.error('Prisma Error:', error);
      throw new Error('Failed to fetch total number of clients.');
    }
  }

  export async function getData(query,page) {
    try {
        const pages = page || 1;;
        const itemsPerPage = 10;
        const skip = (pages - 1) * itemsPerPage;
    
        let whereCondition = {
            rol: 'cliente',
        };
    
        if (query) {
            whereCondition = {
                ...whereCondition,
                OR: [
                    { nombres: { contains: query } },
                ],
            };
        }
    
        const usuarios = await db.usuario.findMany({
            where: whereCondition,
            include: {
                cliente: {
                    select: {
                        telefono: true,
                    },
                },
            },
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


  export const ClienteCreado = async (data) =>{
    try {
        const userFound = await db.usuario.findUnique({
        where: {
            email: data.email,
        },
        });

        if (userFound) {
            return {
                ok:false,
                message:"El correo ya está registrado"
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
                },
        });

        const newClient = await db.cliente.create({
            data: {
                usuario_id:newUser.id,
                telefono: data.telefono,

                },
        })
        if (newClient) {
            revalidatePath('/Dashboard/Clientes')
            return{
                ok:true,
                message:"Cliente creado con éxito"
            }
        }
        
    } catch (error) {
        console.error("Error:", error);
        return{
            ok:false,
            message:"Error en la creación de un cliente"
        }
    }
  } 

  export const EstadoCambiado = async (data) => {
    try {
        if (data.estado === 'Habilitado') {
            const updatedCliente = await db.usuario.update({
                where: {
                    id: data.id
                },
                data:{
                    estado:'Deshabilitado'
                }
            });
            if (updatedCliente) {
                revalidatePath('/Dashboard/Clientes')
                return true
            }
        } else {
            const updatedCliente = await db.usuario.update({
                where: {
                    id: data.id
                },
                data:{
                    estado:'Habilitado'
                }
            });
            if (updatedCliente) {
                revalidatePath('/Dashboard/Clientes')
                return false
            }
        }
        
    } catch (error) {
        console.error("Error:", error);
    }
}

export const ClienteEliminado = async (data)=>{
    try {
        const deletedClient = await db.usuario.delete({
            where: {
                id: data.id
            }
        });
        if (deletedClient) {
            revalidatePath('/Dashboard/Clientes')
            return true;   
        }
        
    } catch (error) {
        console.error("Error:", error);
        return false
    } 
}