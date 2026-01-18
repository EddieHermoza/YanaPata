import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import db from "@/lib/db"
import bcrypt from "bcrypt"

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null
        
        const userFound = await db.usuario.findUnique({
          where: { email: credentials.email }
        })
        
        if (!userFound) throw new Error("Correo ingresado no registrado")
        
        if (userFound.estado === "Deshabilitado") {
          throw new Error("Usuario no habilitado")
        }
        
        const match = await bcrypt.compare(
          credentials.password, 
          userFound.password
        )
        
        if (!match) throw new Error("Contraseña ingresada Incorrecta")
        
        return {
          id: String(userFound.id),
          email: userFound.email,
          name: `${userFound.nombres} ${userFound.apellidos}`,
          nombres: userFound.nombres,
          apellidos: userFound.apellidos,
          rol: userFound.rol,
          estado: userFound.estado
        }
      }
    })
  ],
  pages: {
    signIn: "/auth/Login"
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.rol = user.rol
        token.nombres = user.nombres
        token.apellidos = user.apellidos
        token.estado = user.estado
      }
      return token
    },
    session({ session, token }) {
      if (session.user) {
        session.user.id = token.id
        session.user.rol = token.rol
        session.user.nombres = token.nombres
        session.user.apellidos = token.apellidos
        session.user.estado = token.estado
      }
      return session
    }
  },
  secret: process.env.NEXTAUTH_SECRET
})
