import Footer from "@/Components/Footer"
import Register from "@/Components/Forms/FormRegister"
import Navbar from "@/Components/Navbar"
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation'
import { authOptions } from "@/app/api/auth/[...nextauth]/route";


async function RegisterPage() {
    const session = await getServerSession(authOptions)
    if (session) {
        const userRole = session.user.rol;
        if (userRole === 'cliente') {
            redirect('/')
        } else if(userRole === 'administrador'){
            redirect('/Dashboard')
        }
    }
    return (
        <>
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