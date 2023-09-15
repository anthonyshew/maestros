import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  console.log("middy")
  return NextResponse.redirect(new URL('/build', request.url))
}

export const config = {
  matcher: '/',
}
