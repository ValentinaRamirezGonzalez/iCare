export {default} from "next-auth/middleware"
import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';




export const config ={
    matcher:['/dashboard/Hablemos'],
}

export async function middleware(req) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    const { pathname } = req.nextUrl;
  
    // Redirige a la página de registro si no está autenticado
    if (!token && pathname !== '/register') {
      return NextResponse.redirect(new URL('/dashboard/Inicio', req.url));
    }
}


