/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0f172a', // Midnight Slate
                surface: 'rgba(30, 41, 59, 0.7)',
                primary: {
                    DEFAULT: '#8b5cf6', // Electric Violet
                    light: '#a78bfa',
                    dark: '#7c3aed',
                },
                accent: {
                    blue: '#3b82f6',
                    cyan: '#06b6d4',
                },
                streak: '#f97316', // Blazing Orange
                health: '#10b981', // Emerald Green
                error: '#f43f5e', // Rose Red
                text: {
                    primary: '#ffffff',
                    secondary: '#94a3b8',
                }
            },
            fontFamily: {
                sans: ['Outfit', 'Inter', 'sans-serif'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        },
    },
    plugins: [],
}
