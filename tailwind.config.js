/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#0D1B2A',
          800: '#162233',
          700: '#1E3048',
          600: '#26425F',
          500: '#2E5476',
        },
        amber: {
          DEFAULT: '#E8A020',
          light: '#F5BB50',
          dark: '#C47F0A',
        },
        steel: {
          DEFAULT: '#C0C7D1',
          dark: '#8896A8',
          light: '#E8ECF1',
        },
        neutral: {
          50: '#F7F8FA',
          100: '#EEF0F4',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        success: { 50: '#ECFDF5', 500: '#10B981', 900: '#064E3B' },
        error: { 50: '#FEF2F2', 500: '#EF4444', 900: '#7F1D1D' },
      },
      fontWeight: { 700: '700', 800: '800', 900: '900' },
      boxShadow: {
        'amber': '0 4px 16px rgba(232,160,32,0.35)',
        'amber-lg': '0 8px 24px rgba(232,160,32,0.45)',
        'navy': '0 16px 40px rgba(13,27,42,0.18)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'amber-pulse': 'amberPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { transform: 'translateY(24px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
        amberPulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.4)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
