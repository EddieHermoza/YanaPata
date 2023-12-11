import Link from 'next/link'
import CalendarPage from '../Components/FullCalendar'
import { getDataCalendar } from '../actions'

export default async function page() {
  const events = await getDataCalendar()
  return (
    <section className='w-full min-h-screen relative'>
      <div className='flex justify-between max-sm:flex-col w-full px-5 py-3 gap-5 border-b'>
        <h2 className='text-2xl tracking-wide'>Todas las Citas Aprobadas:</h2>
        <Link href={'/Dashboard/Solicitudes/'} className="text-center bg-verde px-5 py-2 shadow-lg hover:shadow-verde/50 transform duration-300 rounded-tr-lg rounded-bl-lg hover:text-white">
              Volver
        </Link>
      </div>
        <CalendarPage events={events}/>
    </section>
  )
}
