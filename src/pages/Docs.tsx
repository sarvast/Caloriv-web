import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Database, Shield, Lock, Activity } from 'lucide-react';

export default function Docs() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative min-h-screen selection:bg-primary selection:text-white">
            {/* Navigation */}
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/5 py-3' : 'py-6 bg-transparent'}`}>
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                            <img src="/assets/images/icon.png" alt="Logo" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold tracking-tight">Caloriv</span>
                            <span className="text-[10px] text-primary font-bold uppercase tracking-widest leading-none">Developer Docs</span>
                        </div>
                    </Link>

                    <a href="https://github.com/sarvast/Caloriv-web" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all border border-white/10 backdrop-blur-sm">
                        <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg> GitHub
                    </a>
                </div>
            </nav>

            <div className="container mx-auto px-6 pt-32 pb-20 flex flex-col lg:flex-row gap-12">
                {/* Sidebar Nav (Desktop) */}
                <aside className="hidden lg:block w-64 sticky top-32 h-fit">
                    <div className="space-y-8">
                        <NavSection title="Getting Started" items={[
                            { label: 'Overview', href: '#overview' },
                            { label: 'Architecture', href: '#architecture' }
                        ]} />
                        <NavSection title="System Core" items={[
                            { label: 'Storage Layer', href: '#storage' },
                            { label: 'Step Tracking', href: '#tracking' }
                        ]} />
                        <NavSection title="API Reference" items={[
                            { label: 'Authentication', href: '#auth-api' },
                            { label: 'Data Endpoints', href: '#data-api' },
                            { label: 'Admin API', href: '#admin-api' }
                        ]} />
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <section id="overview" className="mb-20">
                            <h1 className="text-4xl md:text-6xl font-bold mb-6">Developer <span className="text-gradient">Documentation</span></h1>
                            <p className="text-xl text-text-secondary leading-relaxed mb-8">
                                Complete technical reference for the Caloriv fitness ecosystem. This documentation
                                covers the native mobile application architecture, backend API specifications, and data flow principles.
                            </p>

                            <div className="glass-card p-6 border-l-4 border-l-primary">
                                <h3 className="text-primary font-bold mb-2 flex items-center gap-2">
                                    <Activity size={18} /> Version 69.0.1
                                </h3>
                                <p className="text-sm text-text-secondary">
                                    The current documentation reflects the architecture of the latest stable build utilizing React Native + Expo managed workflow.
                                </p>
                            </div>
                        </section>

                        <section id="architecture" className="mb-20 scroll-mt-32">
                            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                                <div className="p-2 bg-primary/10 rounded-lg text-primary"><Database size={24} /></div>
                                Architecture Overview
                            </h2>
                            <p className="text-text-secondary mb-8">
                                Caloriv is architected as an <strong className="text-white">Offline-First</strong> native application. It prioritizes local data
                                persistence for instant UX, syncing with the cloud only when connectivity permits.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="glass-card p-6">
                                    <h4 className="font-bold mb-3 text-white">State Management</h4>
                                    <p className="text-sm text-text-secondary">Centralized Context API (<code>CalorivContext</code>) manages user profile, daily logs, and metrics.</p>
                                </div>
                                <div className="glass-card p-6">
                                    <h4 className="font-bold mb-3 text-white">Offline Persistence</h4>
                                    <p className="text-sm text-text-secondary">Uses <code>AsyncStorage</code> for storing JSON blobs of daily logs locally.</p>
                                </div>
                            </div>

                            <div className="bg-slate-900/50 rounded-2xl p-6 border border-white/5">
                                <h4 className="font-bold mb-4 text-white">Tech Stack</h4>
                                <div className="space-y-3 font-mono text-sm">
                                    <p className="flex justify-between border-b border-white/5 pb-2"><span className="text-primary">Frontend:</span> <span className="text-text-secondary">React Native, Expo, TypeScript</span></p>
                                    <p className="flex justify-between border-b border-white/5 pb-2"><span className="text-primary">Backend:</span> <span className="text-text-secondary">Azure Functions (Node.js/Express)</span></p>
                                    <p className="flex justify-between border-b border-white/5 pb-2"><span className="text-primary">Database:</span> <span className="text-text-secondary">Azure Cosmos DB (NoSQL)</span></p>
                                    <p className="flex justify-between"><span className="text-primary">Auth:</span> <span className="text-text-secondary">JWT + Bcrypt</span></p>
                                </div>
                            </div>
                        </section>

                        <section id="storage" className="mb-20 scroll-mt-32">
                            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                                <div className="p-2 bg-accent-blue/10 rounded-lg text-accent-blue"><Shield size={24} /></div>
                                Storage Layer
                            </h2>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse glass-card overflow-hidden">
                                    <thead>
                                        <tr className="bg-white/5">
                                            <th className="p-4 text-sm font-bold border-b border-white/10">Key Pattern</th>
                                            <th className="p-4 text-sm font-bold border-b border-white/10">Type</th>
                                            <th className="p-4 text-sm font-bold border-b border-white/10">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm text-text-secondary">
                                        <tr className="border-b border-white/5">
                                            <td className="p-4 font-mono text-primary">user_profile</td>
                                            <td className="p-4">JSON Object</td>
                                            <td className="p-4">Demographics & goals.</td>
                                        </tr>
                                        <tr className="border-b border-white/5">
                                            <td className="p-4 font-mono text-primary">daily_log_...</td>
                                            <td className="p-4">JSON Array</td>
                                            <td className="p-4">Food logs by date.</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-mono text-primary">metrics_...</td>
                                            <td className="p-4">JSON Object</td>
                                            <td className="p-4">Daily stats (water, steps).</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section id="auth-api" className="mb-20 scroll-mt-32">
                            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                                <div className="p-2 bg-streak/10 rounded-lg text-streak"><Lock size={24} /></div>
                                Authentication API
                            </h2>
                            <div className="space-y-6">
                                <EndpointCard method="POST" path="/api/login" desc="Authenticate a user and retrieve a JWT token." />
                                <EndpointCard method="POST" path="/api/register" desc="Create a new user account with initial profile data." />
                            </div>
                        </section>
                    </motion.div>
                </main>
            </div>

            <footer className="border-t border-white/5 bg-slate-900/50 py-10 mt-20">
                <div className="container mx-auto px-6 text-center text-xs text-text-secondary">
                    <p>&copy; 2025 Sarvasva. Confidential Documentation.</p>
                </div>
            </footer>
        </div>
    );
}

function NavSection({ title, items }: { title: string, items: { label: string, href: string }[] }) {
    return (
        <div>
            <h5 className="text-[10px] font-bold uppercase tracking-widest text-text-secondary mb-4">{title}</h5>
            <ul className="space-y-2">
                {items.map(item => (
                    <li key={item.href}>
                        <a href={item.href} className="flex items-center gap-2 text-sm text-text-secondary hover:text-white transition-colors group">
                            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

function EndpointCard({ method, path, desc }: { method: string, path: string, desc: string }) {
    const methodColor = method === 'POST' ? 'text-green-400 bg-green-400/10' : 'text-blue-400 bg-blue-400/10';
    return (
        <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
                <span className={`px-2 py-1 rounded text-[10px] font-bold ${methodColor}`}>{method}</span>
                <code className="text-sm text-white">{path}</code>
            </div>
            <p className="text-sm text-text-secondary mb-4">{desc}</p>
            <div className="bg-black/20 rounded-lg p-4 font-mono text-[11px] text-text-secondary">
        // Request Example<br />
                {`{`} <br />
                &nbsp;&nbsp;"email": "user@example.com",<br />
                &nbsp;&nbsp;"password": "••••••••"<br />
                {`}`}
            </div>
        </div>
    )
}
