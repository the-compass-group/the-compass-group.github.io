/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				body: "rgb(var(--color-bg))",
				"box-bg": "rgb(var(--color-box))",
				"box-shadow": "rgb(var(--box-sd))",
				"box-border": "rgb(var(--box-border))",
				primary: { 
					DEFAULT: '#C2B59B',
					100: '#FFFFFF',
					200: '#F0EDE7',
					300: '#E1DBCE',
					400: '#D1C8B4',
					500: '#C2B59B',
					600: '#AD9B78',
					700: '#93805A',
					800: '#706244',
					900: '#4D432F',
					950: '#3C3425'
				},
				
				"heading-1": "rgb(var(--heading-1))",
				"heading-2": "rgb(var(--heading-2))",
				"heading-3": "rgb(var(--heading-3))",
			},
			screens:{
				midmd:"880px"
			}
		},
	},
	plugins: [],
}
