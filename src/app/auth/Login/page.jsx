import Footer from "@/Components/Footer"
import Login from "@/Components/Forms/FormLogin"
import Navbar from "@/Components/Navbar"

function LoginPage() {
    return (
        <>
        <Navbar/>
        <main>
            <section className="pt-[60px] w-full min-h-screen flex items-center justify-center">
                <div className="w-[400px] h-[500px] flex items-center justify-center p-5 shadow-lg">
                    <Login />
                </div>
            </section>
        </main>
        <Footer/>
        </>
    )
}

export default LoginPage