import Footer from "@/Components/Footer"
import Register from "@/Components/Forms/FormRegister"
import Navbar from "@/Components/Navbar"

function RegisterPage() {
    return (
        <>
        <Navbar/>
        <main>
            <section className="pt-[60px] w-full min-h-screen flex items-center justify-center">
                <div className="w-[400px] min-h-[500px] flex items-center justify-center p-5 shadow-lg">
                    <Register/>
                </div>
            </section>
        </main>
        <Footer/>
        </>

    )
}

export default RegisterPage