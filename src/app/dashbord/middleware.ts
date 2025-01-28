import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  // Get the cookie value
  const loginStatus = req.cookies.get('adminLoggedIn')?.value;

  // If the user tries to access the dashboard but is not logged in, redirect to the login page
  if (req.nextUrl.pathname.startsWith('/dashboard') && loginStatus !== 'true') {
    return NextResponse.redirect(new URL('/login', req.url)); // Redirect to login if not logged in
  }

  return NextResponse.next(); // Proceed if logged in or not accessing protected route
}

export const config = {
  matcher: ['/dashboard'], // Apply middleware only to /dashboard route
};