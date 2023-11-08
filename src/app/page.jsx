import Navbar from '@/Components/Navbar';
import Portada from '../Components/sectPortada'
import Ubicacion from '../Components/sectUbicacion'
import Contacto from '../Components/sectContacto'
import Iframe from 'react-iframe';
import Footer from '@/Components/Footer'
import Nosotros from '../Components/sectionNosotros'




export default function Home() {

  return (
    <>
     <Navbar/>
      <main className="animate-fade animate-duration-[2000ms]">
        <Portada/>
        <Nosotros/>
        <Ubicacion/>
        <Contacto/>
      </main>
      <Footer/>
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
    </>
  )
}
