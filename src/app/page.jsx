
import Portada from '../Components/sectPortada'
import Ubicacion from '../Components/sectUbicacion'
import Contacto from '../Components/sectContacto'
import Nosotros from '../Components/sectionNosotros'




export default function Home() {

  return (
    <>
      <main className="animate-fade animate-duration-[2000ms]">
        <Portada/>
        <Nosotros/>
        <Ubicacion/>
        <Contacto/>
      </main>
    </>
  )
}
