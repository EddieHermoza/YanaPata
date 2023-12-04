
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

export default async function RootLayout({ children }) {

  const UserSession = await getUserSession()
  const sesion =  UserSession.data.session !==null && UserSession.data.session !== undefined

 return (
    <html lang="en" className=' scrollbar-thin scrollbar-track-transparent scrollbar-thumb-verde'>
      <body className={comfo.className}>
        <Navbar sesion={sesion}/>
        <AOSInitializer/>
        {children}
        <Toaster/>
      </body>
    </html>
  )
}
