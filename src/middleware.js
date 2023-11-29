import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    async function middleware(req) {
      const url = req.nextUrl.pathname;
      const userRole = req?.nextauth?.token?.user?.rol;
  
      if (url?.startsWith("/Dashboard") && userRole !== "administrador") {
        return NextResponse.redirect(new URL("/", req.url));
      }
  
    },
    {
      callbacks: {
        authorized: ({ token }) => {
          if (!token) {
            return false;
          }
        },
      },
    }
  );
  
  export const config = {
    matcher: ["/Dashboard/:path*"],
  };