// rollup.config.js (building more than one bundle)

const babel = require("rollup-plugin-babel");

module.exports = [
	{
		input: "./public/src/js/libraries/highlightJS/highlight.min.js",
		output: {
			file: "./public/dist/js/libraries/highlightJS/highlight.min.js",
			format: "cjs", // CommonJS output
			sourceMap: "inline",
			plugins: [
				babel({
					exclude: "node_modules/**",
				}),
			],
		},
		context: "window",
	},
	{
		input: "./public/src/js/index.js",
		output: {
			file: "./public/dist/js/index.js",
			format: "cjs", // CommonJS output
			sourceMap: "inline",
			plugins: [
				babel({
					exclude: "node_modules/**",
				}),
			],
		},
		context: "window",
	},
	{
		input: "./public/src/js/silverBox.js",
		output: {
			file: "./public/dist/js/silverBox.js",
			format: "cjs", // CommonJS output
			sourceMap: "inline",
			plugins: [
				babel({
					exclude: "node_modules/**",
				}),
			],
		},
		context: "window",
	},
	{
		input: "./public/src/js/documentation.js",
		output: {
			file: "./public/dist/js/documentation.js",
			format: "cjs", // CommonJS output
			sourceMap: "inline",
			plugins: [
				babel({
					exclude: "node_modules/**",
				}),
			],
		},
		context: "window",
	},
];
