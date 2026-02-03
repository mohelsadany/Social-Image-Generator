import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';

export const metadata: Metadata = {
    title: 'SnapOG - The Ultimate OG Image Engine',
    description: 'Generate breathtaking social preview images from any URL in milliseconds. Optimized for Facebook, Twitter, and LinkedIn.',
    keywords: ['SnapOG', 'social media', 'og image', 'link preview', 'share', 'screenshot api', 'developer tools'],
    authors: [{ name: 'SnapOG' }],
    openGraph: {
        type: 'website',
        siteName: 'SnapOG',
        title: 'SnapOG - The Ultimate OG Image Engine',
        description: 'Generate breathtaking social preview images from any URL in milliseconds.',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'SnapOG',
        description: 'Generate breathtaking social preview images from any URL in milliseconds.',
    },
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 5,
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en" suppressHydrationWarning>
                <body>{children}</body>
            </html>
        </ClerkProvider>
    );
}
