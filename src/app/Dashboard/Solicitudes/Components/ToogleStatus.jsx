"use client"
import { IoFilterOutline } from "react-icons/io5";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';


import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ToggleStatus() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();


  function handleStatus(term) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('status', term);
      params.set('page', '1');
    } else {
      params.delete('status');
      params.set('page', '1');
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="relative justify-start flex gap-2 w-auto">
        <Select onValueChange={handleStatus}  defaultValue={searchParams.get('status') ? searchParams.get('status').toString() : undefined}>
            <SelectTrigger className="w-auto gap-2  outline-none border-b-2 border-black hover:shadow-xl transform duration-300 hover:border-verde">
                <IoFilterOutline size={20}/>
                <span>Filtro Por Estado: </span>
                <SelectValue/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem>TODOS</SelectItem>
                    <SelectItem value="PENDIENTE">PENDIENTES</SelectItem>
                    <SelectItem value="RECHAZADO">RECHAZADOS</SelectItem>
                    <SelectItem value="APROBADO">APROBADOS</SelectItem>
                    <SelectItem value="EN CURSO">EN CURSO</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    </div>
  );
}