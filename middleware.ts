import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest): NextResponse {
    const pathname = request.nextUrl.pathname;
    const siteUrl = process.env.NEXT_PUBLIC_APP_URL;

    if (!siteUrl) {
        throw new Error('NEXT_PUBLIC_SITE_URL is not defined');
    }

    if (pathname === '/login') {
        return NextResponse.redirect(new URL(`${siteUrl}/login`));
    }

    if (pathname === '/register') {
        return NextResponse.redirect(new URL(`${siteUrl}/register`));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/login', '/register'],
};
