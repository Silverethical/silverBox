// rollup.config.js (building more than one bundle)

const babel = require("rollup-plugin-babel");

module.exports = [
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
];
