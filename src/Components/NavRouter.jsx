'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {FaChevronRight} from "react-icons/fa"

export default function NavRouter() {
    const pathname = usePathname()
    const segments = pathname.split('/').filter(Boolean)

    const elements = segments.map((segment, index) => (
        <span key={index} className='flex'>
            {index > 0 && <span className=' filter saturate-150 px-3 flex items-center text-xl'><FaChevronRight/></span>}
            <li className='flex items-center justify-center' key={index}>
                <Link href={`/${segments.slice(0, index + 1).join('/')}`} className='text-black flex items-center filter hover:text-verde-rgb hover:saturate-200 transition duration-300'>
                    {decodeURIComponent(segment)}
                </Link>
            </li>
        </span>
    ))

    return (
        <div className='bg-gray-200 flex items-center justify-center w-full h-full'>
            <ul className='flex max-sm:text-base text-2xl'>
                <li className='flex items-center justify-center'>
                    <Link className='text-black flex items-center filter hover:text-verde-rgb hover:saturate-200 transition duration-300' href="/">Inicio</Link>
                </li>
                <span className='filter saturate-150 px-3 flex items-center text-xl'><FaChevronRight/></span>
                {elements}
            </ul>
        </div>
    )
}