import Footer from "@/Components/Footer"
import Register from "@/Components/Forms/FormRegister"
import { redirect } from 'next/navigation'
import { getUserSession } from "@/lib/auth_actions";
import { getRol } from "@/lib/actions";


async function RegisterPage() {

    const UserSession = await getUserSession()
    if (UserSession.data.session !==null && UserSession.data.session !== undefined) {
        const rol = await getRol(UserSession.data.session.user.email)
        
        if (rol.rol === 'cliente') {
            redirect('/')
        } else if(rol.rol === 'administrador'){
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