import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import dts from "rollup-plugin-dts"

export default [
    {
        input: "./dist/bin/release/index.js",
        output: {
            name: "dva",
            exports: "named",
            file: "./dist/bundle.js",
            format: "umd"
        },
        plugins: [
            resolve(),
            commonjs()
        ]
    }, {
        input: "./dist/bin/release/index.d.ts",
        output: [{ file: "dist/bundle.d.ts", format: "es" }],
        plugins: [dts()]
    }
]