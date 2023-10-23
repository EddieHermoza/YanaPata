import Modal from '@/Components/Modal'
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
        <iframe
          src="https://www.stack-ai.com/embed/c64af075-8eee-4b70-a932-06a632c8f084/718b97ab-4282-42fa-92a3-6aeb705516b7/6535facc5607359530e08113"
          width="400px"
          height="620px"
          style={{
            display: 'block',
            position: 'fixed',
            border: 'none',
            overflow: 'hidden',
            zIndex: 9999999999,
            backgroundColor: 'transparent',
            borderRadius: '10px',
            bottom: 0,
            right: 0
          }}
        ></iframe>
        <AOSInitializer/>
      </body>
    </html>
  )
}
