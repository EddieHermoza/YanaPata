"use client"
import { useState } from "react"


function FormContacto() {
    const[subject,setSubject] = useState('')
    const[number,setNumber] = useState('')
    const[email,setEmail] = useState('')
    const[message,setMessage] = useState('')

    const sendEmail = async (e) =>{
        e.preventDefault();
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
        }
        
    }
  return (
        <form className="w-full flex flex-col gap-2" onSubmit={sendEmail} >
            <div className="flex w-full flex-col gap-1">
                <label htmlFor="" className="text-xl">Nombres y Apellidos:</label>
                <input type="text" required name="" id="" value={subject} onChange={ (e)=>{ setSubject(e.target.value)} } className="outline-none rounded border-2 border-verde-rgb filter saturate-200 transform duration-200 p-2"/>
            </div>
            <div className="flex w-full flex-col gap-1">
                <label htmlFor="" className="text-xl">Teléfono:</label>
                <input type="text" required name="" id="" value={number} onChange={ (e)=>{ setNumber(e.target.value)} } className="outline-none rounded border-2 border-verde-rgb filter saturate-200 transform duration-200 p-2"/>
            </div>
            <div className="flex w-full flex-col gap-1">
                <label htmlFor="" className="text-xl">Correo Electrónico:</label>
                <input type="email" required name="" id="" value={email} onChange={ (e)=>{ setEmail(e.target.value)} } className="outline-none rounded border-2 border-verde-rgb filter saturate-200 transform duration-200 p-2"/>
            </div>
            <div className="flex w-full flex-col gap-1">
                <label htmlFor="" className="text-xl">Mensaje:</label>
                <textarea required value={message} onChange={ (e)=>{ setMessage(e.target.value)} } className="outline-none rounded p-2 border-2 border-verde-rgb filter saturate-200 transform duration-200" name="" id="" cols="30" rows="6"></textarea>
            </div>
            <button className="bg-verde-rgb filter hover:saturate-200 text-white font-bold py-2 border rounded-tl-xl rounded-br-xl transform duration-200 w-full mt-5 text-xl">
                Enviar
            </button>
        </form>
  )
}

export default FormContacto