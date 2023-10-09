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


    useEffect(() => {

        EstablecerFechaMin()
    
      }, []);

      async function EstablecerFechaMin(){
        const fechaActual = new Date();
    
        fechaActual.setDate(fechaActual.getDate() + 1);
    
        const fechaMin = fechaActual.toISOString().split('T')[0];

        const fechaInput = document.getElementById('fechaInput');

        fechaInput.min = fechaMin;
      }

      const sendEmail = async (e) =>{
        e.preventDefault();
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

        if (rspt.ok) {
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
        }
        
    }
      

  return (
    <form className="w-full flex flex-col gap-6 " onSubmit={sendEmail}>
        <input type="hidden" value={"cita"} />
        <div className="flex flex-col gap-2">
            <span className="text-2xl text-verde-rgb filter saturate-200">Información del Dueño</span>
            <div className="flex md:w-[600px] flex-col">
                <label htmlFor="">Nombres:</label>
                <input type="text" name="" id="" required value={nombres} onChange={ (e)=>{ setNombres(e.target.value)} } className="h-[40px] text-black rounded outline-none border-2 border-verde-rgb filter saturate-200 p-2"/>
            </div>
            <div className="flex md:w-[600px] flex-col">
                <label htmlFor="">Apellidos:</label>
                <input type="text" name="" id="" required value={apellidos} onChange={ (e)=>{ setApellidos(e.target.value)} } className="h-[40px] text-black rounded outline-none border-2 border-verde-rgb filter saturate-200 p-2"/>
            </div>
        
            <div className="flex md:w-[600px] flex-col">
                <label htmlFor="">Correo Electrónico:</label>
                <input type="email" name="" id="" required value={correo} onChange={ (e)=>{ setCorreo(e.target.value)} } className="h-[40px] text-black  rounded outline-none border-2 border-verde-rgb filter saturate-200 p-2"/>
            </div>

            <div className="flex md:w-[600px] flex-col">
                <label htmlFor="">Teléfono de contacto</label>
                <input type="text" name="" id="" required value={numero} onChange={ (e)=>{ setNumero(e.target.value)} } className="h-[40px] text-black rounded outline-none border-2 border-verde-rgb filter saturate-200 p-2"/>
            </div>
        </div>
        
        <div className="flex flex-col gap-2">
            <span className="text-2xl text-verde-rgb filter saturate-200">Información de la mascota</span>
            <div className="flex md:w-[600px] flex-col">
                <label htmlFor="">Nombre de la Mascota:</label>
                <input type="text" name="" id="" value={nombreMasc} onChange={ (e)=>{ setNombreMasc(e.target.value)} } required className="h-[40px] text-black rounded outline-none border-2 border-verde-rgb filter saturate-200 p-2"/>
            </div>
            <div className="relative md:w-[600px] gap-2 flex ">
                <div className="flex w-1/2 flex-col ">
                    <label htmlFor="">Sexo:</label>
                    <select name=""  value={sexoMasc} onChange={ (e)=>{ setSexoMasc(e.target.value)} } required className="h-[40px] text-black outline-none border-2 bg-white border-verde-rgb filter saturate-200 p-2" id="" >
                        <option value="" disabled >Seleccionar</option>
                        <option value="Macho">Macho</option>
                        <option value="Hembra">Hembra</option>
                    </select>
                </div>
                <div className="flex w-1/2 flex-col">
                    <label htmlFor="">Tipo de animal:</label>
                    <select name=""  value={tipo} onChange={ (e)=>{ setTipo(e.target.value)} } required className="h-[40px] text-black outline-none border-2 bg-white border-verde-rgb filter saturate-200 p-2" id="" >
                        <option value="" disabled >Seleccionar</option>
                        <option value="Felino">Felino</option>
                        <option value="Canino">Canino</option>
                    </select>
                </div>
            </div>
            <div className="flex md:w-[600px] flex-col">
                <label htmlFor="">Raza del animal:</label>
                <input type="text" name="" required id=""  value={raza} onChange={ (e)=>{ setRaza(e.target.value)} } className="h-[40px] text-black rounded outline-none border-2 border-verde-rgb filter saturate-200 p-2"/>
            </div>
        </div>
        <div className="flex flex-col gap-2">
            <span className="text-2xl text-verde-rgb filter saturate-200">Información de la cita:</span>
            <div className="relative md:w-[600px] gap-2 flex max-md:flex-col ">
                <div className="flex w-1/2 flex-col">
                    <label htmlFor="">Fecha:</label>
                    <input type="date"  value={dia} onChange={ (e)=>{ setDia(e.target.value)} } required name="" id="fechaInput" className="h-[40px] text-black outline-none bg-white border-2 border-verde-rgb filter saturate-200 p-2"/>
                </div>
                <div className="flex w-1/2 flex-col">
                    <label htmlFor="">Hora Preferencial:</label>
                    <input type="time" required name="" id="" value={hora} onChange={ (e)=>{ setHora(e.target.value)} } className="h-[40px] text-black outline-none border-2 bg-white border-verde-rgb filter saturate-200 p-2"/>
                </div>
            </div>
            <div className="flex flex-col md:w-[600px]">
                <label htmlFor="">Servicio:</label>
                <select name="" id="" required  value={servicio} onChange={ (e)=>{ setServicio(e.target.value)} }  className="outline-none h-[40px] text-black bg-white  border-2 border-verde-rgb filter saturate-200">
                    <option value="" disabled className="">Seleccionar</option>
                    <option value="Otro">Otro</option>
                    {dataServicios.map((servicio, index) => (
                        <option key={index} value={servicio.nombre} > {servicio.nombre}</option>
                    ))}
                </select>
            </div>
            <div className="flex flex-col">
                <label htmlFor="otherText">Agregue detalles:</label>
                <textarea id="otherText" value={motivo} onChange={ (e)=>{ setMotivo(e.target.value)} } cols="30" rows="6" required className="text-black rounded outline-none border-2 border-verde-rgb filter saturate-200 p-2"></textarea>
            </div>
        </div>
        <button className="bg-verde-rgb p-2 text-xl max-md:w-full md:w-[600px] filter rounded-tl-xl rounded-br-xl saturate-200 hover:saturate-[3] hover:shadow-lg text-white transform duration-300">
            Solicitar Cita
        </button>
    </form>
  )
}

export default FormCita