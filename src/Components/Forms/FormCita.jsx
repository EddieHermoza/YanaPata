'use client'
import { useEffect,useState } from "react";
import dataServicios from "@/app/utils/data.json"

function FormCita() {

    const [nombres,setNombres] = useState('');
    const [apellidos,setApellidos] = useState('');
    const [correo,setCorreo] = useState('');
    const [numero,setNumero] = useState('');

    const [nombreMasc,setNombreMasc] = useState('');
    const [sexoMasc,setSexoMasc] = useState('');
    const [tipo,setTipo] = useState('');
    const [raza,setRaza] = useState('');
    
    const [dia,setDia] = useState('');
    const [hora,setHora] = useState('');
    const [servicio,setServicio] = useState('');
    const [motivo,setMotivo] = useState('');

    const [sending,setSending] =useState('');
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
            const serviciosData = await rspt.json();
            setServicios(serviciosData);
        } else {
            console.error('Error al obtener datos de los Servicios');
        }
        
    }

    useEffect(() => {

        EstablecerFechaMin()
        fetchServicios()
      }, []);

      async function EstablecerFechaMin(){
        const fechaActual = new Date();
    
        fechaActual.setDate(fechaActual.getDate() + 1);
    
        const fechaMin = fechaActual.toISOString().split('T')[0];

        const fechaInput = document.getElementById('fechaInput');

        fechaInput.min = fechaMin;
      }

      const send = async (e) =>{
        e.preventDefault();
        
        if(sending){
            return
        }
        setSending(true)

        const clieInfo={
            nombre:nombres,
            apellidos:apellidos,
            telefono:numero,
            correo:correo
        }

        const mascoInfo = {
            nombre:nombreMasc,
            sexo:sexoMasc,
            tipo:tipo,
            raza:raza
        }

        const data={
            message:'Crear',
            fechaSolicitud:dia,
            horaSolicitud:hora,
            ClienteInfo: clieInfo,
            MascotaInfo:mascoInfo,
            servicio:servicio,
            asunto:motivo,
        }

        const rsptBD= await fetch('/api/ctrlSolicitudes',{
            method:'POST',
            body:JSON.stringify(data),
            headers: {
                'Content-Type':'application/json'
            }
        })

        const rspt= await fetch('/CitaEmail',{
            method: 'POST',
            body: JSON.stringify({
                nombres,
                apellidos,
                numero,
                correo,
                nombreMasc,
                sexoMasc,
                tipo,
                raza,
                dia,
                hora,
                servicio,
                motivo,
            })
        })

        if (rspt.ok && rsptBD.ok) {
            setNombres('')
            setApellidos('')
            setNumero('')
            setCorreo('')
            setNombreMasc('')
            setSexoMasc('')
            setTipo('')
            setRaza('')
            setDia('')
            setHora('')
            setServicio('')
            setMotivo   ('')
            setSending(false)
        }
        
    }
      

  return (
    <form className="w-full flex flex-col gap-10 " onSubmit={send}>
        <input type="hidden" value={"cita"} />
        <div className="flex flex-col gap-5">
            <span className="text-2xl text-verde-rgb filter saturate-[3]">Información del Dueño :</span>
            <label htmlFor="" className="flex md:w-[600px] flex-col-reverse">
                <input 
                    type="text" 
                    name="" 
                    id="" 
                    required 
                    value={nombres} 
                    onChange={ (e)=>{ setNombres(e.target.value)} }
                     className="peer text-base border-b h-[40px] text-black outline-none border-black focus:border-verde-rgb filter saturate-[3] trasnform duration-200 px-2" 
                />
                <span className="peer-focus:text-verde-rgb filter saturate-200 transform duration-200"> Nombres : </span>
            </label>
            <label htmlFor="" className="flex md:w-[600px] flex-col-reverse">
                <input 
                    type="text" 
                    name="" 
                    id="" 
                    required 
                    value={apellidos} 
                    onChange={ (e)=>{ setApellidos(e.target.value)} }
                     className="peer text-base border-b h-[40px] text-black outline-none border-black focus:border-verde-rgb filter saturate-[3] trasnform duration-200 px-2" 
                />
                <span className="peer-focus:text-verde-rgb filter saturate-200 transform duration-200">Apellidos :</span>
            </label>   
            <label htmlFor="" className="flex md:w-[600px] flex-col-reverse">
                <input 
                    type="email" 
                    name="" 
                    id="" 
                    required 
                    value={correo} 
                    onChange={ (e)=>{ setCorreo(e.target.value)} } 
                    className="peer text-base border-b h-[40px] text-black outline-none border-black focus:border-verde-rgb filter saturate-[3] trasnform duration-200 px-2" 
                />
                <span className="peer-focus:text-verde-rgb filter saturate-200 transform duration-200">Correo Electronico :</span>
            </label>  
            <label htmlFor="" className="flex md:w-[600px] flex-col-reverse">
                <input 
                    type="text" 
                    name="" 
                    id="" 
                    required 
                    value={numero} 
                    onChange={ (e)=>{ setNumero(e.target.value)} } 
                    className="peer text-base border-b h-[40px] text-black outline-none border-black focus:border-verde-rgb filter saturate-[3] trasnform duration-200 px-2" 
                />
                <span className="peer-focus:text-verde-rgb filter saturate-200 transform duration-200">Teléfono de contacto : </span>
            </label>
        </div>
        
        <div className="flex flex-col gap-5">
            <span className="text-2xl text-verde-rgb filter saturate-[3] ">Información de la mascota :</span>
            <label htmlFor="" className="flex md:w-[600px] flex-col-reverse">
                <input 
                    type="text" 
                    name="" 
                    id="" 
                    required 
                    value={nombreMasc} 
                    onChange={ (e)=>{ setNombreMasc(e.target.value)} } 
                     className="peer text-base border-b h-[40px] text-black outline-none border-black focus:border-verde-rgb filter saturate-[3] trasnform duration-200 px-2" 
                />
                <span className="peer-focus:text-verde-rgb filter saturate-200 transform duration-200">Nombre de la Mascota : </span>
            </label>
            <div className="relative md:w-[600px] gap-2 flex ">
                <label htmlFor="" className="flex w-1/2 flex-col-reverse">
                    <select 
                        name=""  
                        value={sexoMasc} 
                        onChange={ (e)=>{ setSexoMasc(e.target.value)} } 
                        required  className="peer text-base border-b h-[40px] text-black outline-none border-black focus:border-verde-rgb filter saturate-[3] trasnform duration-200 px-2"  
                        id="" >
                        <option value="" disabled >Seleccionar</option>
                        <option value="Macho">Macho</option>
                        <option value="Hembra">Hembra</option>
                    </select>
                    <span className="peer-focus:text-verde-rgb filter saturate-200 transform duration-200">Sexo : </span>
                </label>
                <label htmlFor="" className="flex w-1/2 flex-col-reverse">
                    <select 
                        name=""  
                        value={tipo} 
                        onChange={ (e)=>{ setTipo(e.target.value)} } 
                        required 
                         className="peer text-base border-b h-[40px] text-black outline-none border-black focus:border-verde-rgb filter saturate-[3] trasnform duration-200 px-2" 
                         id="" >
                        <option value="" disabled >Seleccionar</option>
                        <option value="Felino">Felino</option>
                        <option value="Canino">Canino</option>
                    </select>
                    <span className="peer-focus:text-verde-rgb filter saturate-200 transform duration-200">Tipo de Mascota :</span>
                </label> 
            </div>
            <label htmlFor="" className="flex md:w-[600px] flex-col-reverse">
                <input 
                    type="text" 
                    name="" 
                    required 
                    id="" 
                    value={raza} 
                    onChange={ (e)=>{ setRaza(e.target.value)} }
                     className="peer text-base border-b h-[40px] text-black outline-none border-black focus:border-verde-rgb filter saturate-[3] trasnform duration-200 px-2" 
                />
                <span className="peer-focus:text-verde-rgb filter saturate-200 transform duration-200">Raza de la Mascota :</span>
            </label>
        </div>
        <div className="flex flex-col gap-5">
            <span className="text-2xl text-verde-rgb filter saturate-[3]">Información de la cita :</span>
            <div className="relative md:w-[600px] gap-2 flex max-md:flex-col ">
                <label htmlFor="" className="flex md:w-1/2 flex-col-reverse">
                    <input 
                        type="date"  
                        value={dia} 
                        onChange={ (e)=>{ setDia(e.target.value)} } 
                        required 
                        name="" 
                        id="fechaInput"
                         className="peer text-base border-b h-[40px] text-black outline-none border-black focus:border-verde-rgb filter saturate-[3] trasnform duration-200 px-2" 
                    />
                    <span className="peer-focus:text-verde-rgb filter saturate-200 transform duration-200">Fecha :</span>
                </label>
                <label htmlFor="" className="flex md:w-1/2 flex-col-reverse">
                    <input 
                        type="time" 
                        required 
                        name="" 
                        id="" 
                        value={hora} 
                        onChange={ (e)=>{ setHora(e.target.value)} } 
                        className="peer text-base border-b h-[40px] text-black outline-none border-black focus:border-verde-rgb filter saturate-[3] trasnform duration-200 px-2" 
                    />
                    <span className="peer-focus:text-verde-rgb filter saturate-200 transform duration-200">Hora Preferencial :</span>
                </label>
            </div>
            <label htmlFor="" className="flex flex-col-reverse md:w-[600px]">
                <select 
                    name="" 
                    id="" 
                    required  
                    value={servicio} 
                    onChange={ (e)=>{ setServicio(e.target.value)} }
                     className="peer text-base border-b h-[40px] text-black outline-none border-black focus:border-verde-rgb filter saturate-[3] trasnform duration-200 px-2" >
                    <option value="" disabled className="">Seleccionar</option>
                    {servicios.map((servicio, index) => (
                        <option key={index} value={servicio.id} > {servicio.nombre}</option>
                    ))}
                </select>
                <span className="peer-focus:text-verde-rgb filter saturate-200 transform duration-200">Servicio :</span>
            </label>   
            <label htmlFor="" className="flex flex-col-reverse">
                <textarea 
                    id="" 
                    value={motivo} 
                    onChange={ (e)=>{ setMotivo(e.target.value)} } 
                    cols="30" 
                    rows="6" 
                    required
                     className="peer text-base border text-black outline-none border-black focus:border-verde-rgb filter saturate-[3] trasnform duration-200 px-2" >
                </textarea>
                <span className="peer-focus:text-verde-rgb filter saturate-200 transform duration-200">Agregue Detalles :</span>
            </label>
        </div>
        <button className={`bg-verde-rgb p-2 text-xl w-full filter rounded-tl-xl rounded-br-xl saturate-200 ${sending ? 'saturate-[3] shadow-lg text-black':''} hover:saturate-[3] hover:shadow-lg hover:text-black text-white transform duration-300`}
            disabled={sending}> 
            {sending ? "Enviando..." : "Solicitar una Cita"}
        </button>
    </form>
  )
}

export default FormCita