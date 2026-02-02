import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default async function DashboardPage() {
    const user = await currentUser();

    if (!user) {
        redirect("/sign-in");
    }

    const firstName = user.firstName || user.emailAddresses[0].emailAddress.split('@')[0];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">
            {/* Navigation */}
            <nav className="border-b border-gray-800 backdrop-blur-sm bg-gray-950/50">
                <div className="container max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="text-2xl">📸</div>
                        <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            Screenshot API
                        </span>
                    </Link>
                    <div className="flex items-center gap-6">
                        <Link href="/dashboard" className="text-white font-semibold">
                            Dashboard
                        </Link>
                        <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
                            Pricing
                        </Link>
                        <Link href="/docs" className="text-gray-300 hover:text-white transition-colors">
                            Docs
                        </Link>
                        <UserButton afterSignOutUrl="/" />
                    </div>
                </div>
            </nav>

            <div className="container max-w-7xl mx-auto px-6 py-12">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl font-bold mb-2">Welcome back, {firstName}! 👋</h1>
                    <p className="text-gray-400 text-lg">
                        Here's your API usage overview
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-gradient-to-br from-blue-900/40 to-blue-900/10 rounded-2xl p-8 border border-blue-500/20">
                        <div className="flex items-center justify-between mb-4">
                            <div className="text-4xl">🔑</div>
                            <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-semibold">
                                Active
                            </div>
                        </div>
                        <h3 className="text-gray-400 text-sm font-semibold mb-2">API KEYS</h3>
                        <p className="text-4xl font-bold mb-2">0</p>
                        <p className="text-sm text-gray-500">No keys created yet</p>
                    </div>

                    <div className="bg-gradient-to-br from-green-900/40 to-green-900/10 rounded-2xl p-8 border border-green-500/20">
                        <div className="flex items-center justify-between mb-4">
                            <div className="text-4xl">📊</div>
                            <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                                This Month
                            </div>
                        </div>
                        <h3 className="text-gray-400 text-sm font-semibold mb-2">USAGE</h3>
                        <p className="text-4xl font-bold mb-2">0 / 100</p>
                        <div className="w-full bg-gray-800 rounded-full h-2 mb-2">
                            <div className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full" style={{ width: '0%' }}></div>
                        </div>
                        <p className="text-sm text-gray-500">100 requests remaining</p>
                    </div>

                    <div className="bg-gradient-to-br from-purple-900/40 to-purple-900/10 rounded-2xl p-8 border border-purple-500/20">
                        <div className="flex items-center justify-between mb-4">
                            <div className="text-4xl">💎</div>
                            <Link
                                href="/pricing"
                                className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-semibold hover:bg-purple-500/30 transition-colors"
                            >
                                Upgrade
                            </Link>
                        </div>
                        <h3 className="text-gray-400 text-sm font-semibold mb-2">CURRENT PLAN</h3>
                        <p className="text-4xl font-bold mb-2">Free</p>
                        <p className="text-sm text-gray-500">100 requests/month</p>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    <div className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700/50">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="text-5xl">🚀</div>
                            <div>
                                <h2 className="text-2xl font-semibold mb-2">Create Your First API Key</h2>
                                <p className="text-gray-400 mb-4">
                                    Generate an API key to start making screenshot requests
                                </p>
                            </div>
                        </div>
                        <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-lg shadow-blue-500/20 w-full">
                            Create API Key
                        </button>
                    </div>

                    <div className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700/50">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="text-5xl">📚</div>
                            <div>
                                <h2 className="text-2xl font-semibold mb-2">Read the Documentation</h2>
                                <p className="text-gray-400 mb-4">
                                    Learn how to integrate the Screenshot API into your project
                                </p>
                            </div>
                        </div>
                        <Link
                            href="/docs"
                            className="block bg-gray-700/50 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-xl transition-all border border-gray-600 text-center"
                        >
                            View Docs
                        </Link>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700/50 mb-12">
                    <h2 className="text-2xl font-semibold mb-6">Recent Activity</h2>
                    <div className="text-center py-12">
                        <div className="text-6xl mb-4">📭</div>
                        <p className="text-gray-400 text-lg mb-2">No activity yet</p>
                        <p className="text-gray-500">Your API requests will appear here</p>
                    </div>
                </div>

                {/* Development Notice */}
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-2xl p-8 border border-blue-500/20">
                    <div className="flex items-start gap-4">
                        <div className="text-4xl">🚧</div>
                        <div>
                            <h3 className="font-semibold text-xl mb-2">Dashboard Under Development</h3>
                            <p className="text-gray-300 mb-4">
                                We're building out the full dashboard experience with API key management,
                                detailed usage analytics, and billing features. For now, you can use the
                                free API endpoint without authentication.
                            </p>
                            <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                                <div className="text-gray-500 mb-2">// Use the API without authentication (Free tier)</div>
                                <div className="text-green-400">
                                    https://your-api.vercel.app/api/screenshot?url=<span className="text-yellow-400">YOUR_URL</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
