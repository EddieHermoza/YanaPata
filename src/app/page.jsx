
import Portada from '../Components/sectPortada'
import Ubicacion from '../Components/sectUbicacion'
import Contacto from '../Components/sectContacto'
import Footer from '@/Components/Footer'
import Nosotros from '../Components/sectionNosotros'
import Ai from '@/Components/Ai'




export default function Home() {

  return (
    <>
      <main className="animate-fade animate-duration-[2000ms]">
        <Portada/>
        <Nosotros/>
        <Ubicacion/>
        <Contacto/>
      </main>
      <Footer/>
      <Ai/>
    </>
  )
}
