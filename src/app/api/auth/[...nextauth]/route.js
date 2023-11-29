import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "@/lib/db";
import bcrypt from "bcrypt";

  export const authOptions = {
    providers: [
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          email: { label: "Email", type: "email", placeholder: "jsmith" },
          password: { label: "Password", type: "password", placeholder: "*****" }
        },
        async authorize(credentials, req) {
          const userFound = await db.usuario.findUnique({
            where: {
              email: credentials.email
            }
          });
          if (!userFound) throw new Error("Correo ingresado no registrado");

          const match = await bcrypt.compare(credentials.password, userFound.password);

          if (!match) throw new Error('Contraseña ingresada Incorrecta');

          return userFound;
        },
      }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
      signIn: "/auth/Login",
    },
    callbacks: {
      jwt: async ({ token, user }) => {
        user && (token.user = user);

        return token;
      },
      session: async ({ session, token }) => {
        session.user = token.user;

        delete session?.user?.password;

        return session;
      },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };