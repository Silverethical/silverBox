// rollup.config.js (building more than one bundle)

const babel = require("rollup-plugin-babel");

module.exports = [
    {
        input: './public/js/src/index.js',
        output: {
            file: './public/js/dist/index.js',
            format: 'cjs', // CommonJS output
            sourceMap: 'inline',
        },
        context: "window",
    }
];