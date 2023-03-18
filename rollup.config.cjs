// rollup.config.js (building more than one bundle)

const babel = require("rollup-plugin-babel");

module.exports = [
    {
        input: './public/js/src/test.js',
        output: {
            file: './public/js/dist/test.js',
            format: 'cjs', // CommonJS output
            sourceMap: 'inline',
        },
        context: "window",
    }
];