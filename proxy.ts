import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const locales = ['ar', 'en', 'fr'];
const defaultLocale = 'en';

const isPublicRoute = createRouteMatcher([
    '/',
    '/:locale(ar|en|fr)?',
    '/:locale(ar|en|fr)?/sign-in(.*)',
    '/:locale(ar|en|fr)?/sign-up(.*)',
    '/:locale(ar|en|fr)?/pricing(.*)',
    '/:locale(ar|en|fr)?/docs(.*)',
    '/:locale(ar|en|fr)?/api(.*)',
]);

export default clerkMiddleware(async (auth, request) => {
    const { nextUrl } = request;
    const pathname = nextUrl.pathname;

    // Handle I18n Redirect
    const pathnameIsMissingLocale = locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    if (pathnameIsMissingLocale) {
        // Skip for static files, APIs, and Clerk internal routes
        if (pathname.startsWith('/api') || pathname.startsWith('/_clerk') || pathname.includes('.')) {
            return;
        }
        return NextResponse.redirect(new URL(`/${defaultLocale}${pathname === '/' ? '' : pathname}`, request.url));
    }

    // Handle Auth
    if (!isPublicRoute(request)) {
        await auth.protect();
    }
});

export const config = {
    matcher: [
        // Match all request paths except for the ones starting with:
        // - _next/static (static files)
        // - _next/image (image optimization files)
        // - favicon.ico (favicon file)
        '/((?!_next/static|_next/image|favicon.ico).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
};
