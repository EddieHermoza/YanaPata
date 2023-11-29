import Footer from "@/Components/Footer"
import Login from "@/Components/Forms/FormLogin"
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation'
import { authOptions } from "@/app/api/auth/[...nextauth]/route";


async function LoginPage() {
    const session = await getServerSession(authOptions)
    if (session) {
        if (session.user !== undefined) {
            const userRole = session.user.rol;
            if (userRole === 'cliente') {
                redirect('/')
            } else if(userRole === 'administrador'){
                redirect('/Dashboard')
            }
        }       
    }

    return (
        <>
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