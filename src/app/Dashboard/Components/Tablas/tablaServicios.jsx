"use client"
import {AiFillDelete} from "react-icons/ai"
import {BsFillPencilFill} from "react-icons/bs"
import { useEffect, useState } from 'react';


export default function TablaServicios() {
    const [servicios, setServicios] = useState([]);

    async function fetchServicios() {
        const data={
            message:"Listar"
        }
        const rspt = await fetch('/api/ctrlServicios',{
            method:'POST',
            body:JSON.stringify(data),
            headers: {
                'Content-Type':'application/json'
            }
        });

        if (rspt.ok) { 
            const usuariosData = await rspt.json();
            setServicios(usuariosData);
        } else {
            console.error('Error al obtener datos de los Servicios');
        }
        
    }

    async function Eliminar(id){
        const data={
            message:"Eliminar",
            id:id
        }
        const rspt = await fetch('/api/ctrlServicios',{
            method:'POST',
            body:JSON.stringify(data),
            headers: {
                'Content-Type':'application/json'
            }
        });

        if (rspt.ok) { 
            location.reload()
        } else {
            console.error('Error al Eliminar');
        }
    }

    useEffect(() => {
        fetchServicios();
    }, []);

  return (
    <>
      <table className="w-full h-auto text-center text-xs">
            <thead className="border-b bg-neutral-800 text-white">
            <tr>
                <th scope="col" className="p-3">ID</th>
                <th scope="col" className="max-md:hidden p-3">Creado:</th>
                <th scope="col" className="p-3">Nombre:</th>
                <th scope="col" className="max-sm:hidden p-3">Descripción</th>
                <th scope="col" className="max-[425px]:hidden p-3">Precio:</th>
                <th scope="col" className="p-3"></th>
            </tr>
            </thead>
            <tbody className="text-black">
            {servicios.map((servicio) => (
            <tr key={servicio.id} className="border-b hover:bg-slate-100 transform duration-200 h-[30px]">
                <td className="p-2 truncate">{servicio.id}</td>
                <td className="p-2 max-md:hidden truncate max-w-[200px]">{servicio.creacion}</td>
                <td className="p-2 truncate max-w-[200px]">{servicio.nombre}</td>
                <td className="p-2 max-sm:hidden truncate max-w-[200px]">{servicio.descrip}</td>
                <td className="p-2 max-[425px]:hidden truncate max-w-[200px]">{servicio.precio_min}</td>
                <td className="flex max-sm:flex-col h-full items-center justify-center gap-1 p-2">
                    <button className='bg-red-500 w-full flex justify-center text-white p-2 rounded' onClick={()=>Eliminar(servicio.id)}><AiFillDelete size={16}/></button>
                    <button className='bg-yellow-500 flex justify-center w-full text-white p-2 rounded'><BsFillPencilFill size={16}/></button>
                </td>
            </tr>
            ))}
            </tbody>
        </table>
    </>
    );
}
