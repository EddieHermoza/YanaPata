import Link from "next/link"
 
export default function NotFound() {
  return (
    <section className="min-h-screen">
        <div className="bg-neutral-950 text-5xl w-full min-h-screen flex flex-col gap-5 items-center justify-center">
            <span className="text-5xl text-white">Error 404</span>
            <h2 className="text-5xl text-white">Página no encontrada</h2>
            <Link href="/" className="px-5 py-3 bg-verde transform duration-300 rounded-full text-xl hover:shadow-verde/50 shadow-lg hover:text-white">Volver a la Página Principal</Link>
        </div>
    </section>
    )
}