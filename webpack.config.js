const path = require('path');

module.exports = {
	// original file to be transpiled
	entry: path.resolve(__dirname, 'src', 'index.js'),
	// destiny of transpiled file
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	// directory watched by webpack-dev-server when any update comes
	devServer: {
		contentBase: path.resolve(__dirname, "public"),
		historyApiFallback: true,
	},
	// config. rules to transpiling project
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.scss$/,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader" },
					{ loader: "sass-loader" }
				]
			}
		]
	}
};