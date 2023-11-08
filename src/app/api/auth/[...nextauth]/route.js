import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "@/libs/db"
import bcrypt from "bcrypt"

const authOptions={
    providers:[
        CredentialsProvider({
            name:"Credentials",
            credentials:{
                email:{label:"Email",type:"email",placeholder:"jsmith"},
                password:{label:"Password",type:"password", placeholder:"*****"}
            },
            async authorize(credentials,req){
                const userFound = await db.usuario.findUnique({
                    where:{
                        email:credentials.email
                    }
                })
                if(!userFound) throw new Error("Correo no encontrado")

                const match = await bcrypt.compare(credentials.password,userFound.password)

                if(!match) throw new Error('Contraseña Incorrecta')


                return{
                    id:userFound.id,
                    name:userFound.nombres,
                    email:userFound.email
                }
            },
        }),
    ],
    secret:process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/auth/Login",
    }
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST };