// eslint-disable-next-line no-undef
module.exports = {
	mode: 'jit',
	content: ['./public/**/*.{html,js}'],
	safelist: [
		// 'tailwind-class-that-should-always-be-rendered'
	],
	theme: {
		fontFamily: {
			sans: 'Inter, sans-serif',
		},
		minHeight: {
			0: '0',
			'1/4': '25%',
			'50vh': '50vh',
			'3/4': '75%',
			full: '100%',
			screen: '100vh',
		},
		extend: {},
	},
	plugins: [],
}
