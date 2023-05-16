import { babel } from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";

const config = [
	{
		input: "./public/src/js/silverBox.js",
		output: {
			file: "./public/dist/js/silverBox.js",
			format: "cjs",
			sourcemap: "inline",
		},
	},
	{
		input: "./public/src/js/silverBox.js",
		output: {
			file: "./public/dist/js/silverBox.min.js",
			format: "cjs",
			sourcemap: "inline",
		},
		plugins: [
			babel({
				babelHelpers: "bundled",
				presets: ["@babel/preset-env"],
			}),
			terser(),
		],
	},
	{
		input: "./public/src/js/libraries/highlightJS/highlight.min.js",
		output: {
			file: "./public/dist/js/libraries/highlightJS/highlight.min.js",
			format: "es",
			sourcemap: "inline",
		},
		plugins: [
			babel({
				babelHelpers: "bundled",
				presets: ["@babel/preset-env"],
			}),
		],
	},
	{
		input: "./public/src/js/index.js",
		output: {
			file: "./public/dist/js/index.js",
			format: "es",
			sourcemap: "inline",
		},
		plugins: [
			babel({
				babelHelpers: "bundled",
				presets: ["@babel/preset-env"],
			}),
			terser(),
		],
	},
	{
		input: "./public/src/js/documentationPage.js",
		output: {
			file: "./public/dist/js/documentationPage.js",
			format: "es",
			sourcemap: "inline",
		},
		plugins: [
			babel({
				babelHelpers: "bundled",
				presets: ["@babel/preset-env"],
			}),
			terser(),
		],
	},
];

export default config;
