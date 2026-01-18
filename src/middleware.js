import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"

export async function middleware(request) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET
  })

  // Define protected routes
  const protectedRoutes = ["/Dashboard", "/Account"]
  const authRoutes = ["/auth/Login", "/auth/Registro"]

  const isProtectedRoute = protectedRoutes.some(route =>
    request.nextUrl.pathname.startsWith(route)
  )

  const isAuthRoute = authRoutes.some(route =>
    request.nextUrl.pathname.startsWith(route)
  )

  // Redirect to login if accessing protected route without auth
  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL("/auth/Login", request.url))
  }

  // Redirect to home if accessing auth routes while logged in
  if (isAuthRoute && token) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/Dashboard/:path*", "/Account/:path*", "/auth/:path*"]
}