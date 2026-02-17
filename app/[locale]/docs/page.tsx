import Link from 'next/link';
import { Camera, Code, Cpu, Globe, Rocket, Terminal, Copy, Check, ChevronRight } from 'lucide-react';

export default async function DocsPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const l = `/${locale}`;

    const content: Record<string, any> = {
        en: {
            title: "Documentation",
            subtitle: "Everything you need to integrate SnapOG into your workflow.",
            gettingStarted: "Getting Started",
            intro: "SnapOG is a high-performance image generation engine designed for modern web applications. Whether you need dynamic OG images or real-time website screenshots, we've got you covered.",
            screenshotApi: "Screenshot API",
            screenshotDesc: "The Screenshot API allows you to capture a real-time snapshot of any public website. It handles JavaScript execution, CSS rendering, and cookie banners automatically.",
            ogApi: "OG Image API",
            ogDesc: "The OG Image API generates beautiful, templated images based on query parameters. Highly optimized for speed and social media sharing dimensions.",
            usage: "Usage Example",
            parameters: "Parameters",
            response: "Response",
        },
        ar: {
            title: "التوثيق",
            subtitle: "كل ما تحتاجه لدمج SnapOG في سير عملك.",
            gettingStarted: "البداية",
            intro: "SnapOG هو محرك إنشاء صور عالي الأداء مصمم للتطبيقات الحديثة. سواء كنت بحاجة إلى صور OG ديناميكية أو لقطات شاشة للمواقع في الوقت الفعلي، فنحن نوفر لك ما تحتاجه.",
            screenshotApi: "واجهة برمجة تطبيقات لقطة الشاشة",
            screenshotDesc: "تسمح لك واجهة برمجة تطبيقات لقطة الشاشة بالتقاط لقطة فورية لأي موقع ويب عام. تتعامل مع تنفيذ JavaScript وتنسيق CSS ورايات ملفات تعريف الارتباط تلقائيًا.",
            ogApi: "واجهة برمجة تطبيقات صور OG",
            ogDesc: "تنشئ واجهة برمجة تطبيقات صور OG صورًا جميلة ومقولبة بناءً على معلمات الاستعلام. مُحسّنة للغاية للسرعة وأبعاد المشاركة على وسائل التواصل الاجتماعي.",
            usage: "مثال على الاستخدام",
            parameters: "المعلمات",
            response: "الاستجابة",
        }
    };

    const t = content[locale] || content.en;

    return (
        <main className="min-h-screen bg-black text-white selection:bg-indigo-500/30">
            {/* Background Decorative */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-indigo-500/5 blur-[120px] rounded-full"></div>
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
                <div className="container max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
                    <Link href={l} className="flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-sky-500 rounded-xl flex items-center justify-center">
                            <Camera className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xl font-bold tracking-tight premium-gradient-text">SnapOG</span>
                    </Link>
                    <div className="flex items-center gap-8">
                        <Link href={`${l}/pricing`} className="text-sm font-medium text-white/60 hover:text-white transition-colors">Pricing</Link>
                        <Link href={`${l}/dashboard`} className="text-sm font-medium text-white/60 hover:text-white transition-colors">Dashboard</Link>
                    </div>
                </div>
            </nav>

            <div className="container max-w-5xl mx-auto px-6 pt-40 pb-32 relative z-10">
                <div className="mb-20">
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 premium-gradient-text">{t.title}</h1>
                    <p className="text-xl text-white/40 max-w-2xl leading-relaxed">{t.subtitle}</p>
                </div>

                <div className="grid lg:grid-cols-4 gap-12">
                    {/* Sidebar Navigation */}
                    <div className="hidden lg:block space-y-2">
                        <div className="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-4 px-4">Overview</div>
                        <a href="#introduction" className="block px-4 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-all">Introduction</a>
                        <a href="#screenshot-api" className="block px-4 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-all">Screenshot API</a>
                        <a href="#og-api" className="block px-4 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-all">OG Image API</a>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3 space-y-24">
                        {/* Intro */}
                        <section id="introduction" className="scroll-mt-32">
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <Rocket className="w-6 h-6 text-indigo-500" /> {t.gettingStarted}
                            </h2>
                            <p className="text-white/60 text-lg leading-relaxed mb-8">{t.intro}</p>
                            <div className="glass-card p-6 border-indigo-500/20 bg-indigo-500/5">
                                <div className="flex gap-4 items-start">
                                    <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                                        <Terminal className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-indigo-300 mb-1">Base URL</p>
                                        <code className="text-white/80 font-mono text-sm">https://api.snapog.com/v1</code>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Screenshot API */}
                        <section id="screenshot-api" className="scroll-mt-32">
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <Camera className="w-6 h-6 text-indigo-500" /> {t.screenshotApi}
                            </h2>
                            <p className="text-white/60 leading-relaxed mb-8">{t.screenshotDesc}</p>

                            <div className="space-y-6">
                                <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                                    <div className="px-6 py-4 border-b border-white/5 bg-white/[0.02] flex justify-between items-center">
                                        <div className="flex gap-2">
                                            <span className="text-xs font-bold text-green-400 px-2 py-0.5 bg-green-400/10 rounded">GET</span>
                                            <span className="text-xs font-mono text-white/40">/api/screenshot</span>
                                        </div>
                                    </div>
                                    <div className="p-6 font-mono text-sm space-y-4 overflow-x-auto">
                                        <div className="text-white/40">// Example usage</div>
                                        <div className="text-indigo-400">fetch<span className="text-white">(</span><span className="text-sky-300">&quot;https://snapog.com/api/screenshot?url=https://google.com&quot;</span><span className="text-white">)</span></div>
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="glass-card p-5">
                                        <h4 className="text-sm font-bold mb-2 text-indigo-300">url</h4>
                                        <p className="text-xs text-white/40">The target website URL. Must include protocol (http/https).</p>
                                    </div>
                                    <div className="glass-card p-5">
                                        <h4 className="text-sm font-bold mb-2 text-indigo-300">width</h4>
                                        <p className="text-xs text-white/40">Viewport width in pixels. Default 1200.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* OG API */}
                        <section id="og-api" className="scroll-mt-32">
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <Cpu className="w-6 h-6 text-indigo-500" /> {t.ogApi}
                            </h2>
                            <p className="text-white/60 leading-relaxed mb-8">{t.ogDesc}</p>

                            <div className="space-y-6">
                                <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                                    <div className="px-6 py-4 border-b border-white/5 bg-white/[0.02] flex justify-between items-center">
                                        <div className="flex gap-2">
                                            <span className="text-xs font-bold text-green-400 px-2 py-0.5 bg-green-400/10 rounded">GET</span>
                                            <span className="text-xs font-mono text-white/40">/api/og</span>
                                        </div>
                                    </div>
                                    <div className="p-6 font-mono text-sm space-y-4 overflow-x-auto">
                                        <div className="text-white/40">// Create a custom OG image</div>
                                        <div className="text-indigo-400">const<span className="text-white"> url = </span><span className="text-sky-300">&quot;/api/og?title=Hello&subtitle=World&theme=dark&quot;</span></div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {[
                                        { name: 'title', type: 'string', desc: 'Main heading text' },
                                        { name: 'subtitle', type: 'string', desc: 'Sub-heading text' },
                                        { name: 'theme', type: 'dark | light', desc: 'Background theme' }
                                    ].map((param, i) => (
                                        <div key={i} className="flex items-center justify-between p-4 bg-white/2 rounded-xl border border-white/5">
                                            <div className="flex items-center gap-4">
                                                <span className="font-mono text-indigo-400 text-sm">{param.name}</span>
                                                <span className="text-[10px] uppercase font-bold text-white/20">{param.type}</span>
                                            </div>
                                            <span className="text-xs text-white/40">{param.desc}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="py-20 border-t border-white/5 bg-black">
                <div className="container max-w-6xl mx-auto px-6 text-center">
                    <p className="text-white/20 text-sm">&copy; 2026 SnapOG. All rights reserved.</p>
                </div>
            </footer>
        </main>
    );
}
