import Link from "next/link"
 
export default function NotFound() {
  return (
    <section className="min-h-screen">
        <div className="bg-white text-5xl w-full min-h-screen flex flex-col gap-5 items-center justify-center filter saturate-200">
            <span className="text-5xl text-black">Error 404</span>
            <h2 className="text-5xl">Página no encontrada</h2>
            <Link href="/" className="p-4 bg-verde-rgb filter hover:saturate-200 transform duration-200 rounded-full text-xl">Volder a la Página Principal</Link>
        </div>
    </section>
    )
}