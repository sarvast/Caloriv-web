import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Flame,
    Activity,
    WifiOff,
    ArrowRight,
    Download,
    Droplets
} from 'lucide-react';
import TasteTestWidget from '../components/TasteTestWidget';

// Assets
const HERO_MOCKUP = "/assets/images/hero_mockup.jpg";
const FOOD_MOCKUP = "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2070&auto=format&fit=crop";
const WORKOUT_MOCKUP = "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop";
const STATS_CARD = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop";
const STREAK_CARD = "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=2070&auto=format&fit=crop";

export default function Home() {
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
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-primary/20">
                            <img src="/assets/images/icon.png" alt="Logo" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-xl font-bold tracking-tight">Caloriv</span>
                    </div>

                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-text-secondary">
                        <a href="#features" className="hover:text-white transition-colors">Features</a>
                        <a href="#showcase" className="hover:text-white transition-colors">Experience</a>
                        <a href="https://github.com/sarvast/Caloriv-web" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors group">
                            <div className="p-1 rounded bg-white/5 group-hover:bg-white/10 transition-colors">
                                <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                            </div>
                            <span>Star on GitHub</span>
                        </a>
                    </div>

                    <Link to="/docs" className="hidden md:flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all border border-white/10 backdrop-blur-sm">
                        Docs
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-center md:text-left z-10"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
                            <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
                            <span className="text-xs font-medium text-text-secondary tracking-wide uppercase">v69.0.1 Stable Release</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl leading-tight mb-6">
                            Transform Your Body. <br />
                            <span className="text-gradient">Master Your Macros.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-text-secondary mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed">
                            The disciplined, data-driven fitness tracker built for consistency.
                            Track calories, monitor steps, and maintain streaks without distractions.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                            <a href="https://github.com/sarvast/Caloriv-web/releases/download/69.0.1/Caloriv.apk" className="btn-primary flex items-center gap-3 group">
                                <Download size={20} />
                                <span>Download v69.0.1</span>
                            </a>
                            <a href="#showcase" className="px-8 py-3 rounded-full text-white font-medium hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 flex items-center gap-2">
                                See Features <ArrowRight size={16} />
                            </a>
                        </div>
                        <div className="mt-12 flex items-center justify-center md:justify-start gap-8 md:gap-12 border-t border-white/5 pt-8">
                            <div>
                                <h4 className="text-2xl font-bold text-white">100%</h4>
                                <p className="text-sm text-text-secondary">Offline Capable</p>
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold text-white">4.9/5</h4>
                                <p className="text-sm text-text-secondary">Community Rating</p>
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold text-white">Zero</h4>
                                <p className="text-sm text-text-secondary">Ads or Bloat</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
                        animate={{ opacity: 1, scale: 1, rotateY: -10 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="flex-1 w-full max-w-[400px] md:max-w-none relative perspective-1000 hidden md:block"
                        style={{ perspective: "1000px" }}
                    >
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative z-10 transform-style-3d rotate-y-[-10deg] rotate-x-[5deg]"
                        >
                            <div className="relative mx-auto border-[12px] border-[#1e293b] rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] bg-slate-900 overflow-hidden w-[300px] h-[620px]">
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-7 w-32 bg-[#1e293b] rounded-b-xl z-20"></div>
                                <img src={HERO_MOCKUP} alt="App Screen" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none rounded-[2rem]"></div>
                            </div>
                            <motion.div
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ delay: 0.8 }}
                                className="absolute top-20 -right-12 glass-card p-4 flex items-center gap-4 w-60 z-20"
                            >
                                <div className="p-3 bg-streak/20 rounded-full text-streak">
                                    <Flame size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">Streak Ignited</h4>
                                    <p className="text-xs text-text-secondary">12 Day Streak!</p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ delay: 1 }}
                                className="absolute bottom-32 -left-12 glass-card p-4 flex items-center gap-4 w-60 z-20"
                            >
                                <div className="p-3 bg-accent-blue/20 rounded-full text-accent-blue">
                                    <Droplets size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">Hydration Goal</h4>
                                    <p className="text-xs text-text-secondary">1500ml / 2500ml</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Features Grid */}
            <section id="features" className="py-24 container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl mb-6">Engineered for <span className="text-gradient">Peak Performance</span></h2>
                    <p className="text-text-secondary text-lg">Every pixel designed to keep you focused on what matters: your progress.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <FeatureCard icon={<Flame size={32} />} title="Streak System" desc="Gamify your consistency. Keep the internal fire burning by hitting daily goals." color="text-streak" delay={0} />
                    <FeatureCard icon={<Activity size={32} />} title="Macro Spotlight" desc="Track calories, macros, and steps with pinpoint accuracy. Visualize your deficit." color="text-primary" delay={0.2} />
                    <FeatureCard icon={<WifiOff size={32} />} title="Offline First" desc="Your data lives on your device. Log meals and workouts instantly." color="text-accent-blue" delay={0.4} />
                </div>
            </section>

            {/* Showcase */}
            <section id="showcase" className="py-24 overflow-hidden bg-white/[0.02]">
                <div className="container mx-auto px-6 mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">The Experience</h2>
                    <p className="text-text-secondary">Swipe through the interface designed for speed.</p>
                </div>
                <div className="flex gap-8 px-6 pb-12 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                    <ShowcaseCard image={FOOD_MOCKUP} title="Intelligent Logging" subtitle="Search thousands of foods instantly." />
                    <ShowcaseCard image={WORKOUT_MOCKUP} title="Training Vault" subtitle="Log sets, reps, and RPE." />
                    <ShowcaseCard image={STATS_CARD} title="Deep Analytics" subtitle="Understand your body composition." />
                    <ShowcaseCard image={STREAK_CARD} title="Consistency" subtitle="Visualizing your dedication." />
                </div>
            </section>

            {/* Widget */}
            <section className="py-20 container mx-auto px-6 flex flex-col items-center relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl mb-4">Taste the <span className="text-gradient">Experience</span></h2>
                    <p className="text-text-secondary">Try the buttery smooth interactions right here.</p>
                </div>
                <div className="h-64 w-full max-w-md flex items-center justify-center relative">
                    <TasteTestWidget />
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 container mx-auto px-6 text-center">
                <div className="glass-card max-w-4xl mx-auto p-12 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 relative z-10">Ready to break your limits?</h2>
                    <motion.a
                        href="https://github.com/sarvast/Caloriv-web/releases/download/69.0.1/Caloriv.apk"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary relative z-10 text-xl px-12 py-4 inline-block"
                    >
                        Get Started Now
                    </motion.a>
                    <p className="mt-6 text-text-secondary text-sm relative z-10">Available on Android • v69.0.1</p>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-white/5 bg-slate-900/50 pt-20 pb-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
                        <div className="max-w-xs">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-8 rounded-lg overflow-hidden shadow-lg shadow-primary/20">
                                    <img src="/assets/images/icon.png" alt="Logo" className="w-full h-full object-cover" />
                                </div>
                                <span className="text-xl font-bold tracking-tight text-white">Caloriv</span>
                            </div>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                Empowering individuals to take control of their health through data, discipline, and design.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-sm">
                            <div>
                                <h5 className="font-bold text-white mb-4">Product</h5>
                                <ul className="space-y-3 text-text-secondary">
                                    <li><a href="https://github.com/sarvast/Caloriv-web/releases/download/69.0.1/Caloriv.apk" className="hover:text-primary transition-colors">Download APK</a></li>
                                    <li><a href="https://github.com/sarvast/Caroliv" className="hover:text-primary transition-colors">Source Code</a></li>
                                    <li><Link to="/docs" className="hover:text-primary transition-colors">Docs</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="font-bold text-white mb-4">Connect</h5>
                                <ul className="space-y-3 text-text-secondary">
                                    <li><a href="https://github.com/sarvast/Caloriv-web" className="hover:text-primary transition-colors">GitHub</a></li>
                                    <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                                    <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-text-secondary">
                        <p>&copy; 2025 Sarvasva. All rights reserved.</p>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-white">Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

function FeatureCard({ icon, title, desc, color, delay }: { icon: React.ReactNode, title: string, desc: string, color: string, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            className="glass-card p-8 group cursor-pointer"
        >
            <div className={`mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:bg-white/10 transition-colors ${color} group-hover:scale-110 transform duration-300`}>
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-text-secondary leading-relaxed">{desc}</p>
        </motion.div>
    )
}

function ShowcaseCard({ image, title, subtitle }: { image: string, title: string, subtitle: string }) {
    return (
        <div className="flex-none w-[300px] snap-center">
            <div className="relative rounded-[2rem] overflow-hidden border-8 border-slate-800 shadow-2xl h-[600px] group">
                <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white">{title}</h3>
                    <p className="text-sm text-gray-300">{subtitle}</p>
                </div>
            </div>
        </div>
    )
}
