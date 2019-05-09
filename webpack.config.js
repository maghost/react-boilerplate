const { resolve } = require('path');

const config = {
  // original file to be transpiled
  entry: resolve(__dirname, 'src', 'index.tsx'),
  // destiny of transpiled file
  output: {
    path: resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  // directory watched by webpack-dev-server when any update comes
  devServer: {
    contentBase: resolve(__dirname, 'public'),
    historyApiFallback: true,
  },
  // config. rules to transpiling project
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'awesome-typescript-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      }
    ]
  }
}

module.exports = config
