/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: { poppins: ['Poppins', 'sans-serif'] },
			colors: {
				anotherShadeofBlack: '#171717'
			},
			display: ['group-hover'],
			screens: {
				xs: '480px',
				...defaultTheme.screens
			}
		}
	},
	plugins: []
};
