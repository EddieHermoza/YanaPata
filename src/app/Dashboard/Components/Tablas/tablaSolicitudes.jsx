"use client"
import {AiFillDelete,AiOutlineCheck} from "react-icons/ai"
import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";


export default function TablaSolicitudes() {
    const [citas, setCitas] = useState([]);
    const router=useRouter();
    async function fetchCitas() {
        const data={
            message:"Listar"
        }
        const rspt = await fetch('/api/ctrlSolicitudes',{
            method:'POST',
            body:JSON.stringify(data),
            headers: {
                'Content-Type':'application/json'
            }
        });

        if (rspt.ok) { 
            const citasData = await rspt.json();
            setCitas(citasData);
        } else {
            console.error('Error al obtener datos de las Citas');
        }
        
    }

    async function Aprobar(id){
        const data={
            message:"Aprobar",
            id:id
        }
        const rspt = await fetch('/api/ctrlSolicitudes',{
            method:'POST',
            body:JSON.stringify(data),
            headers: {
                'Content-Type':'application/json'
            }
        });

        if (rspt.ok) { 
            location.reload()
        } else {
            console.error('Error al Aprobar');
        }
    }

    async function Eliminar(id){
        const data={
            message:"Eliminar",
            id:id
        }
        const rspt = await fetch('/api/ctrlSolicitudes',{
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
        fetchCitas();
    }, []);

  return (
    <>
      <table className="w-full h-auto text-center text-xs">
            <thead className="border-b bg-neutral-800 text-white">
            <tr>
                <th scope="col" className="p-3">ID</th>
                <th scope="col" className="max-md:hidden p-3">Creado:</th>
                <th scope="col" className="max-md:hidden p-3">Fecha:</th>
                <th scope="col" className="max-md:hidden p-3">Hora:</th>
                <th scope="col" className="p-3">Nombre Cliente:</th>
                <th scope="col" className="max-sm:hidden p-3">Nombre Mascota</th>
                <th scope="col" className="max-[425px]:hidden p-3">Servicio:</th>
                <th scope="col" className="max-[425px]:hidden p-3">Asunto:</th>
                <th scope="col" className="max-[425px]:hidden p-3">Estado:</th>
                <th scope="col" className="p-3"></th>
            </tr>
            </thead>
            <tbody className="text-black">
            {citas.map((ci) => (
            <tr key={ci.id} className="border-b hover:bg-slate-100 transform duration-200 h-[30px]">
                <td className="p-2 truncate">{ci.id}</td>
                <td className="p-2 max-md:hidden truncate max-w-[200px]">{ci.creacion}</td>
                <td className="p-2 truncate max-w-[200px]">{ci.fechaSolicitud}</td>
                <td className="p-2 max-sm:hidden truncate max-w-[200px]">{ci.horaSolicitud}</td>
                <td className="p-2 max-[425px]:hidden truncate max-w-[200px]">{ci.ClienteInfo.nombre}</td>
                <td className="p-2 max-[425px]:hidden truncate max-w-[200px]">{ci.MascotaInfo.nombre}</td>
                <td className="p-2 truncate">{ci.servicio_id}</td>
                <td className="p-2 truncate max-w-[200px]">{ci.asunto}</td>
                <td className="p-2 truncate max-w-[200px]">{ci.estado}</td>
                <td className="flex max-sm:flex-col h-full items-center justify-center gap-1 p-2">
                    <button className='bg-yellow-500 flex justify-center w-full text-white p-2 rounded' onClick={() => Aprobar(ci.id)}><AiOutlineCheck size={16}/></button>
                    <button className='bg-red-500 w-full flex justify-center text-white p-2 rounded' onClick={() => Eliminar(ci.id)}><AiFillDelete size={16}/></button>
                </td>
            </tr>
            ))}
            </tbody>
        </table>
    </>
    );
}
