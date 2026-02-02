import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define routes that are publicly accessible (no auth required)
const isPublicRoute = createRouteMatcher([
    '/',
    '/sign-in(.*)',
    '/sign-up(.*)',
    '/pricing(.*)',
    '/docs(.*)',
    '/api(.*)',
]);

export default clerkMiddleware();

export const config = {
    matcher: [
        // Skip Next.js internals and all static files
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
};
