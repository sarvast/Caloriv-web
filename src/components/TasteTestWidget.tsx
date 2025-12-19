import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Flame, Utensils, Zap } from 'lucide-react';

const TasteTestWidget = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    // Animation variants for the menu items
    const menuVariants = {
        closed: { scale: 0, opacity: 0, transition: { duration: 0.2 } },
        open: (i: number) => ({
            scale: 1,
            opacity: 1,
            y: -80, // Move up
            x: (i - 1) * 60, // Spread horizontally (center is 0, left is -60, right is +60)
            transition: { delay: i * 0.1, type: "spring", stiffness: 300, damping: 20 }
        })
    };

    return (
        <div className="relative flex items-center justify-center">
            {/* Menu Items */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Breakfast (Left) */}
                        <motion.div
                            custom={0}
                            variants={menuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="absolute z-0"
                        >
                            <div className="w-12 h-12 rounded-full bg-streak text-white flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                                <Flame size={20} />
                            </div>
                            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-white whitespace-nowrap opacity-80">Streak</span>
                        </motion.div>

                        {/* Lunch (Center) */}
                        <motion.div
                            custom={1}
                            variants={menuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="absolute z-0"
                        >
                            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                                <Utensils size={20} />
                            </div>
                            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-white whitespace-nowrap opacity-80">Food</span>
                        </motion.div>

                        {/* Workout (Right) */}
                        <motion.div
                            custom={2}
                            variants={menuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="absolute z-0"
                        >
                            <div className="w-12 h-12 rounded-full bg-accent-blue text-white flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                                <Zap size={20} />
                            </div>
                            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-white whitespace-nowrap opacity-80">Workout</span>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Main Button */}
            <motion.button
                onClick={toggle}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={{ rotate: isOpen ? 45 : 0 }}
                className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-colors duration-300 ${isOpen ? 'bg-error text-white shadow-red-500/50' : 'bg-gradient-to-r from-primary to-accent-blue text-white'
                    }`}
            >
                <Plus size={32} />
            </motion.button>

            {/* Label */}
            <div className="absolute top-20 text-sm text-text-secondary animate-pulse pointer-events-none">
                {isOpen ? "Select an Action" : "Tap to Interact"}
            </div>
        </div>
    );
};

export default TasteTestWidget;
