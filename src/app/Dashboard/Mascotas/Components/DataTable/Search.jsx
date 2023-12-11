"use client"
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import {AiOutlineSearch} from "react-icons/ai"

export default function Search() {
    const searchParams=useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function handleSearch(term) {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
            params.set('page', '1');
        } else {
            params.delete('query');
            params.set('page', '1');
        }
        replace(`${pathname}?${params.toString()}`);
      }
      const debouncedHandleSearch=useDebouncedCallback(handleSearch,500)
    return (
        <label htmlFor="" className='flex items-center gap-2 max-w-[400px] w-full'>
            <AiOutlineSearch size={32}/>
            <input 
                type="text"
                 className="outline-none text-base text-black p-2 border-b border-black w-full"
                placeholder="Buscar Por Nombre"
                onChange={(e)=>{debouncedHandleSearch(e.target.value)}}
                defaultValue={searchParams.get('query')?.toString()}
            />
        </label>
    )
}
