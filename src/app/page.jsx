
import Portada from '../Components/sectPortada'
import Ubicacion from '../Components/sectUbicacion'
import Contacto from '../Components/sectContacto'
import Nosotros from '../Components/sectionNosotros'
import Footer from '@/Components/Footer'




export default function Home() {

  return (
    <>
      <main>
        <Portada/>
        <Nosotros/>
        <Ubicacion/>
        <Contacto/>
      </main>
    </>
  )
}
