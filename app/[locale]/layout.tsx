import type { Metadata, Viewport } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import '../globals.css';

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
};

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
    const { locale } = await params;

    const titles: Record<string, string> = {
        en: 'SnapOG - The Ultimate OG Image Engine',
        ar: 'SnapOG - محرك صور OG النهائي',
        fr: 'SnapOG - Le moteur d\'images OG ultime'
    };

    const descriptions: Record<string, string> = {
        en: 'Generate breathtaking social preview images from any URL in milliseconds. Optimized for Facebook, Twitter, and LinkedIn.',
        ar: 'قم بإنشاء صور معاينة اجتماعية مذهلة من أي عنوان URL في أجزاء من الثانية. مُحسّن لفيسبوك وتويتر ولينكد إن.',
        fr: 'Générez des images de prévisualisation sociale époustouflantes à partir de n\'importe quelle URL en quelques millisecondes. Optimisé pour Facebook, Twitter et LinkedIn.'
    };

    return {
        title: titles[locale] || titles.en,
        description: descriptions[locale] || descriptions.en,
        keywords: ['SnapOG', 'social media', 'og image', 'link preview', 'share', 'screenshot api', 'developer tools'],
        authors: [{ name: 'SnapOG' }],
        openGraph: {
            type: 'website',
            siteName: 'SnapOG',
            title: titles[locale] || titles.en,
            description: descriptions[locale] || descriptions.en,
        },
        twitter: {
            card: 'summary_large_image',
            title: titles[locale] || titles.en,
            description: descriptions[locale] || descriptions.en,
        },
        robots: {
            index: true,
            follow: true,
        },
    };
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const dir = locale === 'ar' ? 'rtl' : 'ltr';

    return (
        <ClerkProvider>
            <html lang={locale} dir={dir} suppressHydrationWarning>
                <body>{children}</body>
            </html>
        </ClerkProvider>
    );
}
