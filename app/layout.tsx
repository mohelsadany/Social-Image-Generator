import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Social Image Generator - إنشاء روابط مع معاينة احترافية',
    description: 'أنشئ روابط قابلة للمشاركة مع صور معاينة احترافية لمنصات التواصل الاجتماعي',
    keywords: ['social media', 'og image', 'link preview', 'share', 'سوشيال ميديا', 'معاينة الروابط'],
    authors: [{ name: 'Social Image Generator' }],
    openGraph: {
        type: 'website',
        siteName: 'Social Image Generator',
        title: 'Social Image Generator - إنشاء روابط مع معاينة احترافية',
        description: 'أنشئ روابط قابلة للمشاركة مع صور معاينة احترافية لمنصات التواصل الاجتماعي',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Social Image Generator',
        description: 'أنشئ روابط قابلة للمشاركة مع صور معاينة احترافية',
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
        <html lang="en" suppressHydrationWarning>
            <body>{children}</body>
        </html>
    );
}
