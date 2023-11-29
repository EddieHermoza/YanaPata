"use client"
import { useState } from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
 
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
 
export function DatePicker() {
  const [date, setDate] = useState()
 
  return (
    <Popover>
      <PopoverTrigger className="max-sm:w-[250px]" >
        <span className="flex gap-2 items-center w-auto p-2 border-b-2 border-black hover:border-verde transform duration-300 hover:shadow-xl">
        <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span className="text-slate-400 text-sm ">Filtrar por fecha </span>}
        </span>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}