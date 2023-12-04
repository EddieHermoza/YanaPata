"use client"
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import {AiOutlineSearch} from "react-icons/ai"

export default function SearchCliente() {
    const searchParams=useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function handleSearch(term) {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('cliente', term);
            params.set('page', '1');
        } else {
            params.delete('cliente');
            params.set('page', '1');
        }
        replace(`${pathname}?${params.toString()}`);
      }
      const debouncedHandleSearch = useDebouncedCallback(handleSearch, 500);
    return (
        <label htmlFor="buscarCliente" className='flex flex-row-reverse items-center gap-2 max-sm:w-full sm:w-72 border-b-2 border-black hover:border-verde transform duration-300 hover:shadow-lg px-2 '>
            <input 
                id='buscarCliente'
                type="text"
                className="peer outline-none text-sm text-black p-2 w-full"
                placeholder="Buscar Cliente"
                onChange={(e)=>{debouncedHandleSearch(e.target.value)}}
                defaultValue={searchParams.get('cliente')?.toString()}
            />
            <AiOutlineSearch size={32} className='peer-focus:text-verde transition-all'/>
        </label>
    )
}
