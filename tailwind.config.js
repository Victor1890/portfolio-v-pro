const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/app/**/*.{js,ts,jsx,tsx}',
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/layout/*.{js,jsx,ts,tsx}',
	],
	darkMode: 'class',
	theme: {
		...defaultTheme,
		fontFamily: {
			...defaultTheme.fontFamily,
			inter: ['Inter', 'sans-serif'],
			sarina: ['Sarina', 'cursive'],
			barlow: ['Barlow', 'sans-serif'],
			mono: ['monospace'],
		},
		extend: {
			colors: {
				...defaultTheme.colors,
				darkPrimary: '#181A1B',
				darkSecondary: '#25282A',
				darkWhite: '#f2f5fa',
				'dark-3': '#b8b8b8',
			},
			listStyleType: {
				...defaultTheme.listStyleType,
				square: 'square',
				roman: 'upper-roman',
			},
			animation: {
				...defaultTheme.animation,
				wiggle: 'wiggle 1s ease-in-out infinite',
				'photo-spin': 'photo-spin 2s 1 linear forwards',
			},
			keyframes: {
				...defaultTheme.keyframes,
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' },
				},
				'photo-spin': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
			},
			screens: {
				...defaultTheme.screens,
				'3xl': '2000px',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
