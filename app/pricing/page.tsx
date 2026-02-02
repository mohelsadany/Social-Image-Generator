import Link from 'next/link';
import { UserButton, SignedIn, SignedOut } from '@clerk/nextjs';

export default function PricingPage() {
    const tiers = [
        {
            name: 'Free',
            price: '0',
            period: 'forever',
            description: 'Perfect for trying out',
            features: [
                '100 screenshots/month',
                '30-day caching',
                '1200×630 dimensions',
                'Community support',
                'Basic analytics',
            ],
            cta: 'Get Started',
            href: '/sign-up',
            highlighted: false,
            popular: false,
        },
        {
            name: 'Starter',
            price: '9',
            period: 'month',
            description: 'For small projects',
            features: [
                '1,000 screenshots/month',
                '30-day caching',
                'Priority processing',
                'Email support',
                'Custom dimensions',
                'Advanced analytics',
            ],
            cta: 'Start Free Trial',
            href: '/sign-up',
            highlighted: false,
            popular: false,
        },
        {
            name: 'Pro',
            price: '29',
            period: 'month',
            description: 'For growing businesses',
            features: [
                '10,000 screenshots/month',
                '90-day caching',
                'Priority processing',
                'Priority support',
                'Custom dimensions',
                'Advanced analytics',
                'Webhook notifications',
            ],
            cta: 'Start Free Trial',
            href: '/sign-up',
            highlighted: true,
            popular: true,
        },
        {
            name: 'Business',
            price: '99',
            period: 'month',
            description: 'For enterprises',
            features: [
                'Unlimited screenshots',
                'Custom caching',
                'Dedicated support',
                'SLA guarantee (99.9%)',
                'Custom dimensions',
                'Advanced analytics',
                'White-label option',
                'Custom integrations',
            ],
            cta: 'Contact Sales',
            href: '/sign-up',
            highlighted: false,
            popular: false,
        },
    ];

    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">
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

            <div className="container max-w-7xl mx-auto px-6 py-20">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-block mb-4">
                        <span className="bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold border border-blue-500/20">
                            Simple, Transparent Pricing
                        </span>
                    </div>
                    <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                        Choose Your Plan
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Start free, upgrade anytime. All plans include our core features with no hidden fees.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {tiers.map((tier, index) => (
                        <div
                            key={tier.name}
                            className={`relative rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${tier.highlighted
                                    ? 'bg-gradient-to-b from-blue-900/40 to-blue-900/10 border-2 border-blue-500 shadow-2xl shadow-blue-500/20'
                                    : 'bg-gray-800/40 border border-gray-700/50 hover:border-gray-600'
                                }`}
                            style={{
                                animationDelay: `${index * 100}ms`,
                            }}
                        >
                            {tier.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm px-4 py-1.5 rounded-full font-semibold shadow-lg">
                                        ⭐ Most Popular
                                    </span>
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                                <p className="text-gray-400 text-sm">{tier.description}</p>
                            </div>

                            <div className="mb-8">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                        ${tier.price}
                                    </span>
                                    <span className="text-gray-400">/{tier.period}</span>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {tier.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-300 text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href={tier.href}
                                className={`block text-center py-3.5 rounded-xl font-semibold transition-all ${tier.highlighted
                                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg shadow-blue-500/30'
                                        : 'bg-gray-700/50 hover:bg-gray-700 text-white border border-gray-600'
                                    }`}
                            >
                                {tier.cta}
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Features Comparison */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold mb-10 text-center">All Plans Include</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50">
                            <div className="text-4xl mb-4">⚡</div>
                            <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
                            <p className="text-gray-400">
                                Edge-optimized infrastructure ensures screenshots are generated in milliseconds
                            </p>
                        </div>
                        <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50">
                            <div className="text-4xl mb-4">🔒</div>
                            <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
                            <p className="text-gray-400">
                                Enterprise-grade security with 99.9% uptime SLA on Business plans
                            </p>
                        </div>
                        <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50">
                            <div className="text-4xl mb-4">📊</div>
                            <h3 className="text-xl font-semibold mb-2">Detailed Analytics</h3>
                            <p className="text-gray-400">
                                Track usage, monitor performance, and optimize your screenshot strategy
                            </p>
                        </div>
                    </div>
                </div>

                {/* FAQ */}
                <div className="max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>

                    <div className="space-y-4">
                        {[
                            {
                                q: 'Can I change plans later?',
                                a: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately and we\'ll prorate the difference.',
                            },
                            {
                                q: 'What happens if I exceed my limit?',
                                a: 'Your API will return a rate limit error. You can upgrade your plan instantly or wait until the next billing cycle for your quota to reset.',
                            },
                            {
                                q: 'Do you offer refunds?',
                                a: 'Yes, we offer a 14-day money-back guarantee on all paid plans. No questions asked.',
                            },
                            {
                                q: 'Is there a free trial?',
                                a: 'The Free plan is available forever with no credit card required. Paid plans include a 7-day free trial.',
                            },
                        ].map((faq, i) => (
                            <details key={i} className="bg-gray-800/30 rounded-xl border border-gray-700/50 overflow-hidden group">
                                <summary className="p-6 cursor-pointer font-semibold text-lg hover:bg-gray-800/50 transition-colors">
                                    {faq.q}
                                </summary>
                                <div className="px-6 pb-6 text-gray-300 border-t border-gray-700/50 pt-4">
                                    {faq.a}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-2xl p-12 border border-blue-500/20">
                    <h2 className="text-4xl font-bold mb-4">Ready to get started?</h2>
                    <p className="text-gray-400 mb-8 text-lg">
                        Join hundreds of developers using Screenshot API to create beautiful link previews
                    </p>
                    <Link
                        href="/sign-up"
                        className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold px-10 py-4 rounded-xl transition-all text-lg shadow-xl shadow-blue-500/30"
                    >
                        Start Free Today →
                    </Link>
                </div>
            </div>
        </main>
    );
}
