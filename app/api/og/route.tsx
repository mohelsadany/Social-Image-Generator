import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

// Font loading logic
const fontData = fetch(
    new URL('../../../assets/Inter.ttf', import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);

        // Query param parsing
        const title = searchParams.get('title') || 'Dynamic OG Image';
        const subtitle = searchParams.get('subtitle') || 'Generated with Next.js 14 and next/og';
        const image = searchParams.get('image');

        const interBold = await fontData;

        return new ImageResponse(
            (
                <div
                    style={{
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#000',
                        backgroundImage: image
                            ? `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${image})`
                            : 'linear-gradient(to bottom right, #1a1a1a, #000000)',
                        backgroundSize: '1200px 630px',
                        backgroundPosition: 'center',
                        padding: '40px 80px',
                        color: 'white',
                        fontFamily: 'Inter',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                        }}
                    >
                        <h1
                            style={{
                                fontSize: 64,
                                fontWeight: 700,
                                marginBottom: 20,
                                lineHeight: 1.1,
                            }}
                        >
                            {title}
                        </h1>
                        <p
                            style={{
                                fontSize: 32,
                                fontWeight: 400,
                                opacity: 0.8,
                                maxWidth: '800px',
                            }}
                        >
                            {subtitle}
                        </p>
                    </div>

                    {/* Logo or Accent */}
                    <div
                        style={{
                            position: 'absolute',
                            bottom: 40,
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <div
                            style={{
                                width: 40,
                                height: 40,
                                borderRadius: 8,
                                background: 'linear-gradient(to bottom right, #0070f3, #00dfd8)',
                                marginRight: 12,
                            }}
                        />
                        <span style={{ fontSize: 24, fontWeight: 600, letterSpacing: '-0.02em' }}>
                            Antigravity Labs
                        </span>
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
                fonts: [
                    {
                        name: 'Inter',
                        data: interBold,
                        style: 'normal',
                        weight: 700,
                    },
                ],
                headers: {
                    'Cache-Control': 'public, immutable, no-transform, s-maxage=31536000, max-age=31536000',
                },
            }
        );
    } catch (e: any) {
        console.error(e.message);
        return new Response(`Failed to generate the image`, {
            status: 500,
        });
    }
}
