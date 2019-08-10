import DTSBundle from 'dts-bundle-webpack'
// import NPMDts from 'npm-dts-webpack-plugin'

let config = {
	entry: './dist/bin/release/',
	mode: 'production',
	devtool: 'none',
	target: 'node',
	output: {
		filename: 'dva.js',
		path: `${process.cwd()}/dist`,
		publicPath: './',

		library: `DVa`,
		libraryTarget: 'umd'
    },

    plugins: [
        // new NPMDts()
        new DTSBundle({
            name: 'DVa',
            baseDir: './dist/bin/release/',
            main: 'dist/bin/release/index.d.ts',
            out: `${process.cwd()}/dist/dva.d.ts`,
            externals: false,
            referenceExternals: false
        })
    ],

	resolve: {
		extensions: ['.js']
	},

	optimization: {
		minimize: false
	},

	node: {
		console: false,

		global: true,
		process: true,
		setImmediate: false,
	
		path: true,
		url: false,

		Buffer: true,
		__filename: false,
    	__dirname: false,

		fs: 'empty',
		net: 'empty',
		dns: 'empty',
		dgram: 'empty',
		tls: 'empty'
	}
}

module.exports = [config]