import { babel } from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";


const plugins = {
	production: [
		babel({
			babelHelpers: "bundled",
			presets: ["@babel/preset-env"],
		}),
		terser({
			keep_fnames: true,
		}),
	],
	development: []
}

const defaultPlugins = plugins[process.env.NODE_ENV];

const generateRollupConfig = ({
	input,
	output,
	format = "cjs",
	plugins = defaultPlugins,
	context = "window",
}) => {
	return {
		input,
		output: {
			file: output,
			format,
		},
		plugins,
		context,
	};
};


const config = [
	generateRollupConfig({ input: "./public/src/js/silverBox.js", output: "./public/dist/js/silverBox.js", format: "es", plugins: [] }),
	generateRollupConfig({
		input: "./public/src/js/silverBox.js", output: "./public/dist/js/silverBox.min.js", format: "es", plugins: [
			babel({
				babelHelpers: "bundled",
				presets: ["@babel/preset-env"],
			}),
			terser({
				keep_fnames: true,
			}),
		]
	}),
	generateRollupConfig({
		input: "./public/src/js/libraries/highlightJS/highlight.min.js", output: "./public/dist/js/libraries/highlightJS/highlight.min.js", plugins: [
			babel({
				babelHelpers: "bundled",
				presets: ["@babel/preset-env"],
			}),
		]
	}),
	generateRollupConfig({ input: "./public/src/js/index.js", output: "./public/dist/js/index.js" }),
	generateRollupConfig({ input: "./public/src/js/documentationPage.js", output: "./public/dist/js/documentationPage.js" })
];

export default config;
