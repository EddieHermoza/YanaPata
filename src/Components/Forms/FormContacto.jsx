"use client"
import { useState } from "react"


function FormContacto() {
    const[subject,setSubject] = useState('')
    const[number,setNumber] = useState('')
    const[email,setEmail] = useState('')
    const[message,setMessage] = useState('')
    const [sending, setSending] = useState(false);

    const sendEmail = async (e) =>{
        e.preventDefault();

        if (sending) {
            return;
        }

        setSending(true);

        const rspt= await fetch('/ContactoEmail',{
            method: 'POST',
            body: JSON.stringify({
                subject,
                number,
                email,
                message
            })
        })

        if (rspt.ok) {
            setSubject('')
            setNumber('')
            setEmail('')
            setMessage('')
            setSending(false);
        }
        
    }
  return (
        <form className="w-full flex flex-col gap-2 " onSubmit={sendEmail} >
            <div className="flex w-full flex-col gap-1">
                <label htmlFor="" className="text-xl">Nombres y Apellidos:</label>
                <input type="text" required name="" id="" value={subject} onChange={ (e)=>{ setSubject(e.target.value)} } className="outline-none rounded-sm border-2 border-verde-rgb filter saturate-[3] p-2"/>
            </div>
            <div className="flex w-full flex-col gap-1">
                <label htmlFor="" className="text-xl">Teléfono:</label>
                <input type="number" required name="" id="" value={number} onChange={ (e)=>{ setNumber(e.target.value)} } className="outline-none rounded-sm border-2 border-verde-rgb filter saturate-[3] p-2"/>
            </div>
            <div className="flex w-full flex-col gap-1">
                <label htmlFor="" className="text-xl">Correo Electrónico:</label>
                <input type="email" required name="" id="" value={email} onChange={ (e)=>{ setEmail(e.target.value)} } className="outline-none rounded-sm border-2 border-verde-rgb filter  saturate-[3] p-2"/>
            </div>
            <div className="flex w-full flex-col gap-1">
                <label htmlFor="" className="text-xl">Mensaje:</label>
                <textarea required value={message} onChange={ (e)=>{ setMessage(e.target.value)} } className="outline-none rounded-sm p-2 border-2 border-verde-rgb filter  saturate-[3] " name="" id="" cols="30" rows="6"></textarea>
            </div>
            <button className={`bg-verde-rgb p-2 text-xl w-full filter rounded-tl-xl rounded-br-xl saturate-200 ${sending ? 'saturate-[3] shadow-lg text-black':''} hover:saturate-[3] hover:shadow-lg hover:text-black text-white transform duration-300`}
                disabled={sending}> 
                {sending ? "Enviando..." : "Enviar"}
            </button>
        </form>
  )
}

export default FormContacto