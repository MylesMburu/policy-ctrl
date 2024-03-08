import { NextResponse } from 'next/server'
export { default } from 'next-auth/middleware'
 
import { getSession } from 'next-auth/react';

export async function middleware(request) {
  const session = await getSession({ req: request });
  
  if (session) {
    return NextResponse.next();
  }

  // User is not authenticated, redirect to sign-in
  return NextResponse.redirect(new URL('/api/auth/signin?callbackUrl=/document-repo', request.url));
}

export const config = {
    matcher: ['/document-repo'],
}

