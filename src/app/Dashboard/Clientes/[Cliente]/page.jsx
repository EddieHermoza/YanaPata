import Link from "next/link"

export default function page({params}) {
    return (
        <>
        <section className="w-full bg-white h-screen flex flex-col gap-10 items-center">
            <div className="w-full flex justify-between p-5">
                <span className="text-4xl">Cliente: {params.Cliente}</span>
                <Link href={'/Dashboard/Clientes'} className="bg-verde-rgb text-white saturate-200 px-5 py-2 rounded-bl-lg rounded-tr-lg hover:saturate-[3] hover:shadow-lg filter w-auto text-base hover:text-black transform duration-300" > Volver </Link>
            </div>
        </section>
    </>
    )
}
