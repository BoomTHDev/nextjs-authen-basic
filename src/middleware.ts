import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value;

  if (token) {
    const response = await fetch('http://localhost:3002/api/auth/me', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    const user = await response.json();

    if (user.role === 'admin') {
      return NextResponse.redirect(new URL('/', req.url));
    } else {
      return NextResponse.redirect(new URL('/signin', req.url));
    };
  };

  return NextResponse.next();
};

export const config = {
  matcher: [
    '/',
    '/signin',
    '/signup',
  ],
};