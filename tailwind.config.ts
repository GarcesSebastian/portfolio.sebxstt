import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		colors: {
		  primary: '#00D1B2', // Slightly darker teal
		  secondary: '#1A1A2E', // Dark blue-black
		  dark: '#0F0F1A', // Darker background
		  light: '#E5FFF9', // Light teal tint
		  'gray-custom': '#94A3B8', // Custom gray for text
		  'card-dark': '#151525', // Dark card background
		},
		fontFamily: {
		  sans: ['Inter', 'sans-serif'],
		  display: ['Space Grotesk', 'sans-serif'],
		},
		animation: {
		  'float': 'float 6s ease-in-out infinite',
		  'blob': 'blob 7s infinite',
		},
		keyframes: {
		  float: {
			'0%, 100%': { transform: 'translateY(0)' },
			'50%': { transform: 'translateY(-20px)' },
		  },
		  blob: {
			'0%': { transform: 'translate(0px, 0px) scale(1)' },
			'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
			'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
			'100%': { transform: 'translate(0px, 0px) scale(1)' },
		  }
		}
  	}
  },
  plugins: [],
} satisfies Config;
