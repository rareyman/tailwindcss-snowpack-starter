// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
// eslint-disable-next-line no-undef
module.exports = {
	mount: {
		// this is the root of the website
		public: '/',
	},
	plugins: ['@snowpack/plugin-postcss'],
	packageOptions: {},
	devOptions: {
		// prevents run script from opening browser automatically
		// open: 'none',
		port: 8888, // default: 8080
		tailwindConfig: './tailwind.config.js',
	},
	buildOptions: {},
}
