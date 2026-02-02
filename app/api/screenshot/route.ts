import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const targetUrl = searchParams.get('url');

        if (!targetUrl) {
            return new NextResponse('Missing URL parameter. Usage: /api/screenshot?url=YOUR_URL', {
                status: 400,
                headers: { 'Content-Type': 'text/plain' }
            });
        }

        // Validate URL
        try {
            new URL(targetUrl);
        } catch {
            return new NextResponse('Invalid URL format', {
                status: 400,
                headers: { 'Content-Type': 'text/plain' }
            });
        }

        // Use thum.io - free screenshot service, no API key needed
        const screenshotUrl = new URL('https://image.thum.io/get/width/1200/crop/630/noanimate');
        screenshotUrl.searchParams.append('url', targetUrl);

        // Fetch the screenshot
        const response = await fetch(screenshotUrl.toString(), {
            headers: {
                'User-Agent': 'Mozilla/5.0 (compatible; ScreenshotBot/1.0)',
            },
        });

        if (!response.ok) {
            return new NextResponse(
                `Screenshot service temporarily unavailable. Status: ${response.status}`,
                {
                    status: 503,
                    headers: { 'Content-Type': 'text/plain' }
                }
            );
        }

        const imageBuffer = await response.arrayBuffer();

        return new NextResponse(imageBuffer, {
            status: 200,
            headers: {
                'Content-Type': 'image/jpeg',
                'Cache-Control': 'public, immutable, no-transform, s-maxage=2592000, max-age=2592000',
                'X-Screenshot-Service': 'thum.io',
            },
        });
    } catch (error: any) {
        console.error('Screenshot error:', error);
        return new NextResponse(
            `Failed to generate screenshot: ${error.message}`,
            {
                status: 500,
                headers: { 'Content-Type': 'text/plain' }
            }
        );
    }
}
