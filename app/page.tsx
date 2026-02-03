import Link from 'next/link';
import { UserButton, SignedIn, SignedOut } from '@clerk/nextjs';
import { Camera, Zap, Shield, BarChart3, Globe, ArrowRight, Code } from 'lucide-react';

export default function HomePage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-indigo-500/30 overflow-x-hidden">
            {/* Background Decorative Elements */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-sky-500/10 blur-[120px] rounded-full"></div>
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
                <div className="container max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-sky-500 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110">
                            <Camera className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xl font-bold tracking-tight premium-gradient-text">
                            SnapOG
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/pricing" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Pricing</Link>
                        <Link href="/docs" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Docs</Link>
                        <div className="h-4 w-px bg-white/10 mx-2"></div>
                        <SignedOut>
                            <Link href="/sign-in" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Login</Link>
                            <Link href="/sign-up" className="premium-button !py-2 !px-5 text-sm">
                                Start Free
                            </Link>
                        </SignedOut>
                        <SignedIn>
                            <Link href="/dashboard" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Dashboard</Link>
                            <UserButton afterSignOutUrl="/" />
                        </SignedIn>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-44 pb-32">
                <div className="container max-w-5xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300 mb-8 animate-fade-in">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                        </span>
                        New: Edge-ready screenshot engine
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[0.9] premium-gradient-text">
                        The ultimate OG image engine.
                    </h1>

                    <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
                        Generate breathtaking social preview images from any URL in milliseconds.
                        Optimized for Facebook, Twitter, and LinkedIn.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-24">
                        <Link href="/sign-up" className="premium-button text-lg flex items-center gap-2 w-full sm:w-auto">
                            Get started free <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link href="/docs" className="px-8 py-3.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all font-semibold w-full sm:w-auto">
                            View Documentation
                        </Link>
                    </div>

                    {/* App Preview Container */}
                    <div className="relative mx-auto mt-12 group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-sky-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative glass-card !rounded-[2rem] p-4 bg-black/60 shadow-2xl">
                            <div className="border border-white/10 rounded-[1.5rem] overflow-hidden bg-white/5 p-6 md:p-12 text-left">
                                <div className="flex items-center gap-2 mb-8">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                                    <div className="ml-4 px-3 py-1 bg-white/5 rounded-lg border border-white/10 flex items-center gap-2 text-xs text-white/40">
                                        <Code className="w-3.3 h-3.3" />
                                        <span>https://api.snapog.com/v1/capture</span>
                                    </div>
                                </div>

                                <div className="space-y-4 font-mono text-sm md:text-base">
                                    <div className="flex gap-4">
                                        <span className="text-white/30">1</span>
                                        <span className="text-indigo-400">const</span> <span className="text-white">url</span> = <span className="text-sky-300">&quot;https://snapog.com/api/capture&quot;</span>;
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-white/30">2</span>
                                        <span className="text-indigo-400">const</span> <span className="text-white">params</span> = <span className="text-white/60">&#123;</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-white/30">3</span>
                                        <span className="pl-4 text-white">target</span>: <span className="text-sky-300">&quot;https://your-site.com&quot;</span>,
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-white/30">4</span>
                                        <span className="pl-4 text-white">format</span>: <span className="text-sky-300">&quot;jpeg&quot;</span>,
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-white/30">5</span>
                                        <span className="pl-4 text-white">delay</span>: <span className="text-white">500</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-white/30">6</span>
                                        <span className="text-white/60">&#125;</span>;
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-32 border-t border-white/5">
                <div className="container max-w-6xl mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 premium-gradient-text">
                            Built for heavy lifting.
                        </h2>
                        <p className="text-white/40 max-w-xl mx-auto">
                            We handle everything from headless browser management to high-quality image compression.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Zap,
                                title: 'Insanely Fast',
                                desc: 'Generated at the edge using global infrastructure to minimize latency.'
                            },
                            {
                                icon: Shield,
                                title: 'Reliable Infrastructure',
                                desc: '99.9% uptime SLA with automatic failover and concurrent request handling.'
                            },
                            {
                                icon: Globe,
                                title: 'Global Coverage',
                                desc: 'Pick from 20+ regions to capture content exactly as your users see it.'
                            },
                            {
                                icon: Camera,
                                title: 'Full-page Capture',
                                desc: 'Perfectly render even the most complex JavaScript-heavy single page apps.'
                            },
                            {
                                icon: BarChart3,
                                title: 'Usage Analytics',
                                desc: 'Monitor every single request with real-time dashboards and alerting.'
                            },
                            {
                                icon: Code,
                                title: 'Easy Integration',
                                desc: 'Powerful REST API and SDKs for every major programming language.'
                            }
                        ].map((item, i) => (
                            <div key={i} className="glass-card p-8 group hover:border-white/20 transition-all duration-500">
                                <item.icon className="w-10 h-10 text-indigo-500 mb-6 group-hover:scale-110 transition-transform duration-500" />
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial / Social Proof */}
            <section className="py-24 bg-white/5 border-y border-white/5">
                <div className="container max-w-4xl mx-auto px-6 text-center">
                    <p className="text-2xl italic font-serif text-white/80 mb-8 leading-relaxed">
                        &quot;SnapOG has completely transformed how our team handles link previews.
                        The reliability and speed are unmatched in the industry.&quot;
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-sky-500"></div>
                        <div className="text-left">
                            <p className="font-bold text-sm">Sarah Chen</p>
                            <p className="text-white/40 text-xs uppercase tracking-widest font-semibold">CTO at TechFlow</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-20 border-t border-white/5 bg-black">
                <div className="container max-w-6xl mx-auto px-6 text-center">
                    <Link href="/" className="inline-flex items-center gap-3 mb-8">
                        <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-sky-500 rounded-lg flex items-center justify-center">
                            <Camera className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-lg font-bold premium-gradient-text">SnapOG</span>
                    </Link>
                    <p className="text-white/20 text-sm mb-8">&copy; 2026 SnapOG. All rights reserved.</p>
                    <div className="flex justify-center gap-8 text-white/40 text-sm font-medium">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                        <Link href="mailto:support@snapog.com" className="hover:text-white transition-colors">Contact</Link>
                    </div>
                </div>
            </footer>
        </main>
    );
}
