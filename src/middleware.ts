import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Verifica se a requisição está vindo da porta 3001 (acesso direto)
  const host = request.headers.get('host')
  
  // Se estiver acessando via localhost:3001, redireciona para localhost:8000
  if (host && host.includes(':3001')) {
    const url = request.nextUrl.clone()
    url.host = 'localhost:8000'
    url.port = '8000'
    
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
