import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { Camera, Key, BarChart3, Clock, ArrowUpRight, Plus, ExternalLink } from "lucide-react";

export default async function DashboardPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const l = `/${locale}`;

    const user = await currentUser();

    if (!user) {
        redirect(`${l}/sign-in`);
    }

    const firstName = user.firstName || user.emailAddresses[0].emailAddress.split('@')[0];

    return (
        <main className="min-h-screen bg-black text-white selection:bg-indigo-500/30">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
                <div className="container max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
                    <Link href={l} className="flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-sky-500 rounded-xl flex items-center justify-center">
                            <Camera className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xl font-bold tracking-tight premium-gradient-text">
                            SnapOG
                        </span>
                    </Link>

                    <div className="flex items-center gap-6">
                        <Link href={`${l}/dashboard`} className="text-sm font-medium text-white transition-colors">Dashboard</Link>
                        <Link href={`${l}/pricing`} className="text-sm font-medium text-white/60 hover:text-white transition-colors">Pricing</Link>
                        <UserButton afterSignOutUrl={l} />
                    </div>
                </div>
            </nav>

            <section className="pt-32 pb-20 px-6">
                <div className="container max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Welcome back, {firstName}.</h1>
                            <p className="text-white/40">Manage your API keys and monitor usage.</p>
                        </div>
                        <button className="premium-button flex items-center gap-2">
                            <Plus className="w-5 h-5" /> Generate New Key
                        </button>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {[
                            { label: 'Total Requests', value: '1,284', icon: BarChart3, trend: '+12.5%' },
                            { label: 'Active Keys', value: '3', icon: Key, trend: 'Healthy' },
                            { label: 'Median Latency', value: '42ms', icon: Clock, trend: '-4ms' },
                            { label: 'Platform Status', value: 'Online', icon: ExternalLink, trend: '99.9%' },
                        ].map((stat, i) => (
                            <div key={i} className="glass-card p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-2.5 bg-white/5 rounded-lg border border-white/10">
                                        <stat.icon className="w-5 h-5 text-indigo-400" />
                                    </div>
                                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${stat.trend.startsWith('+') ? 'text-green-400 bg-green-400/10' :
                                        stat.trend.startsWith('-') ? 'text-blue-400 bg-blue-400/10' :
                                            'text-indigo-400 bg-indigo-400/10'
                                        }`}>
                                        {stat.trend}
                                    </span>
                                </div>
                                <p className="text-white/40 text-sm font-medium uppercase tracking-wider mb-1">{stat.label}</p>
                                <h3 className="text-3xl font-bold">{stat.value}</h3>
                            </div>
                        ))}
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* API Keys Table */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="glass-card p-8">
                                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <Key className="w-5 h-5 text-indigo-500" /> API Keys
                                </h2>
                                <div className="space-y-4">
                                    {[
                                        { name: 'Production App', key: 'pk_live_49dk...29sk', created: '2026-01-15', status: 'Active' },
                                        { name: 'Staging Environment', key: 'pk_test_dk39...sk29', created: '2026-01-20', status: 'Active' },
                                        { name: 'Local Development', key: 'pk_test_92kd...dk92', created: '2026-02-01', status: 'Inactive' },
                                    ].map((key, i) => (
                                        <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-colors group">
                                            <div>
                                                <p className="font-bold text-sm mb-1">{key.name}</p>
                                                <code className="text-xs text-indigo-300/80 bg-indigo-500/5 px-2 py-1 rounded border border-indigo-500/10">{key.key}</code>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <span className={`text-[10px] uppercase tracking-widest font-bold ${key.status === 'Active' ? 'text-green-500' : 'text-white/20'}`}>
                                                    {key.status}
                                                </span>
                                                <button className="text-white/40 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <ExternalLink className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Recent Usage */}
                            <div className="glass-card p-8 text-center py-20">
                                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/10">
                                    <BarChart3 className="w-8 h-8 text-white/20" />
                                </div>
                                <h2 className="text-xl font-bold mb-2">No recent usage</h2>
                                <p className="text-white/40 text-sm max-w-xs mx-auto">
                                    Once you start making API requests, you'll see your detailed capture history here.
                                </p>
                            </div>
                        </div>

                        {/* Sidebar/Callouts */}
                        <div className="space-y-6">
                            <div className="glass-card p-8 bg-gradient-to-br from-indigo-600/20 to-sky-600/20 border-indigo-500/30">
                                <h2 className="text-lg font-bold mb-4">Upgrade your plan</h2>
                                <p className="text-sm text-white/70 mb-6 leading-relaxed">
                                    You're currently using the **Free Tier**. Upgrade to **Pro** for higher limits, custom fonts, and priority rendering.
                                </p>
                                <Link href={`${l}/pricing`} className="premium-button !py-2.5 !px-5 text-sm flex items-center justify-center gap-2">
                                    Upgrade Plan <ArrowUpRight className="w-4 h-4" />
                                </Link>
                            </div>

                            <div className="glass-card p-8 border-white/5 bg-white/2 hover:bg-white/5 transition-colors cursor-pointer group">
                                <h2 className="text-lg font-bold mb-2 flex items-center gap-2">
                                    Documentation <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 translate-x-1" />
                                </h2>
                                <p className="text-sm text-white/40">
                                    Read our comprehensive guides on how to integrate SnapOG into your workflow.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-white/5 bg-black">
                <div className="container max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-white/20 text-xs">&copy; 2026 SnapOG. All rights reserved.</p>
                    <div className="flex gap-6 text-white/20 text-xs font-medium">
                        <Link href={`${l}/privacy`} className="hover:text-white transition-colors">Privacy</Link>
                        <Link href={`${l}/terms`} className="hover:text-white transition-colors">Terms</Link>
                        <Link href={`${l}/support`} className="hover:text-white transition-colors">Support</Link>
                    </div>
                </div>
            </footer>
        </main>
    );
}
