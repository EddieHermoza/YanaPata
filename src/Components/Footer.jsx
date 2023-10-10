
import Link from 'next/link';
import {BiLogoWhatsapp,BiLogoFacebookCircle,BiLogoInstagram} from 'react-icons/bi';
import {FaFacebookSquare,FaInstagramSquare} from "react-icons/fa"
import {FaMapLocationDot} from "react-icons/fa6"
import {MdEmail} from "react-icons/md"
import {BsFillTelephonePlusFill} from "react-icons/bs"

export default function Footer() {

  return (
  
    <footer id='footer' className="-z-20  max-xl:relative xl:fixed bg-cover bg-center bottom-0 max-xl:h-auto xl:h-[500px] w-full" style={{backgroundImage :'url("/images/footer.jpg")'}}>
        <div className='absolute h-full w-full bg-[rgb(22,22,22)] bg-opacity-90 filter saturate-200'>

        </div>
        <div className="relative pt-16 max-md:gap-5 grid max-md:grid-rows-2 md:grid-cols-2  xl:mx-[8%]">
          <div className='relative flex  gap-y-5 max-xl:flex-col px-5'>
            <div className='flex w-full xl:w-[50%] flex-col max-sm:gap-2 gap-5 filter saturate-200 p-3'>
                <h2 className='max-sm:text-3xl text-5xl text-verde-rgb filter saturate-200'>YanaPata</h2>
                <span className='bg-verde-rgb filter saturate-200 h-1 w-[40%]'></span>
                <p className=' text-base text-white pr-5'>&quot;Nos dedicamos a brindar el mejor cuidado y atención para tus amigos peludos. Nuestra veterinaria es el hogar de un equipo apasionado que se preocupa por la salud y el bienestar de tus mascotas&quot;</p>
            </div>
            <div className='flex w-full xl:w-[50%] flex-col max-sm:gap-2 gap-5 p-3'>
                <h3 className='max-sm:text-3xl text-4xl text-white'>Horarios</h3>
                <span className='bg-white h-1 w-[30%]'></span>
                <ul className='w-full flex flex-col gap-2 text-base text-white'>
                  <li>
                    <span>Lunes a Sábado :  9:00 am - 06:00 pm</span>
                  </li>
                  <li>
                    <span>Domingo :  9:00 am - 12:00 pm</span>
                  </li>
                </ul>
            </div>
          </div>
          <div className='relative gap-y-5 flex max-xl:flex-col  px-5'>
            <div className='flex w-full xl:w-[50%] flex-col max-sm:gap-2 gap-5 p-3'>
              <h3 className='text-white max-sm:text-3xl text-4xl'>Contáctanos:</h3>
              <span className='bg-white h-1 w-[45%]'></span>
              <ul className='flex flex-col text-base text-white gap-3'>
                <li><span className='flex items-center gap-2 '><FaMapLocationDot size={30}/> Av. 1ro de Mayo, Distrito de Lima 15828</span></li>
                <li><span className='flex items-center gap-2 '><MdEmail size={30}/> yanapataveterinaria@gmail.com</span></li>
                <li><span className='flex items-center gap-2 '><BsFillTelephonePlusFill size={30}/> (+51) 933 591 870</span></li>
                <li><span className='flex items-center gap-2 '><BiLogoWhatsapp size={30}/> 933 591 870</span></li>
              </ul>
            </div>
            <div className='flex w-full xl:w-[50%] flex-col p-3 max-sm:gap-2 gap-5'>
              <h3 className='text-white max-sm:text-3xl text-4xl'>Siguenos:</h3>
              <span className='bg-white h-1 w-[30%]'></span>
              <ul className='flex text-5xl text-white gap-2'>
                <li>
                  <Link href="https://www.facebook.com/yanapataveterinaria" target='_blank' className='flex  items-center justify-center hover:scale-125 hover:text-verde-rgb filter saturate-[3] transform duration-200'><FaFacebookSquare /></Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/veterinariayanapata/?hl=es-la " target='_blank' className='flex items-center justify-center hover:scale-125 hover:text-verde-rgb filter saturate-[3] transform duration-200'><FaInstagramSquare /></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=' xl:fixed bottom-0 relative flex items-center justify-center bg-[rgb(22,22,22)] w-full h-[60px]'>
          <span className='text-white max-sm:text-xs text-base text-center'>© 2023 © Veterinaria YanaPata.  Todos los derechos reservados.</span>
        </div>
    </footer>
  )
}
