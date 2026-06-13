import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: { '2xl': '1400px' }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        navy:          '#0A1628',
        'navy-light':  '#122040',
        gold:          '#C9A84C',
        'gold-light':  '#E2C47A',
        'gold-pale':   '#F5EDD6',
        cream:         '#FAF7F0',
        charcoal:      '#1C2434',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans:  ['Inter', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
        'accordion-up':   { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
        'float': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%':      { transform: 'translateY(-12px) rotate(0.5deg)' },
          '66%':      { transform: 'translateY(-6px) rotate(-0.5deg)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%':      { transform: 'translateY(-18px) scale(1.04)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.08', transform: 'scale(1)' },
          '50%':      { opacity: '0.2',  transform: 'scale(1.14)' },
        },
        'shimmer': {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-scale': {
          from: { opacity: '0', transform: 'scale(0.92)' },
          to:   { opacity: '1', transform: 'scale(1)' },
        },
        'slide-in-left': {
          from: { opacity: '0', transform: 'translateX(-60px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          from: { opacity: '0', transform: 'translateX(60px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        'marquee-scroll': {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'ripple': {
          '0%':   { transform: 'scale(0.9)', opacity: '0.8' },
          '100%': { transform: 'scale(1.8)', opacity: '0' },
        },
        'pulse-gold': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(201,168,76,0.5)' },
          '50%':      { boxShadow: '0 0 0 14px rgba(201,168,76,0)' },
        },
        'particle-drift': {
          '0%':   { transform: 'translateY(0) translateX(0) scale(1)', opacity: '0' },
          '10%':  { opacity: '1' },
          '90%':  { opacity: '0.5' },
          '100%': { transform: 'translateY(-120px) translateX(30px) scale(0)', opacity: '0' },
        },
        'hero-reveal': {
          '0%':   { opacity: '0', transform: 'translateY(60px) scale(0.96)', filter: 'blur(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)',        filter: 'blur(0)' },
        },
      },
      animation: {
        'accordion-down':   'accordion-down 0.2s ease-out',
        'accordion-up':     'accordion-up 0.2s ease-out',
        'float':            'float 5s ease-in-out infinite',
        'float-slow':       'float-slow 8s ease-in-out infinite',
        'glow-pulse':       'glow-pulse 4s ease-in-out infinite',
        'shimmer':          'shimmer 4s linear infinite',
        'fade-up':          'fade-up 0.8s cubic-bezier(0.22,1,0.36,1) forwards',
        'fade-in-scale':    'fade-in-scale 0.7s cubic-bezier(0.22,1,0.36,1) forwards',
        'slide-in-left':    'slide-in-left 0.9s cubic-bezier(0.22,1,0.36,1) forwards',
        'slide-in-right':   'slide-in-right 0.9s cubic-bezier(0.22,1,0.36,1) forwards',
        'marquee-scroll':   'marquee-scroll 40s linear infinite',
        'ripple':           'ripple 2s ease-out infinite',
        'pulse-gold':       'pulse-gold 2.5s ease-in-out infinite',
        'particle-drift':   'particle-drift 6s ease-in infinite',
        'hero-reveal':      'hero-reveal 1.2s cubic-bezier(0.22,1,0.36,1) forwards',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
