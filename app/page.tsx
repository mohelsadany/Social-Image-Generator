import Link from 'next/link';
import { UserButton, SignedIn, SignedOut } from '@clerk/nextjs';

export default function HomePage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white overflow-hidden">
            {/* Navigation */}
            <nav className="border-b border-gray-800 backdrop-blur-sm bg-gray-950/50 sticky top-0 z-50">
                <div className="container max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="text-2xl">📸</div>
                        <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            Screenshot API
                        </span>
                    </Link>
                    <div className="flex items-center gap-6">
                        <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
                            Pricing
                        </Link>
                        <Link href="/docs" className="text-gray-300 hover:text-white transition-colors">
                            Docs
                        </Link>
                        <SignedOut>
                            <Link
                                href="/sign-in"
                                className="text-gray-300 hover:text-white transition-colors"
                            >
                                Sign In
                            </Link>
                            <Link
                                href="/sign-up"
                                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-2.5 rounded-lg transition-all font-semibold shadow-lg shadow-blue-500/20"
                            >
                                Get Started Free
                            </Link>
                        </SignedOut>
                        <SignedIn>
                            <Link
                                href="/dashboard"
                                className="text-gray-300 hover:text-white transition-colors"
                            >
                                Dashboard
                            </Link>
                            <UserButton afterSignOutUrl="/" />
                        </SignedIn>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="container max-w-7xl mx-auto px-6 pt-20 pb-32 relative">
                {/* Background decoration */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

                <div className="text-center mb-16">
                    <div className="inline-block mb-6">
                        <span className="bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold border border-blue-500/20 animate-pulse">
                            ✨ Beautiful Open Graph Images in Seconds
                        </span>
                    </div>
                    <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent leading-tight">
                        Screenshot API for
                        <br />
                        Open Graph Images
                    </h1>
                    <p className="text-2xl text-gray-400 max-w-3xl mx-auto mb-4">
                        Generate beautiful preview images for any URL
                    </p>
                    <p className="text-xl text-gray-500 mb-12">
                        توليد صور معاينة احترافية لأي رابط
                    </p>

                    <div className="flex gap-4 justify-center mb-16">
                        <Link
                            href="/sign-up"
                            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl transition-all font-semibold text-lg shadow-xl shadow-blue-500/30 hover:scale-105"
                        >
                            Start Free Today →
                        </Link>
                        <Link
                            href="/pricing"
                            className="bg-gray-800/50 hover:bg-gray-800 text-white px-8 py-4 rounded-xl transition-all font-semibold text-lg border border-gray-700"
                        >
                            View Pricing
                        </Link>
                    </div>

                    {/* Demo Screenshot */}
                    <div className="relative max-w-4xl mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl blur-2xl"></div>
                        <div className="relative bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm">
                            <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-left">
                                <div className="text-gray-500 mb-2">// Add to your website's &lt;head&gt;</div>
                                <div className="text-green-400">&lt;meta property=<span className="text-yellow-400">"og:image"</span></div>
                                <div className="text-green-400 ml-6">content=<span className="text-yellow-400">"https://your-api.vercel.app/api/screenshot?url=YOUR_URL"</span> /&gt;</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="container max-w-7xl mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4">Why Choose Us?</h2>
                    <p className="text-xl text-gray-400">Everything you need for perfect social media previews</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {[
                        {
                            icon: '⚡',
                            title: 'Lightning Fast',
                            description: 'Screenshots generated in milliseconds with edge-optimized infrastructure and 30-day caching',
                        },
                        {
                            icon: '🎨',
                            title: 'Perfect Dimensions',
                            description: '1200×630 pixels - optimized for all social platforms including Facebook, Twitter, and LinkedIn',
                        },
                        {
                            icon: '🚫',
                            title: 'Clean Output',
                            description: 'Automatically blocks ads, cookie banners, and trackers for clean, professional screenshots',
                        },
                        {
                            icon: '🔒',
                            title: 'Secure & Reliable',
                            description: 'Enterprise-grade security with 99.9% uptime SLA and SOC 2 compliance',
                        },
                        {
                            icon: '📊',
                            title: 'Analytics Dashboard',
                            description: 'Track usage, monitor performance, and optimize your screenshot strategy in real-time',
                        },
                        {
                            icon: '🌍',
                            title: 'Global CDN',
                            description: 'Distributed across 200+ edge locations worldwide for minimal latency anywhere',
                        },
                    ].map((feature, i) => (
                        <div
                            key={i}
                            className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all hover:scale-105 group"
                        >
                            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
                            <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* How It Works */}
            <div className="container max-w-7xl mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4">How It Works</h2>
                    <p className="text-xl text-gray-400">Get started in 3 simple steps</p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {[
                        {
                            step: '1',
                            title: 'Deploy the API',
                            description: 'Deploy to Vercel for free in 2 minutes. No credit card required.',
                            icon: '🚀',
                        },
                        {
                            step: '2',
                            title: 'Get Your URL',
                            description: 'After deployment, you\'ll get a URL like https://your-api.vercel.app',
                            icon: '🔗',
                        },
                        {
                            step: '3',
                            title: 'Add Meta Tags',
                            description: 'Add the og:image meta tag to your website and you\'re done!',
                            icon: '✨',
                        },
                    ].map((step, i) => (
                        <div key={i} className="relative">
                            <div className="bg-gradient-to-b from-blue-900/20 to-transparent rounded-2xl p-8 border border-blue-500/20">
                                <div className="text-6xl mb-4">{step.icon}</div>
                                <div className="text-blue-400 font-bold text-sm mb-2">STEP {step.step}</div>
                                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                                <p className="text-gray-400">{step.description}</p>
                            </div>
                            {i < 2 && (
                                <div className="hidden md:block absolute top-1/2 -right-6 text-4xl text-blue-500/30">→</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Use Cases */}
            <div className="container max-w-7xl mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4">Perfect For</h2>
                    <p className="text-xl text-gray-400">Any website that wants beautiful link previews</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: 'Blogs & News', icon: '📰' },
                        { title: 'E-commerce', icon: '🛍️' },
                        { title: 'SaaS Products', icon: '💼' },
                        { title: 'Portfolios', icon: '🎨' },
                    ].map((useCase, i) => (
                        <div key={i} className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50 text-center hover:border-blue-500/50 transition-all">
                            <div className="text-4xl mb-3">{useCase.icon}</div>
                            <h3 className="font-semibold text-lg">{useCase.title}</h3>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="container max-w-7xl mx-auto px-6 py-20">
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl blur-2xl"></div>
                    <div className="relative bg-gradient-to-r from-blue-900/40 to-cyan-900/40 rounded-3xl p-16 border border-blue-500/20 text-center">
                        <h2 className="text-5xl font-bold mb-6">Ready to Get Started?</h2>
                        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                            Join hundreds of developers using Screenshot API to create beautiful link previews
                        </p>
                        <div className="flex gap-4 justify-center">
                            <Link
                                href="/sign-up"
                                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-10 py-4 rounded-xl transition-all font-semibold text-lg shadow-xl shadow-blue-500/30 hover:scale-105"
                            >
                                Start Free Today →
                            </Link>
                            <Link
                                href="/pricing"
                                className="bg-white/10 hover:bg-white/20 text-white px-10 py-4 rounded-xl transition-all font-semibold text-lg border border-white/20"
                            >
                                View Pricing
                            </Link>
                        </div>
                        <p className="text-gray-400 mt-6">No credit card required • Free forever plan available</p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="border-t border-gray-800 py-12">
                <div className="container max-w-7xl mx-auto px-6 text-center text-gray-500">
                    <p>Built with Next.js 14 • Edge Runtime • Screenshotone API</p>
                    <p className="mt-2">© 2026 Screenshot API. All rights reserved.</p>
                </div>
            </footer>
        </main>
    );
}
