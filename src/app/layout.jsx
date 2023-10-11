import Modal from '@/Components/Modal'
import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import './globals.css'
import { Comfortaa } from 'next/font/google'
import AOSInitializer from '@/Components/AOSinit'

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
    <html lang="en" className=' scrollbar-thin scrollbar-track-white scrollbar-thumb-teal-400'>
      <body className={comfo.className}>
        <Navbar/>
        {children}
        <Modal/>
        <AOSInitializer/>
      </body>
    </html>
  )
}
