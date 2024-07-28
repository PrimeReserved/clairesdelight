import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const allowedOrigins = ['*'];

const corsOptions = {
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === '/' || path === '/admin-panel' || path === '/verifyemail';
  const token = request.cookies.get('token')?.value ?? '';

  console.log('Path:', path);
  console.log('Token:', token);

  if (isPublicPath && token) {
    console.log('Redirecting to /welcome because user is authenticated.');
    return NextResponse.redirect(new URL('/welcome', request.nextUrl));
  }

  if (!isPublicPath && !token) {
    console.log('Redirecting to /admin-panel because user is not authenticated.');
    return NextResponse.redirect(new URL('/admin-panel', request.nextUrl));
  }

  if (path === '/welcome' && token) {
    console.log('Allowing access to /welcome');
    return NextResponse.next();
  }

  const origin = request.headers.get('origin') ?? '';
  const isAllowedOrigin = allowedOrigins.includes(origin);
  const isPreflight = request.method === 'OPTIONS';

  if (isPreflight) {
    const preflightHeaders = {
      ...(isAllowedOrigin && { 'Access-Control-Allow-Origin': origin }),
      ...corsOptions,
    };
    console.log('Handling preflight request');
    return NextResponse.json({}, { headers: preflightHeaders });
  }

  const response = NextResponse.next();

  if (isAllowedOrigin) {
    response.headers.set('Access-Control-Allow-Origin', origin);
  }

  Object.entries(corsOptions).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  return response;
}

export const config = {
  matcher: ['/profile', '/sign-in', '/sign-up', '/verifyemail', '/welcome'],
};
