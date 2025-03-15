/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			// sans: ['Manrope Variable', 'sans-serif'],
			sans: ['Inter', 'sans-serif'],
			serif: ['Libre Baskerville', 'serif'],
			mono: ['Monaspace Neon', 'monospace'],
		},
	},
	plugins: [],
}

export default config
