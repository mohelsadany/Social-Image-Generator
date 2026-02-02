export default function HomePage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">
            <div className="container max-w-4xl mx-auto px-6 py-16">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Screenshot API for Open Graph
                    </h1>
                    <p className="text-xl text-gray-400">
                        Generate beautiful preview images for any URL
                    </p>
                </div>

                {/* Usage Section */}
                <div className="bg-gray-800/50 rounded-lg p-8 mb-8 border border-gray-700">
                    <h2 className="text-2xl font-semibold mb-4">📖 How to Use</h2>
                    <p className="text-gray-300 mb-4">
                        Add this meta tag to your website's <code className="bg-gray-700 px-2 py-1 rounded">&lt;head&gt;</code>:
                    </p>

                    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-sm text-green-400">
                            {`<meta property="og:image" 
      content="https://your-domain.com/api/screenshot?url=YOUR_PAGE_URL" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />`}
                        </pre>
                    </div>
                </div>

                {/* Example */}
                <div className="bg-gray-800/50 rounded-lg p-8 mb-8 border border-gray-700">
                    <h2 className="text-2xl font-semibold mb-4">✨ Example</h2>
                    <p className="text-gray-300 mb-4">Try it out:</p>

                    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-4">
                        <code className="text-sm text-cyan-400">
                            {typeof window !== 'undefined' ? window.location.origin : 'https://your-domain.com'}/api/screenshot?url=https://github.com
                        </code>
                    </div>

                    <a
                        href={`/api/screenshot?url=https://github.com`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                    >
                        View Screenshot Example
                    </a>
                </div>

                {/* Features */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                        <div className="text-3xl mb-3">⚡</div>
                        <h3 className="font-semibold mb-2">Fast & Cached</h3>
                        <p className="text-sm text-gray-400">
                            Screenshots are cached for 30 days for optimal performance
                        </p>
                    </div>

                    <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                        <div className="text-3xl mb-3">🎨</div>
                        <h3 className="font-semibold mb-2">Perfect Size</h3>
                        <p className="text-sm text-gray-400">
                            1200×630 pixels - optimized for all social platforms
                        </p>
                    </div>

                    <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                        <div className="text-3xl mb-3">🚫</div>
                        <h3 className="font-semibold mb-2">Clean Output</h3>
                        <p className="text-sm text-gray-400">
                            Blocks ads, cookie banners, and trackers automatically
                        </p>
                    </div>
                </div>

                {/* Setup Instructions */}
                <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
                    <h2 className="text-2xl font-semibold mb-4">🔧 Setup (Optional)</h2>
                    <p className="text-gray-300 mb-4">
                        For production use, get a free API key from{' '}
                        <a
                            href="https://screenshotone.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 underline"
                        >
                            screenshotone.com
                        </a>
                    </p>

                    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-sm text-yellow-400">
                            {`# Add to your .env.local file:
SCREENSHOT_API_KEY=your_api_key_here`}
                        </pre>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center mt-16 text-gray-500 text-sm">
                    <p>Built with Next.js 14 • Edge Runtime • Screenshotone API</p>
                </div>
            </div>
        </main>
    );
}
