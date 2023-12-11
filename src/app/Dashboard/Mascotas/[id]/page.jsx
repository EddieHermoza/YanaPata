

function page({params}) {
    return (
        <section className="relative w-full flex flex-col items-center justify-center gap-5 p-10 ">
            {params.id}
        </section>
    )
}

export default page