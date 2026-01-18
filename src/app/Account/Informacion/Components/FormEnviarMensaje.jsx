"use client"
import { useState, useEffect } from "react"
import { ToastAction } from "@/Components/ui/toast"
import { useToast } from "@/Components/ui/use-toast"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog"
function FormEnviarMensaje({ cliente }) {
    const [Open, setOpen] = useState(false)
    const { toast } = useToast()
    const [subject, setSubject] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [sending, setSending] = useState(false);

    const sendEmail = async (e) => {
        e.preventDefault();

        if (sending) {
            return;
        }

        setSending(true);

        const rspt = await fetch('/api/ContactoEmail', {
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
            setOpen(false)
            toast({
                title: "Mensaje enviado",
                description: "Te contactaremos lo más rapido que podamos",
                action: (
                    <ToastAction altText="Entendido">Entendido</ToastAction>
                )
            })
        }

    }

    useEffect(() => {
        setSubject(cliente.nombres)
        setEmail(cliente.email)
        setNumber(cliente.cliente.telefono)
    }, [cliente])
    return (
        <Dialog open={Open} onOpenChange={setOpen}>
            <DialogTrigger className="px-5 py-3 bg-verde hover:shadow-verde/50 shadow-lg transform duration-300 hover:text-white text-black">Envianos un Mensaje</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Envianos un mensaje</DialogTitle>
                </DialogHeader>
                <form className="w-full flex flex-col gap-5 relative" onSubmit={sendEmail} >
                    <label htmlFor="" className="text-lg flex flex-col-reverse gap-2 w-full peer-focus:text-verde">
                        <textarea required value={message} onChange={(e) => { setMessage(e.target.value) }} className="outline-none rounded-sm p-2 border border-black focus:border-verde transform duration-300 " name="" id="" cols="30" rows="6"></textarea>
                        <span className="peer-focus:text-verde transform duration-300">Asunto:</span>
                    </label>
                    <button className={`bg-verde p-2 text-xl w-full rounded-tl-xl rounded-br-xl text-black  ${sending ? ' shadow-verde/50 text-white' : ''} shadow-lg hover:text-white hover:shadow-verde/50 transform duration-300`}
                        disabled={sending}>
                        {sending ? "Enviando..." : "Enviar Mensaje"}
                    </button>
                </form>
            </DialogContent>
        </Dialog>

    )
}

export default FormEnviarMensaje