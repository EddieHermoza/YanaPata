"use client"
import { useEffect } from 'react';
import Link from 'next/link';
import {TfiFaceSad} from "react-icons/tfi"

export default function Error({error}) {
  useEffect(() => {
  }, [error]);

  return (
    <section>
      <div className='m-auto w-full min-h-screen flex flex-col gap-5 items-center justify-center filter saturate-200'>
        <h2 className='text-5xl'>Algo salio mal</h2>
        <TfiFaceSad size={80} className='text-black '/>
        <Link href="/" className='bg-verde-rgb transition-all filter hover:saturate-200 p-4 rounded-full text-black text-xl'>
          Volver a la pagina principal
        </Link>
      </div>
    </section>
  );
}