
import Portada from '../Components/sectPortada'
import Ubicacion from '../Components/sectUbicacion'
import Contacto from '../Components/sectContacto'
import Nosotros from '../Components/sectionNosotros'
import Navbar from '@/Components/Navbar'



export default function Home() {

  return (
    <>
      <Navbar/>
      <main>
        <Portada/>
        <Nosotros/>
        <Ubicacion/>
        <Contacto/>
      </main>
    </>
  )
}
