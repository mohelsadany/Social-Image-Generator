import Link from 'next/link';
import { UserButton, SignedIn, SignedOut } from '@clerk/nextjs';
import { Camera, Check, HelpCircle } from 'lucide-react';

const tiers = [
    {
        name: 'Free',
        price: '$0',
        description: 'Perfect for small personal projects.',
        features: [
            '100 screenshots / month',
            'Standard priority',
            '30-day cache',
            'Standard support',
        ],
        cta: 'Start for free',
        highlight: false,
    },
    {
        name: 'Starter',
        price: '$19',
        description: 'The basics for growing indie makers.',
        features: [
            '1,000 screenshots / month',
            'High priority',
            '60-day cache',
            'Email support',
        ],
        cta: 'Choose Starter',
        highlight: false,
    },
    {
        name: 'Pro',
        price: '$49',
        description: 'Scale your product with confidence.',
        features: [
            '10,000 screenshots / month',
            'Highest priority',
            'Unlimited cache',
            'Priority email support',
            'Custom fonts & CSS',
        ],
        cta: 'Get Pro',
        highlight: true,
    },
    {
        name: 'Business',
        price: '$149',
        description: 'Enterprise grade for heavy workloads.',
        features: [
            '50,000 screenshots / month',
            'Dedicated infrastructure',
            'Advanced API features',
            '24/7 Phone support',
            'SLA guarantee',
        ],
        cta: 'Contact Sales',
        highlight: false,
    },
];

const faqs = [
    {
        q: "How does the caching work?",
        a: "We cache every generated image globally. Subsequent requests for the same URL return the cached version instantly without consuming your quota."
    },
    {
        q: "Can I customize the viewport?",
        a: "Yes, you can customize width, height, and device scale factor via API parameters."
    },
    {
        q: "Do you block cookie banners?",
        a: "Absolutely. Our engine automatically detects and removes common cookie consent popups and banners for clean screenshots."
    }
];

export default async function PricingPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const l = `/${locale}`;

    return (
        <main className="min-h-screen bg-black text-white selection:bg-indigo-500/30">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
                <div className="container max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
                    <Link href={l} className="flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-sky-500 rounded-xl flex items-center justify-center">
                            <Camera className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xl font-bold tracking-tight premium-gradient-text">
                            SnapOG
                        </span>
                    </Link>

                    <div className="flex items-center gap-8">
                        <Link href={`${l}/pricing`} className="text-sm font-medium text-white transition-colors">Pricing</Link>
                        <Link href={`${l}/docs`} className="text-sm font-medium text-white/60 hover:text-white transition-colors">Docs</Link>
                        <SignedOut>
                            <Link href={`${l}/sign-up`} className="premium-button !py-2 !px-5 text-sm">
                                Start Free
                            </Link>
                        </SignedOut>
                        <SignedIn>
                            <Link href={`${l}/dashboard`} className="text-sm font-medium text-white/60 hover:text-white transition-colors">Dashboard</Link>
                            <UserButton afterSignOutUrl={l} />
                        </SignedIn>
                    </div>
                </div>
            </nav>

            <section className="pt-44 pb-32 px-6">
                <div className="container max-w-6xl mx-auto">
                    <div className="text-center mb-24">
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 premium-gradient-text">
                            Simple, scaleable pricing.
                        </h1>
                        <p className="text-white/40 max-w-xl mx-auto text-lg leading-relaxed">
                            Start for free and upgrade as you grow. No hidden fees, cancel anytime.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {tiers.map((tier) => (
                            <div
                                key={tier.name}
                                className={`glass-card p-8 flex flex-col transition-all duration-300 ${tier.highlight ? 'border-indigo-500/50 shadow-2xl shadow-indigo-500/10 scale-105 z-10' : 'hover:border-white/20'
                                    }`}
                            >
                                <div className="mb-8">
                                    <h3 className="text-lg font-bold text-white mb-2">{tier.name}</h3>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl font-bold">{tier.price}</span>
                                        <span className="text-white/40 text-sm">/mo</span>
                                    </div>
                                    <p className="mt-4 text-white/40 text-sm leading-relaxed">{tier.description}</p>
                                </div>

                                <ul className="flex-1 space-y-4 mb-10">
                                    {tier.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-3 text-sm text-white/60">
                                            <Check className="w-5 h-5 text-indigo-500 shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href={`${l}/sign-up`}
                                    className={`text-center py-3 rounded-xl font-bold transition-all ${tier.highlight
                                        ? 'bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500 shadow-lg shadow-indigo-500/20'
                                        : 'bg-white/5 border border-white/10 hover:bg-white/10'
                                        }`}
                                >
                                    {tier.cta}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-32 border-t border-white/5 bg-white/5">
                <div className="container max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-16 premium-gradient-text">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        {faqs.map((faq, i) => (
                            <div key={i} className="glass-card p-8 group transition-all hover:bg-white/[0.07]">
                                <div className="flex items-start gap-4">
                                    <HelpCircle className="w-6 h-6 text-indigo-500 shrink-0" />
                                    <div>
                                        <h3 className="font-bold mb-2 group-hover:text-indigo-300 transition-colors">{faq.q}</h3>
                                        <p className="text-white/40 text-sm leading-relaxed">{faq.a}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-20 border-t border-white/5 bg-black">
                <div className="container max-w-6xl mx-auto px-6 text-center">
                    <p className="text-white/20 text-sm">&copy; 2026 SnapOG. All rights reserved.</p>
                </div>
            </footer>
        </main>
    );
}
