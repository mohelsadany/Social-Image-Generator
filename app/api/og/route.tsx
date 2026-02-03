import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);

        // Query param parsing
        const title = searchParams.get('title') || 'Beautiful Social Previews';
        const subtitle = searchParams.get('subtitle') || 'Generate professional OG images in milliseconds with SnapOG.';
        const image = searchParams.get('image');
        const theme = searchParams.get('theme') || 'dark';

        // Font loading logic inside the handler to use req.url for absolute path
        const fontData = await fetch(
            new URL('/fonts/Inter.ttf', req.url)
        ).then((res) => res.arrayBuffer());

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
                        backgroundColor: theme === 'light' ? '#ffffff' : '#000000',
                        backgroundImage: image
                            ? `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${image})`
                            : theme === 'light'
                                ? 'radial-gradient(at 0% 0%, hsla(210,100%,95%,1) 0, transparent 50%), radial-gradient(at 100% 100%, hsla(240,100%,95%,1) 0, transparent 50%)'
                                : 'radial-gradient(at 0% 0%, hsla(253,16%,10%,1) 0, transparent 50%), radial-gradient(at 100% 100%, hsla(225,39%,10%,1) 0, transparent 50%)',
                        backgroundSize: '1200px 630px',
                        backgroundPosition: 'center',
                        padding: '80px',
                        color: theme === 'light' ? '#000000' : '#ffffff',
                        fontFamily: 'Inter',
                    }}
                >
                    {/* Decorative Border */}
                    <div style={{
                        position: 'absolute',
                        inset: '20px',
                        border: theme === 'light' ? '1px solid rgba(0,0,0,0.1)' : '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '40px',
                        pointerEvents: 'none'
                    }} />

                    {/* Content Container */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            maxWidth: '900px',
                        }}
                    >
                        {/* Status/Badge */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '10px 24px',
                            background: theme === 'light' ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)',
                            borderRadius: '100px',
                            border: theme === 'light' ? '1px solid rgba(0,0,0,0.1)' : '1px solid rgba(255,255,255,0.1)',
                            marginBottom: '40px'
                        }}>
                            <span style={{ fontSize: 16, fontWeight: 700, color: '#4f46e5', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                                Verified Content
                            </span>
                        </div>

                        <h1
                            style={{
                                fontSize: 84,
                                fontWeight: 800,
                                marginBottom: 24,
                                lineHeight: 1,
                                letterSpacing: '-0.04em',
                                color: theme === 'light' ? '#000000' : '#ffffff',
                            }}
                        >
                            {title}
                        </h1>
                        <p
                            style={{
                                fontSize: 34,
                                fontWeight: 500,
                                opacity: 0.6,
                                lineHeight: 1.4,
                                letterSpacing: '-0.02em',
                                maxWidth: '850px',
                            }}
                        >
                            {subtitle}
                        </p>
                    </div>

                    {/* Branding */}
                    <div
                        style={{
                            position: 'absolute',
                            bottom: 60,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px'
                        }}
                    >
                        <div
                            style={{
                                width: 48,
                                height: 48,
                                borderRadius: 14,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'linear-gradient(135deg, #4f46e5 0%, #0ea5e9 100%)',
                            }}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" /><circle cx="12" cy="13" r="3" />
                            </svg>
                        </div>
                        <span style={{
                            fontSize: 32,
                            fontWeight: 800,
                            letterSpacing: '-0.04em',
                            color: theme === 'light' ? '#000' : '#fff'
                        }}>
                            SnapOG
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
                        data: fontData,
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
