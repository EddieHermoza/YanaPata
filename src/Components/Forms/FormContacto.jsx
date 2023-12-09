"use client"
import { useState } from "react"
import { ToastAction } from "@/Components/ui/toast"
import { useToast } from "@/Components/ui/use-toast"

function FormContacto() {
    const { toast } = useToast()
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

        const rspt= await fetch('/api/ContactoEmail',{
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
            toast({
                title: "Mensaje enviado",
                description: "Te contactaremos lo más rapido que podamos",
                action: (
                  <ToastAction altText="Entendido">Entendido</ToastAction>
            )})
        }
        
    }
  return (
        <form className="w-full flex flex-col gap-5 relative" onSubmit={sendEmail} >
                <label htmlFor="" className="text-lg flex flex-col-reverse gap-2 w-full peer-focus:text-verde">
                    <input type="text" required name="" id="" value={subject} onChange={ (e)=>{ setSubject(e.target.value)} } className="outline-none border-black peer border-b focus:border-verde p-2 transform duration-300"/>
                    <span className="peer-focus:text-verde transform duration-300">Nombres:</span>
                </label>
                <label htmlFor="" className="text-lg flex flex-col-reverse gap-2 w-full peer-focus:text-verde">
                <input type="number" required name="" id="" value={number} onChange={ (e)=>{ setNumber(e.target.value)} } className="outline-none border-black peer border-b focus:border-verde p-2 transform duration-300"/>
                    <span className="peer-focus:text-verde transform duration-300">Telefono:</span>       
                </label>
                <label htmlFor="" className="text-lg flex flex-col-reverse gap-2 w-full ">
                    <input type="email" required name="" id="" value={email} onChange={ (e)=>{ setEmail(e.target.value)} } className="outline-none peer border-black border-b focus:border-verde p-2 transform duration-300"/>
                    <span className="peer-focus:text-verde transform duration-300">Correo Electrónico:</span>
                </label>
                <label htmlFor="" className="text-lg flex flex-col-reverse gap-2 w-full peer-focus:text-verde">
                    <textarea required value={message} onChange={ (e)=>{ setMessage(e.target.value)} } className="outline-none rounded-sm p-2 border border-black focus:border-verde transform duration-300 " name="" id="" cols="30" rows="6"></textarea>
                    <span className="peer-focus:text-verde transform duration-300">Asunto:</span>
                </label>
            <button className={`bg-verde p-2 text-xl w-full rounded-tl-xl rounded-br-xl text-black  ${sending ? ' shadow-verde/50 text-white':''} shadow-lg hover:text-white hover:shadow-verde/50 transform duration-300`}
                disabled={sending}> 
                {sending ? "Enviando..." : "Enviar"}
            </button>
        </form>
  )
}

export default FormContacto