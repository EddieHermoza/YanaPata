
import './globals.css'
import { Comfortaa } from 'next/font/google'
import AOSInitializer from '@/Components/AOSinit'
import Navbar from '@/Components/Navbar'
import { Toaster } from "@/Components/ui/toaster"
import { getUserSession } from '@/lib/auth_actions'

const comfo=Comfortaa({
  subsets: ["latin"],
  weight: ["700"]
})

export const metadata = {
  title: 'Veterinaria YanaPata',
  description: 'Veterinaria Peruana',
}

export default function RootLayout({ children }) {

 return (
    <html lang="es" className=' scrollbar-thin scrollbar-track-transparent scrollbar-thumb-verde'>
      <body className={comfo.className}>
        <Navbar/>
        <AOSInitializer/>
        {children}
        <Toaster/>
      </body>
    </html>
  )
}
