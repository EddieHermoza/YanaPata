"use client"
import {AiFillDelete} from "react-icons/ai"
import {BsFillPencilFill} from "react-icons/bs"
import { useEffect, useState } from 'react';


export default function TablaUsuarios() {
    const [usuarios, setUsuarios] = useState([]);

    async function fetchUsuarios() {
        const data={
            message:"Listar"
        }
        const rspt = await fetch('/api/ctrlAdministradores',{
            method:'POST',
            body:JSON.stringify(data),
            headers: {
                'Content-Type':'application/json'
            }
        });

        if (rspt.ok) { 
            const usuariosData = await rspt.json();
            setUsuarios(usuariosData);
        } else {
            console.error('Error al obtener datos de usuarios');
        }
        
    }

    useEffect(() => {

        fetchUsuarios();
    }, []);

  return (
    <>
      <table className="w-full h-auto text-center text-xs">
            <thead className="border-b bg-neutral-800 text-white">
            <tr>
                <th scope="col" className="p-3">ID</th>
                <th scope="col" className="max-[425px]:hidden p-3">Nombres</th>
                <th scope="col" className="max-md:hidden p-3">Apellidos</th>
                <th scope="col" className="p-3">Correo Electrónico</th>
                <th scope="col" className="max-xl:hidden p-3">Contraseña</th>
                <th scope="col" className="p-3"></th>
            </tr>
            </thead>
            <tbody className="text-black">
            {usuarios.map((usuario) => (
            <tr key={usuario.id} className="border-b hover:bg-slate-100 transform duration-200 h-[30px]">
                <td className="p-2 truncate">{usuario.id}</td>
                <td className="p-2 max-[425px]:hidden truncate max-w-[200px]">{usuario.nombres}</td>
                <td className="p-2 max-md:hidden truncate max-w-[200px]">{usuario.apellidos}</td>
                <td className="p-2 truncate max-w-[200px]">{usuario.email}</td>
                <td className="p-2 max-xl:hidden truncate max-w-[200px]">{usuario.password}</td>
                <td className="flex max-sm:flex-col h-full items-center justify-center gap-1 p-2">
                    <button className='bg-red-500 w-full flex justify-center text-white p-2 rounded'><AiFillDelete size={16}/></button>
                    <button className='bg-yellow-500 flex justify-center w-full text-white p-2 rounded'><BsFillPencilFill size={16}/></button>
                </td>
            </tr>
            ))}
            </tbody>
        </table>
    </>
    );
}
