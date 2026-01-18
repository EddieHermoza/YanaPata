
import './globals.css'
import { Comfortaa } from 'next/font/google'
import Navbar from '@/Components/Navbar'
import { Toaster } from "@/Components/ui/toaster"
import { getUserSession } from '@/lib/auth_actions'

const comfo = Comfortaa({
  subsets: ["latin"],
  weight: ["700"]
})

export const metadata = {
  title: 'Veterinaria YanaPata',
  description: 'Veterinaria Peruana',
}

export default async function RootLayout({ children }) {
  const sesion = await getUserSession()
  return (
    <html lang="es" className=' scrollbar-thin scrollbar-track-transparent scrollbar-thumb-verde'>
      <body className={comfo.className}>
        <Navbar sesion={sesion} />
        {children}
        <Toaster />
      </body>
    </html>
  )
}
